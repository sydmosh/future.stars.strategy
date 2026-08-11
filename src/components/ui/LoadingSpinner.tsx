'use client';

import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  visible: boolean;
}

/**
 * Inline loading indicator — shown in the top-right corner whenever a page
 * transition is in progress.  Keeps the experience unobtrusive (no overlay).
 */
export default function LoadingSpinner({ visible }: LoadingSpinnerProps) {
  if (!visible) return null;

  return (
    <div
      aria-label="Loading"
      role="status"
      className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg ring-1 ring-slate-200 dark:bg-slate-900/90 dark:ring-slate-700"
    >
      <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400" />
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Loading…</span>
    </div>
  );
}
