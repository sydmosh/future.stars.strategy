'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSuggestedQuestions } from '@/lib/ai/suggestions';
import type { Subject } from '@/lib/ai/prompts';

interface SuggestedQuestionsProps {
  subject: Subject;
  messages: { role: string; content: string }[];
  onSelect: (question: string) => void;
  isLoading: boolean;
}

export default function SuggestedQuestions({ subject, messages, onSelect, isLoading }: SuggestedQuestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const prevMsgCountRef = useRef(messages.length);
  const prevSubjectRef = useRef(subject);

  const generateSuggestions = useCallback(() => {
    const assistantMessages = messages.filter(m => m.role === 'assistant');
    if (assistantMessages.length === 0) {
      setSuggestions([]);
      setIsVisible(false);
      return;
    }

    const lastAssistant = assistantMessages[assistantMessages.length - 1];
    const lastUser = [...messages].reverse().find(m => m.role === 'user');

    const result = getSuggestedQuestions(
      subject,
      lastUser?.content || '',
      lastAssistant.content,
      messages.length
    );

    setSuggestions(result);
    setIsVisible(result.length > 0);
  }, [messages, subject]);

  useEffect(() => {
    if (messages.length !== prevMsgCountRef.current || subject !== prevSubjectRef.current) {
      const timer = setTimeout(generateSuggestions, 500);
      prevMsgCountRef.current = messages.length;
      prevSubjectRef.current = subject;
      return () => clearTimeout(timer);
    }
  }, [messages.length, subject, generateSuggestions]);

  if (!isVisible || isLoading || messages.length < 2) return null;

  return (
    <AnimatePresence>
      {isVisible && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="px-4 pb-3"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Lightbulb className="h-3 w-3 text-amber-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Try asking
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((question, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => {
                  onSelect(question);
                  setIsVisible(false);
                }}
                className="flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-indigo-50/60 px-3 py-1.5 text-[11px] font-medium text-indigo-700 transition-all hover:border-indigo-400 hover:bg-indigo-100 hover:text-indigo-800 dark:border-indigo-800/40 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/60"
              >
                <Sparkles className="h-2.5 w-2.5 shrink-0" />
                <span className="truncate max-w-[200px]">{question}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
