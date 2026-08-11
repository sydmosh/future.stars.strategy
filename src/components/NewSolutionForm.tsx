'use client';

import { useState } from 'react';
import { Plus, Trash2, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { saveSolution } from '@/lib/db';
import toast from 'react-hot-toast';
import type { SolutionStep } from '@/types';

interface Props {
  paperId: string;
  onSaved: () => void;
}

export function NewSolutionForm({ paperId, onSaved }: Props) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [questionNumber, setQuestionNumber] = useState('');
  const [title, setTitle] = useState('');
  const [steps, setSteps] = useState<SolutionStep[]>([{ stepNumber: 1, text: '' }]);
  const [saving, setSaving] = useState(false);

  const addStep = () => {
    setSteps(prev => [...prev, { stepNumber: prev.length + 1, text: '' }]);
  };

  const removeStep = (index: number) => {
    setSteps(prev => prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, stepNumber: i + 1 })));
  };

  const updateStep = (index: number, text: string) => {
    setSteps(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], text };
      return updated;
    });
  };

  const handleSave = async () => {
    if (!questionNumber || !title || steps.some(s => !s.text.trim())) {
      toast.error('Please fill in all fields');
      return;
    }
    setSaving(true);
    await saveSolution({
      paperId,
      questionNumber: parseInt(questionNumber),
      title,
      steps: steps.filter(s => s.text.trim()),
      createdBy: user?.uid || '',
    });
    toast.success('Solution added');
    setOpen(false);
    setQuestionNumber('');
    setTitle('');
    setSteps([{ stepNumber: 1, text: '' }]);
    onSaved();
    setSaving(false);
  };

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} className="w-full">
        <Plus className="mr-1.5 h-4 w-4" />
        Add Solution
      </Button>
    );
  }

  return (
    <div className="rounded-xl border border-dashed border-indigo-300 bg-indigo-50 p-4 dark:border-indigo-700 dark:bg-indigo-900/20">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">New Solution</h4>
        <button onClick={() => setOpen(false)} className="rounded p-1 text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            value={questionNumber}
            onChange={e => setQuestionNumber(e.target.value)}
            placeholder="Q no."
            className="w-20 text-sm"
          />
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Question title (e.g. Simplify the expression)"
            className="flex-1 text-sm"
          />
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-2">
            <span className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
              {step.stepNumber}
            </span>
            <div className="flex-1">
              <Textarea
                value={step.text}
                onChange={e => updateStep(idx, e.target.value)}
                placeholder={`Step ${step.stepNumber}`}
                rows={2}
                className="text-sm"
              />
            </div>
            {steps.length > 1 && (
              <button onClick={() => removeStep(idx)} className="mt-2 rounded p-1 text-red-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20">
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={addStep}>
            <Plus className="mr-1 h-3.5 w-3.5" />
            Step
          </Button>
          <Button size="sm" onClick={handleSave} disabled={saving}>
            <Save className="mr-1 h-3.5 w-3.5" />
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}
