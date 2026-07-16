'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await register(email, password, name);
      toast.success('Account created successfully!');
      router.push('/');
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
              .replace(/^Firebase:\s*/i, '')
              .replace(/\(auth\/[^)]+\)/g, '')
              .trim()
          : 'Registration failed';
      toast.error(message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="w-full max-w-md"
      >
        <motion.div variants={fadeInUp}>
          <Card className="rounded-2xl border-0 shadow-xl dark:border dark:border-gray-800">
            <CardHeader className="space-y-1 rounded-t-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-8 pb-8 pt-10 text-center dark:from-blue-700 dark:via-blue-800 dark:to-indigo-900">
              <CardTitle className="text-3xl font-bold tracking-tight text-white">
                Create Account
              </CardTitle>
              <CardDescription className="text-base text-blue-100/90">
                Join our reading community
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-5 px-8 pt-8">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    autoComplete="name"
                    required
                    className={cn(
                      'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                      loading && 'opacity-50'
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    autoComplete="email"
                    required
                    className={cn(
                      'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                      loading && 'opacity-50'
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    autoComplete="new-password"
                    required
                    className={cn(
                      'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                      loading && 'opacity-50'
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    autoComplete="new-password"
                    required
                    className={cn(
                      'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                      loading && 'opacity-50'
                    )}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="mt-2 h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      'Create account'
                    )}
                  </Button>
                </motion.div>
              </CardContent>
            </form>

            <CardFooter className="flex-col gap-3 px-8 pb-8 pt-0">
              <motion.div
                variants={fadeInUp}
                className="text-center text-sm text-gray-500 dark:text-gray-400"
              >
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Sign in
                </Link>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
