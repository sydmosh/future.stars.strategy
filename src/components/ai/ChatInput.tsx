'use client';

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { Send, Loader2, Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export default function ChatInput({ onSend, isLoading, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // Setup speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setHasSpeechSupport(true);
        const rec = new SpeechRecognition();
        rec.continuous = false;
        rec.interimResults = false;
        rec.lang = 'en-US';

        rec.onstart = () => {
          setIsListening(true);
        };

        rec.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput((prev) => (prev ? prev + ' ' + transcript : transcript));
        };

        rec.onend = () => {
          setIsListening(false);
        };

        rec.onerror = (event: any) => {
          console.error('Speech recognition error', event);
          setIsListening(false);
        };

        recognitionRef.current = rec;
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Failed to start speech recognition:', err);
      }
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading || disabled) return;
    onSend(input.trim());
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-800">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isListening ? "Listening..." : "Ask me anything..."}
          rows={1}
          disabled={disabled || isListening}
          className={cn(
            'max-h-[120px] min-h-[36px] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm',
            'placeholder:text-gray-400 focus:outline-none dark:placeholder:text-gray-500',
            'dark:text-gray-100',
            isListening && 'text-indigo-650 dark:text-indigo-400 font-medium'
          )}
        />
        
        {hasSpeechSupport && (
          <button
            onClick={toggleListening}
            disabled={isLoading || disabled}
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all',
              isListening
                ? 'bg-red-500 text-white animate-pulse shadow-md'
                : 'text-gray-400 hover:bg-gray-250 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300'
            )}
            title={isListening ? "Stop listening" : "Type with your voice"}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </button>
        )}

        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading || disabled || isListening}
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all',
            input.trim() && !isLoading && !isListening
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
              : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
          )}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>
      <p className="mt-1.5 text-center text-[10px] text-gray-400 dark:text-gray-500">
        Powered by open-source AI · Free to use
      </p>
    </div>
  );
}
