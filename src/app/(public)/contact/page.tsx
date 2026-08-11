'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  User,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AUTHOR_EMAIL, SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';
import { submitContactMessage } from '@/lib/db';
import toast from 'react-hot-toast';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  return errors;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: AUTHOR_EMAIL,
    href: `mailto:${AUTHOR_EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lesotho / South Africa',
    href: null,
  },
];

const socialLinks = [
  { href: SOCIAL_LINKS.facebook, icon: Globe, label: 'Facebook' },
  { href: SOCIAL_LINKS.twitter, icon: MessageCircle, label: 'X (Twitter)' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = `Contact | ${SITE_NAME}`;
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validateForm({ ...formData, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateForm(formData);
    setErrors(validation);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    try {
      await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        read: false,
      });
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
        duration: 5000,
      });
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
    } catch {
      toast.error('Failed to send message. Please try again later.', {
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-20 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <MessageSquare className="h-4 w-4" />
            Get in Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            Have a question, suggestion, or just want to say hello? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 bg-gray-50 py-16 dark:bg-gray-900/50 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2"
            >
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={errors.name && touched.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                      />
                      {errors.name && touched.name && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={errors.email && touched.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                      />
                      {errors.email && touched.email && (
                        <p className="flex items-center gap-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      className={errors.subject && touched.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}
                    />
                    {errors.subject && touched.subject && (
                      <p className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={errors.message && touched.message ? 'border-red-500 focus-visible:ring-red-500' : ''}
                    />
                    {errors.message && touched.message && (
                      <p className="flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Contact Information
                  </h3>
                  <Separator />

                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  <Separator />

                  <div>
                    <p className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Social Media
                    </p>
                    <div className="flex items-center gap-3">
                      {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900 dark:hover:text-blue-400"
                            aria-label={link.label}
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0">
                <CardContent className="p-6 text-center">
                  <User className="mx-auto h-10 w-10 text-white/80" />
                  <h3 className="mt-3 font-semibold text-white">
                    Moshoeshoe Koali
                  </h3>
                  <p className="mt-1 text-sm text-blue-100">
                    I look forward to connecting with you!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
