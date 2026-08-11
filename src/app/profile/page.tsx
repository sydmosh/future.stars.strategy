'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchBooks, updateUserProfile } from '@/lib/db';
import { useAuth } from '@/contexts/AuthContext';
import { useBookmarks } from '@/hooks/useBookmarks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { formatDate, getInitials, formatReadingTime, cn } from '@/lib/utils';
import type { Book, Bookmark as BookmarkType } from '@/types';
import toast from 'react-hot-toast';
import {
  BookOpen, Clock, Flame, Bookmark, History, Heart, Settings as SettingsIcon,
  Trash2, Library, TrendingUp, Award, LogOut, User, ExternalLink,
} from 'lucide-react';

type Tab = 'stats' | 'bookmarks' | 'recent' | 'favorites' | 'settings';

interface ExtendedRecentlyViewed {
  bookId: string;
  chapterId?: string;
  position: number;
  viewedAt: Date;
  book?: Book;
}

export default function ProfilePage() {
  const { user, profile, loading: authLoading, logout, refreshProfile } = useAuth();
  const { bookmarks, loading: bookmarksLoading, removeBookmark } = useBookmarks();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>('stats');
  const [recentBooks, setRecentBooks] = useState<ExtendedRecentlyViewed[]>([]);
  const [favoriteBookList, setFavoriteBookList] = useState<Book[]>([]);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [saving, setSaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!authLoading && !user) router.push('/login');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName || '');
      setPhotoURL(profile.photoURL || '');
    }
  }, [profile]);

  useEffect(() => {
    if (!profile?.recentlyViewed?.length) return;
    const load = async () => {
      const allBooks = await fetchBooks();
      const items = profile.recentlyViewed.slice(0, 10).map((rv) => {
        const book = allBooks.find(b => b.id === rv.bookId);
        return book ? { ...rv, book } : null;
      });
      setRecentBooks(items.filter(Boolean) as ExtendedRecentlyViewed[]);
    };
    load();
  }, [profile?.recentlyViewed]);

  useEffect(() => {
    if (!profile?.favoriteBooks?.length) return;
    const load = async () => {
      const allBooks = await fetchBooks();
      const books = profile.favoriteBooks
        .map((id) => allBooks.find(b => b.id === id))
        .filter(Boolean) as Book[];
      setFavoriteBookList(books);
    };
    load();
  }, [profile?.favoriteBooks]);

  const handleSaveSettings = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await updateUserProfile(user.uid, { displayName, photoURL });
      await refreshProfile();
      toast.success('Profile updated');
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || !mounted) return <ProfileSkeleton />;
  if (!user || !profile) return null;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'stats', label: 'Reading Stats', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'bookmarks', label: `Bookmarks (${bookmarks.length})`, icon: <Bookmark className="h-4 w-4" /> },
    { id: 'recent', label: 'Recently Viewed', icon: <History className="h-4 w-4" /> },
    { id: 'favorites', label: 'Favorite Books', icon: <Heart className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon className="h-4 w-4" /> },
  ];

  const statCards = [
    { label: 'Books Read', value: profile.readingStats.totalBooksRead, icon: <Library className="h-5 w-5" />, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Chapters Read', value: profile.readingStats.totalChaptersRead, icon: <BookOpen className="h-5 w-5" />, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Reading Time', value: formatReadingTime(profile.readingStats.totalReadingTime), icon: <Clock className="h-5 w-5" />, color: 'text-amber-600 dark:text-amber-400' },
    { label: 'Current Streak', value: `${profile.readingStats.currentStreak}d`, icon: <Flame className="h-5 w-5" />, color: 'text-orange-600 dark:text-orange-400' },
    { label: 'Longest Streak', value: `${profile.readingStats.longestStreak}d`, icon: <Award className="h-5 w-5" />, color: 'text-purple-600 dark:text-purple-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <Card className="mb-8 overflow-hidden border-0 shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
            <Avatar className="h-20 w-20 border-4 border-white/40 shadow-lg">
              <AvatarImage src={photoURL || profile.photoURL} />
              <AvatarFallback className="bg-white/20 text-3xl font-bold text-white">
                {getInitials(profile.displayName || 'U')}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {profile.displayName || 'Reader'}
              </h1>
              <p className="text-blue-100">{user.email}</p>
              <p className="mt-1 text-sm text-blue-200/80">
                Member since {profile.createdAt ? formatDate(profile.createdAt) : 'N/A'}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30 capitalize">
                  {profile.role}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-2 sm:px-4 gap-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 whitespace-nowrap border-b-2 px-3 sm:px-4 py-3 text-sm font-medium transition-all',
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
              )}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">
                {tab.id === 'bookmarks' ? `Bookmarks (${bookmarks.length})` : tab.label.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'stats' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {statCards.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn('p-2 rounded-xl bg-gray-100 dark:bg-gray-800', stat.color)}>
                          {stat.icon}
                        </div>
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'bookmarks' && (
            <BookmarksTab
              bookmarks={bookmarks}
              loading={bookmarksLoading}
              onRemove={removeBookmark}
            />
          )}

          {activeTab === 'recent' && (
            <RecentlyViewedTab books={recentBooks} />
          )}

          {activeTab === 'favorites' && (
            <FavoriteBooksTab books={favoriteBookList} />
          )}

          {activeTab === 'settings' && (
            <SettingsTab
              displayName={displayName}
              photoURL={photoURL}
              onDisplayNameChange={setDisplayName}
              onPhotoURLChange={setPhotoURL}
              onSave={handleSaveSettings}
              saving={saving}
              onLogout={logout}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function BookmarksTab({
  bookmarks,
  loading,
  onRemove,
}: {
  bookmarks: BookmarkType[];
  loading: boolean;
  onRemove: (id: string) => Promise<void>;
}) {
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Bookmark className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-lg font-medium text-gray-900 dark:text-white">No bookmarks yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Bookmark chapters while reading to see them here
          </p>
          <Link href="/books">
            <Button variant="outline" className="mt-4">
              Browse Books
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {bookmarks.map((bookmark, i) => (
        <motion.div
          key={bookmark.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          layout
        >
          <Card className="group hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <Link
                href={`/read/${bookmark.bookId}/${bookmark.chapterId}`}
                className="flex-1 min-w-0"
              >
                <p className="font-medium text-gray-900 dark:text-white truncate">
                  {bookmark.bookTitle}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                  {bookmark.chapterTitle}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Bookmarked {bookmark.createdAt ? formatDate(bookmark.createdAt) : ''}
                </p>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(bookmark.id)}
                className="ml-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function RecentlyViewedTab({ books }: { books: ExtendedRecentlyViewed[] }) {
  if (books.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16">
          <History className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-lg font-medium text-gray-900 dark:text-white">No recently viewed books</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Start reading books and they will appear here
          </p>
          <Link href="/books">
            <Button variant="outline" className="mt-4">
              Browse Books
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {books.map((item) => (
        <motion.div
          key={item.bookId + (item.chapterId || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          layout
        >
          <Link href={`/books/${item.book?.slug || item.bookId}`}>
            <Card className="group hover:shadow-md transition-shadow h-full">
              <CardContent className="p-4 flex gap-4">
                {item.book?.coverImage ? (
                  <div className="w-16 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={item.book.coverImage}
                      alt={item.book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-24 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.book?.title || 'Unknown Book'}
                  </p>
                  {item.book?.author && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      by {item.book.author}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {item.viewedAt ? formatDate(item.viewedAt) : ''}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-400">View book</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

function FavoriteBooksTab({ books }: { books: Book[] }) {
  if (books.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Heart className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-lg font-medium text-gray-900 dark:text-white">No favorite books yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Mark books as favorites to see them here
          </p>
          <Link href="/books">
            <Button variant="outline" className="mt-4">
              Browse Books
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book, i) => (
        <motion.div
          key={book.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
        >
          <Link href={`/books/${book.slug}`}>
            <Card className="group hover:shadow-md transition-shadow h-full overflow-hidden">
              {book.coverImage ? (
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-white/70" />
                </div>
              )}
              <CardContent className="p-3">
                <p className="font-medium text-sm text-gray-900 dark:text-white truncate">
                  {book.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                  {book.author}
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

function SettingsTab({
  displayName,
  photoURL,
  onDisplayNameChange,
  onPhotoURLChange,
  onSave,
  saving,
  onLogout,
}: {
  displayName: string;
  photoURL: string;
  onDisplayNameChange: (v: string) => void;
  onPhotoURLChange: (v: string) => void;
  onSave: () => Promise<void>;
  saving: boolean;
  onLogout: () => Promise<void>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="displayName">Display Name</Label>
          <Input
            id="displayName"
            value={displayName}
            onChange={(e) => onDisplayNameChange(e.target.value)}
            placeholder="Your display name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="photoURL">Photo URL</Label>
          <Input
            id="photoURL"
            value={photoURL}
            onChange={(e) => onPhotoURLChange(e.target.value)}
            placeholder="https://example.com/photo.jpg"
          />
          {photoURL && (
            <div className="mt-2 flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={photoURL} />
                <AvatarFallback className="bg-gray-100 dark:bg-gray-800">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-500 dark:text-gray-400">Preview</span>
            </div>
          )}
        </div>
        <Separator />
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={onSave} disabled={saving} className="flex-1">
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button variant="destructive" onClick={onLogout} className="flex-1 sm:flex-none">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ProfileSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-48 w-full mb-8 rounded-2xl" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
