export const SITE_NAME = 'Books.MoshoeshoeKoali.com';
export const SITE_URL = 'https://books.moshoeshoekoali.com';
export const AUTHOR_NAME = 'Moshoeshoe Koali';
export const AUTHOR_EMAIL = 'sydmosh@gmail.com';

export const CATEGORIES = [
  { name: 'Christian', slug: 'christian', description: 'Faith-based literature and spiritual growth' },
  { name: 'Technology', slug: 'technology', description: 'Latest in tech and innovation' },
  { name: 'Programming', slug: 'programming', description: 'Software development and coding' },
  { name: 'Leadership', slug: 'leadership', description: 'Leadership principles and practices' },
  { name: 'Business', slug: 'business', description: 'Business strategy and entrepreneurship' },
  { name: 'Education', slug: 'education', description: 'Learning and educational resources' },
  { name: 'Maths Booklets', slug: 'maths-booklets', description: 'IGCSE Maths practice booklets with step-by-step solutions' },
  { name: 'Biology Booklets', slug: 'biology-booklets', description: 'IGCSE Biology practice booklets with step-by-step solutions' },
  { name: 'Accounting Booklets', slug: 'accounting-booklets', description: 'LGCSE Accounting practice booklets with step-by-step solutions' },
  { name: 'Physics Booklets', slug: 'physics-booklets', description: 'IGCSE Physics practice booklets with step-by-step solutions' },
  { name: 'AI', slug: 'ai', description: 'Artificial intelligence and machine learning' },
  { name: 'Software Development', slug: 'software-development', description: 'Software engineering best practices' },
  { name: 'Personal Growth', slug: 'personal-growth', description: 'Self-improvement and development' },
] as const;

export const READING_PREFERENCES_KEY = 'reading-preferences';

export const DEFAULT_READING_PREFERENCES = {
  fontSize: 18,
  lineSpacing: 1.8,
  theme: 'light' as const,
};

export const FIRESTORE_COLLECTIONS = {
  BOOKS: 'books',
  CHAPTERS: 'chapters',
  USERS: 'users',
  REVIEWS: 'reviews',
  COMMENTS: 'comments',
  CATEGORIES: 'categories',
  NEWSLETTER: 'newsletter',
  CONTACT: 'contactMessages',
  SETTINGS: 'settings',
  READING_PROGRESS: 'readingProgress',
} as const;

export const FONT_SIZES = [14, 16, 18, 20, 22, 24, 28, 32] as const;
export const LINE_SPACINGS = [1.4, 1.6, 1.8, 2.0, 2.2] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/mkoali',
  twitter: 'https://x.com/sydmosh',
};

export const MISSION_STATEMENT = 'Empowering minds through the written word, bridging knowledge and faith to transform lives and communities.';
