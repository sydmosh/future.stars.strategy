'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  AlertTriangle,
  BookMarked,
} from 'lucide-react';
import { fetchBooks, deleteBook } from '@/lib/db';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDate, truncate } from '@/lib/utils';
import type { Book } from '@/types';

export default function AdminBooksPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;

    async function loadBooksData() {
      try {
        const list = await fetchBooks();
        setBooks(list);
      } catch (err) {
        console.error('Failed to fetch books:', err);
      } finally {
        setLoading(false);
      }
    }

    loadBooksData();
  }, [isAdmin]);

  const filteredBooks = useMemo(
    () =>
      books.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.author.toLowerCase().includes(search.toLowerCase())
      ),
    [books, search]
  );

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await deleteBook(deleteId);
      setBooks((prev) => prev.filter((b) => b.id !== deleteId));
    } catch (err) {
      console.error('Failed to delete book:', err);
    } finally {
      setDeleting(false);
      setDeleteId(null);
    }
  }

  if (authLoading || !isAdmin) return null;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Books</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your book catalog
          </p>
        </div>
        <Link href="/admin/books/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create New Book
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search books by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </motion.div>

      {loading ? (
        <BooksSkeleton />
      ) : filteredBooks.length === 0 ? (
        <EmptyState search={search} />
      ) : (
        <>
          <div className="hidden md:block">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Cover</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Title</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Author</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Category</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Featured</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Views</th>
                      <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBooks.map((book, i) => (
                      <motion.tr
                        key={book.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="border-b border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-gray-900/50"
                      >
                        <td className="px-6 py-4">
                          <div className="h-12 w-9 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
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
                        </td>
                        <td className="max-w-[200px] px-6 py-4">
                          <p className="truncate font-medium text-gray-900 dark:text-white">
                            {book.title}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {truncate(book.author, 24)}
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">{book.category}</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={book.published ? 'default' : 'secondary'}>
                            {book.published ? 'Published' : 'Draft'}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          {book.featured ? (
                            <Badge variant="default" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                              Featured
                            </Badge>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3.5 w-3.5" />
                            {book.views.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Link href={`/admin/books/${book.id}`}>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
                              onClick={() => setDeleteId(book.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {filteredBooks.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                        {book.coverImage ? (
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <BookOpen className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-gray-900 dark:text-white">
                          {book.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {book.author}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {book.category}
                          </Badge>
                          <Badge variant={book.published ? 'default' : 'secondary'} className="text-xs">
                            {book.published ? 'Published' : 'Draft'}
                          </Badge>
                          {book.featured && (
                            <Badge variant="default" className="bg-amber-100 text-amber-800 text-xs dark:bg-amber-900 dark:text-amber-200">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Eye className="h-3.5 w-3.5" />
                            {book.views.toLocaleString()}
                          </span>
                          <div className="flex items-center gap-1">
                            <Link href={`/admin/books/${book.id}`}>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
                              onClick={() => setDeleteId(book.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      )}

      <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Delete Book</DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete this book? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-center">
            <Button variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="gap-2"
            >
              {deleting ? (
                <>Deleting...</>
              ) : (
                <>
                  <Trash2 className="h-4 w-4" />
                  Delete
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function BooksSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-9 rounded-md" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-32" />
              </div>
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function EmptyState({ search }: { search: string }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-16">
        {search ? (
          <>
            <div className="mb-4 rounded-full bg-gray-100 p-4 dark:bg-gray-800">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              No results found
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              No books match &quot;{search}&quot;. Try a different search term.
            </p>
          </>
        ) : (
          <>
            <div className="mb-4 rounded-full bg-gray-100 p-4 dark:bg-gray-800">
              <BookMarked className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              No books yet
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Get started by creating your first book.
            </p>
            <Link href="/admin/books/create" className="mt-6">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create New Book
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}
