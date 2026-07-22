'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  Calendar,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { StepByStepSolution } from '@/components/StepByStepSolution';
import { NewSolutionForm } from '@/components/NewSolutionForm';
import { useAuth } from '@/contexts/AuthContext';
import { SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

const BASE_URL = 'https://papers.cieprep.com/IGCSE/Mathematics_0580';

interface PaperItem {
  id: string;
  label: string;
  variant: string;
  local?: boolean;
  msId?: string;
}

interface PaperSet {
  series: string;
  label: string;
  year: string;
  lumiexamsSlug?: string;
  local?: boolean;
  papers: PaperItem[];
}

const paperSets: PaperSet[] = [
  {
    series: 'booklets',
    label: '📘 Question Booklets',
    year: '2025',
    local: true,
    papers: [
      { id: '0580_m25_qp_12', label: 'Paper 1 (Core) - Question Paper', variant: '12', local: true, msId: '0580_m25_ms_12' },
      { id: '0580_m25_ms_12', label: 'Paper 1 (Core) - Mark Scheme', variant: '12', local: true },
    ],
  },
  {
    series: 'w25-oct-nov',
    label: 'October/November 2025',
    year: '2025',
    lumiexamsSlug: 'october-november',
    papers: [
      { id: '0580_w25_qp_11', label: 'Paper 1 (Core)', variant: '11' },
      { id: '0580_w25_qp_12', label: 'Paper 1 (Core)', variant: '12' },
      { id: '0580_w25_qp_13', label: 'Paper 1 (Core)', variant: '13' },
      { id: '0580_w25_qp_21', label: 'Paper 2 (Extended)', variant: '21' },
      { id: '0580_w25_qp_22', label: 'Paper 2 (Extended)', variant: '22' },
      { id: '0580_w25_qp_23', label: 'Paper 2 (Extended)', variant: '23' },
      { id: '0580_w25_qp_31', label: 'Paper 3 (Core)', variant: '31' },
      { id: '0580_w25_qp_32', label: 'Paper 3 (Core)', variant: '32' },
      { id: '0580_w25_qp_33', label: 'Paper 3 (Core)', variant: '33' },
      { id: '0580_w25_qp_41', label: 'Paper 4 (Extended)', variant: '41' },
      { id: '0580_w25_qp_42', label: 'Paper 4 (Extended)', variant: '42' },
      { id: '0580_w25_qp_43', label: 'Paper 4 (Extended)', variant: '43' },
    ],
  },
  {
    series: 's25-may-jun',
    label: 'May/June 2025',
    year: '2025',
    lumiexamsSlug: 'may-june',
    papers: [
      { id: '0580_s25_qp_11', label: 'Paper 1 (Core)', variant: '11' },
      { id: '0580_s25_qp_12', label: 'Paper 1 (Core)', variant: '12' },
      { id: '0580_s25_qp_21', label: 'Paper 2 (Extended)', variant: '21' },
      { id: '0580_s25_qp_22', label: 'Paper 2 (Extended)', variant: '22' },
      { id: '0580_s25_qp_31', label: 'Paper 3 (Core)', variant: '31' },
      { id: '0580_s25_qp_32', label: 'Paper 3 (Core)', variant: '32' },
      { id: '0580_s25_qp_41', label: 'Paper 4 (Extended)', variant: '41' },
      { id: '0580_s25_qp_42', label: 'Paper 4 (Extended)', variant: '42' },
    ],
  },
  {
    series: 'w24-oct-nov',
    label: 'October/November 2024',
    year: '2024',
    lumiexamsSlug: 'october-november',
    papers: [
      { id: '0580_w24_qp_11', label: 'Paper 1 (Core)', variant: '11' },
      { id: '0580_w24_qp_12', label: 'Paper 1 (Core)', variant: '12' },
      { id: '0580_w24_qp_21', label: 'Paper 2 (Extended)', variant: '21' },
      { id: '0580_w24_qp_22', label: 'Paper 2 (Extended)', variant: '22' },
      { id: '0580_w24_qp_31', label: 'Paper 3 (Core)', variant: '31' },
      { id: '0580_w24_qp_32', label: 'Paper 3 (Core)', variant: '32' },
      { id: '0580_w24_qp_41', label: 'Paper 4 (Extended)', variant: '41' },
      { id: '0580_w24_qp_42', label: 'Paper 4 (Extended)', variant: '42' },
    ],
  },
  {
    series: 's24-may-jun',
    label: 'May/June 2024',
    year: '2024',
    lumiexamsSlug: 'may-june',
    papers: [
      { id: '0580_s24_qp_11', label: 'Paper 1 (Core)', variant: '11' },
      { id: '0580_s24_qp_12', label: 'Paper 1 (Core)', variant: '12' },
      { id: '0580_s24_qp_21', label: 'Paper 2 (Extended)', variant: '21' },
      { id: '0580_s24_qp_22', label: 'Paper 2 (Extended)', variant: '22' },
      { id: '0580_s24_qp_31', label: 'Paper 3 (Core)', variant: '31' },
      { id: '0580_s24_qp_32', label: 'Paper 3 (Core)', variant: '32' },
      { id: '0580_s24_qp_41', label: 'Paper 4 (Extended)', variant: '41' },
      { id: '0580_s24_qp_42', label: 'Paper 4 (Extended)', variant: '42' },
    ],
  },
];

export default function MathsPage() {
  const { isAdmin } = useAuth();
  const [selectedPaper, setSelectedPaper] = useState('0580_m25_qp_12');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSeries, setExpandedSeries] = useState<Record<string, boolean>>({
    booklets: true,
  });
  const [solutionKey, setSolutionKey] = useState(0);

  const filteredSets = paperSets
    .map(set => ({
      ...set,
      papers: set.papers.filter(p =>
        p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(set => set.papers.length > 0);

  const toggleSeries = (series: string) => {
    setExpandedSeries(prev => ({ ...prev, [series]: !prev[series] }));
  };

  const selectedPaperData = paperSets
    .flatMap(s => s.papers)
    .find(p => p.id === selectedPaper);
  const selectedSet = paperSets.find(set =>
    set.papers.some(p => p.id === selectedPaper)
  ) || paperSets[1];
  const isLocal = selectedSet?.local || selectedPaperData?.local;
  const pdfUrl = isLocal
    ? `/maths/${selectedPaper}.pdf`
    : `/api/maths-pdf?url=${encodeURIComponent(`${BASE_URL}/${selectedSet.series}/${selectedPaper}.pdf`)}`;
  const lumiexamsUrl = selectedSet.lumiexamsSlug
    ? `https://lumiexams.com/igcse/mathematics-0580/${selectedSet.year}/${selectedSet.lumiexamsSlug}/`
    : null;
  const directPdfUrl = isLocal
    ? `/maths/${selectedPaper}.pdf`
    : `${BASE_URL}/${selectedSet.series}/${selectedPaper}.pdf`;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <GraduationCap className="h-4 w-4" />
            IGCSE Mathematics 0580
          </motion.div>
          <motion.h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Maths Past Papers
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Practice with real IGCSE Mathematics 0580 question papers. View online or download for offline study.
          </motion.p>
        </motion.div>
      </section>

      <section className="flex-1 bg-gray-50 py-8 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar - Paper List */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search papers..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="max-h-[70vh] space-y-2 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                  {filteredSets.map(set => (
                    <div key={set.series}>
                      <button
                        onClick={() => toggleSeries(set.series)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                      >
                        <span className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-purple-500" />
                          {set.label}
                        </span>
                        {expandedSeries[set.series] ? (
                          <ChevronUp className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        )}
                      </button>

                      {expandedSeries[set.series] && (
                        <div className="ml-2 mt-1 space-y-0.5 border-l-2 border-purple-200 pl-2 dark:border-purple-800">
                          {set.papers.map(paper => (
                            <button
                              key={paper.id}
                              onClick={() => setSelectedPaper(paper.id)}
                              className={cn(
                                'flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-xs transition-colors',
                                selectedPaper === paper.id
                                  ? 'bg-purple-100 font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                              )}
                            >
                              <FileText className="h-3 w-3 shrink-0" />
                              <span className="truncate">{paper.id}</span>
                              <Badge variant="outline" className="ml-auto shrink-0 text-[10px]">
                                {paper.label}
                              </Badge>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main - PDF Viewer */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedPaper}.pdf
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedPaperData?.msId && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedPaper(selectedPaperData.msId!)}
                      >
                        <BookOpen className="mr-1.5 h-4 w-4" />
                        View Solutions
                      </Button>
                    )}
                    {selectedPaper.endsWith('_ms_12') && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const qpId = selectedPaper.replace('_ms_', '_qp_');
                          setSelectedPaper(qpId);
                        }}
                      >
                        <FileText className="mr-1.5 h-4 w-4" />
                        View Questions
                      </Button>
                    )}
                    <a
                      href={directPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-1.5 h-4 w-4" />
                        Open
                      </Button>
                    </a>
                    <a
                      href={directPdfUrl}
                      download={`${selectedPaper}.pdf`}
                    >
                      <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500">
                        <Download className="mr-1.5 h-4 w-4" />
                        Download
                      </Button>
                    </a>
              </div>

              <div className="mt-4 space-y-4">
                <StepByStepSolution key={solutionKey} paperId={selectedPaper} />
                {isAdmin && (
                  <NewSolutionForm
                    paperId={selectedPaper}
                    onSaved={() => setSolutionKey(k => k + 1)}
                  />
                )}
              </div>
            </div>

                <div className="h-[85vh] w-full">
                  <object
                    data={pdfUrl}
                    type="application/pdf"
                    className="h-full w-full"
                  >
                    <p className="flex h-full items-center justify-center text-gray-500">
                      PDF cannot be displayed inline.{' '}
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-blue-600 underline hover:text-blue-800"
                      >
                        Open PDF directly
                      </a>
                    </p>
                  </object>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {isLocal ? (
                    <>
                      <strong>📖 Study Mode:</strong> Work through the question paper, then click <strong>"View Solutions"</strong> to check your answers against the mark scheme.
                    </>
                  ) : (
                    <>
                      <strong>Tip:</strong> For detailed topic breakdowns, mark schemes, and examiner reports, visit{' '}
                      {lumiexamsUrl && (
                        <a
                          href={lumiexamsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-amber-600"
                        >
                          Lumi Exams
                        </a>
                      )}
                      . Practice under timed conditions for best results.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
