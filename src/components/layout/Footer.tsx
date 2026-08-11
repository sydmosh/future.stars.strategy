import Link from 'next/link';
import { Book, Mail, X, Globe, ExternalLink } from 'lucide-react';
import { SITE_NAME, AUTHOR_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Book className="h-4 w-4" />
              </div>
              <span className="text-base font-semibold">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              A platform for discovering and reading books by {AUTHOR_NAME}. Empowering minds through the written word.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/books', label: 'All Books' },
                { href: '/categories', label: 'Categories' },
                { href: '/search', label: 'Search' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Categories</h3>
            <ul className="space-y-3">
              {['Christian', 'Technology', 'Programming', 'Leadership', 'Business', 'Personal Growth'].map((cat) => (
                <li key={cat}>
                  <Link href={`/categories?cat=${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Connect</h3>
            <div className="flex gap-3">
              <a href="https://twitter.com/moshoeshoekoali" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-400">
                <X className="h-4 w-4" />
              </a>
              <a href="https://github.com/moshoeshoekoali" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all hover:bg-slate-300 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/moshoeshoekoali" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-400">
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="mailto:moshoeshoe@koali.com" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-900 dark:hover:text-blue-400">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Built with passion by {AUTHOR_NAME}.
          </p>
        </div>
      </div>
    </footer>
  );
}
