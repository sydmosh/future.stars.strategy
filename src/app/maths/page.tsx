import Link from 'next/link';

export const metadata = {
  title: 'Maths Exam Preparation | Mosh Books',
  description: 'Working sheets and resources for maths exam preparation from Exams Council.',
};

export default function MathsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Maths Exam Preparation
      </h1>
      <p className="mb-8 max-w-prose text-center text-lg text-gray-700">
        Access working sheets, practice problems, and study guides to help you ace your upcoming maths exams.
      </p>
      <Link
        href="https://www.examscouncil.org.ls/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:from-indigo-500 hover:to-purple-500"
      >
        Visit Exams Council
      </Link>
    </main>
  );
}
