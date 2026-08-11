'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  Book,
  Clock,
  Star,
  X,
  TrendingUp,
  ArrowRight,
  History,
  Trash2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { SITE_NAME } from '@/lib/constants';
import { searchBooks } from '@/lib/db';
import { cn, formatReadingTime } from '@/lib/utils';
import type { Book as BookType } from '@/types';

const RECENT_SEARCHES_KEY = 'recent-searches';
const MAX_RECENT = 8;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < Math.round(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
          )}
        />
      ))}
    </div>
  );
}

function BookCard({ book }: { book: BookType }) {
  return (
    <motion.div variants={itemVariants} layout>
      <Link href={`/books/${book.slug}`}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-blue-900/20 h-full">
          <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
            {book.coverImage ? (
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500">
                  <Book className="h-8 w-8 text-white" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm">
                {book.category}
              </Badge>
              <div className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-700 backdrop-blur-sm">
                <Clock className="h-3 w-3" />
                {formatReadingTime(book.readingTime)}
              </div>
            </div>
          </div>
          <CardContent className="space-y-2 p-4">
            <h3 className="font-semibold leading-snug text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors dark:text-gray-100 dark:group-hover:text-blue-400">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
              {book.author}
            </p>
            <div className="flex items-center justify-between pt-1">
              <StarRating rating={book.averageRating} />
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {formatReadingTime(book.readingTime)}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

function BookCardSkeleton() {
  return (
    <div className="h-full">
      <Card className="overflow-hidden h-full">
        <Skeleton className="aspect-[3/4] w-full rounded-none" />
        <CardContent className="space-y-3 p-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  const searches = getRecentSearches().filter((s) => s !== query);
  searches.unshift(query);
  localStorage.setItem(
    RECENT_SEARCHES_KEY,
    JSON.stringify(searches.slice(0, MAX_RECENT))
  );
}

function clearRecentSearches() {
  localStorage.removeItem(RECENT_SEARCHES_KEY);
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    document.title = `Search | ${SITE_NAME}`;
    setRecentSearches(getRecentSearches());
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    async function doSearch() {
      setLoading(true);
      setSearched(true);
      try {
        const results = await searchBooks(debouncedQuery);
        setResults(results);
        saveRecentSearch(debouncedQuery.trim());
        setRecentSearches(getRecentSearches());
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    doSearch();
  }, [debouncedQuery]);

  const handleRecentClick = useCallback((term: string) => {
    setSearchQuery(term);
  }, []);

  const handleClearRecent = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  const suggestions = [
    'Try different keywords',
    'Search by author name',
    'Browse by category',
    'Check spelling',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <Search className="h-4 w-4" />
            Search
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Find Your Next Read
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-4 max-w-xl text-lg text-blue-100"
          >
            Search across our entire library of books
          </motion.p>
        </motion.div>
      </section>

      <section className="relative z-10 -mt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-2xl"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by title, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-16 rounded-2xl border-2 border-white/50 bg-white pl-14 pr-14 text-lg shadow-xl shadow-blue-900/10 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {!searched && recentSearches.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <History className="h-4 w-4" />
                Recent Searches
              </div>
              <button
                onClick={handleClearRecent}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Trash2 className="h-3 w-3" />
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleRecentClick(term)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <History className="h-3 w-3" />
                  {term}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="flex-1 bg-gray-50 py-12 dark:bg-gray-900/50 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
                Searching...
              </div>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <BookCardSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : searched && results.length > 0 ? (
            <>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Found {results.length} {results.length === 1 ? 'result' : 'results'} for
                &ldquo;{debouncedQuery}&rdquo;
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {results.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </motion.div>
            </>
          ) : searched && results.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 py-16 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Search className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  No results found
                </h3>
                <p className="mt-2 max-w-md text-gray-500 dark:text-gray-400">
                  We couldn&apos;t find any books matching &ldquo;{debouncedQuery}&rdquo;.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Suggestions:
                </p>
                <ul className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <ArrowRight className="h-3 w-3 text-blue-500" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/books">
                <Button variant="outline">
                  <Book className="mr-2 h-4 w-4" />
                  Browse All Books
                </Button>
              </Link>
            </motion.div>
          ) : !searched && !searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
                <TrendingUp className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Start typing to search
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-400">
                Search across our library by title, author, or topic to find your next read.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
