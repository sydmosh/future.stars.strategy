'use client';

import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <Bot className="h-4 w-4" />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
