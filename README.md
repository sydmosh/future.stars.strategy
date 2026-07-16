# Books.MoshoeshoeKoali.com

A modern, production-quality online book publishing and reading platform built with Next.js 15 and Firebase.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Firebase (Authentication, Cloud Firestore, Storage)
- **Deployment**: Vercel (Free Plan)

## Features

- 📚 **Beautiful Reading Experience** - Chapter-by-chapter reading with adjustable typography, dark mode, progress tracking
- 👑 **Author Platform** - Publish books without PDFs using the rich admin panel
- 🔍 **Full-text Search** - Search across books, chapters, and tags
- ⭐ **Reviews & Ratings** - 5-star rating system with written reviews
- 🔖 **Bookmarks** - Bookmark books, chapters, and specific reading positions
- 📊 **Reading Analytics** - Track reading streaks, progress, and statistics
- 🎨 **Modern Design** - Apple-level quality with smooth animations and responsive layout
- 🌙 **Dark Mode** - Full dark mode support
- 🔒 **Authentication** - Email/password with role-based access (Admin/Reader)

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** (Email/Password)
3. Create a **Cloud Firestore** database
4. Enable **Firebase Storage**
5. Copy your Firebase config from Project Settings > General > Your apps > Web app

### Environment Variables

```bash
cp .env.local.example .env.local
```

Fill in your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Create Admin User

1. Register a user through the app at `/register`
2. In Firebase Console, go to Firestore > `users` collection
3. Find your user document and set `role` field to `"admin"`

### Install & Run

```bash
npm install
npm run dev
```

### Firestore Security Rules

Deploy the rules from `firestore.rules` to your Firebase project.

## Deployment to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy!

No paid services required. The free tier handles everything.

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, Register
│   ├── (public)/        # Home, Books, Categories, Search, About, Contact
│   ├── admin/           # Dashboard, Books CRUD, Categories, Settings
│   ├── read/            # Chapter-by-chapter reading
│   └── profile/         # User profile
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Header, Footer
│   └── ...              # Feature components
├── contexts/            # Auth, Theme contexts
├── hooks/               # Custom hooks
├── lib/                 # Firebase config, utilities
└── types/               # TypeScript interfaces
```

## Architecture

The platform uses a clean architecture with:
- Server Components for static content
- Client Components for interactivity
- Firebase for all backend services
- Context API for state management
- Custom hooks for reusable logic

## Future-Ready

Architecture supports:
- Audiobooks
- Paid books / Subscriptions
- Multiple authors
- AI summaries & Q&A
- Translations
- Offline reading
- Mobile app

## License

All rights reserved. &copy; Moshoeshoe Koali
