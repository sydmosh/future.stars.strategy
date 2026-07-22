'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronUp,
  Save,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Edit3,
  Lock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { fetchSolutions, saveSolution, updateSolution, deleteSolution } from '@/lib/db';
import toast from 'react-hot-toast';
import type { Solution, SolutionStep } from '@/types';

interface Props {
  paperId: string;
}

export function StepByStepSolution({ paperId }: Props) {
  const { user, isAdmin } = useAuth();
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [editing, setEditing] = useState<Record<string, boolean>>({});
  const [editData, setEditData] = useState<Record<string, { title: string; steps: SolutionStep[] }>>({});

  useEffect(() => {
    if (!paperId) { setLoading(false); return; }
    loadSolutions();
  }, [paperId]);

  const loadSolutions = async () => {
    setLoading(true);
    const data = await fetchSolutions(paperId);
    setSolutions(data.sort((a, b) => a.questionNumber - b.questionNumber));
    setLoading(false);
  };

  const startEdit = (solution: Solution) => {
    setEditing(prev => ({ ...prev, [solution.id]: true }));
    setEditData(prev => ({
      ...prev,
      [solution.id]: { title: solution.title, steps: [...solution.steps] },
    }));
  };

  const cancelEdit = (id: string) => {
    setEditing(prev => ({ ...prev, [id]: false }));
  };

  const handleSave = async (solution: Solution) => {
    const data = editData[solution.id];
    if (!data) return;
    await updateSolution(solution.id, { title: data.title, steps: data.steps });
    toast.success('Solution saved');
    setEditing(prev => ({ ...prev, [solution.id]: false }));
    loadSolutions();
  };

  const addStep = (solutionId: string) => {
    setEditData(prev => {
      const curr = prev[solutionId];
      if (!curr) return prev;
      return {
        ...prev,
        [solutionId]: {
          ...curr,
          steps: [...curr.steps, { stepNumber: curr.steps.length + 1, text: '' }],
        },
      };
    });
  };

  const removeStep = (solutionId: string, index: number) => {
    setEditData(prev => {
      const curr = prev[solutionId];
      if (!curr) return prev;
      const steps = curr.steps.filter((_, i) => i !== index).map((s, i) => ({ ...s, stepNumber: i + 1 }));
      return { ...prev, [solutionId]: { ...curr, steps } };
    });
  };

  const updateStep = (solutionId: string, index: number, text: string) => {
    setEditData(prev => {
      const curr = prev[solutionId];
      if (!curr) return prev;
      const steps = [...curr.steps];
      steps[index] = { ...steps[index], text };
      return { ...prev, [solutionId]: { ...curr, steps } };
    });
  };

  const handleDelete = async (id: string) => {
    await deleteSolution(id);
    toast.success('Solution deleted');
    loadSolutions();
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-3 rounded-xl border border-gray-200 p-6 dark:border-gray-700">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-12 rounded-lg bg-gray-100 dark:bg-gray-800" />
        ))}
      </div>
    );
  }

  if (solutions.length === 0 && !isAdmin) {
    return null;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          Step-by-Step Solutions
        </h3>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {solutions.map(solution => {
          const isEditing = editing[solution.id];
          const data = editData[solution.id] || solution;
          const isExpanded = expandedQuestion === solution.questionNumber;

          return (
            <div key={solution.id}>
              <button
                onClick={() => setExpandedQuestion(isExpanded ? null : solution.questionNumber)}
                className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
                    {solution.questionNumber}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {solution.title}
                  </span>
                </span>
                <div className="flex items-center gap-2">
                  {isAdmin && !isEditing && (
                    <button
                      onClick={e => { e.stopPropagation(); startEdit(solution); }}
                      className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                    </button>
                  )}
                  {isExpanded ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 px-4 pb-4">
                      {isEditing ? (
                        <div className="space-y-3">
                          <Input
                            value={data.title}
                            onChange={e => setEditData(prev => ({
                              ...prev,
                              [solution.id]: { ...prev[solution.id], title: e.target.value },
                            }))}
                            placeholder="Question title"
                            className="text-sm"
                          />

                          {data.steps.map((step, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                                {step.stepNumber}
                              </span>
                              <div className="flex-1">
                                <Textarea
                                  value={step.text}
                                  onChange={e => updateStep(solution.id, idx, e.target.value)}
                                  placeholder={`Step ${step.stepNumber}`}
                                  rows={2}
                                  className="text-sm"
                                />
                              </div>
                              <button
                                onClick={() => removeStep(solution.id, idx)}
                                className="mt-2 rounded p-1 text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          ))}

                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={() => addStep(solution.id)}>
                              <Plus className="mr-1 h-3.5 w-3.5" />
                              Add Step
                            </Button>
                            <Button size="sm" onClick={() => handleSave(solution)}>
                              <Save className="mr-1 h-3.5 w-3.5" />
                              Save
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => cancelEdit(solution.id)}>
                              Cancel
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(solution.id)} className="ml-auto text-red-500 hover:text-red-700">
                              <Trash2 className="mr-1 h-3.5 w-3.5" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {data.steps.map(step => (
                            <div key={step.stepNumber} className="flex gap-3">
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                                {step.stepNumber}
                              </span>
                              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                {step.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {solutions.length === 0 && isAdmin && (
        <div className="p-6 text-center text-sm text-gray-500">
          No solutions yet. Solutions will be added by the admin.
        </div>
      )}
    </div>
  );
}
