'use client';

import { Calculator, Leaf, Landmark, Atom, Globe } from 'lucide-react';
import type { Subject } from '@/lib/ai/prompts';
import { cn } from '@/lib/utils';

interface SubjectSelectorProps {
  value: Subject;
  onChange: (subject: Subject) => void;
}

const subjects: { id: Subject; label: string; icon: typeof Calculator; color: string; activeColor: string }[] = [
  { id: 'general', label: 'General', icon: Globe, color: 'text-gray-500', activeColor: 'bg-gray-600 text-white' },
  { id: 'maths', label: 'Maths', icon: Calculator, color: 'text-blue-500', activeColor: 'bg-blue-600 text-white' },
  { id: 'biology', label: 'Biology', icon: Leaf, color: 'text-green-500', activeColor: 'bg-green-600 text-white' },
  { id: 'accounting', label: 'Acct', icon: Landmark, color: 'text-amber-500', activeColor: 'bg-amber-600 text-white' },
  { id: 'physics', label: 'Physics', icon: Atom, color: 'text-cyan-500', activeColor: 'bg-cyan-600 text-white' },
];

export default function SubjectSelector({ value, onChange }: SubjectSelectorProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2">
      {subjects.map((subject) => {
        const Icon = subject.icon;
        const isActive = value === subject.id;

        return (
          <button
            key={subject.id}
            onClick={() => onChange(subject.id)}
            className={cn(
              'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all',
              isActive
                ? subject.activeColor + ' shadow-sm'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{subject.label}</span>
          </button>
        );
      })}
    </div>
  );
}
