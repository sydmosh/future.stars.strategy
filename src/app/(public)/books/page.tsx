'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  Book,
  Clock,
  Star,
  X,
  BookOpen,
  SlidersHorizontal,
  Calculator,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { CATEGORIES, SITE_NAME } from '@/lib/constants';
import { fetchBooks } from '@/lib/db';
import { cn, formatReadingTime } from '@/lib/utils';
import type { Book as BookType } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

type SortOption = 'newest' | 'popular' | 'title';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'title', label: 'Title A-Z' },
];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4', lg: 'h-5 w-5' };
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            i < Math.round(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
          )}
        />
      ))}
    </div>
  );
}

function BookCard({ book, index }: { book: BookType; index: number }) {
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

export default function BooksPage() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    document.title = `All Books | ${SITE_NAME}`;
  }, []);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      setError(null);
      try {
        let fetchedBooks = await fetchBooks({
          published: true,
          sortBy,
        });

        if (selectedCategory) {
          fetchedBooks = fetchedBooks.filter(
            (b) => b.category.toLowerCase() === selectedCategory.toLowerCase()
          );
        }

        if (debouncedSearch) {
          const query = debouncedSearch.toLowerCase();
          fetchedBooks = fetchedBooks.filter(
            (b) =>
              b.title.toLowerCase().includes(query) ||
              b.author.toLowerCase().includes(query) ||
              b.description.toLowerCase().includes(query)
          );
        }

        setBooks(fetchedBooks);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, [debouncedSearch, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSortBy('newest');
  };

  const hasActiveFilters = !!searchQuery || !!selectedCategory || sortBy !== 'newest';

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
          className="relative mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <BookOpen className="h-4 w-4" />
            Library
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            All Books
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            Discover our complete collection of books spanning faith, technology,
            leadership, and personal growth.
          </motion.p>
        </motion.div>
      </section>

      <section className="sticky top-16 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search books by title, author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>

              <div className="hidden items-center gap-3 lg:flex">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-11 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="h-11 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {!loading && (
                <span className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {books.length} {books.length === 1 ? 'book' : 'books'}
                </span>
              )}
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 flex flex-col gap-3 overflow-hidden lg:hidden"
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-11 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-11 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {hasActiveFilters && !loading && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {selectedCategory && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {sortBy !== 'newest' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {sortOptions.find((o) => o.value === sortBy)?.label}
                  <button onClick={() => setSortBy('newest')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="flex-1 bg-gray-50 py-12 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <BookCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 py-20 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                <X className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Something went wrong
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-400">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline">
                Try Again
              </Button>
            </motion.div>
          ) : books.length > 0 ? (
            <>
              {debouncedSearch && (
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                  Showing results for &ldquo;{debouncedSearch}&rdquo;
                </p>
              )}

              {!selectedCategory && !debouncedSearch && (
                <Link href="/books/math-booklets">
                  <div className="mb-8 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 transition-all hover:shadow-lg hover:-translate-y-0.5 dark:border-indigo-800 dark:from-indigo-900/30 dark:to-purple-900/30">
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                          <Calculator className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            Maths Booklets
                          </h2>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Interactive practice booklets with step-by-step solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        Open
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              >
                {books.map((book, index) => (
                  <BookCard key={book.id} book={book} index={index} />
                ))}
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 py-20 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Book className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {debouncedSearch ? 'No books found' : 'No books available'}
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-400">
                {debouncedSearch
                  ? `We couldn't find any books matching &ldquo;${debouncedSearch}&rdquo;. Try adjusting your search or filters.`
                  : 'There are no books in this collection yet. Check back soon for new releases.'}
              </p>
              {hasActiveFilters && (
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
