'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ReadingPreferences } from '@/types';

const STORAGE_KEY = 'reading-preferences';

const defaults: ReadingPreferences = {
  fontSize: 18,
  lineSpacing: 1.8,
  theme: 'light',
  fontFamily: 'serif',
};

export function useReadingPreferences() {
  const [prefs, setPrefs] = useState<ReadingPreferences>(defaults);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setPrefs(JSON.parse(stored)); } catch {}
    }
  }, []);

  const updatePrefs = useCallback((update: Partial<ReadingPreferences>) => {
    setPrefs(prev => {
      const next = { ...prev, ...update };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { ...prefs, updatePrefs };
}
