import type { Category } from '@/types';

export const STATIC_CATEGORIES: Category[] = [
  { id: 'christian', name: 'Christian', slug: 'christian', description: 'Faith-based literature and spiritual growth', bookCount: 1, createdAt: new Date() },
  { id: 'technology', name: 'Technology', slug: 'technology', description: 'Latest in tech and innovation', bookCount: 0, createdAt: new Date() },
  { id: 'programming', name: 'Programming', slug: 'programming', description: 'Software development and coding', bookCount: 0, createdAt: new Date() },
  { id: 'leadership', name: 'Leadership', slug: 'leadership', description: 'Leadership principles and practices', bookCount: 0, createdAt: new Date() },
  { id: 'business', name: 'Business', slug: 'business', description: 'Business strategy and entrepreneurship', bookCount: 0, createdAt: new Date() },
  { id: 'education', name: 'Education', slug: 'education', description: 'Learning and educational resources', bookCount: 0, createdAt: new Date() },
  { id: 'maths-booklets', name: 'Maths Booklets', slug: 'maths-booklets', description: 'IGCSE Maths practice booklets with step-by-step solutions', bookCount: 1, createdAt: new Date() },
  { id: 'biology-booklets', name: 'Biology Booklets', slug: 'biology-booklets', description: 'IGCSE Biology practice booklets with step-by-step solutions', bookCount: 1, createdAt: new Date() },
  { id: 'accounting-booklets', name: 'Accounting Booklets', slug: 'accounting-booklets', description: 'LGCSE Accounting practice booklets with step-by-step solutions', bookCount: 1, createdAt: new Date() },
  { id: 'physics-booklets', name: 'Physics Booklets', slug: 'physics-booklets', description: 'IGCSE Physics practice booklets with step-by-step solutions', bookCount: 1, createdAt: new Date() },
  { id: 'ai', name: 'AI', slug: 'ai', description: 'Artificial intelligence and machine learning', bookCount: 0, createdAt: new Date() },
  { id: 'software-development', name: 'Software Development', slug: 'software-development', description: 'Software engineering best practices', bookCount: 0, createdAt: new Date() },
  { id: 'personal-growth', name: 'Personal Growth', slug: 'personal-growth', description: 'Self-improvement and development', bookCount: 0, createdAt: new Date() },
];
