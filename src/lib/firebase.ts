import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
};

type FirebaseInstance = ReturnType<typeof initializeApp>;
type AuthInstance = ReturnType<typeof getAuth>;
type FirestoreInstance = ReturnType<typeof getFirestore>;
type StorageInstance = ReturnType<typeof getStorage>;

let firebaseApp: FirebaseInstance | undefined;
let firebaseAuth: AuthInstance | undefined;
let firestoreDb: FirestoreInstance | undefined;
let firebaseStorage: StorageInstance | undefined;

if (typeof window !== 'undefined' && firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    firebaseAuth = getAuth(firebaseApp);
    firestoreDb = getFirestore(firebaseApp);
    firebaseStorage = getStorage(firebaseApp);

    setPersistence(firebaseAuth, browserLocalPersistence).catch(() => {});

    if (process.env.NEXT_PUBLIC_USE_EMULATOR === 'true') {
      connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
      connectFirestoreEmulator(firestoreDb, 'localhost', 8080);
      connectStorageEmulator(firebaseStorage, 'localhost', 9199);
    }
  } catch {
    // Firebase unavailable during SSR/build
  }
}

export const app = firebaseApp as FirebaseInstance;
export const auth = firebaseAuth as AuthInstance;
export const db = firestoreDb as FirestoreInstance;
export const storage = firebaseStorage as StorageInstance;
