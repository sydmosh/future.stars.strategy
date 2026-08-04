import { getBookletById, type Question, subjects } from '@/data/booklets';
import { getStaticChapterBySlug, getStaticBookBySlug, getStaticChapters } from '@/data/books';

export interface SearchResult {
  type: 'book' | 'booklet' | 'chapter';
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  subject: string;
}

export interface BookletLookupResult {
  bookletTitle: string;
  bookletId: string;
  sectionTitle: string;
  question: {
    id: string;
    number: number;
    question: string;
    parts?: { label: string; question: string }[];
    marks: number;
    solution: string;
    hasDiagram: boolean;
  };
}

export interface ChapterResult {
  bookTitle: string;
  chapterTitle: string;
  content: string;
  estimatedReadingTime: number;
}

export function lookupBookletQuestion(bookletId: string, questionId: string): BookletLookupResult | { error: string } {
  const booklet = getBookletById(bookletId);
  if (!booklet) return { error: `Booklet "${bookletId}" not found` };

  let found: Question | undefined;
  let sectionTitle = '';
  for (const section of booklet.sections) {
    found = section.questions.find((q) => q.id === questionId);
    if (found) {
      sectionTitle = section.title;
      break;
    }
  }
  if (!found) return { error: `Question "${questionId}" not found in booklet "${booklet.title}"` };

  return {
    bookletTitle: booklet.title,
    bookletId: booklet.id,
    sectionTitle,
    question: {
      id: found.id,
      number: found.number,
      question: found.question,
      parts: found.parts,
      marks: found.marks,
      solution: found.solution,
      hasDiagram: !!found.diagram,
    },
  };
}

export function searchPlatformContent(query: string, subjectFilter?: string): { results: SearchResult[]; totalFound: number } {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  const bookSlugs = ['lgcse-maths-workbook', 'lgcse-accounting-workbook', 'the-mystery-of-god'];

  for (const slug of bookSlugs) {
    const book = getStaticBookBySlug(slug);
    if (!book) continue;

    const chapters = getStaticChapters(book.id);
    const bookSubject = slug === 'lgcse-maths-workbook' ? 'maths' : slug === 'lgcse-accounting-workbook' ? 'accounting' : 'general';

    if (!subjectFilter || subjectFilter === 'general' || bookSubject === subjectFilter) {
      if (
        book.title.toLowerCase().includes(lowerQuery) ||
        book.description.toLowerCase().includes(lowerQuery)
      ) {
        results.push({ type: 'book', title: book.title, description: book.description, link: `/books/${book.slug}`, subject: bookSubject });
      }

      for (const ch of chapters) {
        if (ch.title.toLowerCase().includes(lowerQuery) || ch.content.toLowerCase().includes(lowerQuery)) {
          results.push({
            type: 'chapter',
            title: ch.title,
            subtitle: book.title,
            description: ch.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            link: `/read/${book.slug}/${ch.slug}`,
            subject: bookSubject,
          });
        }
      }
    }
  }

  for (const subject of subjects) {
    if (subjectFilter && subject.id !== subjectFilter && subjectFilter !== 'general') continue;
    for (const booklet of subject.booklets) {
      if (booklet.title.toLowerCase().includes(lowerQuery) || booklet.description.toLowerCase().includes(lowerQuery)) {
        results.push({ type: 'booklet', title: booklet.title, subtitle: subject.name, description: booklet.description, link: `/books/math-booklets/${booklet.id}`, subject: subject.id });
      }

      for (const section of booklet.sections) {
        for (const question of section.questions) {
          if (question.question.toLowerCase().includes(lowerQuery)) {
            results.push({ type: 'booklet', title: `${booklet.title} - Q${question.number}`, subtitle: section.title, description: question.question.substring(0, 150), link: `/books/math-booklets/${booklet.id}`, subject: subject.id });
          }
        }
      }
    }
  }

  return { results: results.slice(0, 8), totalFound: results.length };
}

export function getChapterContent(bookSlug: string, chapterSlug: string): ChapterResult | { error: string } {
  const chapter = getStaticChapterBySlug(bookSlug, chapterSlug);
  if (!chapter) return { error: `Chapter "${chapterSlug}" not found in book "${bookSlug}"` };

  const book = getStaticBookBySlug(bookSlug);
  const plainContent = chapter.content.replace(/<[^>]*>/g, '');

  return {
    bookTitle: book?.title ?? '',
    chapterTitle: chapter.title,
    content: plainContent.substring(0, 3000),
    estimatedReadingTime: chapter.estimatedReadingTime,
  };
}

export function listAvailableBooklets(subjectId?: string) {
  const filteredSubjects = subjectId
    ? subjects.filter((s) => s.id === subjectId)
    : subjects;

  return filteredSubjects.map((subject) => ({
    subject: subject.name,
    subjectId: subject.id,
    booklets: subject.booklets.map((b) => ({
      id: b.id,
      title: b.title,
      subtitle: b.subtitle,
      description: b.description,
      totalMarks: b.totalMarks,
      sections: b.sections.map((s) => ({
        title: s.title,
        questionCount: s.questions.length,
        totalMarks: s.questions.reduce((sum, q) => sum + q.marks, 0),
      })),
    })),
  }));
}

export const TOOL_DESCRIPTIONS = `
CAPABILITIES — You have special tools you can use to help students more interactively:

1. BOOKLET QUESTION LOOKUP:
   When a student asks about a specific practice booklet question, include this tag in your response to show the actual diagram and question on the blackboard:
   [SHOW_BOOKLET_DIAGRAM: {"bookletId": "booklet-3", "questionId": "b3-q5"}]
   Available booklets: booklet-1, booklet-2, booklet-3 (Maths - Drawings, Graphs & Construction), booklet-bio-1 (Biology), booklet-acct-1 (Accounting), booklet-phys-1 (Physics)

2. SEARCH PLATFORM CONTENT:
   When you need to find specific content on the platform or the student asks about available materials, use this tag to show search results:
   [SEARCH_PLATFORM: "search query here"]
   The system will search through books, chapters, and booklets.

3. CHAPTER RETRIEVAL:
   When a student asks about a specific textbook chapter or you need to reference chapter content, use this tag:
   [GET_CHAPTER: {"bookSlug": "lgcse-maths-workbook", "chapterSlug": "algebra"}]
   Available books: "lgcse-maths-workbook", "lgcse-accounting-workbook", "the-mystery-of-god"
   Chapters: number-and-numeration, algebra, geometry-and-measurement, statistics-and-probability, mixed-revision-and-past-paper-practice (maths)
   accounting-equation-and-double-entry, books-of-original-entry-and-ledger-accounts, trial-balance-and-financial-statements, bank-reconciliation-and-control-accounts, depreciation-bad-debts-and-correction-of-errors, partnership-accounts-and-ratio-analysis (accounting)
   before-adam-there-was-christ, the-lamb-before-the-foundation-of-the-world, humanity-in-the-mind-of-god, christ-the-true-image-of-humanity, adam-the-first-expression-of-humanity (the-mystery-of-god)

4. LIST AVAILABLE BOOKLETS:
   When a student wants to see what practice materials are available, use:
   [LIST_BOOKLETS: {"subjectId": "maths"}]
   subjectId can be: "maths", "biology", "accounting", "physics", or omit for all.

Always use these tags when they would help the student.`;
