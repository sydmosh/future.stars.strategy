import { mathsBooklets } from './maths-booklets';
import { biologyBooklets } from './biology-booklets';
import { accountingBooklets } from './accounting-booklets';
import { physicsBooklets } from './physics-booklets';

export interface Question {
  id: string;
  number: number;
  question: string;
  parts?: { label: string; question: string }[];
  diagram?: string;
  marks: number;
  solution: string;
  solutionSteps?: string[];
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}

export interface Booklet {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  totalMarks: number;
  sections: Section[];
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  gradient: string;
  booklets: Booklet[];
}

export const subjects: Subject[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    slug: 'mathematics',
    description: 'IGCSE Mathematics practice booklets covering algebra, geometry, number, and probability.',
    icon: 'Calculator',
    gradient: 'from-indigo-500 to-purple-600',
    booklets: mathsBooklets,
  },
  {
    id: 'biology',
    name: 'Biology',
    slug: 'biology',
    description: 'IGCSE Biology practice booklets covering cell biology, nutrition, transport, and ecology.',
    icon: 'Leaf',
    gradient: 'from-green-500 to-emerald-600',
    booklets: biologyBooklets,
  },
  {
    id: 'accounting',
    name: 'Accounting',
    slug: 'accounting',
    description: 'LGCSE Accounting practice booklets covering the accounting equation, double entry, and financial statements.',
    icon: 'Landmark',
    gradient: 'from-amber-500 to-orange-600',
    booklets: accountingBooklets,
  },
  {
    id: 'physics',
    name: 'Physics',
    slug: 'physics',
    description: 'IGCSE Physics practice booklets covering forces, energy, waves, and electricity.',
    icon: 'Atom',
    gradient: 'from-blue-500 to-cyan-600',
    booklets: physicsBooklets,
  },
];

export function getAllBooklets(): Booklet[] {
  return subjects.flatMap((s) => s.booklets);
}

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getBookletById(id: string): Booklet | undefined {
  return subjects.flatMap((s) => s.booklets).find((b) => b.id === id);
}

// Re-export for backward compatibility
export { mathsBooklets, biologyBooklets, accountingBooklets, physicsBooklets };
