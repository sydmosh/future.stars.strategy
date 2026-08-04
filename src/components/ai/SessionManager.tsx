'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/contexts/ChatContext';
import { Plus, MessageSquare, Trash2, Check, X, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function SessionManager() {
  const {
    sessions,
    currentSessionId,
    switchSession,
    deleteSession,
    createNewSession,
    renameSession,
  } = useChat();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  useEffect(() => {
    if (!isOpen) {
      setEditingId(null);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleRename = (sessionId: string) => {
    if (editTitle.trim()) {
      renameSession(sessionId, editTitle.trim());
    }
    setEditingId(null);
  };

  const startEditing = (sessionId: string, currentTitle: string) => {
    setEditingId(sessionId);
    setEditTitle(currentTitle);
  };

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white',
          isOpen && 'bg-white/10 text-white'
        )}
        title="Conversations"
      >
        <MessageSquare className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 z-50 w-72 rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-850 overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2.5 dark:border-gray-800">
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                Conversations
              </span>
              <button
                onClick={() => {
                  createNewSession();
                  setIsOpen(false);
                }}
                className="flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                <Plus className="h-3 w-3" />
                New
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {sessions.length === 0 ? (
                <div className="px-3 py-6 text-center text-xs text-gray-400">
                  No conversations yet
                </div>
              ) : (
                sessions.map((session) => (
                  <div
                    key={session.id}
                    className={cn(
                      'group flex items-center gap-2 px-3 py-2.5 text-xs border-b border-gray-50 dark:border-gray-800/50 transition-colors',
                      currentSessionId === session.id
                        ? 'bg-indigo-50 dark:bg-indigo-950/30'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    )}
                  >
                    <button
                      onClick={() => {
                        switchSession(session.id);
                        setIsOpen(false);
                      }}
                      className="flex-1 text-left min-w-0"
                    >
                      {editingId === session.id ? (
                        <div className="flex items-center gap-1">
                          <input
                            ref={inputRef}
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleRename(session.id);
                              if (e.key === 'Escape') setEditingId(null);
                            }}
                            className="flex-1 rounded border border-indigo-300 bg-white px-1.5 py-0.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-indigo-700 dark:bg-gray-800 dark:text-gray-200"
                          />
                          <button
                            onClick={() => handleRename(session.id)}
                            className="p-0.5 text-green-600 hover:text-green-500"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-0.5 text-gray-400 hover:text-gray-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <span
                          className={cn(
                            'block truncate',
                            currentSessionId === session.id
                              ? 'font-semibold text-indigo-800 dark:text-indigo-300'
                              : 'text-gray-700 dark:text-gray-300'
                          )}
                        >
                          {session.title}
                        </span>
                      )}
                    </button>

                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <button
                        onClick={() => startEditing(session.id, session.title)}
                        className="rounded p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        title="Rename"
                      >
                        <Pencil className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => deleteSession(session.id)}
                        className="rounded p-1 text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                        title="Delete"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
