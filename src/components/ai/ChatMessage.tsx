'use client';

import { useState, useCallback } from 'react';
import { Bot, User, Volume2, VolumeX, Copy, Check } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/contexts/ChatContext';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleSpeak = useCallback(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(message.content);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }, [message.content, isSpeaking]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [message.content]);

  return (
    <div className={cn('flex gap-3 px-4 py-3', isUser ? 'flex-row-reverse' : 'flex-row')}>
      {/* Avatar */}
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white'
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          'relative max-w-[80%] rounded-2xl px-4 py-3 text-sm',
          isUser
            ? 'bg-blue-600 text-white rounded-tr-md'
            : 'bg-gray-100 text-gray-900 rounded-tl-md dark:bg-gray-800 dark:text-gray-100'
        )}
      >
        {/* Message content */}
        <div className="whitespace-pre-wrap break-words leading-relaxed">
          {message.content}
        </div>

        {/* Actions (assistant messages only) */}
        {!isUser && message.content && (
          <div className="mt-2 flex items-center gap-1 border-t border-gray-200 pt-2 dark:border-gray-700">
            <button
              onClick={handleSpeak}
              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              title="Copy message"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
