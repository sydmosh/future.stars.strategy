'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { saveChallengeData, fetchChallengeData } from '@/lib/db';
import { Check, ArrowRight, Star, BookOpen, Target, Brain, Award, Heart, Zap, Loader2, LogIn } from 'lucide-react';
import type { ChallengeDay } from '@/types';

const MOTIVATIONAL_QUOTES = [
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Your only limit is your mind.", author: "Unknown" },
  { text: "Small daily improvements lead to stunning results.", author: "Unknown" },
  { text: "You don't have to be extreme, just consistent.", author: "Unknown" },
];

const WEEKLY_GOALS = [
  {
    week: 1, title: "Preparation & Identifying Weak Areas",
    goals: ["Review your syllabus and identify difficult topics", "Complete a diagnostic past paper", "List your top 5 weakest topics", "Gather all study materials and past papers", "Create a realistic study timetable", "Set up a dedicated study space"],
    quote: "The first step towards success is knowing where you stand.",
  },
  {
    week: 2, title: "Strengthening Understanding",
    goals: ["Focus deeply on your identified weak areas", "Study each weak topic using notes and videos", "Practice at least 10 questions per weak topic", "Explain each concept to someone else", "Complete one full past paper and mark it", "Review every mistake you made"],
    quote: "Knowledge is power, but applied knowledge is transformation.",
  },
  {
    week: 3, title: "Examination Practice Under Timed Conditions",
    goals: ["Complete 3+ past papers under timed conditions", "Simulate real exam conditions", "Practice time management for each section", "Analyze your scores and track improvement", "Focus on high-mark topics and patterns", "Work on exam technique"],
    quote: "Pressure makes diamonds. Keep going.",
  },
  {
    week: 4, title: "Final Revision & Confidence Building",
    goals: ["Review summarized notes for all subjects", "Complete final past papers aiming for target score", "Focus on mental and physical preparation", "Get enough sleep and maintain healthy routine", "Practice positive affirmations", "Trust your preparation and stay calm"],
    quote: "Confidence comes from preparation. You are ready.",
  },
];

const DAILY_TASKS = ["Studied today", "Completed past paper questions", "Corrected mistakes", "Revised difficult topic", "Asked questions", "Reviewed today's work", "Prepared for tomorrow"];

const REFLECTION_QUESTIONS = ["What did I improve this week?", "What challenged me?", "Which subject needs more attention?", "What will I do better next week?"];

const INITIAL_PROGRESS: ChallengeDay[] = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1, hours: '', subject: '', pastPaper: '', score: '', lesson: '', mentorNotes: '',
}));

export default function ChallengePage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [dailyChecklist, setDailyChecklist] = useState<Record<string, boolean>>({});
  const [weeklyGoals, setWeeklyGoals] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState<ChallengeDay[]>(INITIAL_PROGRESS);
  const [reflections, setReflections] = useState<string[]>(Array(16).fill(''));
  const [studentName, setStudentName] = useState('');
  const [goal, setGoal] = useState('');
  const [mentorNotes, setMentorNotes] = useState({
    attendance: '', discipline: '', effort: '', improvement: '', confidence: '', nextFocus: '', comments: '',
  });
  const [activeTab, setActiveTab] = useState('welcome');
  const [dataLoading, setDataLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push('/login');
      return;
    }
    loadData();
  }, [user, authLoading]);

  const loadData = async () => {
    setDataLoading(true);
    const data = await fetchChallengeData(user!.uid);
    if (data) {
      if (data.dailyChecklist) setDailyChecklist(data.dailyChecklist);
      if (data.weeklyGoals) setWeeklyGoals(data.weeklyGoals);
      if (data.progress && data.progress.length === 30) setProgress(data.progress);
      if (data.reflections && data.reflections.length === 16) setReflections(data.reflections);
      if (data.goal !== undefined) setGoal(data.goal);
      if (data.studentName !== undefined) setStudentName(data.studentName);
      if (data.mentorNotes) setMentorNotes(data.mentorNotes);
    }
    setDataLoading(false);
  };

  const autoSave = useCallback(() => {
    if (!user) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      setSaving(true);
      await saveChallengeData(user.uid, {
        goal,
        studentName,
        dailyChecklist,
        weeklyGoals,
        progress,
        reflections,
        mentorNotes,
      });
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 1000);
  }, [user, goal, studentName, dailyChecklist, weeklyGoals, progress, reflections, mentorNotes]);

  useEffect(() => {
    if (!authLoading && user) autoSave();
  }, [goal, studentName, dailyChecklist, weeklyGoals, progress, reflections, mentorNotes]);

  const toggleDaily = (key: string) => {
    setDailyChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleWeekly = (key: string) => {
    setWeeklyGoals(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateProgress = (day: number, field: string, value: string) => {
    setProgress(prev => prev.map(p => p.day === day ? { ...p, [field]: value } : p));
  };

  const updateReflection = (weekIdx: number, questionIdx: number, value: string) => {
    const idx = weekIdx * 4 + questionIdx;
    setReflections(prev => { const next = [...prev]; next[idx] = value; return next; });
  };

  const completedDays = progress.filter(p => p.hours && p.subject).length;
  const weeklyDone = Object.values(weeklyGoals).filter(Boolean).length;
  const totalWeeklyGoals = WEEKLY_GOALS.reduce((acc, w) => acc + w.goals.length, 0);

  if (authLoading || dataLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-600" />
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Loading your challenge...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <LogIn className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Sign in Required</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Please sign in to access and track your 30-Day LGCSE Success Challenge.</p>
          <Button onClick={() => router.push('/login')} className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold">
            Sign In
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'welcome', label: 'Welcome', icon: Star },
    { id: 'goals', label: 'My Goals', icon: Target },
    { id: 'weekly', label: 'Weekly Plan', icon: BookOpen },
    { id: 'tracker', label: 'Progress', icon: Brain },
    { id: 'reflection', label: 'Reflection', icon: Award },
    { id: 'mentor', label: 'Mentor Review', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            30-Day LGCSE Challenge
          </h1>
          <div className="flex items-center gap-3">
            {saving && (
              <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Loader2 className="h-3 w-3 animate-spin" /> Saving...
              </span>
            )}
            {saved && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                <Check className="h-3 w-3" /> Saved
              </motion.span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-8 flex flex-wrap gap-2" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Progress bar */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Overall Progress</span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{completedDays}/30 days</span>
          </div>
          <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${(completedDays / 30) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{Math.round((completedDays / 30) * 100)}% complete</span>
            <span>{weeklyDone}/{totalWeeklyGoals} weekly goals</span>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {activeTab === 'welcome' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 text-center text-white shadow-xl sm:p-12">
                <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">30-Day LGCSE Success Challenge</h1>
                <p className="text-xl text-blue-100/90">Small Daily Steps, Big Examination Results</p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Welcome to Your 30-Day Journey</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>The next 30 days are about transforming how you prepare for your LGCSE examinations. You do not need to be perfect — you just need to be consistent. Small, daily actions compound into remarkable results.</p>
                  <p>This challenge focuses on what truly matters: understanding key concepts, practicing with past papers, and building the confidence to walk into that examination room knowing you have done your best.</p>
                  <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 italic dark:border-blue-400 dark:bg-blue-900/30 dark:text-blue-200">"Success is the sum of small efforts repeated day in and day out." — Robert Collier</blockquote>
                </div>
              </div>

              {/* Commitment */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
                  <Target className="h-6 w-6 text-blue-600" /> My Examination Goal
                </h2>
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">"I commit to giving my best effort every day..."</p>
                  <Textarea value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Write your personal commitment here..." rows={3} className="mb-3 rounded-xl border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-900/80" />
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Input value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Your full name" className="h-9 w-44 text-xs" />
                    <span>— {new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* 30-Day Goals */}
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
                  <Star className="h-6 w-6 text-yellow-500" /> My 30-Day Goals
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Clock, text: "Study for 3–4 focused hours daily", color: "blue" },
                    { icon: FileText, text: "Complete at least one past paper or section each day", color: "indigo" },
                    { icon: Target, text: "Focus on high-mark and frequently tested topics", color: "purple" },
                    { icon: RefreshCw, text: "Correct mistakes after every practice session", color: "green" },
                    { icon: HelpCircle, text: "Ask for help whenever something is not understood", color: "orange" },
                    { icon: SmartphoneOff, text: "Reduce distractions during study time", color: "red" },
                    { icon: Moon, text: "Sleep well and maintain a healthy routine", color: "teal" },
                    { icon: TrendingUp, text: "Build confidence every single day", color: "pink" },
                  ].map((item, i) => (
                    <div key={i} className={cn('flex items-start gap-3 rounded-xl p-4 transition-colors', `bg-${item.color}-50 dark:bg-${item.color}-900/20`)}>
                      <item.icon className={cn('mt-0.5 h-5 w-5 shrink-0', `text-${item.color}-600 dark:text-${item.color}-400`)} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button onClick={() => setActiveTab('goals')} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25">
                  Start Planning My Goals <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-8 text-center text-white shadow-xl sm:p-12">
                <h2 className="mb-2 text-3xl font-extrabold">My Weekly Goals</h2>
                <p className="text-purple-100/90">Check off each goal as you complete it</p>
              </div>
              {WEEKLY_GOALS.map((week, wIdx) => (
                <motion.div key={wIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: wIdx * 0.1 }} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-lg font-bold text-white">{wIdx + 1}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Week {wIdx + 1}: {week.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {week.goals.map((g, gIdx) => {
                      const key = `w${wIdx}-g${gIdx}`;
                      return (
                        <label key={gIdx} className={cn('flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-all', weeklyGoals[key] ? 'bg-green-50 dark:bg-green-900/30' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-700/50')}>
                          <input type="checkbox" checked={!!weeklyGoals[key]} onChange={() => toggleWeekly(key)} className="mt-0.5 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className={cn('text-sm', weeklyGoals[key] ? 'text-green-700 line-through dark:text-green-300' : 'text-gray-700 dark:text-gray-300')}>{g}</span>
                        </label>
                      );
                    })}
                  </div>
                  <blockquote className="mt-4 border-l-4 border-purple-500 bg-purple-50 p-3 italic text-purple-800 dark:border-purple-400 dark:bg-purple-900/30 dark:text-purple-200">"{week.quote}"</blockquote>
                </motion.div>
              ))}
              <div className="text-center">
                <Button onClick={() => setActiveTab('weekly')} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25">
                  View Daily Checklist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'weekly' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 p-8 text-center text-white shadow-xl sm:p-12">
                <h2 className="mb-2 text-3xl font-extrabold">Daily Checklist</h2>
                <p className="text-green-100/90">Track your daily study habits</p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Today's Tasks</h3>
                <div className="space-y-4">
                  {DAILY_TASKS.map((task, i) => (
                    <label key={i} className={cn('flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all', dailyChecklist[task] ? 'bg-green-50 dark:bg-green-900/30' : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-700/50')}>
                      <div className={cn('flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all', dailyChecklist[task] ? 'border-green-500 bg-green-500' : 'border-gray-300 dark:border-gray-600')}>
                        {dailyChecklist[task] && <Check className="h-4 w-4 text-white" />}
                      </div>
                      <input type="checkbox" checked={!!dailyChecklist[task]} onChange={() => toggleDaily(task)} className="sr-only" />
                      <span className={cn('font-medium', dailyChecklist[task] ? 'text-green-700 line-through dark:text-green-300' : 'text-gray-700 dark:text-gray-300')}>{task}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-900 dark:text-white">{Object.values(dailyChecklist).filter(Boolean).length}/{DAILY_TASKS.length}</span> tasks completed today
                </div>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Recommended Daily Schedule</h3>
                <div className="space-y-2">
                  {[
                    { time: "30 min", task: "Review yesterday's mistakes", period: "Morning" },
                    { time: "1 hour", task: "Study your weakest subject", period: "Morning" },
                    { time: "30 min", task: "Past paper questions", period: "Afternoon" },
                    { time: "1 hour", task: "Study another subject", period: "Afternoon" },
                    { time: "30 min", task: "Correct mistakes from practice", period: "Afternoon" },
                    { time: "30 min", task: "Review today's learning", period: "Evening" },
                    { time: "15 min", task: "Plan tomorrow's study", period: "Evening" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-xl bg-gray-50 p-3 dark:bg-gray-900/50">
                      <span className="w-16 text-center text-xs font-semibold text-blue-600 dark:text-blue-400">{item.period}</span>
                      <span className="w-20 text-center text-sm font-bold text-gray-900 dark:text-white">{item.time}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{item.task}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Total: ~4 hours and 15 minutes. Adjust based on your schedule.</p>
              </div>
              <div className="text-center">
                <Button onClick={() => setActiveTab('tracker')} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25">
                  Track My Progress <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'tracker' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 text-center text-white shadow-xl sm:p-12">
                <h2 className="mb-2 text-3xl font-extrabold">30-Day Progress Tracker</h2>
                <p className="text-orange-100/90">Record your daily study activity</p>
              </div>
              <div className="overflow-x-auto rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800 sm:p-6">
                <div className="min-w-[800px]">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        {["Day", "Hours", "Subject", "Paper", "Score%", "Lesson Learned", "Mentor Notes"].map(h => (
                          <th key={h} className="whitespace-nowrap px-2 py-3 font-bold text-gray-900 dark:text-white">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {progress.map((row, i) => (
                        <tr key={i} className={cn('border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50', row.hours && 'bg-green-50/50 dark:bg-green-900/10')}>
                          <td className="px-2 py-2 font-semibold text-gray-900 dark:text-white whitespace-nowrap">Day {row.day}</td>
                          <td className="px-2 py-2"><Input type="number" min="0" max="12" step="0.5" value={row.hours} onChange={(e) => updateProgress(row.day, 'hours', e.target.value)} placeholder="-" className="h-8 w-14 text-xs" /></td>
                          <td className="px-2 py-2"><Input value={row.subject} onChange={(e) => updateProgress(row.day, 'subject', e.target.value)} placeholder="Subject" className="h-8 w-24 text-xs" /></td>
                          <td className="px-2 py-2"><Input value={row.pastPaper} onChange={(e) => updateProgress(row.day, 'pastPaper', e.target.value)} placeholder="Paper" className="h-8 w-20 text-xs" /></td>
                          <td className="px-2 py-2"><Input type="number" min="0" max="100" value={row.score} onChange={(e) => updateProgress(row.day, 'score', e.target.value)} placeholder="%" className="h-8 w-14 text-xs" /></td>
                          <td className="px-2 py-2"><Input value={row.lesson} onChange={(e) => updateProgress(row.day, 'lesson', e.target.value)} placeholder="What I learned" className="h-8 w-28 text-xs" /></td>
                          <td className="px-2 py-2"><Input value={row.mentorNotes} onChange={(e) => updateProgress(row.day, 'mentorNotes', e.target.value)} placeholder="Notes" className="h-8 w-24 text-xs" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <blockquote className="border-l-4 border-orange-500 bg-orange-50 p-4 italic text-orange-800 dark:border-orange-400 dark:bg-orange-900/30 dark:text-orange-200">"It does not matter how slowly you go as long as you do not stop." — Confucius</blockquote>
              <div className="text-center">
                <Button onClick={() => setActiveTab('reflection')} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25">
                  Reflect on Your Progress <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 p-8 text-center text-white shadow-xl sm:p-12">
                <h2 className="mb-2 text-3xl font-extrabold">Weekly Reflection</h2>
                <p className="text-pink-100/90">Pause, reflect, and adjust your strategy</p>
              </div>
              {WEEKLY_GOALS.map((week, wIdx) => (
                <motion.div key={wIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: wIdx * 0.1 }} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-sm font-bold text-white">{wIdx + 1}</span>
                    End of Week {wIdx + 1} Reflection
                  </h3>
                  <div className="space-y-5">
                    {REFLECTION_QUESTIONS.map((q, qIdx) => (
                      <div key={qIdx}>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">{q}</label>
                        <Textarea value={reflections[wIdx * 4 + qIdx]} onChange={(e) => updateReflection(wIdx, qIdx, e.target.value)} placeholder="Write your reflection here..." rows={2} className="rounded-xl border-gray-200 dark:border-gray-700" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 p-4 dark:from-pink-900/20 dark:to-rose-900/20">
                    <p className="text-sm font-medium text-pink-800 dark:text-pink-200">💡 Tip: Be honest with yourself. Reflection is how you grow.</p>
                  </div>
                </motion.div>
              ))}
              <div className="text-center">
                <Button onClick={() => setActiveTab('mentor')} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25">
                  View Mentor Review <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'mentor' && (
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 p-8 text-center text-white shadow-xl sm:p-12">
                <h2 className="mb-2 text-3xl font-extrabold">Mentor Review</h2>
                <p className="text-teal-100/90">For mentor assessment and feedback</p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-6 flex items-center gap-3">
                  <Heart className="h-6 w-6 text-teal-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Student Assessment</h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { label: "Attendance", key: "attendance", options: ["Excellent", "Good", "Average", "Needs Improvement"] },
                    { label: "Discipline", key: "discipline", options: ["Excellent", "Good", "Average", "Needs Improvement"] },
                    { label: "Effort", key: "effort", options: ["Outstanding", "Very Good", "Good", "Fair"] },
                    { label: "Improvement", key: "improvement", options: ["Significant", "Moderate", "Slight", "No Change"] },
                    { label: "Confidence", key: "confidence", options: ["Very High", "High", "Building", "Low"] },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">{field.label}</label>
                      <select
                        value={mentorNotes[field.key as keyof typeof mentorNotes]}
                        onChange={(e) => setMentorNotes(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-900"
                      >
                        <option value="">Select...</option>
                        {field.options.map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">Next Week's Focus</label>
                    <Textarea value={mentorNotes.nextFocus} onChange={(e) => setMentorNotes(prev => ({ ...prev, nextFocus: e.target.value }))} placeholder="What should the student focus on next week?" rows={2} className="rounded-xl border-gray-200 dark:border-gray-700" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">Overall Comments</label>
                    <Textarea value={mentorNotes.comments} onChange={(e) => setMentorNotes(prev => ({ ...prev, comments: e.target.value }))} placeholder="General feedback and encouragement..." rows={3} className="rounded-xl border-gray-200 dark:border-gray-700" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button onClick={() => window.print()} variant="outline" className="rounded-xl border-2 border-gray-300 px-8 py-4 text-sm font-medium dark:border-gray-600">
                  Print Challenge Workbook
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function FileText(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>; }
function RefreshCw(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>; }
function HelpCircle(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>; }
function SmartphoneOff(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>; }
function Moon(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>; }
function TrendingUp(props: React.SVGProps<SVGSVGElement>) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>; }
