'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Save,
  ImagePlus,
  X,
  Loader2,
  Plus,
  Trash2,
  GripVertical,
  Edit,
  BookOpen,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { slugify, formatReadingTime, calculateReadingTime } from '@/lib/utils';
import { FIRESTORE_COLLECTIONS } from '@/lib/constants';
import type { Book, Chapter, Category } from '@/types';
import toast from 'react-hot-toast';

const LANGUAGES = [
  'English', 'French', 'Portuguese', 'Spanish', 'German',
  'Chinese', 'Japanese', 'Arabic', 'Russian', 'Other',
] as const;

interface ChapterFormData {
  title: string;
  slug: string;
  content: string;
}

export default function EditBookPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const bookId = params.id as string;

  const [book, setBook] = useState<Book | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loadingBook, setLoadingBook] = useState(true);
  const [loadingChapters, setLoadingChapters] = useState(true);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('English');
  const [category, setCategory] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [published, setPublished] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [coverDeleted, setCoverDeleted] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const slugManuallyEdited = useRef(false);

  const [chapterDialogOpen, setChapterDialogOpen] = useState(false);
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null);
  const [chapterForm, setChapterForm] = useState<ChapterFormData>({
    title: '', slug: '', content: '',
  });
  const [chapterErrors, setChapterErrors] = useState<Record<string, string>>({});
  const [savingChapter, setSavingChapter] = useState(false);

  const [deleteChapterId, setDeleteChapterId] = useState<string | null>(null);
  const [deletingChapter, setDeletingChapter] = useState(false);

  const [deleteBookOpen, setDeleteBookOpen] = useState(false);
  const [deletingBook, setDeletingBook] = useState(false);

  const chapterSlugEdited = useRef(false);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  const fetchBook = useCallback(async () => {
    if (!isAdmin || !bookId) return;
    try {
      const snap = await getDoc(doc(db, FIRESTORE_COLLECTIONS.BOOKS, bookId));
      if (!snap.exists()) {
        toast.error('Book not found');
        router.push('/admin/books');
        return;
      }
      const data = { id: snap.id, ...snap.data() } as Book;
      setBook(data);
      setTitle(data.title);
      setSubtitle(data.subtitle || '');
      setSlug(data.slug);
      setDescription(data.description);
      setAuthor(data.author);
      setLanguage(data.language);
      setCategory(data.category);
      setTags(data.tags || []);
      setPublished(data.published);
      setFeatured(data.featured);
      if (data.coverImage) setCoverPreview(data.coverImage);
    } catch {
      toast.error('Failed to load book');
    } finally {
      setLoadingBook(false);
    }
  }, [isAdmin, bookId, router]);

  const fetchChapters = useCallback(async () => {
    if (!isAdmin || !bookId) return;
    try {
      const q = query(
        collection(db, FIRESTORE_COLLECTIONS.CHAPTERS),
        where('bookId', '==', bookId),
        orderBy('chapterNumber', 'asc')
      );
      const snap = await getDocs(q);
      setChapters(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Chapter)));
    } catch {
      toast.error('Failed to load chapters');
    } finally {
      setLoadingChapters(false);
    }
  }, [isAdmin, bookId]);

  useEffect(() => {
    if (isAdmin) {
      fetchBook();
      fetchChapters();
      loadCategories();
    }
  }, [isAdmin, fetchBook, fetchChapters]);

  async function loadCategories() {
    try {
      const snap = await getDocs(collection(db, FIRESTORE_COLLECTIONS.CATEGORIES));
      setCategories(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Category)));
    } catch {
      toast.error('Failed to load categories');
    } finally {
      setLoadingCategories(false);
    }
  }

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugManuallyEdited.current) {
      setSlug(slugify(value));
    }
  };

  const handleSlugChange = (value: string) => {
    slugManuallyEdited.current = true;
    setSlug(value);
  };

  const handleTagsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const trimmed = tagsInput.trim();
      if (trimmed && !tags.includes(trimmed)) {
        setTags((prev) => [...prev, trimmed]);
      }
      setTagsInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
    setCoverDeleted(false);
  };

  const removeCover = () => {
    setCoverFile(null);
    setCoverPreview(null);
    setUploadProgress(null);
    setCoverDeleted(true);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!slug.trim()) newErrors.slug = 'Slug is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!author.trim()) newErrors.author = 'Author is required';
    if (!category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      toast.error('Please fix the form errors');
      return;
    }
    setSubmitting(true);
    try {
      let coverImageUrl = book?.coverImage || '';
      if (coverDeleted) {
        if (book?.coverImage) {
          try {
            const oldRef = storageRef(storage, book.coverImage);
            await deleteObject(oldRef);
          } catch { /* file may not exist */ }
        }
        coverImageUrl = '';
      }
      if (coverFile) {
        const fileRef = storageRef(storage, `books/covers/${Date.now()}_${coverFile.name}`);
        const uploadTask = uploadBytesResumable(fileRef, coverFile);
        await new Promise<void>((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              setUploadProgress(
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
              );
            },
            reject,
            async () => {
              coverImageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      await updateDoc(doc(db, FIRESTORE_COLLECTIONS.BOOKS, bookId), {
        title: title.trim(),
        subtitle: subtitle.trim(),
        slug: slug.trim(),
        description: description.trim(),
        author: author.trim(),
        language,
        category,
        tags,
        published,
        featured,
        coverImage: coverImageUrl,
        updatedAt: serverTimestamp(),
      });

      toast.success('Book updated!');
      router.push('/admin/books');
    } catch {
      toast.error('Failed to update book');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteBook = async () => {
    setDeletingBook(true);
    try {
      const batch = writeBatch(db);
      batch.delete(doc(db, FIRESTORE_COLLECTIONS.BOOKS, bookId));
      for (const ch of chapters) {
        batch.delete(doc(db, FIRESTORE_COLLECTIONS.CHAPTERS, ch.id));
      }
      await batch.commit();

      if (book?.coverImage) {
        try {
          await deleteObject(storageRef(storage, book.coverImage));
        } catch { /* ignore */ }
      }

      toast.success('Book deleted');
      router.push('/admin/books');
    } catch {
      toast.error('Failed to delete book');
    } finally {
      setDeletingBook(false);
      setDeleteBookOpen(false);
    }
  };

  const openChapterDialog = (chapter?: Chapter) => {
    if (chapter) {
      setEditingChapter(chapter);
      setChapterForm({ title: chapter.title, slug: chapter.slug, content: chapter.content });
    } else {
      setEditingChapter(null);
      setChapterForm({ title: '', slug: '', content: '' });
      chapterSlugEdited.current = false;
    }
    setChapterErrors({});
    setChapterDialogOpen(true);
  };

  const handleChapterTitleChange = (value: string) => {
    setChapterForm((prev) => ({
      ...prev,
      title: value,
      slug: chapterSlugEdited.current ? prev.slug : slugify(value),
    }));
  };

  const validateChapter = (): boolean => {
    const errs: Record<string, string> = {};
    if (!chapterForm.title.trim()) errs.title = 'Title is required';
    if (!chapterForm.slug.trim()) errs.slug = 'Slug is required';
    if (!chapterForm.content.trim()) errs.content = 'Content is required';
    setChapterErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const saveChapter = async () => {
    if (!validateChapter()) return;
    setSavingChapter(true);
    try {
      if (editingChapter) {
        await updateDoc(doc(db, FIRESTORE_COLLECTIONS.CHAPTERS, editingChapter.id), {
          title: chapterForm.title.trim(),
          slug: chapterForm.slug.trim(),
          content: chapterForm.content,
          estimatedReadingTime: calculateReadingTime(chapterForm.content),
        });
        setChapters((prev) =>
          prev.map((ch) =>
            ch.id === editingChapter.id
              ? {
                  ...ch,
                  title: chapterForm.title.trim(),
                  slug: chapterForm.slug.trim(),
                  content: chapterForm.content,
                  estimatedReadingTime: calculateReadingTime(chapterForm.content),
                }
              : ch
          )
        );
        toast.success('Chapter updated');
      } else {
        const chapterNumber = chapters.length + 1;
        const docRef = await addDoc(collection(db, FIRESTORE_COLLECTIONS.CHAPTERS), {
          bookId,
          title: chapterForm.title.trim(),
          slug: chapterForm.slug.trim(),
          chapterNumber,
          content: chapterForm.content,
          estimatedReadingTime: calculateReadingTime(chapterForm.content),
          createdAt: serverTimestamp(),
        });
        setChapters((prev) => [
          ...prev,
          {
            id: docRef.id,
            bookId,
            title: chapterForm.title.trim(),
            slug: chapterForm.slug.trim(),
            chapterNumber,
            content: chapterForm.content,
            estimatedReadingTime: calculateReadingTime(chapterForm.content),
            createdAt: new Date(),
          } as Chapter,
        ]);
        toast.success('Chapter added');
      }
      setChapterDialogOpen(false);
    } catch {
      toast.error('Failed to save chapter');
    } finally {
      setSavingChapter(false);
    }
  };

  const deleteChapter = async () => {
    if (!deleteChapterId) return;
    setDeletingChapter(true);
    try {
      await deleteDoc(doc(db, FIRESTORE_COLLECTIONS.CHAPTERS, deleteChapterId));
      setChapters((prev) => prev.filter((ch) => ch.id !== deleteChapterId));
      toast.success('Chapter deleted');
    } catch {
      toast.error('Failed to delete chapter');
    } finally {
      setDeletingChapter(false);
      setDeleteChapterId(null);
    }
  };

  const moveChapter = async (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= chapters.length) return;

    const updated = [...chapters];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    updated.forEach((ch, i) => { ch.chapterNumber = i + 1; });
    setChapters(updated);

    const batch = writeBatch(db);
    updated.forEach((ch) => {
      batch.update(doc(db, FIRESTORE_COLLECTIONS.CHAPTERS, ch.id), {
        chapterNumber: ch.chapterNumber,
      });
    });
    try {
      await batch.commit();
    } catch {
      toast.error('Failed to reorder chapters');
      fetchChapters();
    }
  };

  if (authLoading || !isAdmin) return null;

  if (loadingBook) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Card><CardContent className="p-6 space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-11 w-full" />
              <Skeleton className="h-28 w-full" />
            </CardContent></Card>
          </div>
          <Card><CardContent className="p-6 space-y-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </CardContent></Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <Link href="/admin/books">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Edit Book
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {book?.title || 'Loading...'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="destructive"
            onClick={() => setDeleteBookOpen(true)}
            className="gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="gap-2"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        <div className="space-y-8 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Book Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                  />
                  {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">
                  Slug <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                />
                {errors.slug && <p className="text-xs text-red-500">{errors.slug}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                />
                {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="author">
                    Author <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  {errors.author && <p className="text-xs text-red-500">{errors.author}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-white"
                  >
                    {LANGUAGES.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categorization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-red-500">*</span>
                </Label>
                {loadingCategories ? (
                  <Skeleton className="h-11 w-full rounded-xl" />
                ) : (
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                )}
                {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="gap-1">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1 rounded-full p-0.5 hover:bg-gray-300 dark:hover:bg-gray-600">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    onKeyDown={handleTagsKeyDown}
                    placeholder="Type a tag and press Enter or comma"
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={() => {
                    const trimmed = tagsInput.trim();
                    if (trimmed && !tags.includes(trimmed)) setTags((prev) => [...prev, trimmed]);
                    setTagsInput('');
                  }} disabled={!tagsInput.trim()}>
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cover Image</CardTitle>
            </CardHeader>
            <CardContent>
              {coverPreview ? (
                <div className="relative inline-block">
                  <img src={coverPreview} alt="Cover" className="h-48 w-32 rounded-xl object-cover shadow-lg" />
                  <button type="button" onClick={removeCover} className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white shadow-lg hover:bg-red-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-600 dark:hover:bg-blue-950/30">
                  <ImagePlus className="mb-2 h-8 w-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Click to upload cover image</span>
                  <span className="mt-1 text-xs text-gray-400">PNG, JPG, WebP up to 5MB</span>
                  <input type="file" accept="image/*" onChange={handleCoverSelect} className="hidden" />
                </label>
              )}
              {uploadProgress !== null && (
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Uploading...</span>
                    <span className="font-medium text-blue-600">{uploadProgress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Chapters</CardTitle>
              <Button size="sm" onClick={() => openChapterDialog()} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Chapter
              </Button>
            </CardHeader>
            <CardContent>
              {loadingChapters ? (
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-xl" />
                  ))}
                </div>
              ) : chapters.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <BookOpen className="mb-2 h-10 w-10 text-gray-300 dark:text-gray-600" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No chapters yet. Click &quot;Add Chapter&quot; to get started.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {chapters.map((chapter, index) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div className="flex flex-col gap-0.5">
                        <button
                          type="button"
                          onClick={() => moveChapter(index, 'up')}
                          disabled={index === 0}
                          className="text-gray-400 hover:text-gray-600 disabled:opacity-30 dark:hover:text-gray-300"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveChapter(index, 'down')}
                          disabled={index === chapters.length - 1}
                          className="text-gray-400 hover:text-gray-600 disabled:opacity-30 dark:hover:text-gray-300"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {chapter.chapterNumber}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {chapter.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatReadingTime(chapter.estimatedReadingTime || 0)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openChapterDialog(chapter)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
                          onClick={() => setDeleteChapterId(chapter.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="published" className="cursor-pointer">Published</Label>
                <button
                  id="published"
                  type="button"
                  role="switch"
                  aria-checked={published}
                  onClick={() => setPublished(!published)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    published ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    published ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="featured" className="cursor-pointer">Featured</Label>
                <button
                  id="featured"
                  type="button"
                  role="switch"
                  aria-checked={featured}
                  onClick={() => setFeatured(!featured)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    featured ? 'bg-amber-500' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    featured ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Chapters</span>
                <span className="font-medium text-gray-900 dark:text-white">{chapters.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Characters</span>
                <span className="font-medium text-gray-900 dark:text-white">{description.length.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span className="font-medium text-gray-900 dark:text-white">{tags.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Published</span>
                <Badge variant={published ? 'default' : 'secondary'} className="text-xs">
                  {published ? 'Yes' : 'No'}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Featured</span>
                <Badge variant={featured ? 'default' : 'secondary'} className="text-xs">
                  {featured ? 'Yes' : 'No'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <Dialog open={chapterDialogOpen} onOpenChange={(open) => !open && setChapterDialogOpen(false)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingChapter ? 'Edit Chapter' : 'Add Chapter'}</DialogTitle>
            <DialogDescription>
              {editingChapter ? 'Update the chapter details below.' : 'Create a new chapter for this book.'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chapterTitle">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="chapterTitle"
                value={chapterForm.title}
                onChange={(e) => handleChapterTitleChange(e.target.value)}
                placeholder="Chapter title"
              />
              {chapterErrors.title && <p className="text-xs text-red-500">{chapterErrors.title}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="chapterSlug">
                Slug <span className="text-red-500">*</span>
              </Label>
              <Input
                id="chapterSlug"
                value={chapterForm.slug}
                onChange={(e) => {
                  chapterSlugEdited.current = true;
                  setChapterForm((prev) => ({ ...prev, slug: e.target.value }));
                }}
                placeholder="chapter-url-slug"
              />
              {chapterErrors.slug && <p className="text-xs text-red-500">{chapterErrors.slug}</p>}
              <p className="text-xs text-gray-400">Auto-generated from title. Edit manually if needed.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="chapterContent">
                Content <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="chapterContent"
                value={chapterForm.content}
                onChange={(e) => setChapterForm((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Write your chapter content here... (Markdown supported)"
                rows={12}
                className="font-mono text-sm"
              />
              {chapterErrors.content && <p className="text-xs text-red-500">{chapterErrors.content}</p>}
              <p className="text-xs text-gray-400">
                Supports basic Markdown: **bold**, *italic*, ## headings, - lists, etc.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setChapterDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveChapter} disabled={savingChapter} className="gap-2">
              {savingChapter ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {editingChapter ? 'Update' : 'Add'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteChapterId} onOpenChange={(open) => !open && setDeleteChapterId(null)}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Delete Chapter</DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete this chapter? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-center">
            <Button variant="outline" onClick={() => setDeleteChapterId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={deleteChapter} disabled={deletingChapter} className="gap-2">
              {deletingChapter ? 'Deleting...' : (
                <><Trash2 className="h-4 w-4" /> Delete</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteBookOpen} onOpenChange={(open) => !open && setDeleteBookOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Delete Book</DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete this book and all its chapters? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-center">
            <Button variant="outline" onClick={() => setDeleteBookOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteBook} disabled={deletingBook} className="gap-2">
              {deletingBook ? 'Deleting...' : (
                <><Trash2 className="h-4 w-4" /> Delete Book</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
