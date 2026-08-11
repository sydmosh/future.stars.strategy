'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Loader2,
  FolderTree,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
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
import { slugify } from '@/lib/utils';
import { FIRESTORE_COLLECTIONS } from '@/lib/constants';
import type { Category } from '@/types';
import toast from 'react-hot-toast';

export default function AdminCategoriesPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [addOpen, setAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [adding, setAdding] = useState(false);
  const [addErrors, setAddErrors] = useState<Record<string, string>>({});
  const slugManuallyEdited = useRef(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editSlug, setEditSlug] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [savingEdit, setSavingEdit] = useState(false);
  const editSlugManuallyEdited = useRef(false);

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;
    fetchCategories();
  }, [isAdmin]);

  async function fetchCategories() {
    try {
      const snap = await getDocs(collection(db, FIRESTORE_COLLECTIONS.CATEGORIES));
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Category));
      setCategories(list);
    } catch {
      toast.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  }

  const resetAddForm = () => {
    setNewName('');
    setNewSlug('');
    setNewDescription('');
    setAddErrors({});
    slugManuallyEdited.current = false;
  };

  const handleNewNameChange = (value: string) => {
    setNewName(value);
    if (!slugManuallyEdited.current) setNewSlug(slugify(value));
  };

  const validateAdd = (): boolean => {
    const errs: Record<string, string> = {};
    if (!newName.trim()) errs.name = 'Name is required';
    if (!newSlug.trim()) errs.slug = 'Slug is required';
    setAddErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAdd = async () => {
    if (!validateAdd()) return;
    setAdding(true);
    try {
      await addDoc(collection(db, FIRESTORE_COLLECTIONS.CATEGORIES), {
        name: newName.trim(),
        slug: newSlug.trim(),
        description: newDescription.trim(),
        bookCount: 0,
        createdAt: serverTimestamp(),
      });
      toast.success('Category added');
      setAddOpen(false);
      resetAddForm();
      fetchCategories();
    } catch {
      toast.error('Failed to add category');
    } finally {
      setAdding(false);
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id);
    setEditName(cat.name);
    setEditSlug(cat.slug);
    setEditDescription(cat.description);
    editSlugManuallyEdited.current = false;
  };

  const handleEditNameChange = (value: string) => {
    setEditName(value);
    if (!editSlugManuallyEdited.current) setEditSlug(slugify(value));
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = async (catId: string) => {
    if (!editName.trim() || !editSlug.trim()) {
      toast.error('Name and slug are required');
      return;
    }
    setSavingEdit(true);
    try {
      await updateDoc(doc(db, FIRESTORE_COLLECTIONS.CATEGORIES, catId), {
        name: editName.trim(),
        slug: editSlug.trim(),
        description: editDescription.trim(),
      });
      setCategories((prev) =>
        prev.map((c) =>
          c.id === catId
            ? { ...c, name: editName.trim(), slug: editSlug.trim(), description: editDescription.trim() }
            : c
        )
      );
      toast.success('Category updated');
      setEditingId(null);
    } catch {
      toast.error('Failed to update category');
    } finally {
      setSavingEdit(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await deleteDoc(doc(db, FIRESTORE_COLLECTIONS.CATEGORIES, deleteId));
      setCategories((prev) => prev.filter((c) => c.id !== deleteId));
      toast.success('Category deleted');
    } catch {
      toast.error('Failed to delete category');
    } finally {
      setDeleting(false);
      setDeleteId(null);
    }
  };

  if (authLoading || !isAdmin) return null;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Categories</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your book categories
          </p>
        </div>
        <Button onClick={() => { resetAddForm(); setAddOpen(true); }} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </motion.div>

      {loading ? (
        <CategoriesSkeleton />
      ) : categories.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 rounded-full bg-gray-100 p-4 dark:bg-gray-800">
              <FolderTree className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">No categories yet</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Create your first category to organize your books.
            </p>
            <Button
              className="mt-6 gap-2"
              onClick={() => { resetAddForm(); setAddOpen(true); }}
            >
              <Plus className="h-4 w-4" />
              Add Category
            </Button>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group relative overflow-hidden">
                <CardContent className="p-6">
                  {editingId === cat.id ? (
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor={`edit-name-${cat.id}`}>Name</Label>
                        <Input
                          id={`edit-name-${cat.id}`}
                          value={editName}
                          onChange={(e) => handleEditNameChange(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edit-slug-${cat.id}`}>Slug</Label>
                        <Input
                          id={`edit-slug-${cat.id}`}
                          value={editSlug}
                          onChange={(e) => {
                            editSlugManuallyEdited.current = true;
                            setEditSlug(e.target.value);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edit-desc-${cat.id}`}>Description</Label>
                        <Textarea
                          id={`edit-desc-${cat.id}`}
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          rows={2}
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button size="sm" onClick={() => saveEdit(cat.id)} disabled={savingEdit} className="gap-1">
                          {savingEdit ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={cancelEdit} className="gap-1">
                          <X className="h-3.5 w-3.5" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-1 flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {cat.bookCount || 0} books
                        </Badge>
                        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => startEdit(cat)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
                            onClick={() => setDeleteId(cat.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {cat.description || 'No description'}
                      </p>
                      <p className="mt-2 text-xs text-gray-400">/{cat.slug}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      <Dialog open={addOpen} onOpenChange={(open) => { if (!open) { setAddOpen(false); resetAddForm(); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>Create a new category for organizing books.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="add-name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="add-name"
                value={newName}
                onChange={(e) => handleNewNameChange(e.target.value)}
                placeholder="Category name"
              />
              {addErrors.name && <p className="text-xs text-red-500">{addErrors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="add-slug">
                Slug <span className="text-red-500">*</span>
              </Label>
              <Input
                id="add-slug"
                value={newSlug}
                onChange={(e) => {
                  slugManuallyEdited.current = true;
                  setNewSlug(e.target.value);
                }}
                placeholder="category-slug"
              />
              {addErrors.slug && <p className="text-xs text-red-500">{addErrors.slug}</p>}
              <p className="text-xs text-gray-400">Auto-generated from name. Edit manually if needed.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="add-desc">Description</Label>
              <Textarea
                id="add-desc"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Brief description of this category"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setAddOpen(false); resetAddForm(); }}>Cancel</Button>
            <Button onClick={handleAdd} disabled={adding} className="gap-2">
              {adding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
              Add Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Delete Category</DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to delete this category? Books assigned to it will need to be reassigned.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-center">
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete} disabled={deleting} className="gap-2">
              {deleting ? 'Deleting...' : <><Trash2 className="h-4 w-4" /> Delete</>}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6 space-y-3">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-16" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
