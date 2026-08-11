'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  Leaf,
  Landmark,
  Atom,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  FileText,
  Award,
  Clock,
  Star,
  Sparkles,
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

type FilterType = 'all' | 'tutorial' | 'practice' | 'past-paper';

function TypeBadge({ type }: { type?: Booklet['type'] }) {
  if (!type) return null;
  const styleMap: Record<string, string> = {
    tutorial: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    practice: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    'past-paper': 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
  };
  const labelMap: Record<string, string> = {
    tutorial: 'Tutorial',
    practice: 'Practice',
    'past-paper': 'Past Paper',
  };
  return (
    <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold', styleMap[type])}>
      {labelMap[type]}
    </span>
  );
}

function BookletRow({ booklet, subject }: { booklet: Booklet; subject: Subject }) {
  const totalQuestions = booklet.sections.reduce((sum, s) => sum + s.questions.length, 0);
  const isPastPaper = booklet.type === 'past-paper';

  return (
    <Link href={`/books/math-booklets/${booklet.id}`}>
      <div className={cn(
        'group flex items-center justify-between rounded-xl border p-4 transition-all hover:shadow-md',
        isPastPaper
          ? 'border-rose-200 bg-rose-50/70 hover:border-rose-300 hover:bg-rose-100/60 dark:border-rose-900/40 dark:bg-rose-950/30 dark:hover:border-rose-700 dark:hover:bg-rose-950/50'
          : 'border-gray-100 bg-gray-50 hover:border-indigo-100 hover:bg-indigo-50 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-indigo-900 dark:hover:bg-indigo-900/20'
      )}>
        <div className="flex items-center gap-4">
          <div className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-xs',
            isPastPaper ? 'from-rose-500 to-pink-600' : subject.gradient
          )}>
            {isPastPaper ? <ClipboardList className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
              <h4 className={cn(
                'font-semibold transition-colors text-sm',
                isPastPaper
                  ? 'text-gray-900 group-hover:text-rose-700 dark:text-white dark:group-hover:text-rose-400'
                  : 'text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400'
              )}>
                {booklet.title}
              </h4>
              <TypeBadge type={booklet.type} />
              {booklet.year && (
                <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">{booklet.year}</span>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {booklet.subtitle} · {totalQuestions} questions · {booklet.totalMarks} marks
            </p>
          </div>
        </div>
        <ChevronRight className={cn(
          'h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1',
          isPastPaper ? 'text-rose-400 group-hover:text-rose-600' : 'text-gray-400 group-hover:text-indigo-500'
        )} />
      </div>
    </Link>
  );
}

/** Featured Past Paper Card */
function FeaturedPastPaperCard({ booklet }: { booklet: Booklet }) {
  const totalQuestions = booklet.sections.reduce((sum, s) => sum + s.questions.length, 0);

  return (
    <motion.div variants={itemVariants}>
      <Link href={`/books/math-booklets/${booklet.id}`}>
        <div className="group relative overflow-hidden rounded-2xl border border-rose-200 bg-white p-6 shadow-sm transition-all hover:border-rose-400 hover:shadow-xl dark:border-rose-900/60 dark:bg-gray-900">
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-rose-500 via-pink-500 to-rose-600" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 pl-2">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700 dark:bg-rose-900/60 dark:text-rose-300">
                  <Star className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                  Official Exam Paper
                </span>
                {booklet.year && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {booklet.year}
                  </span>
                )}
                <Badge variant="outline" className="text-xs font-bold text-rose-600 border-rose-200">
                  {booklet.totalMarks} Marks
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors dark:text-white dark:group-hover:text-rose-400">
                {booklet.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-rose-800 dark:text-rose-300">{booklet.subtitle}</p>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {booklet.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-rose-500" />
                  {booklet.sections.length} Sections
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5 text-rose-500" />
                  {totalQuestions} Questions
                </span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Step-by-Step Memorandum Included
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-gray-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-md group-hover:scale-110 transition-transform">
                <ClipboardList className="h-6 w-6" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400 group-hover:translate-x-1 transition-transform">
                Attempt Paper <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SubjectCard({ subject, filter }: { subject: Subject; filter: FilterType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_VISIBLE_COUNT = 4;

  const filteredBooklets = subject.booklets.filter((b) => {
    if (filter === 'past-paper') return b.type === 'past-paper';
    if (filter === 'tutorial') return b.type === 'tutorial' || !b.type;
    if (filter === 'practice') return b.type === 'practice';
    return true;
  });

  if (filteredBooklets.length === 0) return null;

  const hasMore = filteredBooklets.length > INITIAL_VISIBLE_COUNT;
  const hiddenCount = filteredBooklets.length - INITIAL_VISIBLE_COUNT;
  const visibleBooklets = isExpanded || !hasMore
    ? filteredBooklets
    : filteredBooklets.slice(0, INITIAL_VISIBLE_COUNT);

  const totalQuestions = filteredBooklets.reduce(
    (sum, b) => sum + b.sections.reduce((s, sec) => s + sec.questions.length, 0),
    0
  );
  const totalMarks = filteredBooklets.reduce((sum, b) => sum + b.totalMarks, 0);

  return (
    <motion.div variants={itemVariants}>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
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
              {filteredBooklets.length} {filteredBooklets.length === 1 ? 'Item' : 'Items'}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {totalQuestions} Questions
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {totalMarks} Marks
            </Badge>
          </div>

          <div className="space-y-3 overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleBooklets.map((booklet) => (
                <motion.div
                  key={booklet.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <BookletRow booklet={booklet} subject={subject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 py-3 text-sm font-semibold text-indigo-600 transition-all hover:border-indigo-400 hover:bg-indigo-100/60 hover:shadow-sm dark:border-indigo-800/60 dark:bg-indigo-950/30 dark:text-indigo-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-900/40"
            >
              {isExpanded ? (
                <>
                  <span>Show fewer</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Show {hiddenCount} more</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const filterOptions: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All Resources' },
  { value: 'past-paper', label: 'Past Papers' },
  { value: 'tutorial', label: 'Tutorials' },
  { value: 'practice', label: 'Practice' },
];

export default function MathBookletsPage() {
  const [filter, setFilter] = useState<FilterType>('all');

  const allPastPapers = subjects.flatMap((s) => s.booklets.filter((b) => b.type === 'past-paper'));

  const totalQuestionsAll = subjects.reduce(
    (sum, s) => sum + s.booklets.reduce((qs, b) => qs + b.sections.reduce((qq, sec) => qq + sec.questions.length, 0), 0),
    0
  );

  useEffect(() => {
    document.title = `Booklets & Past Papers | ${SITE_NAME}`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
            LGCSE &amp; IGCSE Study Materials
          </motion.div>

          <motion.h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Booklets &amp; Past Papers
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Interactive practice booklets with step-by-step solutions, plus official past question papers with full memorandums.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm"
          >
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-indigo-200" />
              <span className="text-white font-semibold">
                {subjects.reduce((s, sub) => s + sub.booklets.length, 0)} Booklets &amp; Papers
              </span>
            </div>
            <button
              onClick={() => setFilter('past-paper')}
              className="flex items-center gap-2 rounded-full bg-rose-500/30 border border-rose-400/40 px-4 py-2 backdrop-blur-sm hover:bg-rose-500/40 transition-colors"
            >
              <ClipboardList className="h-4 w-4 text-rose-300" />
              <span className="text-white font-semibold">
                {allPastPapers.length} Official Past Papers
              </span>
            </button>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-amber-300" />
              <span className="text-white font-semibold">{totalQuestionsAll} Questions</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 py-3 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Filter:</span>
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-semibold transition-all',
                  filter === opt.value
                    ? opt.value === 'past-paper'
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-500/25'
                      : 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {(filter === 'past-paper' || filter === 'all') && allPastPapers.length > 0 && (
          <motion.section
            key="past-papers-showcase"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-br from-rose-50/80 via-pink-50/50 to-white py-8 border-b border-rose-100 dark:from-rose-950/30 dark:via-pink-950/20 dark:to-gray-900 dark:border-rose-900/30"
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/30">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Official Past Papers Collection
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Examinations Council of Lesotho (ECoL) Past Question Papers with Full Memorandums
                    </p>
                  </div>
                </div>
                <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300 font-bold">
                  {allPastPapers.length} Official Papers
                </Badge>
              </div>

              <div className="space-y-4">
                {allPastPapers.map((paper) => (
                  <FeaturedPastPaperCard key={paper.id} booklet={paper} />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="flex-1 bg-gray-50 py-12 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {filter !== 'all' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Filtering by: <strong className="text-gray-900 dark:text-white">{filterOptions.find(o => o.value === filter)?.label}</strong>
            </motion.p>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2"
          >
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} filter={filter} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
