'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  Star,
  FolderTree,
  TrendingUp,
  Plus,
  Eye,
  ExternalLink,
} from 'lucide-react';
import { fetchDashboardStats, fetchBooks } from '@/lib/db';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDate, getInitials, truncate } from '@/lib/utils';
import type { Book, UserProfile } from '@/types';

interface DashboardData {
  totalBooks: number;
  totalReaders: number;
  totalReviews: number;
  totalCategories: number;
  mostReadBook: Book | null;
  recentReaders: UserProfile[];
  recentBooks: Book[];
}

export default function AdminDashboard() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;

    async function fetchDashboardData() {
      try {
        const [stats, books] = await Promise.all([
          fetchDashboardStats(),
          fetchBooks(),
        ]);

        const mostReadBook = books.length
          ? [...books].sort((a, b) => b.views - a.views)[0]
          : null;

        const recentBooks = [...books]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);

        setData({
          totalBooks: stats.totalBooks,
          totalReaders: stats.totalReaders,
          totalReviews: stats.totalReviews,
          totalCategories: stats.totalCategories,
          mostReadBook,
          recentReaders: [],
          recentBooks,
        });
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [isAdmin]);

  if (authLoading || !isAdmin) return null;

  const statsCards = [
    {
      label: 'Total Books',
      count: data?.totalBooks ?? 0,
      icon: BookOpen,
      gradient: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50 dark:bg-blue-950',
    },
    {
      label: 'Total Readers',
      count: data?.totalReaders ?? 0,
      icon: Users,
      gradient: 'from-emerald-500 to-emerald-600',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950',
    },
    {
      label: 'Total Reviews',
      count: data?.totalReviews ?? 0,
      icon: Star,
      gradient: 'from-amber-500 to-amber-600',
      lightBg: 'bg-amber-50 dark:bg-amber-950',
    },
    {
      label: 'Categories',
      count: data?.totalCategories ?? 0,
      icon: FolderTree,
      gradient: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50 dark:bg-purple-950',
    },
  ];

  const quickActions = [
    { label: 'Create New Book', href: '/admin/books/create', icon: Plus, color: 'text-blue-600' },
    {
      label: 'Manage Categories',
      href: '/admin/categories',
      icon: FolderTree,
      color: 'text-purple-600',
    },
    {
      label: 'View Site',
      href: '/',
      icon: ExternalLink,
      color: 'text-emerald-600',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Dashboard
        </motion.h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Overview of your book platform
        </p>
      </div>

      {loading ? <DashboardSkeleton /> : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {statsCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="relative overflow-hidden">
                  <div className={`absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-10 ${card.lightBg}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className={`rounded-xl p-3 ${card.lightBg}`}>
                        <card.icon className={`h-6 w-6 bg-gradient-to-br ${card.gradient} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                      {card.count}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {card.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {data?.mostReadBook && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg">Most Read Book</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                        {data.mostReadBook.coverImage ? (
                          <img
                            src={data.mostReadBook.coverImage}
                            alt={data.mostReadBook.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <BookOpen className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white truncate">
                          {data.mostReadBook.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          by {data.mostReadBook.author}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {data.mostReadBook.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-400" />
                            {data.mostReadBook.averageRating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Books</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.recentBooks.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No books yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {data?.recentBooks.map((book, i) => (
                        <motion.div
                          key={book.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className="h-12 w-9 shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                            {book.coverImage ? (
                              <img
                                src={book.coverImage}
                                alt={book.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <BookOpen className="h-4 w-4 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {book.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(book.createdAt)} &middot; {book.views} views
                            </p>
                          </div>
                          <Badge variant={book.published ? 'default' : 'secondary'}>
                            {book.published ? 'Published' : 'Draft'}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Readers</CardTitle>
                </CardHeader>
                <CardContent>
                  {data?.recentReaders.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No readers yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {data?.recentReaders.map((reader, i) => (
                        <motion.div
                          key={reader.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={reader.photoURL} />
                            <AvatarFallback>{getInitials(reader.displayName)}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {reader.displayName}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Joined {formatDate(reader.createdAt)}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action) => (
                    <Link key={action.href} href={action.href}>
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3"
                      >
                        <action.icon className={`h-4 w-4 ${action.color}`} />
                        {action.label}
                      </Button>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="mt-4 h-8 w-20" />
              <Skeleton className="mt-1 h-4 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-40" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Skeleton className="h-20 w-14 rounded-lg" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-36" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-12 w-9 rounded-md" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-9 w-9 rounded-full" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-32" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-11 w-full rounded-xl" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
