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
  XCircle,
  Eye,
  EyeOff,
  GraduationCap,
  Lightbulb,
  Printer,
  Star,
  BookMarked,
  Sparkles,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { getBookletById, type Question, type Section } from '@/data/booklets';
import { SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

function RevisionNotesCard({ revisionNotes }: { revisionNotes: NonNullable<ReturnType<typeof getBookletById>>['revisionNotes'] }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!revisionNotes) return null;

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-white shadow-sm dark:border-indigo-900/50 dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-gray-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
            <BookMarked className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {revisionNotes.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Key concepts, formulas, and examples for this tutorial
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            Quick Study
          </Badge>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-indigo-100 p-6 space-y-6 dark:border-indigo-900/40">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {revisionNotes.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-xs dark:border-gray-800 dark:bg-gray-900/80"
                  >
                    <h3 className="flex items-center gap-2 text-base font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                      <Sparkles className="h-4 w-4 text-purple-500" />
                      {sec.heading}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {sec.content}
                    </p>
                    {sec.examples && sec.examples.length > 0 && (
                      <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600 dark:bg-gray-800/80 dark:text-gray-300 space-y-1 font-mono">
                        {sec.examples.map((ex, i) => (
                          <div key={i}>{ex}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function QuestionCard({
  question,
  sectionIndex,
  showSolution,
  onToggleSolution,
  userAnswer,
  onUserAnswerChange,
  isCorrect,
  onCheckAnswer,
}: {
  question: Question;
  sectionIndex: number;
  showSolution: boolean;
  onToggleSolution: () => void;
  userAnswer: string;
  onUserAnswerChange: (val: string) => void;
  isCorrect: boolean | null;
  onCheckAnswer: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: sectionIndex * 0.05 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-xs">
              {question.number}
            </span>
            <Badge variant="outline" className="text-xs font-semibold">
              {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
            </Badge>
            {isCorrect === true && (
              <Badge className="bg-emerald-500 text-white flex items-center gap-1 text-xs">
                <CheckCircle2 className="h-3 w-3" /> Correct!
              </Badge>
            )}
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

            {/* Interactive Self-Assessment Input */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Input
                  type="text"
                  placeholder="Enter your answer..."
                  value={userAnswer}
                  onChange={(e) => onUserAnswerChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onCheckAnswer();
                  }}
                  className={cn(
                    'h-10 text-sm transition-colors',
                    isCorrect === true && 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20',
                    isCorrect === false && 'border-rose-400 bg-rose-50/50 dark:bg-rose-950/20'
                  )}
                />
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={onCheckAnswer}
                className="h-10 px-4 font-semibold"
              >
                Check Answer
              </Button>
            </div>

            {/* Feedback alert */}
            {isCorrect === false && (
              <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                <XCircle className="h-4 w-4 shrink-0" />
                <span>Not quite. Check your calculation or click "Show Solution" below!</span>
              </div>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSolution}
          className="shrink-0 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
        >
          {showSolution ? (
            <EyeOff className="h-4 w-4 mr-1.5" />
          ) : (
            <Eye className="h-4 w-4 mr-1.5" />
          )}
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </Button>
      </div>

      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-4 ml-11 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                  Memorandum (Fully Worked Solution)
                </span>
              </div>
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200 whitespace-pre-line font-mono bg-white/70 dark:bg-black/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                {question.solution}
              </p>

              {question.solutionSteps && (
                <div className="mt-3 pt-3 border-t border-emerald-200 dark:border-emerald-900/60">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      Step-by-Step Breakdown:
                    </span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs text-gray-700 dark:text-gray-300">
                    {question.solutionSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white/50 dark:bg-black/10 px-2.5 py-1 rounded-md">
                        <span className="shrink-0 text-gray-400 font-bold">{i + 1}.</span>
                        <span className="whitespace-pre-wrap">{step}</span>
                      </div>
                    ))}
                  </div>
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
  userAnswers,
  onUserAnswerChange,
  correctStates,
  onCheckAnswer,
}: {
  section: Section;
  sectionIndex: number;
  expandedSections: Record<string, boolean>;
  toggleSection: (id: string) => void;
  showSolutions: Record<string, boolean>;
  toggleSolution: (id: string) => void;
  showAllSolutions: boolean;
  userAnswers: Record<string, string>;
  onUserAnswerChange: (id: string, val: string) => void;
  correctStates: Record<string, boolean | null>;
  onCheckAnswer: (q: Question) => void;
}) {
  const isExpanded = expandedSections[section.id] ?? true;
  const totalMarks = section.questions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <div className="space-y-4">
      <button
        onClick={() => toggleSection(section.id)}
        className={cn(
          'flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all',
          isExpanded
            ? 'border-indigo-200 bg-indigo-50/80 shadow-xs dark:border-indigo-800 dark:bg-indigo-950/30'
            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700'
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xs">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
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
            <div className="space-y-4 pt-1">
              {section.questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  sectionIndex={sectionIndex}
                  showSolution={showAllSolutions || showSolutions[question.id] || false}
                  onToggleSolution={() => toggleSolution(question.id)}
                  userAnswer={userAnswers[question.id] || ''}
                  onUserAnswerChange={(val) => onUserAnswerChange(question.id, val)}
                  isCorrect={correctStates[question.id] ?? null}
                  onCheckAnswer={() => onCheckAnswer(question)}
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
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [correctStates, setCorrectStates] = useState<Record<string, boolean | null>>({});

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
            Tutorial Booklet Not Found
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            The requested tutorial does not exist or has been moved.
          </p>
        </div>
        <Link href="/books/math-booklets">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tutorials
          </Button>
        </Link>
      </div>
    );
  }

  const handleUserAnswerChange = (id: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [id]: val }));
    // Reset check status when modified
    if (correctStates[id] !== undefined) {
      setCorrectStates((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleCheckAnswer = (q: Question) => {
    const input = (userAnswers[q.id] || '').trim().toLowerCase();
    if (!input) return;

    const expected = (q.expectedAnswer || q.solution).trim().toLowerCase();
    // Normalize spaces and commas
    const cleanInput = input.replace(/\s+/g, '');
    const cleanExpected = expected.replace(/\s+/g, '');

    // Check exact or partial key match
    const isMatch = cleanInput === cleanExpected || cleanExpected.includes(cleanInput);
    setCorrectStates((prev) => ({ ...prev, [q.id]: isMatch }));

    if (isMatch) {
      setShowSolutions((prev) => ({ ...prev, [q.id]: true }));
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !(prev[id] ?? true) }));
  };

  const toggleSolution = (id: string) => {
    setShowSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllSolutions = () => {
    setShowAllSolutions((prev) => !prev);
  };

  const totalQuestionsCount = booklet.sections.reduce((acc, sec) => acc + sec.questions.length, 0);
  const totalCorrectCount = Object.values(correctStates).filter((v) => v === true).length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 px-4 pb-12 pt-16 sm:pb-16 sm:pt-24 text-white">
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
            Back to Tutorials & Booklets
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-xs"
          >
            <GraduationCap className="h-4 w-4" />
            Interactive Tutorial & Practice
          </motion.div>

          <motion.h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {booklet.title}
          </motion.h1>
          <motion.p className="mt-2 text-xl font-medium text-indigo-100">
            {booklet.subtitle}
          </motion.p>
          <motion.p className="mx-auto mt-4 max-w-2xl text-indigo-200 leading-relaxed text-sm sm:text-base">
            {booklet.description}
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xs">
              <BookOpen className="h-4 w-4 text-indigo-300" />
              {booklet.sections.length} Sections
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-xs">
              <Star className="h-4 w-4 text-amber-300" />
              {totalQuestionsCount} Questions ({booklet.totalMarks} Marks)
            </div>
            {totalCorrectCount > 0 && (
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/30 border border-emerald-300/40 px-4 py-2 text-sm font-bold text-emerald-200 backdrop-blur-xs">
                <Award className="h-4 w-4 text-emerald-300" />
                Score: {totalCorrectCount} / {totalQuestionsCount} Correct
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 bg-gray-50/60 py-10 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Quick Revision Notes component */}
          {booklet.revisionNotes && (
            <RevisionNotesCard revisionNotes={booklet.revisionNotes} />
          )}

          {/* Action Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xs">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base">
                Question Sets & Solutions
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Type your answer into each box and click "Check Answer", or toggle full memorandum solutions.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAllSolutions}
                className="font-medium"
              >
                {showAllSolutions ? (
                  <>
                    <EyeOff className="mr-1.5 h-4 w-4" />
                    Hide All Memorandum
                  </>
                ) : (
                  <>
                    <Eye className="mr-1.5 h-4 w-4" />
                    Show All Memorandum
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

          {/* Sections List */}
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
                userAnswers={userAnswers}
                onUserAnswerChange={handleUserAnswerChange}
                correctStates={correctStates}
                onCheckAnswer={handleCheckAnswer}
              />
            ))}
          </div>

          {/* Study Tip */}
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>⭐ Exam Tip:</strong> Always show your clear working out. In mathematics examinations, partial marks are awarded for correct steps even if a final calculation has a minor arithmetic slip.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
