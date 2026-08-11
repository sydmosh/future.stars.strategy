'use client';

import { useState, useEffect, useCallback } from 'react';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import type { ReadingProgress } from '@/types';

export function useReadingProgress(bookId: string) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ReadingProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !bookId || !db) {
      setLoading(false);
      return;
    }
    const loadProgress = async () => {
      const ref = doc(db, 'readingProgress', `${user.uid}_${bookId}`);
      const snap = await getDoc(ref);
      if (snap.exists()) setProgress(snap.data() as ReadingProgress);
      setLoading(false);
    };
    loadProgress();
  }, [user, bookId]);

  const saveProgress = useCallback(async (chapterId: string, position: number, percentage: number) => {
    if (!user || !bookId || !db) return;
    const ref = doc(db, 'readingProgress', `${user.uid}_${bookId}`);
    await setDoc(ref, {
      bookId,
      chapterId,
      position,
      percentage,
      updatedAt: serverTimestamp(),
      userId: user.uid,
    }, { merge: true });
    setProgress(prev => prev ? { ...prev, chapterId, position, percentage } : { bookId, chapterId, position, percentage, updatedAt: new Date() });
  }, [user, bookId]);

  return { progress, loading, saveProgress };
}
