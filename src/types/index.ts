export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  coverImage?: string;
  author: string;
  category: string;
  featured: boolean;
  published: boolean;
  tags: string[];
  language: string;
  readingTime: number;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  averageRating: number;
  totalReviews: number;
}

export interface Chapter {
  id: string;
  bookId: string;
  title: string;
  slug: string;
  chapterNumber: number;
  content: string;
  estimatedReadingTime: number;
  createdAt: Date;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'reader';
  createdAt: Date;
  readingStreak: number;
  lastReadingDate?: Date;
  bookmarks: Bookmark[];
  recentlyViewed: RecentlyViewed[];
  favoriteBooks: string[];
  readingStats: ReadingStats;
}

export interface Bookmark {
  id: string;
  bookId: string;
  chapterId: string;
  bookTitle: string;
  chapterTitle: string;
  position: number;
  createdAt: Date;
}

export interface RecentlyViewed {
  bookId: string;
  chapterId?: string;
  position: number;
  viewedAt: Date;
}

export interface ReadingStats {
  totalBooksRead: number;
  totalChaptersRead: number;
  totalReadingTime: number;
  currentStreak: number;
  longestStreak: number;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  bookId: string;
  chapterId?: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  content: string;
  parentId?: string;
  likes: number;
  reported: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  bookCount: number;
  createdAt: Date;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: Date;
  active: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  authorName: string;
  authorBio: string;
  authorPhoto?: string;
  authorEmail: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  missionStatement: string;
  speakingEngagements: string[];
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  photo?: string;
}

export type ReadingPreferences = {
  fontSize: number;
  lineSpacing: number;
  theme: 'light' | 'dark' | 'sepia';
  fontFamily?: 'sans' | 'serif' | 'mono';
};

export interface ReadingProgress {
  bookId: string;
  chapterId: string;
  position: number;
  percentage: number;
  updatedAt: Date;
}

export interface ChallengeDay {
  day: number;
  hours: string;
  subject: string;
  pastPaper: string;
  score: string;
  lesson: string;
  mentorNotes: string;
}

export interface ChallengeData {
  id: string;
  userId: string;
  goal: string;
  studentName: string;
  dailyChecklist: Record<string, boolean>;
  weeklyGoals: Record<string, boolean>;
  progress: ChallengeDay[];
  reflections: string[];
  mentorNotes: {
    attendance: string;
    discipline: string;
    effort: string;
    improvement: string;
    confidence: string;
    nextFocus: string;
    comments: string;
  };
  startedAt: Date;
  updatedAt: Date;
  completed: boolean;
}
