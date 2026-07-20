'use client';

import { useState, type FormEvent, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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

const GENRES = [
  'Fiction', 'Non-Fiction', 'Mystery', 'Thriller', 'Romance', 'Sci-Fi',
  'Fantasy', 'Historical', 'Biography', 'Self-Help', 'Business', 'Technology',
  'Health', 'Travel', 'Cooking', 'Art', 'Poetry', 'Young Adult',
];

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    bio: '',
    genres: [] as string[],
    newsletter: false,
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, type } = target;
    const value = type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleGenreChange = useCallback((genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre],
    }));
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    else if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
    else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) newErrors.username = 'Username can only contain letters, numbers, and underscores';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    
    if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        if (age - 1 < 13) newErrors.dateOfBirth = 'You must be at least 13 years old';
      } else if (age < 13) {
        newErrors.dateOfBirth = 'You must be at least 13 years old';
      }
    }
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    if (formData.bio.length > 500) newErrors.bio = 'Bio must be 500 characters or less';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await register(formData.email, formData.password, formData.name);
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
        className="w-full max-w-2xl"
      >
        <motion.div variants={fadeInUp}>
          <Card className="rounded-2xl border-0 shadow-xl dark:border dark:border-gray-800 overflow-hidden">
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
                {/* Personal Info Section */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Personal Information
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="name"
                        required
                        className={cn(
                          'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                          errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                          loading && 'opacity-50'
                        )}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-500" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-sm font-medium">
                        Username *
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                        <Input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="johndoe"
                          value={formData.username}
                          onChange={handleChange}
                          disabled={loading}
                          autoComplete="username"
                          required
                          className={cn(
                            'h-12 rounded-xl border-gray-200 bg-white/50 pl-8 pr-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                            errors.username && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                            loading && 'opacity-50'
                          )}
                          aria-invalid={!!errors.username}
                          aria-describedby={errors.username ? 'username-error' : undefined}
                        />
                      </div>
                      {errors.username && (
                        <p id="username-error" className="text-sm text-red-500" role="alert">
                          {errors.username}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="email"
                        required
                        className={cn(
                          'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                          errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                          loading && 'opacity-50'
                        )}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-500" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="tel"
                        className={cn(
                          'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                          errors.phone && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                          loading && 'opacity-50'
                        )}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-sm text-red-500" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                      Date of Birth
                    </Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      disabled={loading}
                      autoComplete="bday"
                      max={new Date().toISOString().split('T')[0]}
                      className={cn(
                        'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50',
                        errors.dateOfBirth && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                        loading && 'opacity-50'
                      )}
                      aria-invalid={!!errors.dateOfBirth}
                      aria-describedby={errors.dateOfBirth ? 'dob-error' : undefined}
                    />
                    {errors.dateOfBirth && (
                      <p id="dob-error" className="text-sm text-red-500" role="alert">
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Reading Preferences Section */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Reading Preferences
                  </h3>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium block">
                      Favorite Genres
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {GENRES.map((genre) => (
                        <label
                          key={genre}
                          className={cn(
                            'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors border-2',
                            formData.genres.includes(genre)
                              ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'border-gray-200 bg-white/50 text-gray-700 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={formData.genres.includes(genre)}
                            onChange={() => handleGenreChange(genre)}
                            disabled={loading}
                            className="sr-only"
                          />
                          {genre}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="bio" className="text-sm font-medium">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about yourself and your reading interests..."
                      value={formData.bio}
                      onChange={handleChange}
                      disabled={loading}
                      rows={3}
                      maxLength={500}
                      className={cn(
                        'rounded-xl border-gray-200 bg-white/50 px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500 resize-none',
                        errors.bio && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                        loading && 'opacity-50'
                      )}
                      aria-invalid={!!errors.bio}
                      aria-describedby={errors.bio ? 'bio-error' : 'bio-hint'}
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span id="bio-hint">Optional - max 500 characters</span>
                      <span>{formData.bio.length}/500</span>
                    </div>
                    {errors.bio && (
                      <p id="bio-error" className="text-sm text-red-500" role="alert">
                        {errors.bio}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Security Section */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Security
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="new-password"
                        required
                        className={cn(
                          'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                          errors.password && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                          loading && 'opacity-50'
                        )}
                        aria-invalid={!!errors.password}
                        aria-describedby={errors.password ? 'password-error' : 'password-hint'}
                      />
                      <p id="password-hint" className="text-xs text-gray-500 dark:text-gray-400">
                        Min 8 chars, uppercase, lowercase, number
                      </p>
                      {errors.password && (
                        <p id="password-error" className="text-sm text-red-500" role="alert">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium">
                        Confirm Password *
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="new-password"
                        required
                        className={cn(
                          'h-12 rounded-xl border-gray-200 bg-white/50 px-4 text-base transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900/50 dark:placeholder:text-gray-500',
                          errors.confirmPassword && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                          loading && 'opacity-50'
                        )}
                        aria-invalid={!!errors.confirmPassword}
                        aria-describedby={errors.confirmPassword ? 'confirm-error' : undefined}
                      />
                      {errors.confirmPassword && (
                        <p id="confirm-error" className="text-sm text-red-500" role="alert">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <Checkbox
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked === true }))}
                    disabled={loading}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <Label htmlFor="newsletter" className="text-sm font-medium text-gray-900 dark:text-white">
                      Subscribe to newsletter
                    </Label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Get book recommendations, reading tips, and community updates
                    </p>
                  </div>
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
