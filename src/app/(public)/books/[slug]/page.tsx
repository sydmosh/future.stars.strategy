'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Book,
  BookOpen,
  Clock,
  Star,
  Calendar,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ArrowLeft,
  User,
  MessageSquare,
  Send,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchBookBySlug, fetchChapters, fetchReviews, fetchBooks, addReview } from '@/lib/db';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useReadingProgress } from '@/hooks/useReadingProgress';
import { SITE_NAME } from '@/lib/constants';
import { cn, formatDate, formatReadingTime, getInitials, generateId } from '@/lib/utils';
import type { Book as BookType, Chapter, Review } from '@/types';

function StarRating({
  rating,
  size = 'sm',
  showEmpty = true,
}: {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showEmpty?: boolean;
}) {
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
              : showEmpty
                ? 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
                : 'fill-transparent text-gray-200 dark:text-gray-700'
          )}
        />
      ))}
    </div>
  );
}

function StarRatingInput({
  rating,
  hover,
  onRate,
  onHover,
  onLeave,
}: {
  rating: number;
  hover: number;
  onRate: (r: number) => void;
  onHover: (r: number) => void;
  onLeave: () => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const value = i + 1;
        const filled = value <= (hover || rating);
        return (
          <button
            key={i}
            type="button"
            onClick={() => onRate(value)}
            onMouseEnter={() => onHover(value)}
            onMouseLeave={onLeave}
            className="transition-transform hover:scale-110 focus:outline-none"
            aria-label={`Rate ${value} star${value > 1 ? 's' : ''}`}
          >
            <Star
              className={cn(
                'h-7 w-7 transition-colors',
                filled
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {review.userPhoto ? (
              <AvatarImage src={review.userPhoto} alt={review.userName} />
            ) : null}
            <AvatarFallback>{getInitials(review.userName)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900 dark:text-white text-sm">
              {review.userName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(review.createdAt)}
            </p>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>
      {review.comment && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {review.comment}
        </p>
      )}
    </div>
  );
}

function BookDetailSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <Skeleton className="mb-8 h-5 w-24 bg-white/20" />
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <Skeleton className="aspect-[3/4] w-full max-w-xs rounded-2xl bg-white/10" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-10 w-3/4 bg-white/10" />
              <Skeleton className="h-5 w-1/3 bg-white/10" />
              <div className="flex gap-3">
                <Skeleton className="h-6 w-20 rounded-full bg-white/10" />
                <Skeleton className="h-6 w-24 rounded-full bg-white/10" />
                <Skeleton className="h-6 w-20 rounded-full bg-white/10" />
              </div>
              <Skeleton className="h-12 w-48 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl w-full px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <Skeleton className="h-40 w-full rounded-2xl" />
        <Skeleton className="h-60 w-full rounded-2xl" />
        <Skeleton className="h-80 w-full rounded-2xl" />
      </div>
    </div>
  );
}

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { user } = useAuth();
  const { bookmarks, isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const [book, setBook] = useState<BookType | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedBooks, setRelatedBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewHover, setReviewHover] = useState(0);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);

  const { progress } = useReadingProgress(book?.id ?? '');

  const bookmarked = book ? isBookmarked(book.id) : false;
  const hasReviewed = reviews.some((r) => r.userId === user?.uid);
  const firstChapter = chapters.length > 0 ? chapters[0] : null;
  const continueChapter = progress
    ? chapters.find((c) => c.id === progress.chapterId) ?? firstChapter
    : null;

  useEffect(() => {
    document.title = `Book Detail | ${SITE_NAME}`;
  }, []);

  useEffect(() => {
    if (!slug) return;

    async function fetchBookData() {
      setLoading(true);
      setError(null);
      setNotFound(false);

      try {
        const bookData = await fetchBookBySlug(slug);

        if (!bookData) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setBook(bookData);
        document.title = `${bookData.title} | ${SITE_NAME}`;

        const [chapters, reviews, related] = await Promise.all([
          fetchChapters(bookData.id),
          fetchReviews(bookData.id),
          fetchBooks({ category: bookData.category, published: true, limitCount: 5 }),
        ]);

        setChapters(chapters);

        setReviews(reviews);

        const relatedBooks = related
          .filter((b) => b.id !== bookData.id)
          .slice(0, 4);
        setRelatedBooks(relatedBooks);
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Failed to load the book. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchBookData();
  }, [slug]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !book || reviewRating === 0) return;

    setSubmittingReview(true);
    setReviewError(null);

    try {
      const reviewData = {
        bookId: book.id,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhoto: user.photoURL || undefined,
        rating: reviewRating,
        comment: reviewComment,
      };

      await addReview(reviewData);

      const optimisticReview: Review = {
        id: generateId(),
        ...reviewData,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Review;

      setReviews((prev) => [optimisticReview, ...prev]);
      setReviewRating(0);
      setReviewComment('');
    } catch {
      setReviewError('Failed to submit review. Please try again.');
    } finally {
      setSubmittingReview(false);
    }
  };

  const toggleBookmark = async () => {
    if (!book || !firstChapter) return;
    if (bookmarked) {
      const existing = bookmarks.find((b) => b.bookId === book.id);
      if (existing) await removeBookmark(existing.id);
    } else {
      await addBookmark({
        id: generateId(),
        bookId: book.id,
        chapterId: firstChapter.id,
        bookTitle: book.title,
        chapterTitle: firstChapter.title,
        position: 0,
        createdAt: new Date(),
      });
    }
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : book?.averageRating ?? 0;

  if (loading) return <BookDetailSkeleton />;

  if (notFound) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
          <Book className="h-10 w-10 text-gray-400 dark:text-gray-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Book not found
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            The book you are looking for does not exist or has been removed.
          </p>
        </div>
        <Link href="/books">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Books
          </Button>
        </Link>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Something went wrong
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {error || 'An unexpected error occurred.'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-7xl"
        >
          <Link
            href="/books"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Books
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-xs mx-auto md:mx-0 shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
                {book.coverImage ? (
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500">
                      <Book className="h-12 w-12 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center md:items-start md:text-left flex-1"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                <BookOpen className="h-4 w-4" />
                {book.category}
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-2 text-lg text-blue-200">{book.subtitle}</p>
              )}
              <p className="mt-3 text-base text-blue-200">
                by {book.author}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <StarRating rating={averageRating} size="md" />
                  <span className="text-white font-medium">
                    {averageRating.toFixed(1)}
                  </span>
                  <span className="text-blue-300">
                    ({book.totalReviews || reviews.length}{' '}
                    {(book.totalReviews || reviews.length) === 1 ? 'review' : 'reviews'})
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-blue-200">
                  <Clock className="h-4 w-4" />
                  {formatReadingTime(book.readingTime)}
                </div>

                <div className="flex items-center gap-1.5 text-sm text-blue-200">
                  <Calendar className="h-4 w-4" />
                  {formatDate(book.createdAt)}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {firstChapter && (
                  <Link
                    href={
                      continueChapter
                        ? `/read/${slug}/${continueChapter.slug}`
                        : `/read/${slug}/${firstChapter.slug}`
                    }
                  >
                    <Button
                      size="lg"
                      className="h-13 min-w-[180px] rounded-2xl bg-white text-blue-700 shadow-xl shadow-blue-900/30 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-900/40 text-base font-semibold"
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      {progress ? 'Continue Reading' : 'Start Reading'}
                    </Button>
                  </Link>
                )}

                {firstChapter && user && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={toggleBookmark}
                    className={cn(
                      'h-13 min-w-[140px] rounded-2xl text-base font-semibold border-white/30',
                      bookmarked
                        ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 border-amber-400/30'
                        : 'text-white hover:bg-white/10 hover:border-white/50'
                    )}
                  >
                    {bookmarked ? (
                      <>
                        <BookmarkCheck className="mr-2 h-5 w-5" />
                        Bookmarked
                      </>
                    ) : (
                      <>
                        <Bookmark className="mr-2 h-5 w-5" />
                        Bookmark
                      </>
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                About This Book
              </h2>
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {book.description}
                </p>
              </div>
            </motion.section>

            {book.tags && book.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Table of Contents
              </h2>
              {chapters.length > 0 ? (
                <div className="space-y-2">
                  {chapters.map((chapter, i) => (
                    <Link
                      key={chapter.id}
                      href={`/read/${slug}/${chapter.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-blue-100 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                          {chapter.chapterNumber}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                            {chapter.title}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {formatReadingTime(chapter.estimatedReadingTime)}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-300 transition-all group-hover:text-blue-500 group-hover:translate-x-0.5 dark:text-gray-600" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <Book className="h-12 w-12 text-gray-300 dark:text-gray-600" />
                  <p className="text-gray-500 dark:text-gray-400">
                    No chapters available yet.
                  </p>
                </div>
              )}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Reviews
                </h2>
                {reviews.length > 0 && (
                  <div className="flex items-center gap-2">
                    <StarRating rating={averageRating} size="md" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({reviews.length})
                    </span>
                  </div>
                )}
              </div>

              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                  <MessageSquare className="h-12 w-12 text-gray-300 dark:text-gray-600" />
                  <p className="text-gray-500 dark:text-gray-400">
                    No reviews yet. Be the first to review this book!
                  </p>
                </div>
              )}
            </motion.section>

            {user ? (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {hasReviewed ? 'Update Your Review' : 'Write a Review'}
                  </h3>

                  {hasReviewed ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      You have already reviewed this book.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Rating
                        </label>
                        <StarRatingInput
                          rating={reviewRating}
                          hover={reviewHover}
                          onRate={setReviewRating}
                          onHover={setReviewHover}
                          onLeave={() => setReviewHover(0)}
                        />
                        {reviewRating === 0 && submittingReview && (
                          <p className="mt-1 text-xs text-red-500">
                            Please select a rating.
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="review-comment"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Review (optional)
                        </label>
                        <Textarea
                          id="review-comment"
                          placeholder="Share your thoughts about this book..."
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          rows={4}
                          maxLength={1000}
                        />
                        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-right">
                          {reviewComment.length}/1000
                        </p>
                      </div>

                      {reviewError && (
                        <p className="text-sm text-red-500">{reviewError}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={submittingReview || reviewRating === 0}
                        className="w-full sm:w-auto"
                      >
                        {submittingReview ? (
                          'Submitting...'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Review
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.section>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-800 dark:bg-gray-900"
              >
                <User className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500" />
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Sign in
                  </Link>{' '}
                  to leave a review.
                </p>
              </motion.div>
            )}
          </div>

          <aside className="space-y-8">
            {book.language && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Details
                </h3>
                <dl className="mt-3 space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Category</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">
                      {book.category}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Language</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">
                      {book.language}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Chapters</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">
                      {chapters.length}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Reading Time</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">
                      {formatReadingTime(book.readingTime)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">Published</dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-white">
                      {formatDate(book.createdAt)}
                    </dd>
                  </div>
                </dl>
              </motion.div>
            )}

            {relatedBooks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Related Books
                </h3>
                <div className="space-y-3">
                  {relatedBooks.map((rb) => (
                    <Link key={rb.id} href={`/books/${rb.slug}`}>
                      <div className="group flex gap-3 rounded-xl border border-gray-100 bg-white p-3 transition-all hover:border-blue-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900">
                        <div className="relative h-20 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
                          {rb.coverImage ? (
                            <Image
                              src={rb.coverImage}
                              alt={rb.title}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Book className="h-5 w-5 text-blue-300 dark:text-blue-700" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                            {rb.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                            {rb.author}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={rb.averageRating} size="sm" />
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                              {formatReadingTime(rb.readingTime)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
