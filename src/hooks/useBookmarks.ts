'use client';

import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import type { Bookmark } from '@/types';

export function useBookmarks() {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }
    const load = async () => {
      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setBookmarks(data.bookmarks || []);
      }
      setLoading(false);
    };
    load();
  }, [user]);

  const addBookmark = useCallback(async (bookmark: Bookmark) => {
    if (!user || !db) return;
    const ref = doc(db, 'users', user.uid);
    await updateDoc(ref, { bookmarks: arrayUnion(bookmark) });
    setBookmarks(prev => [...prev, bookmark]);
  }, [user]);

  const removeBookmark = useCallback(async (bookmarkId: string) => {
    if (!user || !db) return;
    const ref = doc(db, 'users', user.uid);
    const bookmark = bookmarks.find(b => b.id === bookmarkId);
    if (bookmark) {
      await updateDoc(ref, { bookmarks: arrayRemove(bookmark) });
      setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
    }
  }, [user, bookmarks]);

  const isBookmarked = useCallback((bookId: string, chapterId?: string) => {
    return bookmarks.some(b => b.bookId === bookId && (!chapterId || b.chapterId === chapterId));
  }, [bookmarks]);

  return { bookmarks, loading, addBookmark, removeBookmark, isBookmarked };
}
