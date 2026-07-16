'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Globe,
  Layers,
  Users,
  TrendingUp,
  Book,
  Sparkles,
  Heart,
  ArrowRight,
  Library,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CATEGORIES, SITE_NAME } from '@/lib/constants';
import { fetchCategories } from '@/lib/db';
import { cn } from '@/lib/utils';
import type { Category } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const iconMap: Record<string, React.ReactNode> = {
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

const gradientMap: Record<string, string> = {
  Christian: 'from-purple-600 to-pink-600',
  Technology: 'from-blue-600 to-cyan-600',
  Programming: 'from-green-600 to-emerald-600',
  Leadership: 'from-orange-600 to-red-600',
  Business: 'from-yellow-600 to-orange-600',
  Education: 'from-indigo-600 to-purple-600',
  AI: 'from-pink-600 to-rose-600',
  'Software Development': 'from-teal-600 to-green-600',
  'Personal Growth': 'from-violet-600 to-purple-600',
};

function CategoryCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col items-center gap-3 p-8 text-center">
        <Skeleton className="h-14 w-14 rounded-2xl" />
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="mt-1 h-3 w-20" />
      </div>
    </Card>
  );
}

function CategoryCard({ category, bookCount }: { category: Category; bookCount: number }) {
  const gradient = gradientMap[category.name] || 'from-blue-600 to-indigo-600';
  const icon = iconMap[category.name] || <Library className="h-6 w-6" />;

  return (
    <motion.div variants={itemVariants} layout>
      <Link href={`/books?cat=${category.slug}`}>
        <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 p-8 text-center',
              'bg-gradient-to-br',
              gradient
            )}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
              {bookCount} {bookCount === 1 ? 'book' : 'books'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors">
              Browse <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Categories | ${SITE_NAME}`;
  }, []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const fetched = await fetchCategories();
        setCategories(fetched.length > 0 ? fetched : CATEGORIES.map((c, i) => ({
          id: String(i),
          name: c.name,
          slug: c.slug,
          description: c.description,
          bookCount: 0,
          createdAt: new Date(),
        })));
      } catch {
        setCategories(CATEGORIES.map((c, i) => ({
          id: String(i),
          name: c.name,
          slug: c.slug,
          description: c.description,
          bookCount: 0,
          createdAt: new Date(),
        })));
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

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
            <Library className="h-4 w-4" />
            Categories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Browse by Category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            Find your next read across our diverse range of topics and genres
          </motion.p>
        </motion.div>
      </section>

      <section className="flex-1 bg-gray-50 py-16 dark:bg-gray-900/50 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <CategoryCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  bookCount={category.bookCount}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
