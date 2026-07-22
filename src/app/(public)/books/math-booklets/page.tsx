'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  Leaf,
  Landmark,
  Atom,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { subjects, type Subject, type Booklet } from '@/data/booklets';
import { SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="h-8 w-8 text-white" />,
  Leaf: <Leaf className="h-8 w-8 text-white" />,
  Landmark: <Landmark className="h-8 w-8 text-white" />,
  Atom: <Atom className="h-8 w-8 text-white" />,
};

function SubjectCard({ subject }: { subject: Subject }) {
  const totalQuestions = subject.booklets.reduce(
    (sum, b) => sum + b.sections.reduce((s, sec) => s + sec.questions.length, 0),
    0
  );
  const totalMarks = subject.booklets.reduce((sum, b) => sum + b.totalMarks, 0);

  return (
    <motion.div variants={itemVariants}>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <div className={cn('relative overflow-hidden p-8', 'bg-gradient-to-br', subject.gradient)}>
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              {iconMap[subject.icon] || <BookOpen className="h-8 w-8 text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
            <p className="mt-2 text-sm text-white/80">{subject.description}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">
              {subject.booklets.length} {subject.booklets.length === 1 ? 'Booklet' : 'Booklets'}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {totalQuestions} Questions
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {totalMarks} Marks
            </Badge>
          </div>

          <div className="space-y-3">
            {subject.booklets.map((booklet) => (
              <BookletRow key={booklet.id} booklet={booklet} subject={subject} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BookletRow({ booklet, subject }: { booklet: Booklet; subject: Subject }) {
  const totalQuestions = booklet.sections.reduce((sum, s) => sum + s.questions.length, 0);

  return (
    <Link href={`/books/math-booklets/${booklet.id}`}>
      <div className="group flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all hover:border-indigo-100 hover:bg-indigo-50 hover:shadow-md dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-indigo-900 dark:hover:bg-indigo-900/20">
        <div className="flex items-center gap-4">
          <div className={cn(
            'flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white',
            subject.gradient
          )}>
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
              {booklet.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {booklet.subtitle} · {totalQuestions} questions · {booklet.totalMarks} marks
            </p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500" />
      </div>
    </Link>
  );
}

export default function MathBookletsPage() {
  useEffect(() => {
    document.title = `Booklets | ${SITE_NAME}`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 px-4 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <Link
            href="/books"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-indigo-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Books
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <GraduationCap className="h-4 w-4" />
            Practice Booklets
          </motion.div>

          <motion.h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Study Booklets
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Interactive practice booklets with step-by-step solutions. Choose a subject and start studying.
          </motion.p>
        </motion.div>
      </section>

      {/* Subjects Grid */}
      <section className="flex-1 bg-gray-50 py-12 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2"
          >
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
