'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  type DocumentData,
  type QueryConstraint,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { STATIC_BOOKS, STATIC_BOOK, STATIC_CHAPTERS, getStaticBookBySlug, getStaticChapterBySlug, getStaticBookReadingTime, getStaticChapters } from '@/data/books';
import { STATIC_CATEGORIES } from '@/data/categories';
import type { Book, Chapter, Category, Review, Comment, NewsletterSubscriber, ContactMessage, SiteSettings, ReadingProgress, UserProfile, ChallengeData } from '@/types';

function isFirebaseAvailable(): boolean {
  return !!db && !!storage;
}

// Books
export async function fetchBooks(opts?: {
  category?: string;
  featured?: boolean;
  published?: boolean;
  sortBy?: 'newest' | 'popular' | 'title';
  limitCount?: number;
}): Promise<Book[]> {
  if (!isFirebaseAvailable()) {
    let books = [...STATIC_BOOKS];
    if (opts?.featured) books = books.filter(b => b.featured);
    if (opts?.published !== false) books = books.filter(b => b.published);
    if (opts?.category) books = books.filter(b => b.category.toLowerCase() === opts.category?.toLowerCase());
    if (opts?.sortBy === 'title') books.sort((a, b) => a.title.localeCompare(b.title));
    if (opts?.limitCount) books = books.slice(0, opts.limitCount);
    return books;
  }

  const constraints: QueryConstraint[] = [];
  if (opts?.published !== false) constraints.push(where('published', '==', true));
  if (opts?.featured) constraints.push(where('featured', '==', true));
  if (opts?.category) constraints.push(where('category', '==', opts.category));
  if (opts?.sortBy === 'newest') constraints.push(orderBy('createdAt', 'desc'));
  else if (opts?.sortBy === 'popular') constraints.push(orderBy('views', 'desc'));
  else if (opts?.sortBy === 'title') constraints.push(orderBy('title', 'asc'));
  if (opts?.limitCount) constraints.push(limit(opts.limitCount));

  const q = query(collection(db!, 'books'), ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Book));
}

export async function fetchBookBySlug(slug: string): Promise<Book | null> {
  if (!isFirebaseAvailable()) {
    return getStaticBookBySlug(slug) || null;
  }
  const q = query(collection(db!, 'books'), where('slug', '==', slug), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return { id: snap.docs[0].id, ...snap.docs[0].data() } as Book;
}

export async function fetchBookById(id: string): Promise<Book | null> {
  if (!isFirebaseAvailable()) {
    return STATIC_BOOKS.find(b => b.id === id) || null;
  }
  const snap = await getDoc(doc(db!, 'books', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Book;
}

// Chapters
export async function fetchChapters(bookId: string): Promise<Chapter[]> {
  if (!isFirebaseAvailable()) {
    return getStaticChapters(bookId);
  }
  const q = query(collection(db!, 'chapters'), where('bookId', '==', bookId), orderBy('chapterNumber', 'asc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Chapter));
}

export async function fetchChapterBySlug(bookSlug: string, chapterSlug: string): Promise<Chapter | null> {
  if (!isFirebaseAvailable()) {
    return getStaticChapterBySlug(bookSlug, chapterSlug) || null;
  }
  const book = await fetchBookBySlug(bookSlug);
  if (!book) return null;
  const q = query(collection(db!, 'chapters'), where('bookId', '==', book.id), where('slug', '==', chapterSlug), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return { id: snap.docs[0].id, ...snap.docs[0].data() } as Chapter;
}

// Categories
export async function fetchCategories(): Promise<Category[]> {
  if (!isFirebaseAvailable()) return STATIC_CATEGORIES;
  const snap = await getDocs(collection(db!, 'categories'));
  if (snap.empty) return STATIC_CATEGORIES;
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Category));
}

// Reviews
export async function fetchReviews(bookId: string): Promise<Review[]> {
  if (!isFirebaseAvailable()) return [];
  const q = query(collection(db!, 'reviews'), where('bookId', '==', bookId), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Review));
}

export async function addReview(review: Omit<Review, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await addDoc(collection(db!, 'reviews'), { ...review, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
}

// Users
export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  if (!isFirebaseAvailable()) return null;
  const snap = await getDoc(doc(db!, 'users', userId));
  if (!snap.exists()) return null;
  return snap.data() as UserProfile;
}

export async function updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await updateDoc(doc(db!, 'users', userId), data);
}

// Reading Progress
export async function saveReadingProgress(progress: Omit<ReadingProgress, 'updatedAt'> & { userId: string }): Promise<void> {
  if (!isFirebaseAvailable()) return;
  const ref = doc(db!, 'readingProgress', `${progress.userId}_${progress.bookId}`);
  await setDoc(ref, { ...progress, updatedAt: serverTimestamp() }, { merge: true });
}

export async function getReadingProgress(userId: string, bookId: string): Promise<ReadingProgress | null> {
  if (!isFirebaseAvailable()) return null;
  const snap = await getDoc(doc(db!, 'readingProgress', `${userId}_${bookId}`));
  if (!snap.exists()) return null;
  return snap.data() as ReadingProgress;
}

// Contact
export async function submitContactMessage(msg: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await addDoc(collection(db!, 'contactMessages'), { ...msg, createdAt: serverTimestamp() });
}

// Newsletter
export async function subscribeNewsletter(email: string): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await addDoc(collection(db!, 'newsletter'), { email, subscribedAt: serverTimestamp(), active: true });
}

// Storage - only works with Firebase
export async function uploadCover(file: File, path: string): Promise<string> {
  if (!isFirebaseAvailable()) return '';
  const storageRef = ref(storage!, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteCover(path: string): Promise<void> {
  if (!isFirebaseAvailable()) return;
  const storageRef = ref(storage!, path);
  await deleteObject(storageRef);
}

// Admin operations (Firebase only)
export async function createBook(book: Omit<Book, 'id'>): Promise<string> {
  if (!isFirebaseAvailable()) return '';
  const docRef = await addDoc(collection(db!, 'books'), { ...book, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
  return docRef.id;
}

export async function updateBook(id: string, data: Partial<Book>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await updateDoc(doc(db!, 'books', id), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteBook(id: string): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await deleteDoc(doc(db!, 'books', id));
}

export async function createChapter(chapter: Omit<Chapter, 'id'>): Promise<string> {
  if (!isFirebaseAvailable()) return '';
  const docRef = await addDoc(collection(db!, 'chapters'), { ...chapter, createdAt: serverTimestamp() });
  return docRef.id;
}

export async function updateChapter(id: string, data: Partial<Chapter>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await updateDoc(doc(db!, 'chapters', id), data);
}

export async function deleteChapter(id: string): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await deleteDoc(doc(db!, 'chapters', id));
}

export async function createCategory(cat: Omit<Category, 'id'>): Promise<string> {
  if (!isFirebaseAvailable()) return '';
  const docRef = await addDoc(collection(db!, 'categories'), cat);
  return docRef.id;
}

export async function updateCategory(id: string, data: Partial<Category>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await updateDoc(doc(db!, 'categories', id), data);
}

export async function deleteCategory(id: string): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await deleteDoc(doc(db!, 'categories', id));
}

export async function saveSettings(settings: SiteSettings): Promise<void> {
  if (!isFirebaseAvailable()) return;
  await setDoc(doc(db!, 'settings', 'main'), settings);
}

export async function fetchSettings(): Promise<SiteSettings | null> {
  if (!isFirebaseAvailable()) return null;
  const snap = await getDoc(doc(db!, 'settings', 'main'));
  if (!snap.exists()) return null;
  return snap.data() as SiteSettings;
}

// Search
export async function searchBooks(term: string): Promise<Book[]> {
  if (!isFirebaseAvailable()) {
    const lower = term.toLowerCase();
    return STATIC_BOOKS.filter(b =>
      b.title.toLowerCase().includes(lower) ||
      b.author.toLowerCase().includes(lower) ||
      b.tags.some(t => t.toLowerCase().includes(lower))
    );
  }
  const q = query(collection(db!, 'books'), where('published', '==', true));
  const snap = await getDocs(q);
  const lower = term.toLowerCase();
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() } as Book))
    .filter(b =>
      b.title.toLowerCase().includes(lower) ||
      b.author.toLowerCase().includes(lower) ||
      b.tags?.some(t => t.toLowerCase().includes(lower))
    );
}

// Dashboard stats (Firebase only)
export async function fetchDashboardStats(): Promise<{
  totalBooks: number;
  totalReaders: number;
  totalReviews: number;
  totalCategories: number;
}> {
  if (!isFirebaseAvailable()) {
    return { totalBooks: STATIC_BOOKS.length, totalReaders: 1, totalReviews: 0, totalCategories: 9 };
  }
  const [booksSnap, usersSnap, reviewsSnap, catsSnap] = await Promise.all([
    getDocs(collection(db!, 'books')),
    getDocs(collection(db!, 'users')),
    getDocs(collection(db!, 'reviews')),
    getDocs(collection(db!, 'categories')),
  ]);
  return {
    totalBooks: booksSnap.size,
    totalReaders: usersSnap.size,
    totalReviews: reviewsSnap.size,
    totalCategories: catsSnap.size || STATIC_CATEGORIES.length,
  };
}

// Challenge / LGCSE Success Tracker
export async function saveChallengeData(userId: string, data: Partial<ChallengeData>): Promise<void> {
  if (!isFirebaseAvailable()) return;
  const ref = doc(db!, 'challenges', userId);
  await setDoc(ref, { ...data, userId, updatedAt: serverTimestamp() }, { merge: true });
}

export async function fetchChallengeData(userId: string): Promise<ChallengeData | null> {
  if (!isFirebaseAvailable()) return null;
  const snap = await getDoc(doc(db!, 'challenges', userId));
  if (!snap.exists()) return null;
  return snap.data() as ChallengeData;
}
