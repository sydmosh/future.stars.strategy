'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchBookBySlug, fetchBookById, fetchChapters, fetchChapterBySlug, getReadingProgress, saveReadingProgress } from '@/lib/db';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useReadingPreferences } from '@/hooks/useReadingPreferences';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn, generateId } from '@/lib/utils';
import type { Book, Chapter, ReadingProgress } from '@/types';
import toast from 'react-hot-toast';
import {
  ChevronLeft, ChevronRight, Sun, Moon, Bookmark, BookmarkCheck,
  Maximize2, Minimize2, Share2, List, X, BookOpen, Clock,
} from 'lucide-react';

export default function ReadPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const { theme: globalTheme, setTheme: setGlobalTheme } = useTheme();
  const { fontSize, lineSpacing, theme: readingTheme, fontFamily = 'serif', updatePrefs } = useReadingPreferences();

  const bookSlug = params.bookSlug as string;
  const chapterSlug = params.chapterSlug as string;

  const [book, setBook] = useState<Book | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [savedProgress, setSavedProgress] = useState<ReadingProgress | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const { bookmarks, addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  // Sync global theme context with reading preference theme
  useEffect(() => {
    const readerTheme = readingTheme || 'light';
    if (readerTheme === 'dark' && globalTheme !== 'dark') {
      setGlobalTheme('dark');
    } else if ((readerTheme === 'light' || readerTheme === 'sepia') && globalTheme !== 'light') {
      setGlobalTheme('light');
    }
  }, [readingTheme, globalTheme, setGlobalTheme]);

  // Fetch book and chapter details, supporting UUID resolution for bookmarks
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let bookData = await fetchBookBySlug(bookSlug);
        if (!bookData) {
          bookData = await fetchBookById(bookSlug);
        }
        if (!bookData) {
          setError('Book not found');
          setLoading(false);
          return;
        }
        setBook(bookData);

        const allChapters = await fetchChapters(bookData.id);
        setChapters(allChapters);

        let currentChapter = allChapters.find((c) => c.slug === chapterSlug);
        if (!currentChapter) {
          currentChapter = allChapters.find((c) => c.id === chapterSlug);
        }

        if (!currentChapter) {
          const directChapter = await fetchChapterBySlug(bookData.slug, chapterSlug);
          if (directChapter) {
            currentChapter = directChapter;
          }
        }

        if (currentChapter) {
          setChapter(currentChapter);
          if (bookSlug !== bookData.slug || chapterSlug !== currentChapter.slug) {
            router.replace(`/read/${bookData.slug}/${currentChapter.slug}`);
          }
        } else {
          setError('Chapter not found');
        }
      } catch (err) {
        console.error('Error fetching reader content:', err);
        setError('Failed to load content');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bookSlug, chapterSlug, router]);

  // Load reading progress
  useEffect(() => {
    if (!user || !book) return;
    getReadingProgress(user.uid, book.id).then((result) => setSavedProgress(result));
  }, [user, book]);

  // Scroll listener to update progress bar and autohide header
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0);

    // Autohide header logic: scroll down hides, scroll up reveals
    if (scrollTop > lastScrollY.current && scrollTop > 150) {
      setShowHeader(false);
      setSettingsOpen(false); // Close settings popover when scrolling down
    } else {
      setShowHeader(true);
    }
    lastScrollY.current = scrollTop;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Save reading progress debounced after scroll changes
  const saveProgress = useCallback(async (chapterId: string, position: number, percentage: number) => {
    if (!user || !book) return;
    await saveReadingProgress({
      bookId: book.id,
      chapterId,
      position,
      percentage,
      userId: user.uid,
    });
    setSavedProgress((prev) => prev ? { ...prev, chapterId, position, percentage } : { bookId: book.id, chapterId, position, percentage, updatedAt: new Date() });
  }, [user, book]);

  const debouncedSave = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    if (!book || !chapter || !user || !hasInteracted) return;
    const pos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.round((pos / docHeight) * 100) : 0;
    clearTimeout(debouncedSave.current);
    debouncedSave.current = setTimeout(() => saveProgress(chapter.id, pos, pct), 2000);
    return () => clearTimeout(debouncedSave.current);
  }, [scrollProgress, book, chapter, user, saveProgress, hasInteracted]);

  // Save progress periodically (every 30s) while user is interacting
  useEffect(() => {
    if (!book || !chapter || !user || !hasInteracted) return;
    const interval = setInterval(() => {
      const pos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((pos / docHeight) * 100) : 0;
      saveProgress(chapter.id, pos, pct);
    }, 30000);
    return () => clearInterval(interval);
  }, [book, chapter, user, saveProgress, hasInteracted]);

  // Detect interaction to start saving progress
  useEffect(() => {
    if (!book || !chapter || !user || hasInteracted) return;
    const onInteraction = () => setHasInteracted(true);
    window.addEventListener('scroll', onInteraction, { once: true });
    return () => window.removeEventListener('scroll', onInteraction);
  }, [book, chapter, user, hasInteracted]);

  // Toggle fullscreen mode
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {}
  };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Lock body scroll when Table of Contents is open
  useEffect(() => {
    if (tocOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [tocOpen]);

  // Bookmark toggler
  const handleBookmark = async () => {
    if (!user) {
      toast.error('Login to bookmark');
      return;
    }
    if (!book || !chapter) return;
    const existing = bookmarks.find((b) => b.bookId === book.id && b.chapterId === chapter.id);
    if (existing) {
      await removeBookmark(existing.id);
      toast.success('Bookmark removed');
    } else {
      await addBookmark({
        id: generateId(),
        bookId: book.id,
        chapterId: chapter.id,
        bookTitle: book.title,
        chapterTitle: chapter.title,
        position: window.scrollY,
        createdAt: new Date(),
      });
      toast.success('Bookmark added');
    }
  };

  // Share action
  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: chapter?.title || 'Reading', url });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied');
      }
    } catch {}
  };

  // Navigation helpers
  const currentChapterIndex = chapters.findIndex((c) => c.id === chapter?.id);
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null;

  const isCurrentBookmarked = book && chapter ? isBookmarked(book.id, chapter.id) : false;

  const savedDifferentChapter = savedProgress && chapter && savedProgress.chapterId !== chapter.id;
  const savedSameChapter = savedProgress && chapter && savedProgress.chapterId === chapter.id && (savedProgress.percentage || 0) > 5;

  const scrollToPosition = (pos: number) => {
    window.scrollTo({ top: pos, behavior: 'smooth' });
  };

  const readerTheme = readingTheme || 'light';

  // Cohesive styling properties matching themes
  const bgClass = {
    light: 'bg-white text-slate-900',
    dark: 'bg-slate-950 text-slate-100',
    sepia: 'bg-[#faf6ee] text-[#433422]',
  }[readerTheme];

  const borderClass = {
    light: 'border-slate-200/60',
    dark: 'border-slate-800/60',
    sepia: 'border-[#ebdcb9]',
  }[readerTheme];

  const navBgClass = {
    light: 'bg-white/95 border-slate-200/60 text-slate-900',
    dark: 'bg-slate-950/95 border-slate-800/60 text-slate-100',
    sepia: 'bg-[#faf6ee]/95 border-[#ebdcb9] text-[#433422]',
  }[readerTheme];

  const popoverBgClass = {
    light: 'bg-white border-slate-200/80 shadow-slate-200/50',
    dark: 'bg-slate-900 border-slate-800 shadow-black/80',
    sepia: 'bg-[#f4ecd8] border-[#e2d2aa] shadow-[#433422]/10',
  }[readerTheme];

  const buttonActiveBg = {
    light: 'bg-slate-100 text-slate-900',
    dark: 'bg-slate-800 text-slate-100',
    sepia: 'bg-[#ebdcb9] text-[#433422]',
  }[readerTheme];

  const titleClass = {
    light: 'text-slate-900',
    dark: 'text-white',
    sepia: 'text-[#2d1e10]',
  }[readerTheme];

  const subtitleClass = {
    light: 'text-slate-500',
    dark: 'text-slate-400',
    sepia: 'text-[#7c6a59]',
  }[readerTheme];

  const fontStyle = {
    sans: 'font-sans antialiased',
    serif: 'font-serif tracking-wide',
    mono: 'font-mono text-[90%]',
  }[fontFamily];

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'sepia') => {
    updatePrefs({ theme: newTheme });
    if (newTheme === 'dark') {
      setGlobalTheme('dark');
    } else {
      setGlobalTheme('light');
    }
  };

  const timeRemaining = chapter ? Math.ceil(chapter.estimatedReadingTime * (1 - scrollProgress / 100)) : 0;

  if (loading) return <ReaderSkeleton theme={readerTheme} />;

  if (error || !book || !chapter) {
    return (
      <div className={cn("flex min-h-screen items-center justify-center transition-colors duration-200", bgClass)}>
        <div className="text-center p-6 max-w-sm">
          <BookOpen className="mx-auto h-16 w-16 opacity-30" />
          <h2 className="mt-4 text-xl font-semibold">
            {error || 'Content not found'}
          </h2>
          <p className="mt-2 text-sm opacity-60">
            The page you are looking for does not exist or failed to load.
          </p>
          <Link href="/books">
            <Button className="mt-6 rounded-xl">Back to Books</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen transition-colors duration-200 pb-16", bgClass)}>
      {/* Dynamic Reading Progress Bar at the absolute top */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-gray-200/30 dark:bg-gray-800/30">
        <div
          className={cn(
            "h-full transition-all duration-150 ease-out",
            readerTheme === 'sepia' ? 'bg-[#5c4a37]' : 'bg-blue-600'
          )}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Reader Header (Autohides on scroll down) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -60 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={cn(
          "sticky top-0 z-30 border-b transition-colors duration-200 backdrop-blur-xl",
          navBgClass
        )}
      >
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <div className="flex items-center gap-1.5 min-w-0">
            <Link href={`/books/${book.slug}`}>
              <Button variant="ghost" size="sm" className="gap-1 rounded-xl text-inherit">
                <ChevronLeft className="h-4 w-4" />
                <span className="font-semibold truncate max-w-[120px] sm:max-w-[200px]">{book.title}</span>
              </Button>
            </Link>
            {timeRemaining > 0 ? (
              <span className={cn("text-xs font-medium ml-1.5 hidden md:inline-block px-2 py-0.5 rounded-full border", borderClass, subtitleClass)}>
                {timeRemaining} min left
              </span>
            ) : (
              <span className={cn("text-xs font-medium ml-1.5 hidden md:inline-block px-2 py-0.5 rounded-full border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-50/10")}>
                Completed
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Elegant Aa settings dropdown popover */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSettingsOpen(!settingsOpen)}
                title="Reading settings"
                className={cn(
                  "h-9 w-9 rounded-xl text-inherit",
                  settingsOpen && buttonActiveBg
                )}
              >
                <span className="text-sm font-bold font-serif">Aa</span>
              </Button>

              <AnimatePresence>
                {settingsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setSettingsOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        "absolute right-0 mt-2 z-50 w-72 rounded-2xl border p-5 shadow-2xl space-y-4",
                        popoverBgClass
                      )}
                    >
                      {/* Theme selection */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">Theme</span>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {(['light', 'sepia', 'dark'] as const).map((t) => (
                            <button
                              key={t}
                              onClick={() => handleThemeChange(t)}
                              className={cn(
                                "flex flex-col items-center gap-1.5 rounded-xl border p-2 text-xs font-semibold transition-all capitalize",
                                readerTheme === t
                                  ? t === 'sepia'
                                    ? "border-amber-700 bg-amber-50/30"
                                    : "border-blue-600 bg-slate-100/50 dark:border-blue-400 dark:bg-slate-800/30"
                                  : t === 'sepia'
                                    ? "border-[#ebdcb9] hover:bg-[#faf6ee]/50"
                                    : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/30"
                              )}
                            >
                              <span className={cn(
                                "h-5 w-5 rounded-full border shadow-sm",
                                t === 'light' ? 'bg-white border-slate-200' : t === 'sepia' ? 'bg-[#faf6ee] border-[#ebdcb9]' : 'bg-slate-950 border-slate-800'
                              )} />
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Font selector */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">Font</span>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {(['sans', 'serif', 'mono'] as const).map((font) => (
                            <button
                              key={font}
                              onClick={() => updatePrefs({ fontFamily: font })}
                              className={cn(
                                "rounded-xl border py-2 text-xs font-semibold transition-all capitalize",
                                fontFamily === font
                                  ? readerTheme === 'sepia'
                                    ? "border-amber-700 bg-[#ebdcb9]"
                                    : "border-blue-600 bg-slate-100 dark:border-blue-400 dark:bg-slate-800"
                                  : readerTheme === 'sepia'
                                    ? "border-[#ebdcb9] hover:bg-[#ebdcb9]/40"
                                    : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/30"
                              )}
                            >
                              <span className={cn(
                                font === 'sans' ? 'font-sans' : font === 'serif' ? 'font-serif text-[13px]' : 'font-mono text-[11px]'
                              )}>
                                {font === 'sans' ? 'Sans' : font === 'serif' ? 'Serif' : 'Mono'}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Font size adjustments */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">Text Size</span>
                          <span className="text-xs font-bold font-mono opacity-80">{fontSize}px</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 rounded-xl font-bold"
                            onClick={() => updatePrefs({ fontSize: Math.max(12, fontSize - 2) })}
                            disabled={fontSize <= 12}
                          >
                            A-
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 rounded-xl font-bold"
                            onClick={() => updatePrefs({ fontSize: Math.min(36, fontSize + 2) })}
                            disabled={fontSize >= 36}
                          >
                            A+
                          </Button>
                        </div>
                      </div>

                      {/* Line spacing selector */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">Spacing</span>
                          <span className="text-xs font-bold font-mono opacity-80">{lineSpacing}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          {([1.4, 1.6, 1.8, 2.0] as const).map((spacing) => (
                            <button
                              key={spacing}
                              onClick={() => updatePrefs({ lineSpacing: spacing })}
                              className={cn(
                                "flex-1 rounded-xl border py-1.5 text-xs font-semibold transition-all",
                                lineSpacing === spacing
                                  ? readerTheme === 'sepia'
                                    ? "border-amber-700 bg-[#ebdcb9]"
                                    : "border-blue-600 bg-slate-100 dark:border-blue-400 dark:bg-slate-800"
                                  : readerTheme === 'sepia'
                                    ? "border-[#ebdcb9] hover:bg-[#ebdcb9]/40"
                                    : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/30"
                              )}
                            >
                              {spacing}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Bookmark button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBookmark}
              title={isCurrentBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              className={cn(
                "h-9 w-9 rounded-xl text-inherit",
                isCurrentBookmarked && (readerTheme === 'sepia' ? 'text-amber-800' : 'text-blue-600')
              )}
            >
              {isCurrentBookmarked ? (
                <BookmarkCheck className="h-4.5 w-4.5 fill-current" />
              ) : (
                <Bookmark className="h-4.5 w-4.5" />
              )}
            </Button>

            {/* Fullscreen button (hidden on mobile) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              className="h-9 w-9 rounded-xl text-inherit hidden sm:inline-flex"
            >
              {isFullscreen ? <Minimize2 className="h-4.5 w-4.5" /> : <Maximize2 className="h-4.5 w-4.5" />}
            </Button>

            {/* Share button (hidden on mobile) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              title="Share"
              className="h-9 w-9 rounded-xl text-inherit hidden sm:inline-flex"
            >
              <Share2 className="h-4.5 w-4.5" />
            </Button>

            {/* Table of contents button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTocOpen(!tocOpen)}
              title="Table of contents"
              className={cn("h-9 w-9 rounded-xl text-inherit", tocOpen && buttonActiveBg)}
            >
              <List className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Continue Reading notifications */}
        {savedDifferentChapter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-4"
          >
            <div className={cn(
              "rounded-xl border p-4 flex items-center justify-between",
              readerTheme === 'sepia'
                ? 'bg-[#ebdcb9]/40 border-[#e2d2aa] text-[#5c4a37]'
                : 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
            )}>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <p className="text-sm">
                  Continue reading{' '}
                  <Link
                    href={`/read/${book.slug}/${chapters.find((c) => c.id === savedProgress!.chapterId)?.slug || savedProgress!.chapterId}`}
                    className="font-bold underline underline-offset-2"
                  >
                    {chapters.find((c) => c.id === savedProgress!.chapterId)?.title || 'previous chapter'}
                  </Link>
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-xl",
                  readerTheme === 'sepia' && "hover:bg-[#ebdcb9] text-[#433422]"
                )}
                onClick={() => {
                  const idx = chapters.findIndex((c) => c.id === savedProgress!.chapterId);
                  if (idx >= 0) {
                    router.push(`/read/${book.slug}/${chapters[idx].slug}`);
                  }
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {savedSameChapter && !savedDifferentChapter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-4"
          >
            <div className={cn(
              "rounded-xl border p-4 flex items-center justify-between",
              readerTheme === 'sepia'
                ? 'bg-[#ebdcb9]/60 border-[#e2d2aa] text-[#5c4a37]'
                : 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300'
            )}>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <p className="text-sm">
                  Continue where you left off ({savedProgress!.percentage}% complete)
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-xl border",
                  readerTheme === 'sepia' 
                    ? "border-[#ebdcb9] hover:bg-[#ebdcb9] text-[#433422]" 
                    : "border-amber-200 dark:border-amber-800/50 hover:bg-amber-500/10"
                )}
                onClick={() => scrollToPosition(savedProgress!.position)}
              >
                Resume
              </Button>
            </div>
          </motion.div>
        )}

        {/* Reader article */}
        <article className="py-8 sm:py-12">
          <header className="mb-8 sm:mb-12">
            <div className={cn("flex items-center gap-3 text-xs font-semibold uppercase tracking-wider mb-4", subtitleClass)}>
              <Link
                href={`/books/${book.slug}`}
                className="hover:underline transition-colors"
              >
                {book.title}
              </Link>
              <span>/</span>
              <span className="font-bold opacity-80">
                Chapter {chapter.chapterNumber}
              </span>
            </div>
            <h1 className={cn("text-3xl sm:text-4xl font-bold tracking-tight leading-tight", titleClass)}>
              {chapter.title}
            </h1>
            <div className={cn("flex items-center gap-4 mt-4 text-sm", subtitleClass)}>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="h-4 w-4" />
                {chapter.estimatedReadingTime || '?'} min read
              </span>
              {chapter.chapterNumber > 1 && (
                <span className="font-medium">
                  Chapter {chapter.chapterNumber} of {chapters.length}
                </span>
              )}
            </div>
          </header>

          <style>{`
            .reading-content p, .reading-content li, .reading-content blockquote {
              line-height: ${lineSpacing} !important;
              color: ${
                readerTheme === 'sepia' 
                  ? '#433422' 
                  : readerTheme === 'dark' 
                    ? '#cbd5e1' 
                    : '#334155'
              } !important;
            }
            .reading-content h1, .reading-content h2, .reading-content h3 {
              color: ${
                readerTheme === 'sepia' 
                  ? '#2d1e10' 
                  : readerTheme === 'dark' 
                    ? '#ffffff' 
                    : '#0f172a'
              } !important;
            }
            /* Add drop-cap styling for the first letter of first paragraph */
            .reading-content > p:first-of-type::first-letter {
              float: left;
              font-size: 3.5rem;
              line-height: 3rem;
              padding-top: 4px;
              padding-right: 8px;
              padding-left: 3px;
              font-weight: bold;
              font-family: Georgia, serif;
              color: ${
                readerTheme === 'sepia' 
                  ? '#5c4a37' 
                  : readerTheme === 'dark' 
                    ? '#93c5fd' 
                    : '#2563eb'
              };
            }
          `}</style>

          <div
            className={cn("reading-content transition-all duration-200", fontStyle)}
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: chapter.content }}
          />

          <footer className={cn("mt-16 sm:mt-20 pt-8 border-t", borderClass)}>
            <div className="flex items-center justify-between gap-4">
              {prevChapter ? (
                <Link
                  href={`/read/${book.slug}/${prevChapter.slug}`}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    readerTheme === 'sepia'
                      ? 'text-[#5c4a37] hover:bg-[#ebdcb9]/40'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <p className={cn("text-xs font-semibold", subtitleClass)}>Previous</p>
                    <p className="font-semibold truncate max-w-[160px] sm:max-w-[240px]">{prevChapter.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={`/read/${book.slug}/${nextChapter.slug}`}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all text-right",
                    readerTheme === 'sepia'
                      ? 'text-[#5c4a37] hover:bg-[#ebdcb9]/40'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  <div>
                    <p className={cn("text-xs font-semibold", subtitleClass)}>Next</p>
                    <p className="font-semibold truncate max-w-[160px] sm:max-w-[240px]">{nextChapter.title}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <Link
                  href={`/books/${book.slug}`}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    readerTheme === 'sepia'
                      ? 'text-amber-800 hover:bg-[#ebdcb9]/40'
                      : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950'
                  )}
                >
                  <span>Finish reading</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <Link href={`/books/${book.slug}`}>
                <Button variant="ghost" size="sm" className={cn("rounded-xl text-inherit font-semibold hover:bg-transparent", readerTheme === 'sepia' ? 'text-[#5c4a37] hover:text-[#433422]' : 'text-gray-500 dark:text-gray-400 hover:text-inherit')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Back to {book.title}
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </div>

      {/* Table of Contents Drawer */}
      <AnimatePresence>
        {tocOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setTocOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={cn(
                "fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] shadow-2xl border-l",
                popoverBgClass
              )}
            >
              <div className={cn("flex items-center justify-between px-5 py-4 border-b", borderClass)}>
                <h2 className={cn("font-bold text-base", titleClass)}>Table of Contents</h2>
                <Button variant="ghost" size="icon" onClick={() => setTocOpen(false)} className="rounded-xl text-inherit">
                  <X className="h-4.5 w-4.5" />
                </Button>
              </div>
              <nav className="overflow-y-auto h-[calc(100%-57px)] p-3 space-y-1">
                {chapters.map((ch) => {
                  const isCurrent = ch.id === chapter.id;
                  return (
                    <Link
                      key={ch.id}
                      href={`/read/${book.slug}/${ch.slug}`}
                      onClick={() => setTocOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all",
                        isCurrent
                          ? readerTheme === 'sepia'
                            ? 'bg-[#ebdcb9] text-[#2d1e10] font-bold'
                            : 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold'
                          : readerTheme === 'sepia'
                            ? 'text-[#5c4a37] hover:bg-[#ebdcb9]/40'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      )}
                    >
                      <span className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                        isCurrent
                          ? readerTheme === 'sepia'
                            ? 'bg-[#433422] text-[#faf6ee]'
                            : 'bg-blue-600 text-white'
                          : readerTheme === 'sepia'
                            ? 'bg-[#ebdcb9]/60 text-[#5c4a37]'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                      )}>
                        {ch.chapterNumber}
                      </span>
                      <span className="truncate">{ch.title}</span>
                      {isCurrent && (
                        <span className={cn(
                          "ml-auto h-1.5 w-1.5 rounded-full shrink-0",
                          readerTheme === 'sepia' ? 'bg-[#433422]' : 'bg-blue-600'
                        )} />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReaderSkeleton({ theme }: { theme: 'light' | 'dark' | 'sepia' }) {
  const bgClass = {
    light: 'bg-white text-slate-900',
    dark: 'bg-slate-950 text-slate-100',
    sepia: 'bg-[#faf6ee] text-[#433422]',
  }[theme];

  return (
    <div className={cn("fixed inset-0 z-50 overflow-y-auto", bgClass)}>
      <div className="sticky top-0 z-30 border-b border-gray-200/20 bg-transparent backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-4">
          <Skeleton className="h-8 w-24 opacity-60" />
          <div className="ml-auto flex gap-2">
            <Skeleton className="h-8 w-8 rounded-xl opacity-60" />
            <Skeleton className="h-8 w-8 rounded-xl opacity-60" />
            <Skeleton className="h-8 w-8 rounded-xl opacity-60" />
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
        <Skeleton className="h-4 w-48 mb-6 opacity-60" />
        <Skeleton className="h-10 w-3/4 mb-8 opacity-60" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-5/6 opacity-60" />
          <Skeleton className="h-4 w-4/5 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-3/4 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-5/6 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-2/3 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-4/5 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
          <Skeleton className="h-4 w-3/4 opacity-60" />
          <Skeleton className="h-4 w-5/6 opacity-60" />
          <Skeleton className="h-4 w-full opacity-60" />
        </div>
      </article>
    </div>
  );
}
