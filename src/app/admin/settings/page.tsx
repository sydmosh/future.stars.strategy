'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Save,
  Loader2,
  Plus,
  X,
  Settings as SettingsIcon,
  MessageCircle,
  Code2,
  Briefcase,
  Globe,
} from 'lucide-react';
import { fetchSettings, saveSettings } from '@/lib/db';
import type { SiteSettings } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import toast from 'react-hot-toast';

const DEFAULT_SETTINGS: SiteSettings = {
  siteName: '',
  siteDescription: '',
  authorName: '',
  authorBio: '',
  authorEmail: '',
  socialLinks: {},
  missionStatement: '',
  speakingEngagements: [],
  testimonials: [],
};

export default function AdminSettingsPage() {
  const { isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();

  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [newEngagement, setNewEngagement] = useState('');

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/login');
    }
  }, [authLoading, isAdmin, router]);

  useEffect(() => {
    if (!isAdmin) return;
    loadSettings();
  }, [isAdmin]);

  async function loadSettings() {
    try {
      const data = await fetchSettings();
      if (data) {
        setSettings(data);
      }
    } catch {
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  }

  const updateField = <K extends keyof SiteSettings>(
    key: K,
    value: SiteSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const updateSocialLink = (
    key: keyof SiteSettings['socialLinks'],
    value: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [key]: value },
    }));
  };

  const addEngagement = () => {
    const trimmed = newEngagement.trim();
    if (!trimmed) return;
    if (settings.speakingEngagements.includes(trimmed)) {
      toast.error('This engagement already exists');
      return;
    }
    updateField('speakingEngagements', [...settings.speakingEngagements, trimmed]);
    setNewEngagement('');
  };

  const removeEngagement = (index: number) => {
    updateField(
      'speakingEngagements',
      settings.speakingEngagements.filter((_, i) => i !== index)
    );
  };

  const handleSave = async () => {
    if (!settings.siteName.trim()) {
      toast.error('Site name is required');
      return;
    }
    if (!settings.authorName.trim()) {
      toast.error('Author name is required');
      return;
    }

    setSaving(true);
    try {
      await saveSettings(settings);
      toast.success('Settings saved!');
    } catch {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || !isAdmin) return null;

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-11 w-full" />
                  <Skeleton className="h-11 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-8">
            {Array.from({ length: 2 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-11 w-full" />
                  <Skeleton className="h-24 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
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
          <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950">
            <SettingsIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage your site configuration
            </p>
          </div>
        </div>
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save Settings
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Site Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">
                  Site Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => updateField('siteName', e.target.value)}
                  placeholder="Your Site Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => updateField('siteDescription', e.target.value)}
                  placeholder="Brief description of your site"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Author Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="authorName">
                  Author Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="authorName"
                  value={settings.authorName}
                  onChange={(e) => updateField('authorName', e.target.value)}
                  placeholder="Author name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="authorBio">Author Bio</Label>
                <Textarea
                  id="authorBio"
                  value={settings.authorBio}
                  onChange={(e) => updateField('authorBio', e.target.value)}
                  placeholder="Short biography"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="authorEmail">Author Email</Label>
                <Input
                  id="authorEmail"
                  type="email"
                  value={settings.authorEmail}
                  onChange={(e) => updateField('authorEmail', e.target.value)}
                  placeholder="author@example.com"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="twitter" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-sky-500" />
                  Twitter
                </Label>
                <Input
                  id="twitter"
                  value={settings.socialLinks.twitter || ''}
                  onChange={(e) => updateSocialLink('twitter', e.target.value)}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  GitHub
                </Label>
                <Input
                  id="github"
                  value={settings.socialLinks.github || ''}
                  onChange={(e) => updateSocialLink('github', e.target.value)}
                  placeholder="https://github.com/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  value={settings.socialLinks.linkedin || ''}
                  onChange={(e) => updateSocialLink('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/yourhandle"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-500" />
                  Website
                </Label>
                <Input
                  id="website"
                  value={settings.socialLinks.website || ''}
                  onChange={(e) => updateSocialLink('website', e.target.value)}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="mission">Mission Statement</Label>
                <Textarea
                  id="mission"
                  value={settings.missionStatement}
                  onChange={(e) => updateField('missionStatement', e.target.value)}
                  placeholder="Your mission statement..."
                  rows={6}
                  className="text-base leading-relaxed"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speaking Engagements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {settings.speakingEngagements.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {settings.speakingEngagements.map((engagement, index) => (
                    <Badge key={index} variant="secondary" className="gap-1 pr-1">
                      {engagement}
                      <button
                        type="button"
                        onClick={() => removeEngagement(index)}
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
                  value={newEngagement}
                  onChange={(e) => setNewEngagement(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addEngagement();
                    }
                  }}
                  placeholder="Add a speaking engagement"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addEngagement}
                  disabled={!newEngagement.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Press Enter or click + to add. Click the X on a badge to remove.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {settings.siteName || 'Site Name'}
                </p>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {settings.siteDescription || 'Site description will appear here...'}
                </p>
                <Separator className="my-3" />
                <p className="text-gray-900 dark:text-white">
                  by{' '}
                  <span className="font-medium">
                    {settings.authorName || 'Author Name'}
                  </span>
                </p>
                {settings.authorBio && (
                  <p className="mt-1 text-gray-500 dark:text-gray-400 line-clamp-2">
                    {settings.authorBio}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
