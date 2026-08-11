'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  type User,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import type { UserProfile } from '@/types';

const DEMO_CREDENTIALS = { email: 'admin@example.com', password: 'admin123' };
const DEMO_USER = {
  uid: 'demo-admin-id',
  email: DEMO_CREDENTIALS.email,
  displayName: 'Moshoeshoe Koali',
  photoURL: null,
  emailVerified: true,
  isAnonymous: false,
  providerData: [],
  metadata: {},
  tenantId: null,
  refreshToken: '',
  phoneNumber: null,
  delete: async () => {},
  getIdToken: async () => '',
  getIdTokenResult: async () => ({} as any),
  reload: async () => {},
  toJSON: () => ({}),
  providerId: '',
} as User;
const DEMO_PROFILE: UserProfile = {
  id: 'demo-admin-id',
  email: DEMO_CREDENTIALS.email,
  displayName: 'Moshoeshoe Koali',
  role: 'admin',
  createdAt: new Date(),
  readingStreak: 0,
  bookmarks: [],
  recentlyViewed: [],
  favoriteBooks: [],
  readingStats: { totalBooksRead: 0, totalChaptersRead: 0, totalReadingTime: 0, currentStreak: 0, longestStreak: 0 },
};

function isFirebaseAvailable(): boolean {
  return !!(typeof window !== 'undefined' && auth && db && process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  isDemoMode: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const fetchProfile = async (uid: string) => {
    if (!db) return;
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      }
    } catch {
      // Firestore unavailable
    }
  };

  useEffect(() => {
    if (!isFirebaseAvailable()) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth!, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchProfile(firebaseUser.uid);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = profile?.role === 'admin' || (isDemoMode && user?.email === DEMO_CREDENTIALS.email);

  const login = async (email: string, password: string) => {
    if (!isFirebaseAvailable()) {
      if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
        setUser(DEMO_USER);
        setProfile(DEMO_PROFILE);
        setIsDemoMode(true);
        return;
      }
      throw new Error('Invalid credentials. Demo: admin@example.com / admin123');
    }
    await signInWithEmailAndPassword(auth!, email, password);
  };

  const register = async (email: string, password: string, name: string) => {
    if (!isFirebaseAvailable()) {
      throw new Error('Registration requires Firebase. Use demo login: admin@example.com / admin123');
    }
    const cred = await createUserWithEmailAndPassword(auth!, email, password);
    await updateProfile(cred.user, { displayName: name });
    await setDoc(doc(db!, 'users', cred.user.uid), {
      id: cred.user.uid,
      email,
      displayName: name,
      role: 'reader',
      createdAt: serverTimestamp(),
      readingStreak: 0,
      bookmarks: [],
      recentlyViewed: [],
      favoriteBooks: [],
      readingStats: {
        totalBooksRead: 0,
        totalChaptersRead: 0,
        totalReadingTime: 0,
        currentStreak: 0,
        longestStreak: 0,
      },
    });
  };

  const logout = async () => {
    if (isDemoMode) {
      setUser(null);
      setProfile(null);
      setIsDemoMode(false);
      return;
    }
    if (auth) {
      await signOut(auth);
    }
    setProfile(null);
  };

  const resetPassword = async (email: string) => {
    if (!isFirebaseAvailable()) {
      throw new Error('Password reset requires Firebase configuration');
    }
    await sendPasswordResetEmail(auth!, email);
  };

  const refreshProfile = async () => {
    if (user && isFirebaseAvailable()) {
      await fetchProfile(user.uid);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isAdmin,
        isDemoMode,
        login,
        register,
        logout,
        resetPassword,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
