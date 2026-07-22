'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  Lightbulb,
  Printer,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getBookletById, type Question, type Section } from '@/data/booklets';
import { SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

function QuestionCard({
  question,
  sectionIndex,
  showSolution,
  onToggleSolution,
}: {
  question: Question;
  sectionIndex: number;
  showSolution: boolean;
  onToggleSolution: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
              {question.number}
            </span>
            <Badge variant="outline" className="text-xs">
              {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
            </Badge>
          </div>

          <div className="ml-11">
            <p className="text-base font-medium text-gray-900 dark:text-white whitespace-pre-line leading-relaxed">
              {question.question}
            </p>

            {question.diagram && (
              <div
                className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
                dangerouslySetInnerHTML={{ __html: question.diagram }}
              />
            )}

            {question.parts && (
              <div className="mt-3 space-y-2">
                {question.parts.map((part) => (
                  <div key={part.label} className="flex items-start gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      {part.label}
                    </span>
                    <span className="text-base text-gray-700 dark:text-gray-300">
                      {part.question}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSolution}
          className="shrink-0"
        >
          {showSolution ? (
            <EyeOff className="h-4 w-4 mr-1.5" />
          ) : (
            <Eye className="h-4 w-4 mr-1.5" />
          )}
          {showSolution ? 'Hide' : 'Show'}
        </Button>
      </div>

      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 ml-11 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                  Solution
                </span>
              </div>
              <p className="text-sm font-medium text-green-800 dark:text-green-300 whitespace-pre-line">
                {question.solution}
              </p>

              {question.solutionSteps && (
                <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      Step-by-step
                    </span>
                  </div>
                  <ol className="space-y-1">
                    {question.solutionSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <span className="shrink-0 font-medium text-gray-400 dark:text-gray-500">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SectionAccordion({
  section,
  sectionIndex,
  expandedSections,
  toggleSection,
  showSolutions,
  toggleSolution,
  showAllSolutions,
}: {
  section: Section;
  sectionIndex: number;
  expandedSections: Record<string, boolean>;
  toggleSection: (id: string) => void;
  showSolutions: Record<string, boolean>;
  toggleSolution: (id: string) => void;
  showAllSolutions: boolean;
}) {
  const isExpanded = expandedSections[section.id] ?? sectionIndex === 0;
  const totalMarks = section.questions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <div className="space-y-3">
      <button
        onClick={() => toggleSection(section.id)}
        className={cn(
          'flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all',
          isExpanded
            ? 'border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20'
            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {section.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {section.questions.length} questions · {totalMarks} marks
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pl-4">
              {section.questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  sectionIndex={sectionIndex}
                  showSolution={showAllSolutions || showSolutions[question.id] || false}
                  onToggleSolution={() => toggleSolution(question.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BookletPage() {
  const params = useParams();
  const bookletId = params.id as string;

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  const booklet = getBookletById(bookletId);

  useEffect(() => {
    document.title = booklet
      ? `${booklet.title} | ${SITE_NAME}`
      : `Maths Booklet | ${SITE_NAME}`;
  }, [booklet]);

  if (!booklet) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
          <BookOpen className="h-10 w-10 text-gray-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Booklet not found
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            The booklet you are looking for does not exist.
          </p>
        </div>
        <Link href="/books/math-booklets">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Booklets
          </Button>
        </Link>
      </div>
    );
  }

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setShowSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllSolutions = () => {
    setShowAllSolutions((prev) => !prev);
  };

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
            href="/books/math-booklets"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-indigo-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Booklets
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <GraduationCap className="h-4 w-4" />
            Practice Booklet
          </motion.div>

          <motion.h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {booklet.title}
          </motion.h1>
          <motion.p className="mt-3 text-lg text-indigo-100">
            {booklet.subtitle}
          </motion.p>
          <motion.p className="mx-auto mt-4 max-w-2xl text-indigo-200">
            {booklet.description}
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <BookOpen className="h-4 w-4" />
              {booklet.sections.length} Sections
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Star className="h-4 w-4" />
              {booklet.totalMarks} Total Marks
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="flex-1 bg-gray-50 py-8 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Action Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Work through each question, then check your answer.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAllSolutions}
              >
                {showAllSolutions ? (
                  <>
                    <EyeOff className="mr-1.5 h-4 w-4" />
                    Hide All Solutions
                  </>
                ) : (
                  <>
                    <Eye className="mr-1.5 h-4 w-4" />
                    Show All Solutions
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
              >
                <Printer className="mr-1.5 h-4 w-4" />
                Print
              </Button>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {booklet.sections.map((section, index) => (
              <SectionAccordion
                key={section.id}
                section={section}
                sectionIndex={index}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                showSolutions={showSolutions}
                toggleSolution={toggleSolution}
                showAllSolutions={showAllSolutions}
              />
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Study Tip:</strong> Try each question yourself before checking the solution.
              Write your working out clearly to help you spot any mistakes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
