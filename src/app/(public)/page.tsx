'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Book,
  BookOpen,
  Star,
  Clock,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Mail,
  Users,
  Globe,
  Quote,
  X,
  Layers,
  Eye,
  Heart,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchBooks, subscribeNewsletter } from '@/lib/db';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import {
  SITE_NAME,
  AUTHOR_NAME,
  AUTHOR_EMAIL,
  CATEGORIES,
  SOCIAL_LINKS,
  MISSION_STATEMENT,
} from '@/lib/constants';
import { cn, formatReadingTime } from '@/lib/utils';
import type { Book as BookType, Category, Testimonial } from '@/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: '-50px' as const },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
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

function BookCardSkeleton() {
  return (
    <Card className="overflow-hidden">
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
  );
}

function BookCard({ book }: { book: BookType }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={`/books/${book.slug}`}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-blue-900/20">
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
                <Book className="h-12 w-12 text-blue-300 dark:text-blue-700" />
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

function CategoryCard({ category }: { category: typeof CATEGORIES[number] }) {
  const icons: Record<string, React.ReactNode> = {
    Christian: <BookOpen className="h-6 w-6" />,
    Technology: <Globe className="h-6 w-6" />,
    Programming: <Layers className="h-6 w-6" />,
    Leadership: <Users className="h-6 w-6" />,
    Business: <TrendingUp className="h-6 w-6" />,
    Education: <Book className="h-6 w-6" />,
    AI: <Sparkles className="h-6 w-6" />,
    'Software Development': <Layers className="h-6 w-6" />,
    'Personal Growth': <Heart className="h-6 w-6" />,
  };

  const colors: Record<string, string> = {
    Christian: 'from-purple-500 to-pink-500',
    Technology: 'from-blue-500 to-cyan-500',
    Programming: 'from-green-500 to-emerald-500',
    Leadership: 'from-orange-500 to-red-500',
    Business: 'from-yellow-500 to-orange-500',
    Education: 'from-indigo-500 to-purple-500',
    AI: 'from-pink-500 to-rose-500',
    'Software Development': 'from-teal-500 to-green-500',
    'Personal Growth': 'from-violet-500 to-purple-500',
  };

  return (
    <motion.div variants={staggerItem}>
      <Link href={`/categories?cat=${category.slug}`}>
        <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 p-8 text-center',
              'bg-gradient-to-br',
              colors[category.name] || 'from-blue-500 to-indigo-500'
            )}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {icons[category.name] || <Book className="h-6 w-6" />}
            </div>
            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
            <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white/70">
              Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col items-center text-center"
    >
      <Card className="relative max-w-md p-8 transition-all duration-300 hover:shadow-lg">
        <Quote className="absolute left-6 top-6 h-8 w-8 text-blue-100 dark:text-blue-900" />
        <div className="relative z-10 mt-4 space-y-4">
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 italic">
            &ldquo;{testimonial.content}&rdquo;
          </p>
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SectionHeader({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle?: string;
  link?: { href: string; label: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {link && (
        <Link
          href={link.href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
        >
          {link.label}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
}

export default function HomePage() {
  const { user } = useAuth();
  const [featuredBooks, setFeaturedBooks] = useState<BookType[]>([]);
  const [latestBooks, setLatestBooks] = useState<BookType[]>([]);
  const [popularBooks, setPopularBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const [featured, latest, popular] = await Promise.all([
          fetchBooks({ featured: true, published: true, limitCount: 6 }),
          fetchBooks({ published: true, sortBy: 'newest', limitCount: 8 }),
          fetchBooks({ published: true, sortBy: 'popular', limitCount: 6 }),
        ]);

        setFeaturedBooks(featured);
        setLatestBooks(latest);
        setPopularBooks(popular);
      } catch (err) {
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    try {
      await subscribeNewsletter(newsletterEmail);
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch {
      setNewsletterStatus('error');
    }
  };

  const stats = [
    { icon: Book, label: 'Books Published', value: featuredBooks.length || 12 },
    { icon: Users, label: 'Active Readers', value: '2,847' },
    { icon: Layers, label: 'Chapters', value: '128' },
    { icon: Eye, label: 'Total Views', value: '45.2K' },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content:
        'The books on this platform have completely transformed my approach to both coding and leadership. A truly invaluable resource for anyone looking to grow.',
    },
    {
      id: '2',
      name: 'David Mokoena',
      role: 'University Lecturer',
      content:
        'An exceptional collection of Christian and technology literature. The depth of insight and practical wisdom is remarkable.',
    },
    {
      id: '3',
      name: 'Emily Chen',
      role: 'Startup Founder',
      content:
        'I have found the business and personal growth books to be incredibly practical. They have helped me navigate the challenges of building my startup.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-24 pt-20 sm:pb-32 sm:pt-28"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Welcome to {SITE_NAME}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Discover Books That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Transform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl"
            >
              Explore a curated collection of books spanning Christian faith, technology,
              leadership, and personal growth. Start your journey of transformation today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link href="/books">
                <Button
                  size="lg"
                  className="h-14 min-w-[200px] rounded-2xl bg-white text-blue-700 shadow-xl shadow-blue-900/30 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-900/40 text-base font-semibold"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Books
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 min-w-[200px] rounded-2xl border-white/30 text-white shadow-xl hover:bg-white/10 hover:border-white/50 text-base font-semibold"
                >
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated floating book icon */}
        <motion.div
          className="absolute right-[15%] top-1/4 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
            <BookOpen className="h-10 w-10 text-white/80" />
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[10%] top-[30%] hidden lg:block"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Star className="h-7 w-7 text-white/80" />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        {...fadeInUp}
        className="relative -mt-12 z-10 mx-auto max-w-5xl px-4"
      >
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/50 dark:bg-gray-900 dark:shadow-gray-900/50 sm:grid-cols-4 sm:p-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Featured Books Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Books"
            subtitle="Handpicked selections to inspire and transform your mind"
            link={{ href: '/books', label: 'View All Books' }}
          />

          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <BookCardSkeleton key={i} />
              ))}
            </div>
          ) : featuredBooks.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featuredBooks.slice(0, 6).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <Book className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                No featured books yet
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-500">
                Check back soon for our curated collection of featured books.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Latest Books Section */}
      <section className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Releases"
            subtitle="Newly published books to feed your curiosity"
            link={{ href: '/books?sort=latest', label: 'Browse Latest' }}
          />

          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <BookCardSkeleton key={i} />
              ))}
            </div>
          ) : latestBooks.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {latestBooks.slice(0, 8).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <Book className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                No books released yet
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-500">
                New releases will appear here as they are published.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Popular This Month"
            subtitle="Most viewed books by our community of readers"
            link={{ href: '/books?sort=popular', label: 'See All Popular' }}
          />

          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <BookCardSkeleton key={i} />
              ))}
            </div>
          ) : popularBooks.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {popularBooks.slice(0, 6).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <TrendingUp className="h-16 w-16 text-gray-300 dark:text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                No popular books yet
              </h3>
              <p className="max-w-md text-gray-500 dark:text-gray-500">
                Popular books will appear here as readers engage with content.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Browse by Category"
            subtitle="Find your next read across our diverse range of topics"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Readers Say"
            subtitle="Hear from our community of readers and learners"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="bg-gray-50 py-20 sm:py-28 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <SectionHeader
              title="About the Author"
              subtitle={MISSION_STATEMENT}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/25"
            >
              <span className="text-4xl font-bold tracking-tight">
                {AUTHOR_NAME.split(' ').map((n) => n[0]).join('')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-2xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {AUTHOR_NAME}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {MISSION_STATEMENT} With a passion for bridging the gap between
                faith and technology, each book is crafted to empower readers with
                practical wisdom, spiritual insight, and actionable knowledge.
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                >
                  <X className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${AUTHOR_EMAIL}`}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
            <Mail className="h-4 w-4" />
            Stay Connected
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Get notified about new releases, exclusive content, and special offers.
            No spam, unsubscribe anytime.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="h-14 flex-1 rounded-2xl border-white/20 bg-white/10 px-5 text-white placeholder:text-blue-200 focus-visible:ring-white/50"
            />
            <Button
              type="submit"
              disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
              className="h-14 min-w-[140px] rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-xl shadow-blue-900/30"
            >
              {newsletterStatus === 'loading'
                ? 'Subscribing...'
                : newsletterStatus === 'success'
                  ? 'Subscribed!'
                  : 'Subscribe'}
            </Button>
          </form>

          {newsletterStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-blue-200"
            >
              Thanks for subscribing! Check your inbox for a confirmation email.
            </motion.p>
          )}

          {newsletterStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-300"
            >
              Something went wrong. Please try again later.
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-12 shadow-xl dark:from-blue-950/50 dark:to-indigo-950/50 sm:p-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Ready to Start Reading?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400">
              Join thousands of readers on a journey of discovery and growth.
              Your next great read is just a click away.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={user ? '/books' : '/register'}>
                <Button
                  size="lg"
                  className="h-14 min-w-[200px] rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/25 hover:bg-blue-700 text-base font-semibold"
                >
                  {user ? 'Browse Books' : 'Get Started Free'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 min-w-[200px] rounded-2xl border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 text-base font-semibold"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Books
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
