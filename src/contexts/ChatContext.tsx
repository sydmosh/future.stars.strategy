'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from 'react';
import type { Subject } from '@/lib/ai/prompts';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  feedback?: 'like' | 'dislike' | null;
}

export interface ChatSession {
  id: string;
  subject: Subject;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const STORAGE_KEY = 'mosh_chat_sessions';
const MAX_SESSIONS = 10;
const MAX_MESSAGES_PER_SESSION = 50;
const MAX_MESSAGE_LENGTH = 4000;
const TRIM_THRESHOLD = 40;

interface ChatContextType {
  sessions: ChatSession[];
  currentSessionId: string | null;
  currentSession: ChatSession | null;
  isOpen: boolean;
  messages: ChatMessage[];
  subject: Subject;
  isLoading: boolean;
  error: string | null;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  setSubject: (subject: Subject) => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  clearError: () => void;
  createNewSession: () => void;
  switchSession: (sessionId: string) => void;
  deleteSession: (sessionId: string) => void;
  setMessageFeedback: (messageId: string, feedback: 'like' | 'dislike' | null) => void;
  renameSession: (sessionId: string, title: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

function loadSessions(): ChatSession[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return parsed.map((s: ChatSession) => ({
      ...s,
      createdAt: new Date(s.createdAt),
      updatedAt: new Date(s.updatedAt),
      messages: s.messages.map((m: ChatMessage) => ({
        ...m,
        timestamp: new Date(m.timestamp),
      })),
    }));
  } catch {
    return [];
  }
}

function saveSessions(sessions: ChatSession[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions.slice(0, MAX_SESSIONS)));
  } catch {
    // Storage full - trim oldest sessions
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions.slice(0, 3)));
    } catch {}
  }
}

function generateTitle(firstMessage: string): string {
  const cleaned = firstMessage.replace(/<[^>]*>/g, '').trim();
  if (cleaned.length <= 50) return cleaned;
  return cleaned.substring(0, 47) + '...';
}

function trimMessages(messages: ChatMessage[]): ChatMessage[] {
  if (messages.length <= TRIM_THRESHOLD) return messages;
  const system = messages.filter(m => m.role === 'assistant' && messages.indexOf(m) === 0);
  const recent = messages.slice(-TRIM_THRESHOLD);
  if (system.length > 0 && !recent.includes(system[0])) {
    return [system[0], ...recent.slice(1)];
  }
  return recent;
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubjectState] = useState<Subject>('general');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const loaded = loadSessions();
    setSessions(loaded);

    const lastNonEmpty = loaded.find(s => s.messages.length > 0);
    if (lastNonEmpty) {
      setCurrentSessionId(lastNonEmpty.id);
      setSubjectState(lastNonEmpty.subject);
    } else if (loaded.length > 0) {
      setCurrentSessionId(loaded[0].id);
    }
  }, []);

  useEffect(() => {
    if (initialized.current) {
      saveSessions(sessions);
    }
  }, [sessions]);

  const currentSession = currentSessionId
    ? sessions.find(s => s.id === currentSessionId) ?? null
    : null;

  const messages = currentSession?.messages ?? [];
  const currentSubject = currentSession?.subject ?? subject;

  const updateSessionInState = useCallback((sessionId: string, updater: (session: ChatSession) => ChatSession) => {
    setSessions(prev => {
      const idx = prev.findIndex(s => s.id === sessionId);
      if (idx === -1) return prev;
      const updated = [...prev];
      updated[idx] = updater(updated[idx]);
      return updated;
    });
  }, []);

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);
  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);

  const createNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString() + '-session',
      subject: currentSubject,
      title: 'New conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
    setError(null);
  }, [currentSubject]);

  const switchSession = useCallback((sessionId: string) => {
    const target = sessions.find(s => s.id === sessionId);
    if (target) {
      setCurrentSessionId(sessionId);
      setSubjectState(target.subject);
      setError(null);
    }
  }, [sessions]);

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prev => {
      const updated = prev.filter(s => s.id !== sessionId);
      if (currentSessionId === sessionId) {
        const next = updated.find(s => s.messages.length > 0) ?? updated[0] ?? null;
        setCurrentSessionId(next?.id ?? null);
        if (next) setSubjectState(next.subject);
      }
      return updated;
    });
  }, [currentSessionId]);

  const renameSession = useCallback((sessionId: string, title: string) => {
    updateSessionInState(sessionId, s => ({ ...s, title, updatedAt: new Date() }));
  }, [updateSessionInState]);

  const clearMessages = useCallback(() => {
    if (!currentSessionId) return;
    updateSessionInState(currentSessionId, s => ({
      ...s,
      messages: [],
      updatedAt: new Date(),
    }));
    setError(null);
  }, [currentSessionId, updateSessionInState]);

  const clearError = useCallback(() => setError(null), []);

  const setMessageFeedback = useCallback((messageId: string, feedback: 'like' | 'dislike' | null) => {
    if (!currentSessionId) return;
    updateSessionInState(currentSessionId, s => ({
      ...s,
      messages: s.messages.map(m =>
        m.id === messageId ? { ...m, feedback } : m
      ),
      updatedAt: new Date(),
    }));
  }, [currentSessionId, updateSessionInState]);

  const setSubject = useCallback((newSubject: Subject) => {
    setSubjectState(newSubject);
    if (currentSessionId) {
      updateSessionInState(currentSessionId, s => ({
        ...s,
        subject: newSubject,
        updatedAt: new Date(),
      }));
    }
  }, [currentSessionId, updateSessionInState]);

  const ensureSessionExists = useCallback(() => {
    if (currentSessionId && sessions.find(s => s.id === currentSessionId)) return;
    const newSession: ChatSession = {
      id: Date.now().toString() + '-session',
      subject,
      title: 'New conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
  }, [currentSessionId, sessions, subject]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;
      if (content.length > MAX_MESSAGE_LENGTH) {
        setError('Message is too long (max 4000 characters)');
        return;
      }

      ensureSessionExists();

      const userMessage: ChatMessage = {
        id: Date.now().toString() + '-user',
        role: 'user',
        content: content.trim(),
        timestamp: new Date(),
      };

      const sid = currentSessionId || sessions[0]?.id;
      if (!sid) return;

      updateSessionInState(sid, s => {
        const updatedMessages = [...s.messages, userMessage];
        const title = s.title === 'New conversation' ? generateTitle(content) : s.title;
        return {
          ...s,
          title,
          messages: updatedMessages,
          updatedAt: new Date(),
        };
      });

      setIsLoading(true);
      setError(null);

      const assistantId = Date.now().toString() + '-assistant';

      try {
        abortRef.current = new AbortController();

        const targetSession = sessions.find(s => s.id === sid) || { messages: [] };
        const apiMessages = [...targetSession.messages, userMessage]
          .slice(-MAX_MESSAGES_PER_SESSION)
          .map((m) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
          }));

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages, subject: currentSubject }),
          signal: abortRef.current.signal,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.error || `Request failed (${response.status})`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error('No response stream');

        const decoder = new TextDecoder();
        let assistantContent = '';

        const assistantMessage: ChatMessage = {
          id: assistantId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        };

        updateSessionInState(sid, s => ({
          ...s,
          messages: [...s.messages, assistantMessage],
          updatedAt: new Date(),
        }));

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          assistantContent += chunk;

          updateSessionInState(sid, s => ({
            ...s,
            messages: s.messages.map((m) =>
              m.id === assistantId ? { ...m, content: assistantContent } : m
            ),
            updatedAt: new Date(),
          }));
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
        setError(errorMessage);

        if (sid) {
          updateSessionInState(sid, s => ({
            ...s,
            messages: s.messages.filter((m) => m.id !== assistantId),
            updatedAt: new Date(),
          }));
        }
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [isLoading, ensureSessionExists, currentSessionId, sessions, currentSubject, updateSessionInState]
  );

  return (
    <ChatContext.Provider
      value={{
        sessions,
        currentSessionId,
        currentSession,
        isOpen,
        messages,
        subject: currentSubject,
        isLoading,
        error,
        toggleChat,
        openChat,
        closeChat,
        setSubject,
        sendMessage,
        clearMessages,
        clearError,
        createNewSession,
        switchSession,
        deleteSession,
        setMessageFeedback,
        renameSession,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
