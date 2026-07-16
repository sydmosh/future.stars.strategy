'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Book,
  Mail,
  MessageCircle,
  GitBranch,
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Quote,
  Target,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Sparkles,
  User,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  AUTHOR_NAME,
  AUTHOR_EMAIL,
  SOCIAL_LINKS,
  MISSION_STATEMENT,
  SITE_NAME,
} from '@/lib/constants';
import { fetchBooks, fetchSettings } from '@/lib/db';
import { cn } from '@/lib/utils';
import type { SiteSettings } from '@/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: '-50px' },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const journey = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Started writing as a way to share knowledge and faith with a growing online audience.',
  },
  {
    year: '2017',
    title: 'First Publication',
    description: 'Published the first book, combining technology insights with Christian principles.',
  },
  {
    year: '2019',
    title: 'Expanding Horizons',
    description: 'Launched into leadership and personal growth literature, reaching readers worldwide.',
  },
  {
    year: '2021',
    title: 'Digital Platform',
    description: 'Established the online reading platform to make books accessible to everyone.',
  },
  {
    year: '2023',
    title: 'Global Impact',
    description: 'Reached thousands of readers across multiple continents with a growing library of titles.',
  },
  {
    year: '2025',
    title: 'Continuing the Mission',
    description: 'Empowering the next generation of thinkers, leaders, and believers through the written word.',
  },
];

const defaultSpeaking = [
  'Tech & Faith Conference 2024 - Keynote Speaker',
  'African Leadership Summit 2023 - Panelist',
  'Digital Innovation Forum 2023 - Speaker',
  'Youth Empowerment Workshop 2022 - Facilitator',
  'Christian Authors Conference 2022 - Guest Speaker',
];

const socialLinks = [
  { href: SOCIAL_LINKS.twitter, icon: MessageCircle, label: 'Twitter' },
  { href: SOCIAL_LINKS.github, icon: GitBranch, label: 'GitHub' },
  { href: SOCIAL_LINKS.linkedin, icon: Briefcase, label: 'LinkedIn' },
  { href: `mailto:${AUTHOR_EMAIL}`, icon: Mail, label: 'Email' },
];

export default function AboutPage() {
  const [bookCount, setBookCount] = useState(0);
  const [settings, setSettings] = useState<Partial<SiteSettings>>({});

  useEffect(() => {
    document.title = `About | ${SITE_NAME}`;
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const books = await fetchBooks({ published: true });
        setBookCount(books.length);

        const settingsData = await fetchSettings();
        if (settingsData) {
          setSettings(settingsData);
        }
      } catch {
        setBookCount(12);
      }
    }
    fetchData();
  }, []);

  const bio = settings.authorBio ||
    'A passionate author, technologist, and speaker dedicated to bridging the gap between faith, knowledge, and personal growth. With years of experience in software development, leadership, and Christian ministry, Moshoeshoe writes to inspire, educate, and transform lives through the power of the written word.';

  const speakingEngagements = settings.speakingEngagements?.length
    ? settings.speakingEngagements
    : defaultSpeaking;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
            >
              <User className="h-4 w-4" />
              About the Author
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 shadow-2xl shadow-blue-500/30 sm:h-40 sm:w-40"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-600">
                <span className="text-4xl font-bold text-white sm:text-5xl">
                  {AUTHOR_NAME.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {AUTHOR_NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
            >
              Author &middot; Technologist &middot; Speaker
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white border border-white/20"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-12 px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/50 dark:bg-gray-900 dark:shadow-gray-900/50"
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <Book className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {bookCount}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {bookCount === 1 ? 'Book' : 'Books'}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {speakingEngagements.length}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Speaking Events
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                3+
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Continents
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Biography
            </h2>
            <Separator className="mx-auto mt-4 mb-8 w-20" />
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 shadow-xl sm:p-16"
          >
            <Quote className="absolute left-6 top-6 h-12 w-12 text-white/10" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
                <Target className="h-4 w-4" />
                Mission
              </div>
              <p className="text-xl leading-relaxed text-white sm:text-2xl sm:leading-relaxed">
                &ldquo;{settings.missionStatement || MISSION_STATEMENT}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              The Journey
            </h2>
            <Separator className="mx-auto mt-4 mb-4 w-20" />
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Milestones along the path of writing and sharing knowledge
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden sm:block" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-12"
            >
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={staggerItem}
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-start"
                >
                  <div className="hidden sm:flex sm:flex-col sm:items-center sm:w-16">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                      <Sparkles className="h-3 w-3" />
                      {item.year}
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900/50 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Speaking Engagements
            </h2>
            <Separator className="mx-auto mt-4 mb-4 w-20" />
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Conferences, summits, and events where Moshoeshoe has shared insights
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {speakingEngagements.map((engagement, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {engagement}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Books CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-12 shadow-xl dark:from-blue-950/50 dark:to-indigo-950/50 sm:p-16"
          >
            <BookOpen className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Explore the Books
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400">
              Dive into a collection that bridges faith, technology, leadership, and personal growth.
            </p>
            <a
              href="/books"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              <Book className="h-5 w-5" />
              Browse Books
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
