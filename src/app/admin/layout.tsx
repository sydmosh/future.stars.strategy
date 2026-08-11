'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  FolderTree,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/books', label: 'Books', icon: BookOpen },
  { href: '/admin/categories', label: 'Categories', icon: FolderTree },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAdmin, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace('/login');
    }
  }, [loading, isAdmin, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <Skeleton className="h-10 w-48" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Skeleton className="h-96" />
            <div className="space-y-4 md:col-span-3">
              <Skeleton className="h-40" />
              <Skeleton className="h-40" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
        <Link href="/admin" className="text-lg font-bold text-gray-900 dark:text-white">
          Admin Panel
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => logout()} className="text-gray-500">
            <LogOut className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-40 w-72 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-800">
              <Link
                href="/admin"
                className="text-lg font-bold text-gray-900 dark:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                Admin Panel
              </Link>
            </div>
            <nav className="flex-1 space-y-1 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                  </Link>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex">
        <aside className="hidden border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-800">
            <Link href="/admin" className="text-lg font-bold text-gray-900 dark:text-white">
              Admin Panel
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-gray-200 p-4 dark:border-gray-800">
            <Button variant="outline" size="sm" onClick={() => logout()} className="w-full gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </aside>

        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
