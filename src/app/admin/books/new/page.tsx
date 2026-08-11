'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Save,
  Send,
  ImagePlus,
  X,
  Loader2,
} from 'lucide-react';
import { createBook, uploadCover, fetchCategories } from '@/lib/db';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { slugify } from '@/lib/utils';
import type { Category } from '@/types';
import toast from 'react-hot-toast';

const LANGUAGES = [
  'English',
  'French',
  'Portuguese',
  'Spanish',
  'German',
  'Chinese',
  'Japanese',
  'Arabic',
  'Russian',
  'Other',
] as const;

export default function CreateBookPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();

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
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const slugManuallyEdited = useRef(false);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;

    async function loadCategories() {
      try {
        const list = await fetchCategories();
        setCategories(list);
        if (list.length > 0 && !category) {
          setCategory(list[0].id);
        }
      } catch {
        toast.error('Failed to load categories');
      } finally {
        setLoadingCategories(false);
      }
    }

    loadCategories();
  }, [isAdmin]);

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
      addTag();
    }
  };

  const addTag = () => {
    const trimmed = tagsInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
    }
    setTagsInput('');
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
  };

  const removeCover = () => {
    setCoverFile(null);
    setCoverPreview(null);
    setUploadProgress(null);
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

  const handleSubmit = async (publishNow: boolean) => {
    if (!validate()) {
      toast.error('Please fix the form errors');
      return;
    }

    setSubmitting(true);

    try {
      let coverImageUrl = '';

      if (coverFile) {
        setUploadProgress(50);
        coverImageUrl = await uploadCover(coverFile, `books/covers/${Date.now()}_${coverFile.name}`);
        setUploadProgress(100);
      }

      await createBook({
        title: title.trim(),
        subtitle: subtitle.trim(),
        slug: slug.trim(),
        description: description.trim(),
        author: author.trim(),
        language,
        category,
        tags,
        published: publishNow,
        featured,
        coverImage: coverImageUrl,
        readingTime: 0,
        views: 0,
        averageRating: 0,
        totalReviews: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      toast.success(publishNow ? 'Book published!' : 'Draft saved!');
      router.push('/admin/books');
    } catch {
      toast.error('Failed to save book. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading || !isAdmin) return null;

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
              Create New Book
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Add a new book to your catalog
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => handleSubmit(false)}
            disabled={submitting}
            className="gap-2"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Draft
          </Button>
          <Button
            onClick={() => handleSubmit(true)}
            disabled={submitting}
            className="gap-2"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            Publish
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
                    placeholder="Enter book title"
                  />
                  {errors.title && (
                    <p className="text-xs text-red-500">{errors.title}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Optional subtitle"
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
                  placeholder="book-url-slug"
                />
                {errors.slug && (
                  <p className="text-xs text-red-500">{errors.slug}</p>
                )}
                <p className="text-xs text-gray-400">
                  Auto-generated from title. Edit manually if needed.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write a compelling book description..."
                  rows={5}
                />
                {errors.description && (
                  <p className="text-xs text-red-500">{errors.description}</p>
                )}
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
                    placeholder="Author name"
                  />
                  {errors.author && (
                    <p className="text-xs text-red-500">{errors.author}</p>
                  )}
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
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
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
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                )}
                {errors.category && (
                  <p className="text-xs text-red-500">{errors.category}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 rounded-full p-0.5 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
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
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addTag}
                    disabled={!tagsInput.trim()}
                  >
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
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="h-48 w-32 rounded-xl object-cover shadow-lg"
                  />
                  <button
                    type="button"
                    onClick={removeCover}
                    className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white shadow-lg hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-600 dark:hover:bg-blue-950/30">
                  <ImagePlus className="mb-2 h-8 w-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Click to upload cover image
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    PNG, JPG, WebP up to 5MB
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverSelect}
                    className="hidden"
                  />
                </label>
              )}
              {uploadProgress !== null && (
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Uploading...
                    </span>
                    <span className="font-medium text-blue-600">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
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
                <Label htmlFor="published" className="cursor-pointer">
                  Published
                </Label>
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
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      published ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured
                </Label>
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
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      featured ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
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
                <span className="font-medium text-gray-900 dark:text-white">0</span>
              </div>
              <div className="flex justify-between">
                <span>Characters</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {description.length.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {tags.length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
