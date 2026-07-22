'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Trash2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@/contexts/ChatContext';
import { WELCOME_MESSAGES, type Subject } from '@/lib/ai/prompts';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SubjectSelector from './SubjectSelector';
import TypingIndicator from './TypingIndicator';
import { cn } from '@/lib/utils';

export default function ChatWidget() {
  const {
    isOpen,
    messages,
    subject,
    isLoading,
    error,
    toggleChat,
    closeChat,
    setSubject,
    sendMessage,
    clearMessages,
    clearError,
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasGreeted, setHasGreeted] = useState<Subject | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Send welcome message when chat opens for the first time or subject changes
  useEffect(() => {
    if (isOpen && messages.length === 0 && hasGreeted !== subject) {
      setHasGreeted(subject);
      sendMessage(WELCOME_MESSAGES[subject]);
    }
  }, [isOpen, messages.length, subject, hasGreeted, sendMessage]);

  // Stop speech when chat closes
  useEffect(() => {
    if (!isOpen) {
      window.speechSynthesis.cancel();
    }
  }, [isOpen]);

  const handleSubjectChange = (newSubject: Subject) => {
    setSubject(newSubject);
    if (messages.length > 0) {
      clearMessages();
    }
    clearError();
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all',
          'bg-gradient-to-br from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700',
          'hover:shadow-xl hover:scale-105 active:scale-95',
          isOpen && 'rotate-0'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open AI tutor'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bot className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden',
              'w-[calc(100vw-48px)] sm:w-[400px] h-[500px] sm:h-[600px]',
              'rounded-2xl border border-gray-200 bg-white shadow-2xl',
              'dark:border-gray-700 dark:bg-gray-900',
              'max-h-[calc(100vh-140px)]'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI Study Assistant</h3>
                  <p className="text-xs text-white/70">
                    {isLoading ? 'Thinking...' : 'Ask me anything'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearMessages}
                  className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  onClick={closeChat}
                  className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:hidden"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Subject Selector */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <SubjectSelector value={subject} onChange={handleSubjectChange} />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto">
              {messages.length === 0 && !isLoading ? (
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                    AI Study Assistant
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Choose a subject and ask me anything about your studies!
                  </p>
                </div>
              ) : (
                <div className="py-2">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                    <TypingIndicator />
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="mx-4 mb-3 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                  <p className="font-medium">Oops! {error}</p>
                  <button
                    onClick={clearError}
                    className="mt-1 underline hover:no-underline"
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </div>

            {/* Input */}
            <ChatInput onSend={sendMessage} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
