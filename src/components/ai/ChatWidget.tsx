'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { X, Trash2, Bot, Maximize2, Minimize2, Presentation, Sparkles, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '@/contexts/ChatContext';
import { type Subject } from '@/lib/ai/prompts';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SubjectSelector from './SubjectSelector';
import TypingIndicator from './TypingIndicator';
import VoiceSettings, { type VoiceConfig } from './VoiceSettings';
import VisualBlackboard from './VisualBlackboard';
import SuggestedQuestions from './SuggestedQuestions';
import SessionManager from './SessionManager';
import { cn } from '@/lib/utils';

const SUBJECT_TOPICS: Record<Subject, { title: string; prompt: string; icon: string }[]> = {
  biology: [
    { title: 'Plant vs Animal Cells (with Diagram)', prompt: 'Explain the difference between plant cells and animal cells. Use a relatable human analogy, draw a detailed side-by-side SVG diagram on the Virtual Blackboard, reference Chapter 1 of the Biology Workbook, and provide a practice question.', icon: '🧬' },
    { title: 'Photosynthesis & Leaf Structure', prompt: 'Explain photosynthesis and leaf anatomy step by step with a clear human analogy, SVG diagram on the blackboard, and textbook reference.', icon: '🍃' },
    { title: 'Human Blood Circulation System', prompt: 'Explain the double circulation system of the human heart with an SVG heart diagram on the blackboard.', icon: '🫀' },
  ],
  maths: [
    { title: 'Geometric Constructions (Booklet 3)', prompt: 'Show me question 1 from booklet 3 — construct triangle ABC. Explain how to use a ruler and protractor step by step, and show the booklet diagram on the blackboard.', icon: '📐' },
    { title: 'Coordinate Graphs (Booklet 3)', prompt: 'Show me question 6 from booklet 3 — graph y = 2x - 1. Explain how to create a table of values and plot the line, and show the booklet diagram on the blackboard.', icon: '📈' },
    { title: 'Transformations (Booklet 3)', prompt: 'Show me question 8 from booklet 3 — reflect the shape in the mirror line x = 2. Explain reflection step by step and show the booklet diagram on the blackboard.', icon: '🔄' },
  ],
  accounting: [
    { title: 'Double Entry & T-Accounts', prompt: 'Explain the accounting equation and debit/credit rules for T-accounts with a scale analogy, SVG ledger diagram, and reference to Chapter 1 of the LGCSE Accounting Workbook.', icon: '⚖️' },
    { title: 'Trial Balance & Error Correction', prompt: 'Explain how to prepare a Trial Balance and correct errors that do not affect equality.', icon: '📑' },
    { title: 'Bank Reconciliation Statement', prompt: 'Explain how to perform a bank reconciliation statement step by step with worked examples.', icon: '🏦' },
  ],
  physics: [
    { title: 'Newton\'s Laws & Force Vectors', prompt: 'Explain Newton\'s three laws of motion with tug-of-war human analogies and an SVG force vector diagram on the blackboard.', icon: '🍎' },
    { title: 'Electric Circuits & Ohm\'s Law', prompt: 'Explain Ohm\'s Law V = IR and series vs parallel circuits with a clear circuit diagram SVG on the blackboard.', icon: '⚡' },
    { title: 'Waves & Spectrum Analysis', prompt: 'Explain transverse vs longitudinal waves and the wave equation v = fλ with a wave SVG diagram.', icon: '🌊' },
  ],
  general: [
    { title: 'Explore LGCSE Study Materials', prompt: 'Give me an overview of the LGCSE study materials available on Mosh Books and how I can prepare for exams effectively.', icon: '📚' },
    { title: 'Top Study & Revision Techniques', prompt: 'What are the top study techniques for mastering LGCSE Maths, Biology, Physics, and Accounting?', icon: '🎯' },
  ],
};

export default function ChatWidget() {
  const {
    isOpen,
    messages,
    subject,
    isLoading,
    error,
    toggleChat,
    closeChat,
    setSubject,
    sendMessage,
    clearMessages,
    clearError,
    createNewSession,
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'blackboard'>('chat');
  const [hasBlackboardContent, setHasBlackboardContent] = useState(false);
  const prevMsgCountRef = useRef(0);
  const [voiceConfig, setVoiceConfig] = useState<VoiceConfig>({
    voiceURI: '',
    rate: 1.0,
    pitch: 1.0,
    autoRead: false,
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mosh_tutor_voice_config');
      if (saved) {
        try {
          setVoiceConfig(JSON.parse(saved));
        } catch {}
      }
    }
  }, []);

  const handleVoiceConfigChange = (newConfig: VoiceConfig) => {
    setVoiceConfig(newConfig);
    localStorage.setItem('mosh_tutor_voice_config', JSON.stringify(newConfig));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) {
      window.speechSynthesis.cancel();
    }
  }, [isOpen]);

  const handleBlackboardContent = useCallback((has: boolean) => {
    setHasBlackboardContent(has);
  }, []);

  // Auto-expand blackboard as soon as the AI sends ANY message
  useEffect(() => {
    const hasAssistantMsg = messages.some(m => m.role === 'assistant');
    if (hasAssistantMsg && !isExpanded) {
      setIsExpanded(true);
    }
  }, [messages]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isLoading && messages.length > prevMsgCountRef.current) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg?.role === 'assistant') {
        setShowSuggestions(true);
      }
    } else {
      setShowSuggestions(false);
    }
    prevMsgCountRef.current = messages.length;
  }, [messages, isLoading]);

  const handleSubjectChange = (newSubject: Subject) => {
    setSubject(newSubject);
    setShowSuggestions(false);
    clearError();
  };

  const handleSendWithSuggestions = (content: string) => {
    setShowSuggestions(false);
    sendMessage(content);
  };

  const lastAssistantMsg = messages.filter(m => m.role === 'assistant').slice(-1)[0];

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all',
          'bg-gradient-to-br from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700',
          'hover:shadow-xl hover:scale-105 active:scale-95',
          isOpen && 'rotate-0'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open AI tutor'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bot className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden',
              'w-[calc(100vw-48px)] sm:w-[400px] h-[500px] sm:h-[600px]',
              'rounded-2xl border border-gray-205 bg-white shadow-2xl',
              'dark:border-gray-700 dark:bg-gray-900',
              'max-h-[calc(100vh-140px)] transition-all duration-300',
              isExpanded && 'sm:w-[1000px] md:flex-row'
            )}
          >
            {/* Left Panel: Chat Core */}
            <div className={cn(
              'flex flex-col h-full flex-1',
              isExpanded && 'md:max-w-[400px] md:border-r border-gray-200 dark:border-gray-700'
            )}>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">AI Study Assistant</h3>
                    <p className="text-xs text-white/70">
                      {isLoading ? 'Thinking...' : 'Ask me anything'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {/* Session Manager */}
                  <SessionManager />

                  <button
                    onClick={() => {
                      createNewSession();
                      clearError();
                    }}
                    className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    title="New conversation"
                  >
                    <Plus className="h-4 w-4" />
                  </button>

                  {/* Voice Options */}
                  <VoiceSettings config={voiceConfig} onChange={handleVoiceConfigChange} />
                  
                  {/* Expand/Collapse Toggle */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white hidden sm:block"
                    title={isExpanded ? "Collapse Blackboard" : "Expand to Side-by-Side Blackboard"}
                  >
                    {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </button>

                  <button
                    onClick={clearMessages}
                    className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    title="Clear chat"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:hidden"
                    title="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Subject Selector */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <SubjectSelector value={subject} onChange={handleSubjectChange} />
              </div>

              {/* Mobile Tab Swapper */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 sm:hidden">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={cn(
                    'flex-1 py-2 text-center text-xs font-semibold border-b-2 transition-all',
                    activeTab === 'chat' 
                      ? 'border-indigo-600 text-indigo-650 dark:text-indigo-400' 
                      : 'border-transparent text-gray-500'
                  )}
                >
                  Chat
                </button>
                <button
                  onClick={() => setActiveTab('blackboard')}
                  className={cn(
                    'flex-1 py-2 text-center text-xs font-semibold border-b-2 transition-all flex items-center justify-center gap-1.5',
                    activeTab === 'blackboard' 
                      ? 'border-indigo-600 text-indigo-650 dark:text-indigo-400' 
                      : 'border-transparent text-gray-500'
                  )}
                >
                  <Presentation className="h-3.5 w-3.5" />
                  Blackboard
                </button>
              </div>

              {/* Messages Body */}
              <div className={cn(
                'flex-1 overflow-y-auto',
                activeTab !== 'chat' && 'hidden sm:block'
              )}>
                {messages.length === 0 && !isLoading ? (
                  <div className="flex h-full flex-col items-center justify-center p-5 text-center overflow-y-auto">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md">
                      <Bot className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                      AI Study Assistant & Masterclass
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 max-w-xs">
                      Which topic would you like to study today? Choose a masterclass topic below or ask your own question!
                    </p>

                    {/* Subject Topic Chips */}
                    <div className="w-full space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 block text-left px-1">
                        Featured {subject.charAt(0).toUpperCase() + subject.slice(1)} Masterclasses
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {SUBJECT_TOPICS[subject]?.map((topic, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendWithSuggestions(topic.prompt)}
                            className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50/80 p-2.5 text-left text-xs font-medium text-gray-800 transition-all hover:border-indigo-500 hover:bg-indigo-50/50 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/40 group shadow-sm"
                          >
                            <span className="text-base leading-none">{topic.icon}</span>
                            <span className="flex-1 font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{topic.title}</span>
                            <Sparkles className="h-3.5 w-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-2">
                    {messages.map((message, idx) => (
                      <ChatMessage 
                        key={message.id} 
                        message={message} 
                        voiceConfig={voiceConfig}
                        shouldAutoRead={idx === messages.length - 1}
                        isLatest={idx === messages.length - 1 && message.role === 'assistant'}
                      />
                    ))}
                    {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                      <TypingIndicator />
                    )}

                    {/* Suggested Questions */}
                    {!isLoading && lastAssistantMsg && (
                      <SuggestedQuestions
                        subject={subject}
                        messages={messages.map(m => ({ role: m.role, content: m.content }))}
                        onSelect={handleSendWithSuggestions}
                        isLoading={isLoading}
                      />
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="mx-4 mb-3 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                    <p className="font-medium">Oops! {error}</p>
                    <button
                      onClick={clearError}
                      className="mt-1 underline hover:no-underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className={activeTab !== 'chat' ? 'hidden sm:block' : ''}>
                <ChatInput onSend={handleSendWithSuggestions} isLoading={isLoading} />
              </div>
            </div>

            {/* Right Panel: Blackboard visualizer */}
            <div className={cn(
              'flex-1 h-full overflow-hidden',
              !isExpanded && 'hidden',
              isExpanded && 'flex flex-col',
              activeTab === 'blackboard' ? 'flex' : 'hidden sm:flex'
            )}>
              <VisualBlackboard messages={messages} onHasContent={handleBlackboardContent} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
