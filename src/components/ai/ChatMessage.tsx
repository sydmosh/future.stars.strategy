'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { Bot, User, Volume2, VolumeX, Copy, Check, Presentation, BookOpen, ExternalLink, FileText, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/contexts/ChatContext';
import { useChat } from '@/contexts/ChatContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import type { VoiceConfig } from './VoiceSettings';
import AudioWaveform from './AudioWaveform';

interface BookActionData {
  bookSlug: string;
  chapterSlug: string;
  bookTitle: string;
  chapterTitle: string;
  pageSummary?: string;
}

interface ChatMessageProps {
  message: ChatMessageType;
  voiceConfig?: VoiceConfig;
  shouldAutoRead?: boolean;
  isLatest?: boolean;
}

export default function ChatMessage({ message, voiceConfig, shouldAutoRead = false, isLatest = false }: ChatMessageProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [displayedContent, setDisplayedContent] = useState('');
  const isUser = message.role === 'user';
  const { setMessageFeedback } = useChat();
  const streamRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevContentRef = useRef('');

  const { cleanContent, hasDiagram, hasBookletDiagram, bookAction } = useMemo(() => {
    const hasDiag = message.content.includes('[DIAGRAM_START]') && message.content.includes('[DIAGRAM_END]');
    const hasBookletDiag = message.content.includes('[SHOW_BOOKLET_DIAGRAM:');
    
    let parsedBook: BookActionData | null = null;
    const bMatch = message.content.match(/\[BOOK_ACTION:\s*(\{[\s\S]*?\})\]/);
    if (bMatch && bMatch[1]) {
      try {
        parsedBook = JSON.parse(bMatch[1]);
      } catch {}
    }

    const clean = message.content
      .replace(/\[DIAGRAM_START\][\s\S]*?\[DIAGRAM_END\]/g, '')
      .replace(/\[BOOK_ACTION:\s*\{[\s\S]*?\}\]/g, '')
      .replace(/\[SHOW_BOOKLET_DIAGRAM:\s*\{[\s\S]*?\}\]/g, '')
      .trim();

    return { cleanContent: clean, hasDiagram: hasDiag, hasBookletDiagram: hasBookletDiag, bookAction: parsedBook };
  }, [message.content]);

  useEffect(() => {
    if (prevContentRef.current === message.content) return;
    prevContentRef.current = message.content;

    if (streamRef.current) {
      clearInterval(streamRef.current);
      streamRef.current = null;
    }

    if (isUser || !cleanContent) {
      setDisplayedContent(cleanContent);
      return;
    }

    if (!isLatest) {
      setDisplayedContent(cleanContent);
      return;
    }

    const words = cleanContent.split(' ');
    let index = 0;
    setDisplayedContent('');

    streamRef.current = setInterval(() => {
      if (index < words.length) {
        index++;
        setDisplayedContent(words.slice(0, index).join(' '));
      } else {
        if (streamRef.current) clearInterval(streamRef.current);
        streamRef.current = null;
      }
    }, 30);

    return () => {
      if (streamRef.current) {
        clearInterval(streamRef.current);
        streamRef.current = null;
      }
    };
  }, [message.content, cleanContent, isUser, isLatest]);

  useEffect(() => {
    if (!isLatest && !isUser && displayedContent !== cleanContent) {
      setDisplayedContent(cleanContent);
    }
  }, [isLatest, isUser, cleanContent, displayedContent]);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        clearInterval(streamRef.current);
      }
    };
  }, []);

  const handleSpeak = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanContent);
    
    if (voiceConfig) {
      utterance.rate = voiceConfig.rate;
      utterance.pitch = voiceConfig.pitch;
      if (voiceConfig.voiceURI) {
        const voices = window.speechSynthesis.getVoices();
        const matchedVoice = voices.find(v => v.voiceURI === voiceConfig.voiceURI);
        if (matchedVoice) {
          utterance.voice = matchedVoice;
        }
      }
    } else {
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }, [cleanContent, isSpeaking, voiceConfig]);

  useEffect(() => {
    if (!isUser && shouldAutoRead && voiceConfig?.autoRead && cleanContent) {
      const timer = setTimeout(() => {
        handleSpeak();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isUser, shouldAutoRead, voiceConfig?.autoRead, cleanContent, handleSpeak]);

  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(cleanContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [cleanContent]);

  const handleFeedback = useCallback((feedback: 'like' | 'dislike') => {
    const newValue = message.feedback === feedback ? null : feedback;
    setMessageFeedback(message.id, newValue);
  }, [message.id, message.feedback, setMessageFeedback]);

  const displayText = isUser ? cleanContent : displayedContent || cleanContent;
  const isStreaming = isLatest && displayText !== cleanContent && !isUser;

  return (
    <div className={cn('flex gap-3 px-4 py-3', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform',
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white'
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      <div
        className={cn(
          'relative max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all',
          isUser
            ? 'bg-blue-600 text-white rounded-tr-md'
            : 'bg-gray-100 text-gray-900 rounded-tl-md dark:bg-gray-800 dark:text-gray-100'
        )}
      >
        <div className="whitespace-pre-wrap break-words leading-relaxed font-normal">
          {displayText}
          {isStreaming && (
            <span className="inline-block w-1 h-4 bg-indigo-500 dark:bg-indigo-400 ml-0.5 animate-pulse" />
          )}
        </div>

        {hasDiagram && (
          <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-150/20 px-2.5 py-1.5 text-xs text-indigo-655 dark:text-indigo-400 font-medium select-none">
            <Presentation className="h-3.5 w-3.5" />
            <span>Interactive diagram rendered on Blackboard</span>
          </div>
        )}

        {hasBookletDiagram && (
          <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-150/20 px-2.5 py-1.5 text-xs text-emerald-655 dark:text-emerald-400 font-medium select-none">
            <FileText className="h-3.5 w-3.5" />
            <span>Booklet question shown on Blackboard</span>
          </div>
        )}

        {bookAction && (
          <div className="mt-3 rounded-xl border border-indigo-200/80 bg-indigo-50/90 p-3 text-xs dark:border-indigo-900/60 dark:bg-indigo-950/60 shadow-sm">
            <div className="flex items-center gap-1.5 font-semibold text-indigo-800 dark:text-indigo-300">
              <BookOpen className="h-4 w-4" />
              <span>{bookAction.bookTitle}</span>
            </div>
            <p className="mt-1 font-semibold text-gray-800 dark:text-gray-200">
              {bookAction.chapterTitle}
            </p>
            {bookAction.pageSummary && (
              <p className="mt-1 text-[11px] text-gray-600 dark:text-gray-400 leading-snug">
                {bookAction.pageSummary}
              </p>
            )}
            <div className="mt-2.5 flex items-center justify-end">
              <Link
                href={`/read/${bookAction.bookSlug}/${bookAction.chapterSlug}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                <span>Open Book Page</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        )}

        {!isUser && (
          <div className="mt-2.5 border-t border-gray-200/50 pt-2 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  onClick={handleSpeak}
                  className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-705 dark:hover:text-gray-300"
                  title={isSpeaking ? 'Stop reading' : 'Read aloud'}
                >
                  {isSpeaking ? (
                    <VolumeX className="h-3.5 w-3.5" />
                  ) : (
                    <Volume2 className="h-3.5 w-3.5" />
                  )}
                </button>
                <button
                  onClick={handleCopy}
                  className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-705 dark:hover:text-gray-300"
                  title="Copy message"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-550" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
                <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-0.5" />
                <button
                  onClick={() => handleFeedback('like')}
                  className={cn(
                    'rounded-lg p-1.5 transition-colors',
                    message.feedback === 'like'
                      ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400'
                      : 'text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-705 dark:hover:text-gray-300'
                  )}
                  title="Helpful"
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => handleFeedback('dislike')}
                  className={cn(
                    'rounded-lg p-1.5 transition-colors',
                    message.feedback === 'dislike'
                      ? 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'
                      : 'text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-705 dark:hover:text-gray-300'
                  )}
                  title="Not helpful"
                >
                  <ThumbsDown className="h-3.5 w-3.5" />
                </button>
              </div>

              <AnimatePresence>
                {isSpeaking && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex items-center overflow-hidden"
                  >
                    <AudioWaveform isSpeaking={isSpeaking} color="bg-indigo-500 dark:bg-indigo-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
