import type { Book, Chapter } from '@/types';

export const STATIC_BOOKS: Book[] = [
  {
    id: 'the-mystery-of-god',
    title: 'The Mystery Of God',
    subtitle: 'Understanding Humanity in Christ Before Adam',
    slug: 'the-mystery-of-god',
    description: 'Before Adam was formed from dust, God already had a complete and perfect vision of humanity. That vision was not abstract — it was personal, living, and fully expressed in Christ. This book explores the profound truth that humanity did not originate in Adam\'s mind, history, or biology, but in divine intention. Adam is not the starting point of humanity\'s meaning — Christ is.',
    coverImage: '/images/mystery-of-god-cover.png',
    author: 'Moshoeshoe Koali',
    category: 'Christian',
    featured: true,
    published: true,
    tags: ['theology', 'christ', 'adam', 'humanity', 'salvation', 'eternal-purpose'],
    language: 'English',
    readingTime: 0,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-07-15'),
    views: 0,
    averageRating: 0,
    totalReviews: 0,
  },
  {
    id: 'lgcse-maths-workbook',
    title: 'LGCSE Mathematics Workbook',
    subtitle: 'Comprehensive Exam Preparation Guide',
    slug: 'lgcse-maths-workbook',
    description: 'A comprehensive mathematics workbook designed for LGCSE examination preparation. Covers all key topics including Number and Numeration, Algebra, Geometry, Statistics, Trigonometry, and more. Each chapter includes worked examples, practice exercises, and exam-style questions with step-by-step solutions. Written specifically for the LGCSE curriculum to help students build confidence and master essential mathematical concepts.',
    coverImage: '/images/lgcse-maths-workbook-cover.png',
    author: 'Moshoeshoe Koali',
    category: 'Education',
    featured: true,
    published: true,
    tags: ['mathematics', 'lgcse', 'exam-preparation', 'workbook', 'study-guide', 'revision'],
    language: 'English',
    readingTime: 0,
    createdAt: new Date('2026-06-01'),
    updatedAt: new Date('2026-07-20'),
    views: 0,
    averageRating: 0,
    totalReviews: 0,
  },
  {
    id: 'lgcse-accounting-workbook',
    title: 'LGCSE Accounting Workbook',
    subtitle: 'Comprehensive Exam Preparation Guide',
    slug: 'lgcse-accounting-workbook',
    description: 'A comprehensive accounting workbook designed for LGCSE examination preparation. Covers all key topics including the accounting equation, double entry, books of original entry, ledger accounts, trial balance, financial statements, bank reconciliation, control accounts, correction of errors, depreciation, and partnership accounts. Each chapter includes worked examples, practice exercises, and exam-style questions with step-by-step solutions. Written specifically for the LGCSE curriculum to help students build confidence and master essential accounting concepts.',
    coverImage: '/images/lgcse-accounting-workbook-cover.png',
    author: 'Moshoeshoe Koali',
    category: 'Education',
    featured: true,
    published: true,
    tags: ['accounting', 'lgcse', 'exam-preparation', 'workbook', 'study-guide', 'revision', 'finance'],
    language: 'English',
    readingTime: 0,
    createdAt: new Date('2026-07-20'),
    updatedAt: new Date('2026-07-20'),
    views: 0,
    averageRating: 0,
    totalReviews: 0,
  },
];

const MATH_CHAPTERS: Chapter[] = [
  {
    id: 'math-ch-1',
    bookId: 'lgcse-maths-workbook',
    title: 'Number and Numeration',
    slug: 'number-and-numeration',
    chapterNumber: 1,
    content: `<h1>CHAPTER 1: Number and Numeration</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to work confidently with natural numbers, integers, fractions, decimals, percentages, ratios, and significant figures.
</blockquote>

<h2>1.1 Types of Numbers</h2>

<p>Understanding the different types of numbers is essential for all mathematics.</p>

<h3>Natural Numbers (ℕ)</h3>
<p>Natural numbers are counting numbers: 1, 2, 3, 4, 5, ...</p>

<h3>Integers (ℤ)</h3>
<p>Integers include positive and negative whole numbers and zero: ..., -3, -2, -1, 0, 1, 2, 3, ...</p>

<h3>Rational Numbers (ℚ)</h3>
<p>Numbers that can be expressed as fractions <math><mfrac><mi>p</mi><mi>q</mi></mfrac></math> where p and q are integers and q ≠ 0.</p>
<p>Examples: <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, 0.75, -3, <math><mfrac><mn>22</mn><mn>7</mn></mfrac></math></p>

<h3>Irrational Numbers</h3>
<p>Numbers that cannot be expressed as a simple fraction. Their decimal expansions neither terminate nor repeat.</p>
<p>Examples: π, √2, √3</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.1</h4>
<p class="text-blue-700 dark:text-blue-300">Classify each number as natural, integer, rational, or irrational:</p>
<p class="font-mono text-blue-700 dark:text-blue-300">a) 7 &nbsp;&nbsp; b) -4 &nbsp;&nbsp; c) 0.333... &nbsp;&nbsp; d) π</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) 7 → Natural, Integer, Rational<br />
b) -4 → Integer, Rational<br />
c) 0.333... → Rational (equals <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>)<br />
d) π → Irrational</p>
</div>

<h2>1.2 Operations with Integers</h2>

<h3>Addition and Subtraction</h3>
<p>Rules for adding and subtracting integers:</p>
<ul>
  <li>Same signs → Add and keep the sign</li>
  <li>Different signs → Subtract and keep the sign of the larger number</li>
  <li>Subtracting a negative → Add the positive equivalent</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.2</h4>
<p class="text-blue-700 dark:text-blue-300">Simplify:</p>
<p class="font-mono text-blue-700 dark:text-blue-300">a) -5 + 8 &nbsp;&nbsp; b) -3 - 7 &nbsp;&nbsp; c) 4 - (-9) &nbsp;&nbsp; d) -6 + (-2)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) -5 + 8 = 3<br />
b) -3 - 7 = -10<br />
c) 4 - (-9) = 4 + 9 = 13<br />
d) -6 + (-2) = -8</p>
</div>

<h3>Multiplication and Division</h3>
<p>Rules for multiplying and dividing integers:</p>
<ul>
  <li>Positive × Positive = Positive</li>
  <li>Negative × Negative = Positive</li>
  <li>Positive × Negative = Negative</li>
  <li>Negative × Positive = Negative</li>
  <li>Same rules apply for division</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.3</h4>
<p class="text-blue-700 dark:text-blue-300">Calculate:</p>
<p class="font-mono text-blue-700 dark:text-blue-300">a) (-4) × 6 &nbsp;&nbsp; b) (-15) ÷ (-3) &nbsp;&nbsp; c) (-7) × (-8) &nbsp;&nbsp; d) 24 ÷ (-6)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) (-4) × 6 = -24<br />
b) (-15) ÷ (-3) = 5<br />
c) (-7) × (-8) = 56<br />
d) 24 ÷ (-6) = -4</p>
</div>

<h2>1.3 Fractions</h2>

<h3>Adding and Subtracting Fractions</h3>
<p>To add or subtract fractions, find a common denominator first.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.4</h4>
<p class="text-blue-700 dark:text-blue-300">Simplify: <math><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math></p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>LCM of 3 and 4 is 12</p>
<p><math><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>4</mn></mrow><mn>12</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>8</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>9</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>17</mn><mn>12</mn></mfrac></math></p>
<p>Answer: <math><mfrac><mn>17</mn><mn>12</mn></mfrac></math> or <math><mn>1</mn><mfrac><mn>5</mn><mn>12</mn></mfrac></math></p>
</div>

<h3>Multiplying Fractions</h3>
<p>Multiply numerators together and denominators together:</p>
<p><math><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>×</mo><mfrac><mi>c</mi><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mi>a</mi><mo>×</mo><mi>c</mi></mrow><mrow><mi>b</mi><mo>×</mo><mi>d</mi></mrow></mfrac></math></p>

<h3>Dividing Fractions</h3>
<p>To divide by a fraction, multiply by its reciprocal:</p>
<p><math><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>÷</mo><mfrac><mi>c</mi><mi>d</mi></mfrac><mo>=</mo><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>×</mo><mfrac><mi>d</mi><mi>c</mi></mfrac></math></p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.5</h4>
<p class="text-blue-700 dark:text-blue-300">Simplify: <math><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>÷</mo><mfrac><mn>3</mn><mn>7</mn></mfrac></math></p>
<p class="mt-2"><strong>Solution:</strong></p>
<p><math><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>÷</mo><mfrac><mn>3</mn><mn>7</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mo>×</mo><mfrac><mn>7</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>14</mn><mn>15</mn></mfrac></math></p>
</div>

<h2>1.4 Decimals and Percentages</h2>

<h3>Converting Between Fractions, Decimals, and Percentages</h3>
<ul>
  <li>Fraction → Decimal: Divide numerator by denominator</li>
  <li>Decimal → Percentage: Multiply by 100</li>
  <li>Percentage → Decimal: Divide by 100</li>
  <li>Percentage → Fraction: Write over 100 and simplify</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.6</h4>
<p class="text-blue-700 dark:text-blue-300">Convert <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> to a decimal and a percentage.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Decimal: 3 ÷ 8 = 0.375</p>
<p>Percentage: 0.375 × 100 = 37.5%</p>
</div>

<h2>1.5 Ratio and Proportion</h2>

<p>A ratio compares two quantities. A proportion states that two ratios are equal.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.7</h4>
<p class="text-blue-700 dark:text-blue-300">Divide 120 in the ratio 2 : 3 : 5</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Total parts = 2 + 3 + 5 = 10</p>
<p>Value of 1 part = 120 ÷ 10 = 12</p>
<p>Part 1: 2 × 12 = 24</p>
<p>Part 2: 3 × 12 = 36</p>
<p>Part 3: 5 × 12 = 60</p>
<p>Check: 24 + 36 + 60 = 120 ✓</p>
</div>

<h2>1.6 Significant Figures and Decimal Places</h2>

<h3>Significant Figures</h3>
<p>Rules for significant figures:</p>
<ul>
  <li>All non-zero digits are significant</li>
  <li>Zeros between non-zero digits are significant</li>
  <li>Leading zeros are not significant</li>
  <li>Trailing zeros after decimal point are significant</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 1.8</h4>
<p class="text-blue-700 dark:text-blue-300">Round 23,456 to:</p>
<p class="text-blue-700 dark:text-blue-300">a) 3 significant figures &nbsp;&nbsp; b) 2 significant figures</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) 23,456 ≈ 23,500 (3 s.f.)</p>
<p>b) 23,456 ≈ 23,000 (2 s.f.)</p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-green-200 bg-green-50 p-6 my-6 dark:border-green-800 dark:bg-green-900/20">
<h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Exercise 1</h4>
<ol class="space-y-2 text-green-700 dark:text-green-300">
  <li>1. Simplify: -8 + 12 - (-5) + (-3)</li>
  <li>2. Calculate: (-12) × (-4) ÷ (-6)</li>
  <li>3. Simplify: <math><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math></li>
  <li>4. Convert 0.625 to a fraction in simplest form</li>
  <li>5. Express 40 as a percentage of 160</li>
  <li>6. Divide 84 in the ratio 5 : 7</li>
  <li>7. Round 3.14159 to 3 decimal places</li>
  <li>8. Round 0.004567 to 2 significant figures</li>
  <li>9. A map has a scale of 1 : 50,000. What distance (in km) is represented by 8 cm on the map?</li>
  <li>10. If 5 workers can build a wall in 12 days, how long will it take 8 workers to build the same wall?</li>
</ol>
</div>

<blockquote class="border-l-4 border-green-500 bg-green-50 p-4 my-6 dark:border-green-400 dark:bg-green-900/30">
  <p class="font-semibold text-green-800 dark:text-green-200">Key Points to Remember:</p>
  <ul class="text-green-700 dark:text-green-300 text-sm mt-2">
    <li>✓ When adding/subtracting integers, think of a number line</li>
    <li>✓ Always simplify fractions to their lowest terms</li>
    <li>✓ Check your answers by doing the reverse operation</li>
    <li>✓ Read ratio questions carefully — order matters</li>
  </ul>
</blockquote>`,
    estimatedReadingTime: 25,
    createdAt: new Date('2026-06-01'),
  },
  {
    id: 'math-ch-2',
    bookId: 'lgcse-maths-workbook',
    title: 'Algebra',
    slug: 'algebra',
    chapterNumber: 2,
    content: `<h1>CHAPTER 2: Algebra</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to simplify algebraic expressions, solve linear and quadratic equations, work with inequalities, and understand algebraic fractions.
</blockquote>

<h2>2.1 Algebraic Notation and Simplification</h2>

<p>Algebra uses letters to represent unknown numbers. Key rules:</p>
<ul>
  <li>Like terms can be added or subtracted</li>
  <li><math><mi>a</mi><mo>×</mo><mi>b</mi></math> is written as <math><mi>ab</mi></math></li>
  <li><math><mi>a</mi><mo>÷</mo><mi>b</mi></math> is written as <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math></li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.1</h4>
<p class="text-blue-700 dark:text-blue-300">Simplify: 3x + 2y - x + 5y</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>3x - x = 2x</p>
<p>2y + 5y = 7y</p>
<p>Answer: 2x + 7y</p>
</div>

<h2>2.2 Expanding Brackets</h2>

<p>To expand brackets, multiply each term inside the bracket by the term outside:</p>
<p><math><mi>a</mi><mo>(</mo><mi>b</mi><mo>+</mo><mi>c</mi><mo>)</mo><mo>=</mo><mi>ab</mi><mo>+</mo><mi>ac</mi></math></p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.2</h4>
<p class="text-blue-700 dark:text-blue-300">Expand: 3(2x - 5)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>3(2x - 5) = 3(2x) - 3(5) = 6x - 15</p>
</div>

<h3>Expanding Double Brackets (FOIL Method)</h3>
<p><math><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo><mo>(</mo><mi>c</mi><mo>+</mo><mi>d</mi><mo>)</mo><mo>=</mo><mi>ac</mi><mo>+</mo><mi>ad</mi><mo>+</mo><mi>bc</mi><mo>+</mo><mi>bd</mi></math></p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.3</h4>
<p class="text-blue-700 dark:text-blue-300">Expand: (x + 3)(x - 4)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>(x + 3)(x - 4) = x² - 4x + 3x - 12 = x² - x - 12</p>
</div>

<h2>2.3 Factorisation</h2>

<p>Factorisation is the reverse of expanding brackets. Look for common factors first.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.4</h4>
<p class="text-blue-700 dark:text-blue-300">Factorise: 6x² + 9x</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Common factor: 3x</p>
<p>6x² + 9x = 3x(2x + 3)</p>
</div>

<h3>Factorising Quadratics</h3>
<p>For <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>bx</mi><mo>+</mo><mi>c</mi></math>, find two numbers that multiply to give c and add to give b.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.5</h4>
<p class="text-blue-700 dark:text-blue-300">Factorise: x² + 5x + 6</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Find two numbers that multiply to 6 and add to 5: 2 and 3</p>
<p>x² + 5x + 6 = (x + 2)(x + 3)</p>
</div>

<h2>2.4 Solving Linear Equations</h2>

<p>To solve a linear equation, isolate the variable on one side.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.6</h4>
<p class="text-blue-700 dark:text-blue-300">Solve: 4x - 7 = 2x + 9</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>4x - 2x = 9 + 7</p>
<p>2x = 16</p>
<p>x = 8</p>
<p>Check: 4(8) - 7 = 32 - 7 = 25, 2(8) + 9 = 16 + 9 = 25 ✓</p>
</div>

<h2>2.5 Solving Quadratic Equations</h2>

<h3>By Factorisation</h3>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.7</h4>
<p class="text-blue-700 dark:text-blue-300">Solve: x² - 3x - 10 = 0</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>x² - 3x - 10 = (x - 5)(x + 2) = 0</p>
<p>Either x - 5 = 0 or x + 2 = 0</p>
<p>x = 5 or x = -2</p>
</div>

<h3>Using the Quadratic Formula</h3>
<p>When factorisation is not possible:</p>
<p><math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>ac</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math> for <math><msup><mi>ax</mi><mn>2</mn></msup><mo>+</mo><mi>bx</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></math></p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.8</h4>
<p class="text-blue-700 dark:text-blue-300">Solve: 2x² - 5x + 1 = 0</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a = 2, b = -5, c = 1</p>
<p>x = [5 ± √(25 - 8)] / 4</p>
<p>x = [5 ± √17] / 4</p>
<p>x = (5 + √17)/4 or (5 - √17)/4</p>
</div>

<h2>2.6 Inequalities</h2>

<p>Inequalities use symbols: <, >, ≤, ≥. Solve them like equations but remember:</p>
<ul>
  <li>Multiplying or dividing by a negative number reverses the inequality sign</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 2.9</h4>
<p class="text-blue-700 dark:text-blue-300">Solve: 3x - 7 ≤ 2x + 5</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>3x - 2x ≤ 5 + 7</p>
<p>x ≤ 12</p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-green-200 bg-green-50 p-6 my-6 dark:border-green-800 dark:bg-green-900/20">
<h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Exercise 2</h4>
<ol class="space-y-2 text-green-700 dark:text-green-300">
  <li>1. Simplify: 5a + 3b - 2a + 7b</li>
  <li>2. Expand: 4(2x - 3)</li>
  <li>3. Expand: (x + 4)(x - 2)</li>
  <li>4. Factorise: 12x² - 8x</li>
  <li>5. Factorise: x² + 7x + 12</li>
  <li>6. Solve: 5x + 12 = 2x - 6</li>
  <li>7. Solve: x² - 2x - 15 = 0</li>
  <li>8. Solve: 2x² + 3x - 2 = 0 (use the quadratic formula)</li>
  <li>9. Solve: 4x - 9 > 2x + 7</li>
  <li>10. If 3(x - 2) = 2(x + 3), find x</li>
</ol>
</div>

<blockquote class="border-l-4 border-green-500 bg-green-50 p-4 my-6 dark:border-green-400 dark:bg-green-900/30">
  <p class="font-semibold text-green-800 dark:text-green-200">Key Points to Remember:</p>
  <ul class="text-green-700 dark:text-green-300 text-sm mt-2">
    <li>✓ Always check your solutions by substituting back</li>
    <li>✓ When solving inequalities, remember to flip the sign when multiplying/dividing by a negative</li>
    <li>✓ Look for common factors before trying other factorisation methods</li>
    <li>✓ Quadratic equations can have 0, 1, or 2 solutions</li>
  </ul>
</blockquote>`,
    estimatedReadingTime: 25,
    createdAt: new Date('2026-06-05'),
  },
  {
    id: 'math-ch-3',
    bookId: 'lgcse-maths-workbook',
    title: 'Geometry and Measurement',
    slug: 'geometry-and-measurement',
    chapterNumber: 3,
    content: `<h1>CHAPTER 3: Geometry and Measurement</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to calculate perimeter, area, and volume of various shapes, understand angle properties, and apply Pythagoras' theorem.
</blockquote>

<h2>3.1 Properties of Angles</h2>

<h3>Angle Types</h3>
<ul>
  <li>Acute angle: Less than 90°</li>
  <li>Right angle: Exactly 90°</li>
  <li>Obtuse angle: Between 90° and 180°</li>
  <li>Straight angle: Exactly 180°</li>
  <li>Reflex angle: Between 180° and 360°</li>
</ul>

<h3>Angle Rules</h3>
<ul>
  <li>Angles on a straight line add up to 180°</li>
  <li>Angles at a point add up to 360°</li>
  <li>Vertically opposite angles are equal</li>
  <li>Corresponding angles are equal (parallel lines)</li>
  <li>Alternate angles are equal (parallel lines)</li>
  <li>Co-interior angles add up to 180° (parallel lines)</li>
</ul>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 3.1</h4>
<p class="text-blue-700 dark:text-blue-300">Find angle x when two angles on a straight line are x and 72°.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>x + 72° = 180°</p>
<p>x = 180° - 72° = 108°</p>
</div>

<h2>3.2 Perimeter and Area of 2D Shapes</h2>

<h3>Rectangle</h3>
<p>Perimeter = 2(L + W), Area = L × W</p>

<h3>Triangle</h3>
<p>Area = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × base × height</p>

<h3>Circle</h3>
<p>Circumference = 2πr, Area = πr²</p>

<h3>Trapezium</h3>
<p>Area = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>(a + b)h where a and b are parallel sides and h is the height</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 3.2</h4>
<p class="text-blue-700 dark:text-blue-300">A circle has a radius of 7 cm. Calculate its circumference and area. (Use π = 22/7)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Circumference = 2πr = 2 × (22/7) × 7 = 44 cm</p>
<p>Area = πr² = (22/7) × 7² = (22/7) × 49 = 154 cm²</p>
</div>

<h2>3.3 Volume and Surface Area of 3D Shapes</h2>

<h3>Rectangular Prism (Cuboid)</h3>
<p>Volume = L × W × H</p>
<p>Surface Area = 2(LW + LH + WH)</p>

<h3>Cylinder</h3>
<p>Volume = πr²h</p>
<p>Surface Area = 2πrh + 2πr²</p>

<h3>Cone</h3>
<p>Volume = <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>πr²h</p>

<h3>Sphere</h3>
<p>Volume = <math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>πr³</p>
<p>Surface Area = 4πr²</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 3.3</h4>
<p class="text-blue-700 dark:text-blue-300">A cylinder has radius 5 cm and height 12 cm. Find its volume. (Use π = 3.14)</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Volume = πr²h = 3.14 × 5² × 12</p>
<p>= 3.14 × 25 × 12 = 942 cm³</p>
</div>

<h2>3.4 Pythagoras' Theorem</h2>

<p>In a right-angled triangle: a² + b² = c² where c is the hypotenuse (longest side).</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 3.4</h4>
<p class="text-blue-700 dark:text-blue-300">A right-angled triangle has sides of 6 cm and 8 cm. Find the length of the hypotenuse.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>c² = 6² + 8² = 36 + 64 = 100</p>
<p>c = √100 = 10 cm</p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-green-200 bg-green-50 p-6 my-6 dark:border-green-800 dark:bg-green-900/20">
<h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Exercise 3</h4>
<ol class="space-y-2 text-green-700 dark:text-green-300">
  <li>1. Find the area of a triangle with base 12 cm and height 8 cm.</li>
  <li>2. A rectangle has length 15 m and width 8 m. Find its perimeter and area.</li>
  <li>3. Find the circumference of a circle with diameter 14 cm. (Use π = 22/7)</li>
  <li>4. A cuboid measures 8 cm × 5 cm × 3 cm. Find its volume and surface area.</li>
  <li>5. Find the volume of a sphere with radius 6 cm. (Use π = 3.14)</li>
  <li>6. A right-angled triangle has a hypotenuse of 13 cm and one side of 5 cm. Find the other side.</li>
  <li>7. Find the area of a trapezium with parallel sides 10 cm and 6 cm, and height 4 cm.</li>
  <li>8. Two angles are supplementary (add to 180°). One angle is 48°. Find the other.</li>
  <li>9. Find the volume of a cone with radius 3 cm and height 7 cm. (Use π = 22/7)</li>
  <li>10. A rectangular garden is 20 m long and 15 m wide. A path of width 1 m runs around it. Find the area of the path.</li>
</ol>
</div>

<blockquote class="border-l-4 border-green-500 bg-green-50 p-4 my-6 dark:border-green-400 dark:bg-green-900/30">
  <p class="font-semibold text-green-800 dark:text-green-200">Key Points to Remember:</p>
  <ul class="text-green-700 dark:text-green-300 text-sm mt-2">
    <li>✓ Always include units in your answers</li>
    <li>✓ π can be approximated as 22/7 or 3.14</li>
    <li>✓ The hypotenuse is always the longest side in Pythagoras</li>
    <li>✓ Check if the shape is 2D or 3D before choosing the correct formula</li>
  </ul>
</blockquote>`,
    estimatedReadingTime: 25,
    createdAt: new Date('2026-06-10'),
  },
  {
    id: 'math-ch-4',
    bookId: 'lgcse-maths-workbook',
    title: 'Statistics and Probability',
    slug: 'statistics-and-probability',
    chapterNumber: 4,
    content: `<h1>CHAPTER 4: Statistics and Probability</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to calculate measures of central tendency, interpret data displays, and calculate simple probabilities.
</blockquote>

<h2>4.1 Measures of Central Tendency</h2>

<h3>Mean</h3>
<p>Mean = Sum of all values ÷ Number of values</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 4.1</h4>
<p class="text-blue-700 dark:text-blue-300">Find the mean of: 4, 7, 9, 10, 15</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Sum = 4 + 7 + 9 + 10 + 15 = 45</p>
<p>Number of values = 5</p>
<p>Mean = 45 ÷ 5 = 9</p>
</div>

<h3>Median</h3>
<p>The middle value when data is arranged in order.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 4.2</h4>
<p class="text-blue-700 dark:text-blue-300">Find the median of: 3, 8, 2, 10, 6</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Arrange in order: 2, 3, 6, 8, 10</p>
<p>Median = 6 (the middle value)</p>
</div>

<h3>Mode</h3>
<p>The most frequent value in a data set.</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 4.3</h4>
<p class="text-blue-700 dark:text-blue-300">Find the mode of: 2, 4, 4, 5, 7, 7, 7, 9</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Mode = 7 (appears 3 times)</p>
</div>

<h2>4.2 Data Displays</h2>

<h3>Bar Chart</h3>
<p>Used for categorical data. Bars of equal width represent frequencies.</p>

<h3>Pie Chart</h3>
<p>A circle divided into sectors to show proportions. Each sector angle = (frequency ÷ total) × 360°</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 4.4</h4>
<p class="text-blue-700 dark:text-blue-300">A survey of 60 students shows their favourite subjects: Maths (15), English (20), Science (10), History (15). Draw a pie chart.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Maths: (15/60) × 360° = 90°</p>
<p>English: (20/60) × 360° = 120°</p>
<p>Science: (10/60) × 360° = 60°</p>
<p>History: (15/60) × 360° = 90°</p>
</div>

<h3>Histogram</h3>
<p>Used for continuous data grouped into intervals. The area of each bar represents frequency.</p>

<h2>4.3 Probability</h2>

<p>Probability measures the likelihood of an event occurring.</p>
<p>Probability = Number of favourable outcomes ÷ Total number of possible outcomes</p>
<p>Probability ranges from 0 (impossible) to 1 (certain).</p>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 4.5</h4>
<p class="text-blue-700 dark:text-blue-300">A bag contains 3 red balls, 4 blue balls, and 5 green balls. What is the probability of randomly picking a blue ball?</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Total balls = 3 + 4 + 5 = 12</p>
<p>Favourable outcomes = 4 (blue balls)</p>
<p>P(blue) = 4/12 = 1/3</p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-green-200 bg-green-50 p-6 my-6 dark:border-green-800 dark:bg-green-900/20">
<h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Exercise 4</h4>
<ol class="space-y-2 text-green-700 dark:text-green-300">
  <li>1. Find the mean, median, and mode of: 12, 15, 18, 15, 20, 12, 22</li>
  <li>2. Ten students scored: 56, 78, 65, 89, 72, 91, 60, 75, 84, 70. Find the mean score.</li>
  <li>3. A dice is rolled once. What is the probability of rolling a number greater than 4?</li>
  <li>4. A deck of 52 cards contains 4 aces. What is the probability of drawing an ace?</li>
  <li>5. In a class of 30 students, 18 are girls. If one student is chosen at random, what is the probability it is a boy?</li>
  <li>6. Two coins are tossed. List all possible outcomes and find P(at least one head).</li>
  <li>7. A survey shows: 10 people like tea, 15 like coffee, 5 like both. Draw a Venn diagram.</li>
  <li>8. The mean of 5 numbers is 12. If one number is removed, the mean becomes 11. What number was removed?</li>
</ol>
</div>

<blockquote class="border-l-4 border-green-500 bg-green-50 p-4 my-6 dark:border-green-400 dark:bg-green-900/30">
  <p class="font-semibold text-green-800 dark:text-green-200">Key Points to Remember:</p>
  <ul class="text-green-700 dark:text-green-300 text-sm mt-2">
    <li>✓ Always order data before finding the median</li>
    <li>✓ Probability is always between 0 and 1</li>
    <li>✓ The sum of probabilities of all outcomes is 1</li>
    <li>✓ Choose the right average: mean for normal data, median for skewed data, mode for categorical data</li>
  </ul>
</blockquote>`,
    estimatedReadingTime: 20,
    createdAt: new Date('2026-06-15'),
  },
  {
    id: 'math-ch-5',
    bookId: 'lgcse-maths-workbook',
    title: 'Mixed Revision and Past Paper Practice',
    slug: 'mixed-revision-and-past-paper-practice',
    chapterNumber: 5,
    content: `<h1>CHAPTER 5: Mixed Revision and Past Paper Practice</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  This chapter brings together all the topics covered in this workbook. Complete these mixed exercises and past-paper style questions to test your understanding.
</blockquote>

<h2>5.1 Mixed Topic Review</h2>

<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 my-6 dark:border-blue-800 dark:bg-blue-900/20">
<h4 class="font-semibold text-blue-800 dark:text-blue-200">Example 5.1 — Mixed Problem</h4>
<p class="text-blue-700 dark:text-blue-300">Simplify: <math><mfrac><mrow><mn>3</mn><mi>x</mi><mo>+</mo><mn>6</mn></mrow><mn>3</mn></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn></mrow><mn>2</mn></mfrac></math></p>
<p class="mt-2"><strong>Solution:</strong></p>
<p><math><mfrac><mrow><mn>3</mn><mi>x</mi><mo>+</mo><mn>6</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn></math></p>
<p><math><mfrac><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></math></p>
<p>(x + 2) - (x - 2) = x + 2 - x + 2 = 4</p>
</div>

<h2>5.2 Examination Tips</h2>

<ul>
  <li><strong>Read each question carefully</strong> — identify what is being asked</li>
  <li><strong>Show all working</strong> — marks are awarded for method even if the final answer is wrong</li>
  <li><strong>Check units</strong> — make sure all quantities are in the same unit</li>
  <li><strong>Estimate first</strong> — this helps you know if your answer is reasonable</li>
  <li><strong>Manage your time</strong> — don't spend too long on one question</li>
  <li><strong>Attempt every question</strong> — even a partially correct answer earns marks</li>
</ul>

<h2>Practice Examination: Paper 1</h2>

<div class="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 my-6 dark:border-orange-800 dark:bg-orange-900/20">
<h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-3">Section A — Multiple Choice</h4>
<ol class="space-y-3 text-orange-700 dark:text-orange-300">
  <li>1. Which of the following is equivalent to 0.75?<br />
    A) 3/5 &nbsp;&nbsp; B) 3/4 &nbsp;&nbsp; C) 7/10 &nbsp;&nbsp; D) 2/3</li>
  <li>2. Solve: 5x - 3 = 12<br />
    A) x = 1.8 &nbsp;&nbsp; B) x = 3 &nbsp;&nbsp; C) x = 5 &nbsp;&nbsp; D) x = 15</li>
  <li>3. What is the area of a triangle with base 10 cm and height 8 cm?<br />
    A) 18 cm² &nbsp;&nbsp; B) 40 cm² &nbsp;&nbsp; C) 80 cm² &nbsp;&nbsp; D) 20 cm²</li>
  <li>4. The probability of getting heads when tossing a fair coin is:<br />
    A) 0 &nbsp;&nbsp; B) 1/2 &nbsp;&nbsp; C) 1 &nbsp;&nbsp; D) 1/4</li>
  <li>5. Which of these is a prime number?<br />
    A) 21 &nbsp;&nbsp; B) 27 &nbsp;&nbsp; C) 29 &nbsp;&nbsp; D) 33</li>
</ol>
</div>

<div class="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 my-6 dark:border-orange-800 dark:bg-orange-900/20">
<h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-3">Section B — Short Answer</h4>
<ol class="space-y-3 text-orange-700 dark:text-orange-300">
  <li>6. Calculate: 25% of 360</li>
  <li>7. Find the LCM of 12 and 18</li>
  <li>8. Solve: 2(x - 3) = 3(x + 1)</li>
  <li>9. Calculate the mean of: 6, 10, 14, 18, 22</li>
  <li>10. A car travels 240 km in 3 hours. What is its average speed?</li>
</ol>
</div>

<div class="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 my-6 dark:border-orange-800 dark:bg-orange-900/20">
<h4 class="font-semibold text-orange-800 dark:text-orange-200 mb-3">Section C — Extended Response</h4>
<ol class="space-y-3 text-orange-700 dark:text-orange-300">
  <li>11. A shopkeeper buys a shirt for M200 and sells it for M260.
    <br />a) Calculate the profit.
    <br />b) Calculate the percentage profit.</li>
  <li>12. A cylindrical water tank has radius 3.5 m and height 4 m.
    <br />a) Calculate the volume of the tank in m³. (Use π = 22/7)
    <br />b) How many litres of water can it hold? (1 m³ = 1000 L)</li>
  <li>13. Solve the quadratic equation: x² - 6x + 8 = 0</li>
  <li>14. The marks of 8 students in a test are: 45, 62, 58, 71, 49, 65, 80, 54
    <br />a) Arrange the marks in ascending order.
    <br />b) Find the median.
    <br />c) Find the range.</li>
</ol>
</div>

<h2>Answers to Selected Exercises</h2>

<div class="rounded-xl border-2 border-gray-200 bg-gray-50 p-6 my-6 dark:border-gray-700 dark:bg-gray-900/50">
<h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">Practice Examination Answers</h4>

<p class="font-semibold mt-3 mb-1">Section A (Multiple Choice):</p>
<p>1. B) 3/4 &nbsp; 2. B) x = 3 &nbsp; 3. B) 40 cm² &nbsp; 4. B) 1/2 &nbsp; 5. C) 29</p>

<p class="font-semibold mt-3 mb-1">Section B (Short Answer):</p>
<p>6. 90 &nbsp; 7. 36 &nbsp; 8. x = -9 &nbsp; 9. 14 &nbsp; 10. 80 km/h</p>

<p class="font-semibold mt-3 mb-1">Section C (Extended Response):</p>
<p>11a) Profit = M60 &nbsp; 11b) Percentage profit = 30%</p>
<p>12a) V = πr²h = (22/7) × 12.25 × 4 = 154 m³ &nbsp; 12b) 154,000 L</p>
<p>13. x = 2 or x = 4</p>
<p>14a) 45, 49, 54, 58, 62, 65, 71, 80 &nbsp; 14b) Median = 60 &nbsp; 14c) Range = 35</p>
</div>

<blockquote class="border-l-4 border-yellow-500 bg-yellow-50 p-4 my-6 dark:border-yellow-400 dark:bg-yellow-900/30">
  <p class="font-semibold text-yellow-800 dark:text-yellow-200">Final Words of Encouragement:</p>
  <p class="text-yellow-700 dark:text-yellow-300 text-sm mt-2">
    "Success in mathematics is not about being naturally gifted — it is about consistent practice, learning from mistakes, and believing that you can improve. Every problem you solve builds your confidence. Keep working hard, stay focused, and trust the process. You have what it takes to succeed in your LGCSE examinations!"
  </p>
</blockquote>`,
    estimatedReadingTime: 30,
    createdAt: new Date('2026-06-20'),
  },
];

const ACCOUNTING_CHAPTERS: Chapter[] = [
  {
    id: 'acc-ch-1',
    bookId: 'lgcse-accounting-workbook',
    title: 'The Accounting Equation and Double Entry',
    slug: 'accounting-equation-and-double-entry',
    chapterNumber: 1,
    content: `<h1>CHAPTER 1: The Accounting Equation and Double Entry</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to understand the accounting equation, apply the double entry system, and classify accounts correctly.
</blockquote>

<h2>1.1 The Accounting Equation</h2>

<p>The accounting equation is the foundation of all accounting. It states that:</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="text-center text-xl font-bold text-emerald-800 dark:text-emerald-200">Assets = Capital + Liabilities</p>
</div>

<p>This equation must always balance. Every transaction affects at least two items in the equation.</p>

<h3>Key Definitions</h3>
<ul>
  <li><strong>Assets</strong> — Resources owned by the business (e.g., cash, equipment, buildings, inventory)</li>
  <li><strong>Liabilities</strong> — Amounts owed by the business to outsiders (e.g., creditors, loans, bank overdraft)</li>
  <li><strong>Capital</strong> — The amount invested by the owner(s) in the business</li>
</ul>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 1.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">Calculate the missing figure:</p>
<p class="font-mono text-emerald-700 dark:text-emerald-300">a) Assets = M50,000, Capital = M30,000, Liabilities = ?<br />
b) Assets = ?, Capital = M25,000, Liabilities = M15,000</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) Liabilities = Assets − Capital = M50,000 − M30,000 = <strong>M20,000</strong><br />
b) Assets = Capital + Liabilities = M25,000 + M15,000 = <strong>M40,000</strong></p>
</div>

<h3>Effect of Transactions on the Accounting Equation</h3>

<p>Every transaction changes the equation in at least two ways. Let us examine common transactions:</p>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2 text-left">Transaction</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2 text-left">Effect on Assets</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2 text-left">Effect on Capital/Liabilities</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Owner invests cash</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash (Asset) increases</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Capital increases</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Purchase equipment on credit</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Equipment (Asset) increases</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Creditor (Liability) increases</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Pay creditor by cheque</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Bank (Asset) decreases</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Creditor (Liability) decreases</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Owner withdraws goods for personal use</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Inventory (Asset) decreases</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Drawings reduce Capital</td>
</tr>
</tbody>
</table>
</div>

<h2>1.2 Double Entry System</h2>

<p>Double entry is a system of recording transactions where every transaction has two effects: a <strong>debit</strong> entry and a <strong>credit</strong> entry.</p>

<h3>The Golden Rules of Double Entry</h3>

<div class="grid grid-cols-3 gap-4 my-6">
<div class="rounded-xl border-2 border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
<p class="font-bold text-center text-blue-800 dark:text-blue-200">ASSETS</p>
<p class="text-center text-sm text-blue-700 dark:text-blue-300">Increase = Debit (Dr)<br />Decrease = Credit (Cr)</p>
</div>
<div class="rounded-xl border-2 border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
<p class="font-bold text-center text-purple-800 dark:text-purple-200">LIABILITIES</p>
<p class="text-center text-sm text-purple-700 dark:text-purple-300">Increase = Credit (Cr)<br />Decrease = Debit (Dr)</p>
</div>
<div class="rounded-xl border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
<p class="font-bold text-center text-amber-800 dark:text-amber-200">CAPITAL</p>
<p class="text-center text-sm text-amber-700 dark:text-amber-300">Increase = Credit (Cr)<br />Decrease = Debit (Dr)</p>
</div>
</div>

<p>For <strong>Expenses</strong> and <strong>Drawings</strong>: Increases are recorded as Debits.<br />
For <strong>Revenue</strong> and <strong>Income</strong>: Increases are recorded as Credits.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 1.2</h4>
<p class="text-emerald-700 dark:text-emerald-300">Record the following transactions using double entry:</p>
<p class="text-emerald-700 dark:text-emerald-300">a) Started business with cash M100,000<br />
b) Purchased goods for cash M20,000<br />
c) Sold goods for cash M15,000</p>
<p class="mt-2"><strong>Solution:</strong></p>
<table class="w-full text-sm border-collapse mt-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">No.</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Account Debited</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Account Credited</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">a)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Capital</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">100,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">b)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Purchases</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">20,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">c)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Sales</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">15,000</td>
</tr>
</tbody>
</table>
</div>

<h2>1.3 Classification of Accounts</h2>

<p>Accounts are classified into three main categories:</p>

<h3>Real Accounts (Assets)</h3>
<p>Accounts of properties, possessions, and resources.<br />
<em>Rule: Debit what comes in, Credit what goes out.</em></p>

<h3>Nominal Accounts (Expenses, Revenue)</h3>
<p>Accounts of income, expenses, gains, and losses.<br />
<em>Rule: Debit all expenses and losses, Credit all income and gains.</em></p>

<h3>Personal Accounts</h3>
<p>Accounts of people, businesses, and organizations.<br />
<em>Rule: Debit the receiver, Credit the giver.</em></p>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 1.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>State the accounting equation.</li>
  <li>Classify each of the following as Asset, Liability, or Capital:<br />
    (a) Bank overdraft &nbsp; (b) Equipment &nbsp; (c) Creditors &nbsp; (d) Premises &nbsp; (e) Owner's investment</li>
  <li>Calculate liabilities if assets are M75,000 and capital is M45,000.</li>
  <li>A business has liabilities of M30,000 and capital of M50,000. What are the total assets?</li>
  <li>Record the following using double entry:<br />
    (a) Bought furniture for cash M5,000<br />
    (b) Received a loan from bank M20,000<br />
    (c) Paid rent by cheque M2,500</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 1.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>Explain the difference between a debit and a credit entry.</li>
  <li>Show the effect of each transaction on the accounting equation:<br />
    (a) Purchased goods on credit M12,000<br />
    (b) Paid creditor M4,000<br />
    (c) Owner withdrew cash M1,000<br />
    (d) Received commission M800</li>
  <li>A trader has assets of M120,000 and liabilities of M45,000. Calculate the capital.</li>
  <li>Identify whether each account is Real, Nominal, or Personal:<br />
    (a) Rent Account &nbsp; (b) Debtors Account &nbsp; (c) Machinery Account &nbsp; (d) Sales Account</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>Assets = Capital + Liabilities (always balances)</li>
  <li>Every transaction has a debit and a credit entry</li>
  <li>Debits increase assets and expenses</li>
  <li>Credits increase liabilities, capital, and revenue</li>
  <li>Double entry ensures the accounting equation remains balanced</li>
</ul>`,
    estimatedReadingTime: 25,
    createdAt: new Date('2026-07-20'),
  },
  {
    id: 'acc-ch-2',
    bookId: 'lgcse-accounting-workbook',
    title: 'Books of Original Entry and Ledger Accounts',
    slug: 'books-of-original-entry-and-ledger-accounts',
    chapterNumber: 2,
    content: `<h1>CHAPTER 2: Books of Original Entry and Ledger Accounts</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to record transactions in books of original entry, post to ledger accounts, and balance off accounts correctly.
</blockquote>

<h2>2.1 Books of Original Entry</h2>

<p>Books of original entry (also called journals or day books) are where transactions are first recorded before being posted to the ledger.</p>

<h3>The Main Books of Original Entry</h3>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Book of Original Entry</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Transactions Recorded</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Sales Journal</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Credit sales of goods</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Purchases Journal</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Credit purchases of goods</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Returns Inwards Journal</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Goods returned by customers</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Returns Outwards Journal</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Goods returned to suppliers</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash Book</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Cash and bank transactions</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">General Journal</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Non-regular transactions (e.g., correction of errors, purchases of fixed assets on credit)</td>
</tr>
</tbody>
</table>
</div>

<h3>2.1.1 Sales Journal</h3>

<p>The Sales Journal records credit sales of goods. For each transaction, record the date, customer name, invoice number, and amount.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 2.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">Record the following credit sales in the Sales Journal:</p>
<table class="w-full text-sm border-collapse my-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Date</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Customer</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Invoice No.</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">July 1</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">T. Mokoena</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">001</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">8,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">July 5</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">M. Lebona</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">002</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">12,000</td>
</tr>
<tr class="font-bold">
  <td class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="3">Total</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">20,000</td>
</tr>
</tbody>
</table>
<p class="mt-2"><strong>Posting:</strong> Debit T. Mokoena M8,000 and M. Lebona M12,000 in the Sales Ledger. Credit Sales Account M20,000.</p>
</div>

<h3>2.1.2 Purchases Journal</h3>

<p>The Purchases Journal records credit purchases of goods for resale.</p>

<h3>2.1.3 Returns Journals</h3>

<p><strong>Returns Inwards (Sales Returns):</strong> Goods returned by customers. Entered in the Returns Inwards Journal.<br />
<strong>Returns Outwards (Purchases Returns):</strong> Goods returned to suppliers. Entered in the Returns Outwards Journal.</p>

<h3>2.1.4 The Cash Book</h3>

<p>The Cash Book records all cash and bank transactions. It serves as both a book of original entry and a ledger account for cash and bank.</p>

<h4>Format of a Two-Column Cash Book</h4>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Dr (Debit) Side</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Cr (Credit) Side</th>
</tr>
<tr class="bg-emerald-50 dark:bg-emerald-900/20">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Date</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Details</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Cash (M)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Bank (M)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Date</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Details</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Cash (M)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Bank (M)</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="8" class="text-center text-gray-400 italic">The debit side records receipts (money in); the credit side records payments (money out).</td>
</tr>
</tbody>
</table>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 2.2</h4>
<p class="text-emerald-700 dark:text-emerald-300">Record the following in a two-column cash book and balance it off:</p>
<p class="text-emerald-700 dark:text-emerald-300">July 1: Cash balance M10,000, Bank balance M25,000<br />
July 3: Paid rent by cheque M3,000<br />
July 5: Received cash from debtor M. Moleko M4,000<br />
July 8: Paid creditors by cheque M6,000<br />
July 10: Owner deposited cash M5,000 into bank</p>
</div>

<h2>2.2 Ledger Accounts</h2>

<p>The ledger is the main book of accounts where all transactions are posted from the books of original entry. Each account has a debit (left) side and a credit (right) side.</p>

<h3>Format of a Ledger Account</h3>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Dr (Debit)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Cr (Credit)</th>
</tr>
<tr class="bg-emerald-50 dark:bg-emerald-900/20">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Date</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Details</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Folio</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Date</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Details</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Folio</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</tbody>
</table>
</div>

<h3>Balancing Off an Account</h3>

<ol>
  <li>Total both sides of the account</li>
  <li>Find the difference (the larger total minus the smaller total)</li>
  <li>Enter the difference on the smaller side as "Balance c/d" (carried down)</li>
  <li>Enter the same amount on the opposite side below as "Balance b/d" (brought down)</li>
</ol>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 2.3</h4>
<p class="text-emerald-700 dark:text-emerald-300">Post the following to the Cash Account and balance it off:</p>
<p class="text-emerald-700 dark:text-emerald-300">July 1: Capital introduced M50,000<br />
July 5: Purchased goods for cash M12,000<br />
July 10: Sold goods for cash M18,000<br />
July 15: Paid wages M4,000</p>
</div>

<h2>2.3 Posting from Journals to Ledger</h2>

<p>The process of transferring entries from books of original entry to ledger accounts is called <strong>posting</strong>.</p>

<h3>Steps for Posting:</h3>
<ol>
  <li>Identify the accounts to be debited and credited from the journal entry</li>
  <li>Enter the date of the transaction in each ledger account</li>
  <li>Record the amount on the correct side (Dr or Cr)</li>
  <li>Enter a cross-reference (folio) to the journal page</li>
  <li>Enter a brief description (narrative) of the transaction</li>
</ol>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 2.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>Name four books of original entry and state what each is used for.</li>
  <li>Record the following credit sales in a Sales Journal:<br />
    Jan 3: Sold goods to P. Nkosi M6,000 (Invoice 101)<br />
    Jan 7: Sold goods to R. Motaung M9,000 (Invoice 102)<br />
    Jan 12: Sold goods to S. Khumalo M4,500 (Invoice 103)</li>
  <li>What is the purpose of posting to the ledger?</li>
  <li>Explain the difference between the Sales Journal and the Sales Account.</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 2.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>Open the following accounts in the ledger and record the transactions. Balance off each account.<br />
    (a) Cash Account: Received capital M80,000; paid rent M5,000; received sales M12,000; paid wages M3,500.<br />
    (b) Purchases Account: Bought goods on credit from T. Moeketsi M15,000; bought goods on credit from L. Ramafole M8,000.<br />
    (c) Sales Account: Sold goods on credit to K. Mphuthi M10,000; sold goods on credit to T. Rantao M7,500.</li>
  <li>A business had the following bank transactions. Record them in a Cash Book (bank columns only):<br />
    Balance at bank M30,000; paid creditors M8,000; received from debtors M12,000; paid electricity M2,000.</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>Books of original entry are where transactions are first recorded</li>
  <li>The ledger is the main book of accounts</li>
  <li>Posting transfers entries from journals to the ledger</li>
  <li>Balancing off gives the closing balance of an account</li>
  <li>The Cash Book is both a book of original entry and a ledger account</li>
</ul>`,
    estimatedReadingTime: 30,
    createdAt: new Date('2026-07-20'),
  },
  {
    id: 'acc-ch-3',
    bookId: 'lgcse-accounting-workbook',
    title: 'Trial Balance and Financial Statements',
    slug: 'trial-balance-and-financial-statements',
    chapterNumber: 3,
    content: `<h1>CHAPTER 3: Trial Balance and Financial Statements</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to prepare a trial balance, identify and correct errors, and prepare basic financial statements including the Income Statement and Balance Sheet.
</blockquote>

<h2>3.1 The Trial Balance</h2>

<p>A trial balance is a statement of all ledger account balances at a particular date. It is used to check the arithmetical accuracy of the double entry records.</p>

<h3>Rules for Preparing a Trial Balance</h3>
<ul>
  <li>List all accounts with a <strong>debit balance</strong> on the debit side</li>
  <li>List all accounts with a <strong>credit balance</strong> on the credit side</li>
  <li>Total both sides — they should be equal</li>
</ul>

<h3>Which Accounts Have Debit Balances?</h3>
<ul>
  <li>Assets (e.g., Cash, Bank, Equipment, Debtors, Premises)</li>
  <li>Expenses (e.g., Rent, Wages, Electricity, Purchases)</li>
  <li>Drawings</li>
</ul>

<h3>Which Accounts Have Credit Balances?</h3>
<ul>
  <li>Liabilities (e.g., Creditors, Loan, Bank Overdraft)</li>
  <li>Capital</li>
  <li>Revenue (e.g., Sales, Commission Received, Rent Income)</li>
</ul>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 3.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">From the following balances, prepare a trial balance as at 31 December 2025:</p>
<table class="w-full text-sm border-collapse my-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Account</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Capital</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">100,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Equipment</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">35,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Debtors</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">18,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Creditors</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">12,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Sales</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">250,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Purchases</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">150,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Rent</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">12,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Wages</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">24,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Cash at Bank</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">15,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Drawings</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">8,000</td></tr>
</tbody>
</table>
</div>

<h2>3.2 Errors and Their Correction</h2>

<h3>Types of Errors</h3>

<div class="overflow-x-auto my-6">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Error Type</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Description</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Affects Trial Balance?</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Error of omission</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Transaction completely omitted from books</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">No</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Error of commission</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Correct amount, wrong person's account</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">No</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Error of principle</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Wrong class of account (e.g., expense treated as asset)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">No</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Reversal of entry</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Debit and credit sides reversed</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">No</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Compensating error</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Two errors cancel each other out</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">No</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">One-sided error</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Only one side of entry recorded</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Yes</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Transposition error</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Digits written in wrong order (e.g., M54 written as M45)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Yes (difference divisible by 9)</td>
</tr>
</tbody>
</table>
</div>

<h2>3.3 Financial Statements</h2>

<p>At the end of an accounting period, businesses prepare financial statements to show their performance and financial position.</p>

<h3>Income Statement (Profit and Loss Account)</h3>
<p>The Income Statement calculates the net profit or loss for the period:</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Structure of Income Statement:</p>
<pre class="text-sm text-emerald-700 dark:text-emerald-300 font-mono">
Sales (Revenue)                          XXX
Less: Cost of Sales                     (XXX)
<strong>Gross Profit</strong>                            XXX
Less: Expenses                          (XXX)
<strong>Net Profit</strong>                              XXX
</pre>
</div>

<p><strong>Cost of Sales = Opening Inventory + Purchases − Closing Inventory</strong></p>

<h3>Balance Sheet (Statement of Financial Position)</h3>
<p>The Balance Sheet shows the financial position at a specific date:</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Structure of Balance Sheet:</p>
<pre class="text-sm text-emerald-700 dark:text-emerald-300 font-mono">
<strong>ASSETS</strong>
Non-Current Assets:  Equipment, Premises, Vehicles    XXX
Current Assets:      Inventory, Debtors, Cash/Bank    XXX
Total Assets                                          XXX

<strong>CAPITAL AND LIABILITIES</strong>
Capital:             Opening Capital + Net Profit     XXX
                     Less: Drawings                   (XXX)
Current Liabilities: Creditors, Loan (short-term)     XXX
Total Capital and Liabilities                         XXX
</pre>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 3.2</h4>
<p class="text-emerald-700 dark:text-emerald-300">Using the trial balance from Example 3.1, prepare the Income Statement for the year ended 31 December 2025 and the Balance Sheet as at that date. (Assume closing inventory is M20,000.)</p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 3.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>What is a trial balance and why is it prepared?</li>
  <li>Identify whether each account has a debit or credit balance:<br />
    (a) Sales &nbsp; (b) Rent &nbsp; (c) Creditors &nbsp; (d) Equipment &nbsp; (e) Drawings &nbsp; (f) Capital</li>
  <li>The following balances were extracted from the books of T. Nkosi. Prepare a trial balance:<br />
    Capital M60,000, Sales M120,000, Purchases M80,000, Rent M6,000, Wages M15,000, Equipment M25,000, Debtors M12,000, Creditors M8,000, Bank M5,000, Drawings M4,000.</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 3.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>Using the trial balance from Exercise 3.1, prepare the Income Statement and Balance Sheet. Assume closing inventory is M12,000 and there were no other adjustments.</li>
  <li>State whether each error affects the trial balance and explain the correction needed:<br />
    (a) A sale of M5,000 was entered only in the Sales Account, not in the customer's account.<br />
    (b) Rent paid of M2,000 was entered on the credit side of the Rent Account.<br />
    (c) Wages paid M3,500 was entered as M5,300 in the Wages Account.</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>A trial balance checks the arithmetical accuracy of double entry</li>
  <li>Total debits must equal total credits in a trial balance</li>
  <li>Errors can be classified by type and effect</li>
  <li>The Income Statement shows profit or loss over a period</li>
  <li>The Balance Sheet shows assets, capital, and liabilities at a point in time</li>
  <li>Assets = Capital + Liabilities (the accounting equation) must always hold</li>
</ul>`,
    estimatedReadingTime: 30,
    createdAt: new Date('2026-07-20'),
  },
  {
    id: 'acc-ch-4',
    bookId: 'lgcse-accounting-workbook',
    title: 'Bank Reconciliation and Control Accounts',
    slug: 'bank-reconciliation-and-control-accounts',
    chapterNumber: 4,
    content: `<h1>CHAPTER 4: Bank Reconciliation and Control Accounts</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to prepare a bank reconciliation statement, explain the purpose of control accounts, and prepare sales ledger and purchases ledger control accounts.
</blockquote>

<h2>4.1 Bank Reconciliation</h2>

<p>A bank reconciliation statement compares the cash book bank balance with the bank statement balance and explains any differences.</p>

<h3>Why Do Differences Occur?</h3>
<ul>
  <li><strong>Unpresented cheques</strong> — Cheques issued but not yet presented to the bank for payment</li>
  <li><strong>Uncredited deposits</strong> — Deposits made but not yet recorded by the bank</li>
  <li><strong>Bank charges</strong> — Charges deducted by the bank not yet recorded in the cash book</li>
  <li><strong>Standing orders / Direct debits</strong> — Automatic payments not yet recorded</li>
  <li><strong>Dishonoured cheques</strong> — Cheques deposited that have been returned unpaid</li>
  <li><strong>Errors</strong> — Mistakes in either the cash book or the bank statement</li>
</ul>

<h3>Steps to Prepare a Bank Reconciliation Statement</h3>

<ol>
  <li><strong>Update the Cash Book:</strong> Record any items from the bank statement not yet in the cash book (bank charges, standing orders, direct credits, etc.)</li>
  <li><strong>Calculate the corrected cash book balance</strong></li>
  <li><strong>Prepare the reconciliation statement</strong> starting from the bank statement balance or the corrected cash book balance</li>
</ol>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 4.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">The cash book of M. Mokoena shows a debit balance of M24,500 at 31 March 2026. The bank statement shows a credit balance of M28,200. On investigation, you find:</p>
<ol class="text-emerald-700 dark:text-emerald-300">
  <li>Cheques issued but not presented: M5,000</li>
  <li>Deposits not yet credited by the bank: M3,200</li>
  <li>Bank charges of M400 not recorded in the cash book</li>
  <li>A standing order for insurance M700 not recorded in the cash book</li>
</ol>
<p class="mt-2"><strong>Solution:</strong></p>
<p class="font-semibold mt-2">Step 1: Update the Cash Book</p>
<table class="w-full text-sm border-collapse">
<tr><td class="border p-1">Balance b/d</td><td class="border p-1">M24,500</td></tr>
<tr><td class="border p-1">Less: Bank charges (M400)</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Less: Insurance standing order (M700)</td><td class="border p-1"></td></tr>
<tr class="font-bold"><td class="border p-1">Adjusted balance</td><td class="border p-1">M23,400</td></tr>
</table>
<p class="font-semibold mt-2">Step 2: Bank Reconciliation Statement as at 31 March 2026</p>
<table class="w-full text-sm border-collapse">
<tr><td class="border p-1">Balance per bank statement</td><td class="border p-1">M28,200</td></tr>
<tr><td class="border p-1">Less: Unpresented cheques</td><td class="border p-1">(M5,000)</td></tr>
<tr><td class="border p-1">Add: Uncredited deposits</td><td class="border p-1">M3,200</td></tr>
<tr><td class="border p-1">&nbsp;</td><td class="border p-1">&nbsp;</td></tr>
<tr><td class="border p-1">Less: Items on bank statement not yet in cash book:</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">&nbsp;&nbsp;Bank charges</td><td class="border p-1">(M400)</td></tr>
<tr><td class="border p-1">&nbsp;&nbsp;Insurance standing order</td><td class="border p-1">(M700)</td></tr>
<tr><td class="border p-1">&nbsp;&nbsp;Corrected items total</td><td class="border p-1">(M1,100)</td></tr>
<tr class="font-bold"><td class="border p-1">Corrected balance per bank</td><td class="border p-1">M23,400</td></tr>
</table>
<p>This matches the corrected cash book balance.</p>
</div>

<h2>4.2 Control Accounts</h2>

<p>Control accounts are summary accounts in the general ledger that show the total of all individual accounts in a subsidiary ledger.</p>

<h3>Types of Control Accounts</h3>
<ul>
  <li><strong>Sales Ledger Control Account (SLCA)</strong> — Total of all debtors (individual customer accounts)</li>
  <li><strong>Purchases Ledger Control Account (PLCA)</strong> — Total of all creditors (individual supplier accounts)</li>
</ul>

<h3>Structure of Sales Ledger Control Account</h3>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Dr (Debit) — SLCA</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">Cr (Credit) — SLCA</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">
    <strong>Debit entries:</strong><br />
    • Balance b/d (opening debtors)<br />
    • Credit sales (total from Sales Journal)<br />
    • Dishonoured cheques<br />
    • Interest charged on overdue accounts
  </td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1" colspan="4">
    <strong>Credit entries:</strong><br />
    • Cash/Bank received from debtors<br />
    • Returns inwards (sales returns)<br />
    • Discount allowed<br />
    • Bad debts written off<br />
    • Balance c/d (closing debtors)
  </td>
</tr>
</tbody>
</table>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 4.2 — Sales Ledger Control Account</h4>
<p class="text-emerald-700 dark:text-emerald-300">From the following information, prepare the Sales Ledger Control Account for April 2026:</p>
<table class="w-full text-sm border-collapse my-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Detail</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Debtors at 1 April 2026</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">45,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Credit sales</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">120,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Cash received from debtors</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">98,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Returns inwards</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">4,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Discount allowed</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">2,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Bad debts written off</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">1,500</td></tr>
</tbody>
</table>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 4.3 — Purchases Ledger Control Account</h4>
<p class="text-emerald-700 dark:text-emerald-300">From the following information, prepare the Purchases Ledger Control Account for April 2026:</p>
<table class="w-full text-sm border-collapse my-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Detail</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Creditors at 1 April 2026</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">32,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Credit purchases</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">85,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Payments to creditors</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">70,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Returns outwards</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">3,000</td></tr>
<tr><td class="border border-emerald-200 dark:border-emerald-800 p-1">Discount received</td><td class="border border-emerald-200 dark:border-emerald-800 p-1">1,200</td></tr>
</tbody>
</table>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 4.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>Explain the purpose of a bank reconciliation statement.</li>
  <li>The cash book of P. Moeketsi shows a debit balance of M15,000. The bank statement shows a credit balance of M18,500. Items causing the difference:<br />
    — Unpresented cheques: M6,000<br />
    — Uncredited deposits: M2,000<br />
    — Bank charges: M350 (not in cash book)<br />
    — Direct debit for insurance: M850 (not in cash book)<br />
    Prepare the updated cash book and the bank reconciliation statement.</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 4.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>What is the purpose of a control account?</li>
  <li>From the following, prepare the Sales Ledger Control Account:<br />
    Debtors at 1 May: M28,000; Credit sales: M95,000; Cash from debtors: M82,000; Returns inwards: M2,500; Discount allowed: M1,800; Bad debts: M1,200.</li>
  <li>From the following, prepare the Purchases Ledger Control Account:<br />
    Creditors at 1 May: M22,000; Credit purchases: M65,000; Payments: M58,000; Returns outwards: M2,000; Discount received: M900.</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>Bank reconciliation explains differences between the cash book and bank statement</li>
  <li>Always update the cash book first with items from the bank statement</li>
  <li>Control accounts provide a check on the accuracy of subsidiary ledgers</li>
  <li>SLCA = total of all debtors (debit balances in sales ledger)</li>
  <li>PLCA = total of all creditors (credit balances in purchases ledger)</li>
</ul>`,
    estimatedReadingTime: 28,
    createdAt: new Date('2026-07-20'),
  },
  {
    id: 'acc-ch-5',
    bookId: 'lgcse-accounting-workbook',
    title: 'Depreciation, Bad Debts, and Correction of Errors',
    slug: 'depreciation-bad-debts-and-correction-of-errors',
    chapterNumber: 5,
    content: `<h1>CHAPTER 5: Depreciation, Bad Debts, and Correction of Errors</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to calculate depreciation using different methods, account for bad debts and the allowance for doubtful debts, and correct accounting errors using journal entries.
</blockquote>

<h2>5.1 Depreciation</h2>

<p>Depreciation is the reduction in value of a non-current asset over its useful life due to wear and tear, obsolescence, or the passage of time.</p>

<h3>Causes of Depreciation</h3>
<ul>
  <li><strong>Wear and tear</strong> — Physical deterioration through use</li>
  <li><strong>Obsolescence</strong> — Becoming outdated due to技术进步</li>
  <li><strong>Passage of time</strong> — Some assets lose value simply with time (e.g., leases)</li>
  <li><strong>Depletion</strong> — Using up natural resources (e.g., mines, quarries)</li>
</ul>

<h3>Methods of Calculating Depreciation</h3>

<h4>Method 1: Straight Line Method (Equal Installment)</h4>
<p>Depreciation is the same amount each year.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 my-4 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Formula:</p>
<p class="text-emerald-700 dark:text-emerald-300 font-mono">
Annual Depreciation = (Cost − Residual Value) / Useful Life (years)
</p>
<p class="text-emerald-700 dark:text-emerald-300 font-mono mt-1">
Depreciation Rate = (Annual Depreciation / Cost) × 100%
</p>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 5.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">Equipment costing M100,000 has an estimated useful life of 5 years and a residual value of M10,000. Calculate depreciation using the straight line method.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Annual Depreciation = (100,000 − 10,000) / 5 = <strong>M18,000 per year</strong></p>
<p>Depreciation Rate = (18,000 / 100,000) × 100 = <strong>18% per year</strong></p>
</div>

<h4>Method 2: Reducing Balance Method (Diminishing Balance)</h4>
<p>Depreciation is calculated as a fixed percentage of the <strong>book value</strong> (cost minus accumulated depreciation) each year.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 my-4 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Formula:</p>
<p class="text-emerald-700 dark:text-emerald-300 font-mono">
Annual Depreciation = Book Value × Depreciation Rate%
</p>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 5.2</h4>
<p class="text-emerald-700 dark:text-emerald-300">A vehicle costing M200,000 is depreciated at 20% per annum using the reducing balance method. Calculate the depreciation for each of the first three years.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<table class="w-full text-sm border-collapse mt-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Year</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Book Value at Start</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Depreciation (20%)</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Book Value at End</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">1</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">200,000</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">40,000</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">160,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">2</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">160,000</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">32,000</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">128,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">3</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">128,000</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">25,600</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">102,400</td>
</tr>
</tbody>
</table>
</div>

<h3>Accounting for Depreciation</h3>

<p>The double entry for depreciation is:</p>
<ul>
  <li><strong>Debit:</strong> Depreciation Expense (Income Statement)</li>
  <li><strong>Credit:</strong> Accumulated Depreciation (Balance Sheet — deducted from the asset)</li>
</ul>

<h2>5.2 Bad Debts and Allowance for Doubtful Debts</h2>

<h3>Bad Debts</h3>
<p>When a customer is unable to pay their debt, the amount is written off as a bad debt.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 my-4 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Double Entry for Bad Debts:</p>
<p class="text-emerald-700 dark:text-emerald-300">
<strong>Debit:</strong> Bad Debts Account (Expense)<br />
<strong>Credit:</strong> Debtor's Account (remove the debtor)
</p>
</div>

<h3>Allowance for Doubtful Debts</h3>
<p>Instead of waiting for debts to become definitely bad, businesses create an allowance for doubtful debts — an estimate of debts that may not be collected.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 my-4 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Double Entry for Allowance for Doubtful Debts:</p>
<p class="text-emerald-700 dark:text-emerald-300">
<em>When creating/increasing the allowance:</em><br />
<strong>Debit:</strong> Doubtful Debts Expense<br />
<strong>Credit:</strong> Allowance for Doubtful Debts (Balance Sheet)
</p>
<p class="text-emerald-700 dark:text-emerald-300 mt-2">
<em>When decreasing the allowance:</em><br />
<strong>Debit:</strong> Allowance for Doubtful Debts<br />
<strong>Credit:</strong> Doubtful Debts Expense (reduction in expense)
</p>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 5.3</h4>
<p class="text-emerald-700 dark:text-emerald-300">A business has debtors of M50,000 at 31 December 2025. It is estimated that 5% of debtors may be doubtful. The allowance for doubtful debts last year was M2,000.</p>
<p class="mt-2"><strong>Solution:</strong></p>
<p>Required allowance = 5% × M50,000 = M2,500<br />
Existing allowance = M2,000<br />
Increase required = M500</p>
<p><strong>Journal Entry:</strong></p>
<table class="w-full text-sm border-collapse mt-1">
<tr><td class="border p-1">Dr Doubtful Debts Expense</td><td class="border p-1">M500</td></tr>
<tr><td class="border p-1">Cr Allowance for Doubtful Debts</td><td class="border p-1">M500</td></tr>
</table>
<p>Balance Sheet extract: Debtors M50,000 − Allowance M2,500 = <strong>Net Debtors M47,500</strong></p>
</div>

<h2>5.3 Correction of Errors</h2>

<p>Errors in accounting records are corrected using <strong>journal entries</strong> or through a <strong>Suspense Account</strong>.</p>

<h3>The Suspense Account</h3>
<p>When a trial balance does not balance, the difference is placed in a Suspense Account. As errors are found and corrected, the Suspense Account is cleared.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 5.4 — Correcting Errors</h4>
<p class="text-emerald-700 dark:text-emerald-300">Correct the following errors using journal entries:</p>
<ol class="text-emerald-700 dark:text-emerald-300">
  <li>A sale of M5,000 to T. Khosi was correctly recorded in the Sales Account but was not entered in T. Khosi's account.</li>
  <li>Rent paid of M3,000 was debited to the Rent Account but credited to the Bank Account (i.e., the credit entry was omitted).</li>
  <li>Equipment repairs of M2,500 was incorrectly debited to the Equipment Account.</li>
</ol>
<p class="mt-2"><strong>Solution:</strong></p>
<table class="w-full text-sm border-collapse mt-2">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">No.</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Account Debited</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Account Credited</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-1">Amount (M)</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">1</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">T. Khosi (Debtor)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">Suspense (or Sales — if not yet recorded)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">5,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">2</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">Bank</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">Suspense</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">3,000</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">3</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">Repairs (Expense)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">Equipment</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-1">2,500</td>
</tr>
</tbody>
</table>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 5.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>State two causes of depreciation.</li>
  <li>Calculate annual depreciation using straight line method:<br />
    Cost M150,000, Residual Value M15,000, Useful Life 6 years.</li>
  <li>A machine costing M80,000 is depreciated at 25% per annum using the reducing balance method. Calculate the book value after 3 years.</li>
  <li>Record the double entry for annual depreciation of M12,000 on equipment.</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 5.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>A business has debtors of M60,000. An allowance of 5% for doubtful debts is to be created. The existing allowance is M2,000. Calculate the increase or decrease and show the journal entry.</li>
  <li>A debtor owing M1,500 is declared bankrupt. Write off the amount as a bad debt.</li>
  <li>Correct the following errors using journal entries:<br />
    (a) Discount allowed M400 was debited to the Discount Received Account.<br />
    (b) Wages paid M6,000 was debited to the Wages Account but credited to the Bank Account (credit omitted).<br />
    (c) A purchase of office equipment for M8,000 was debited to the Purchases Account.</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>Depreciation allocates the cost of a non-current asset over its useful life</li>
  <li>Straight line: equal annual amounts; Reducing balance: decreasing annual amounts</li>
  <li>Bad debts are actual losses; Allowance for doubtful debts is an estimate</li>
  <li>Errors can be corrected through journal entries</li>
  <li>The Suspense Account holds the trial balance difference while errors are investigated</li>
</ul>`,
    estimatedReadingTime: 28,
    createdAt: new Date('2026-07-20'),
  },
  {
    id: 'acc-ch-6',
    bookId: 'lgcse-accounting-workbook',
    title: 'Partnership Accounts and Ratio Analysis',
    slug: 'partnership-accounts-and-ratio-analysis',
    chapterNumber: 6,
    content: `<h1>CHAPTER 6: Partnership Accounts and Ratio Analysis</h1>

<blockquote>
  <strong>Chapter Objectives:</strong><br />
  By the end of this chapter, you should be able to prepare partnership accounts including capital and current accounts, profit appropriation, and calculate and interpret key financial ratios.
</blockquote>

<h2>6.1 Partnership Accounts</h2>

<p>A partnership is a business owned by two or more people (usually 2 to 20 partners) who share profits and losses according to a partnership agreement.</p>

<h3>Features of a Partnership</h3>
<ul>
  <li>Shared ownership and control</li>
  <li>Shared profits and losses</li>
  <li>Unlimited liability (unless a limited liability partnership)</li>
  <li>Partners contribute capital</li>
  <li>Partners may receive salaries, interest on capital, and share residual profits</li>
</ul>

<h3>Partners' Capital and Current Accounts</h3>

<p><strong>Capital Account:</strong> Records the fixed amount each partner contributes. This remains unchanged unless additional capital is introduced or permanently withdrawn.</p>

<p><strong>Current Account:</strong> Records all other transactions with the partner:<br />
<em>Credit side:</em> Salary, Interest on Capital, Share of Profits<br />
<em>Debit side:</em> Drawings, Interest on Drawings</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 6.1</h4>
<p class="text-emerald-700 dark:text-emerald-300">P. Mokoena and T. Radebe are partners sharing profits in the ratio 3:2. The following information is available for the year ended 31 December 2025:</p>
<table class="w-full text-sm border-collapse my-2">
<tbody>
<tr><td class="border p-1">Net profit for the year</td><td class="border p-1">M100,000</td></tr>
<tr><td class="border p-1">Partner salaries: Mokoena M12,000, Radebe M8,000</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Interest on capital: 5% per annum</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Capital accounts: Mokoena M100,000, Radebe M80,000</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Drawings: Mokoena M30,000, Radebe M20,000</td><td class="border p-1"></td></tr>
</tbody>
</table>
<p class="mt-2"><strong>Solution — Profit Appropriation Statement:</strong></p>
<table class="w-full text-sm border-collapse mt-2">
<tr><td class="border p-1">Net Profit</td><td class="border p-1"></td><td class="border p-1">M100,000</td></tr>
<tr><td class="border p-1">Less: Partner Salaries (12,000 + 8,000)</td><td class="border p-1">(M20,000)</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Less: Interest on Capital (5,000 + 4,000)</td><td class="border p-1">(M9,000)</td><td class="border p-1"></td></tr>
<tr><td class="border p-1">Residual Profit to be shared</td><td class="border p-1"></td><td class="border p-1">M71,000</td></tr>
<tr><td class="border p-1">Mokoena's share (3/5 × 71,000)</td><td class="border p-1"></td><td class="border p-1">M42,600</td></tr>
<tr><td class="border p-1">Radebe's share (2/5 × 71,000)</td><td class="border p-1"></td><td class="border p-1">M28,400</td></tr>
</table>
</div>

<h3>Profit Appropriation Account</h3>
<p>The Profit Appropriation Account shows how the net profit is distributed among the partners.</p>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<p class="font-semibold text-emerald-800 dark:text-emerald-200">Format:</p>
<pre class="text-sm text-emerald-700 dark:text-emerald-300 font-mono">
Net Profit for the year                                  XXX
Less: Partner Salaries                                  (XXX)
Less: Interest on Capital                               (XXX)
Less: Interest on Drawings (added back)                 XXX
<strong>Residual Profit to be shared</strong>                          XXX
  Partner A's share (ratio)                             XXX
  Partner B's share (ratio)                             XXX
</pre>
</div>

<h2>6.2 Ratio Analysis</h2>

<p>Ratio analysis helps evaluate the financial performance and position of a business. Ratios are calculated from financial statements.</p>

<h3>Profitability Ratios</h3>

<table class="w-full text-sm border-collapse my-4">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Ratio</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Formula</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">What It Measures</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Gross Profit Margin</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(GP / Sales) × 100%</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Profitability of trading</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Net Profit Margin</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(NP / Sales) × 100%</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Overall profitability</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Return on Capital Employed (ROCE)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(NP / Capital) × 100%</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Return on owner's investment</td>
</tr>
</tbody>
</table>

<h3>Liquidity Ratios</h3>

<table class="w-full text-sm border-collapse my-4">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Ratio</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Formula</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">What It Measures</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Current Ratio (Working Capital Ratio)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">CA / CL</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Ability to pay short-term debts (ideal: 1.5 to 2)</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Quick Ratio (Acid Test)</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(CA − Inventory) / CL</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Ability to pay without selling inventory (ideal: ~1)</td>
</tr>
</tbody>
</table>

<h3>Efficiency Ratios</h3>

<table class="w-full text-sm border-collapse my-4">
<thead>
<tr class="bg-emerald-100 dark:bg-emerald-900/40">
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Ratio</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">Formula</th>
  <th class="border border-emerald-200 dark:border-emerald-800 p-2">What It Measures</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Rate of Inventory Turnover</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">COS / Avg Inventory</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">How quickly inventory is sold</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Debtors Collection Period</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(Debtors / Credit Sales) × 365</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Average days to collect from debtors</td>
</tr>
<tr>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Creditors Payment Period</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2 font-mono">(Creditors / Credit Purchases) × 365</td>
  <td class="border border-emerald-200 dark:border-emerald-800 p-2">Average days to pay creditors</td>
</tr>
</tbody>
</table>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/20">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Example 6.2</h4>
<p class="text-emerald-700 dark:text-emerald-300">From the following information, calculate: (a) Current Ratio (b) Quick Ratio (c) Gross Profit Margin (d) Net Profit Margin</p>
<table class="w-full text-sm border-collapse my-2">
<tbody>
<tr><td class="border p-1">Sales</td><td class="border p-1">M300,000</td></tr>
<tr><td class="border p-1">Cost of Sales</td><td class="border p-1">M180,000</td></tr>
<tr><td class="border p-1">Net Profit</td><td class="border p-1">M45,000</td></tr>
<tr><td class="border p-1">Current Assets</td><td class="border p-1">M80,000</td></tr>
<tr><td class="border p-1">Inventory</td><td class="border p-1">M30,000</td></tr>
<tr><td class="border p-1">Current Liabilities</td><td class="border p-1">M40,000</td></tr>
</tbody>
</table>
<p class="mt-2"><strong>Solution:</strong></p>
<p>a) Current Ratio = 80,000 / 40,000 = <strong>2:1</strong> (good — strong liquidity)<br />
b) Quick Ratio = (80,000 − 30,000) / 40,000 = 50,000 / 40,000 = <strong>1.25:1</strong> (acceptable)<br />
c) Gross Profit Margin = (300,000 − 180,000) / 300,000 × 100 = 120,000 / 300,000 × 100 = <strong>40%</strong><br />
d) Net Profit Margin = 45,000 / 300,000 × 100 = <strong>15%</strong></p>
</div>

<h2>Practice Exercises</h2>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 6.1</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>What is a partnership and how does it differ from a sole trader?</li>
  <li>A and B are partners sharing profits 2:1. Capital: A M120,000, B M80,000. Interest on capital 5%. Partner salaries: A M10,000, B M6,000. Net profit M90,000. Drawings: A M24,000, B M18,000. Prepare the Profit Appropriation Account and the partners' current accounts.</li>
</ol>
</div>

<div class="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 my-6 dark:border-emerald-800 dark:bg-emerald-900/10">
<h4 class="font-semibold text-emerald-800 dark:text-emerald-200">Exercise 6.2</h4>
<ol class="list-decimal list-inside space-y-2 text-emerald-700 dark:text-emerald-300">
  <li>State the formula for each ratio and explain what it measures:<br />
    (a) Current Ratio &nbsp; (b) Gross Profit Margin &nbsp; (c) Rate of Inventory Turnover</li>
  <li>From the following data, calculate: Current Ratio, Quick Ratio, Gross Profit Margin, Net Profit Margin, Debtors Collection Period.<br />
    Sales M500,000 (80% on credit), Cost of Sales M300,000, Net Profit M60,000,<br />
    Current Assets M120,000 (including Inventory M45,000), Current Liabilities M60,000, Debtors M40,000.</li>
</ol>
</div>

<h2>Key Points to Remember</h2>
<ul>
  <li>Partnership accounts require capital accounts, current accounts, and profit appropriation</li>
  <li>Profits are shared according to the partnership agreement</li>
  <li>Ratio analysis helps interpret financial statements</li>
  <li>Profitability ratios measure earning power</li>
  <li>Liquidity ratios measure ability to pay short-term debts</li>
  <li>Efficiency ratios measure how well resources are used</li>
</ul>`,
    estimatedReadingTime: 30,
    createdAt: new Date('2026-07-20'),
  },
];

export const STATIC_BOOK = STATIC_BOOKS[0];
export const STATIC_CHAPTERS = MATH_CHAPTERS;

const MYSTERY_CHAPTERS: Chapter[] = [
  {
    id: 'ch-1',
    bookId: 'the-mystery-of-god',
    title: 'BEFORE ADAM THERE WAS CHRIST',
    slug: 'before-adam-there-was-christ',
    chapterNumber: 1,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is not the result of human failure, but the eternal source from which humanity was designed; Adam is the first unfolding of that eternal design in time.
</blockquote>

<h2>INTRODUCTION</h2>
<p>The Bible does not begin with religion, sin, or salvation but it begins with God. Within God's creative act, there is a mystery that runs deeper than most surface readings of Genesis: humanity did not originate in Adam's mind, history, or biology but in divine intention.</p>
<p>Adam appears as the first human in time, but not necessarily the first human in meaning. When the New Testament speaks about Christ as "the image of the invisible God" and as the One through whom all things were created, it forces a re-evaluation of Genesis itself.</p>
<p>This chapter establishes a foundational truth that will govern the entire book: Humanity does not define Christ. Christ defines humanity even before Adam existed.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before Adam was formed from dust, God already had a complete and perfect vision of humanity. That vision was not abstract, it was personal, living, and fully expressed in Christ.</p>
<p>This means:</p>
<ul>
  <li>Adam is not the starting point of humanity's meaning</li>
  <li>Adam is the starting point of humanity's appearance in time</li>
  <li>Christ is the starting point of humanity's identity in eternity</li>
</ul>
<p>So, humanity is not something God is experimenting with but something God already fully knows in Christ. Adam is the first visible form of that invisible reality.</p>
<p>This is why the New Testament does not describe Christ as a reaction to Adam — but as the One through whom Adam himself exists.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="eternityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#8b5cf6" />
      </linearGradient>
      <linearGradient id="historyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#ef4444" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g transform="translate(100, 200)">
      <circle cx="0" cy="0" r="80" fill="url(#eternityGrad)" opacity="0.15" filter="url(#glow)" />
      <circle cx="0" cy="0" r="60" fill="url(#eternityGrad)" opacity="0.8" />
      <text x="0" y="-10" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="16px">CHRIST</text>
      <text x="0" y="15" text-anchor="middle" fill="#e0e7ff" font-size="11px">The Eternal Image</text>
      <text x="0" y="30" text-anchor="middle" fill="#e0e7ff" font-size="11px">& Blueprint</text>
    </g>

    <path d="M 230 200 L 570 200" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 6" opacity="0.5" />
    <polygon points="570,195 585,200 570,205" fill="currentColor" opacity="0.8" />

    <path d="M 160 170 C 260 100, 500 100, 600 170" fill="none" stroke="url(#eternityGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 4" />
    <text x="380" y="90" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">Christ-Shaped Blueprint Design Flow</text>

    <g transform="translate(620, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#historyGrad)" opacity="0.15" />
      <circle cx="0" cy="0" r="50" fill="url(#historyGrad)" opacity="0.8" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">ADAM</text>
      <text x="0" y="12" text-anchor="middle" fill="#fee2e2" font-size="10px">First Physical</text>
      <text x="0" y="25" text-anchor="middle" fill="#fee2e2" font-size="10px">Expression</text>
    </g>

    <text x="100" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">ETERNITY</text>
    <text x="100" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Before Creation</text>

    <text x="620" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">TIME & HISTORY</text>
    <text x="620" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Genesis 1 & 2</text>

    <rect x="250" y="230" width="260" height="90" rx="12" fill="currentColor" opacity="0.05" />
    <rect x="250" y="230" width="260" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="1" opacity="0.15" />
    <text x="380" y="255" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">"Adam is a type of the One</text>
    <text x="380" y="275" text-anchor="middle" fill="currentColor" font-weight="semibold" font-size="12px">who was to come."</text>
    <text x="380" y="295" text-anchor="middle" fill="currentColor" opacity="0.6" font-style="italic" font-size="11px">— Romans 5:14</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>
<p>To understand this properly, we must read Scripture not as isolated verses, but as one continuous revelation.</p>

<h3>1. Christ as the Creative Source</h3>
<blockquote>"Through Him all things were made; without Him nothing was made that has been made." (John 1:3)</blockquote>
<p>This includes Adam. Adam is not outside Christ's creative agency. Adam exists inside Christ's creative action. So Adam cannot be the origin of humanity's meaning — because Adam himself has an origin.</p>

<h3>2. Christ as the Image Before Adam</h3>
<blockquote>"Christ is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>Now compare this with Genesis: "Let us make man in our image." (Genesis 1:26)</p>
<p>A theological question emerges: If Christ is the true image of God, then what "image" is humanity created in? The answer becomes unavoidable in this framework: Humanity is created in a Christ-shaped image. This means Adam is not the definition of humanity, he is the first expression of a Christ-defined design.</p>

<h3>3. Adam as Type, Not Origin</h3>
<blockquote>"Adam … is a type of the one who was to come." (Romans 5:14)</blockquote>
<p>A "type" in biblical language means: pattern, shadow, foreshadowing reality, incomplete representation.</p>
<p>This is critical: Paul does NOT say Christ is a type of Adam. He says Adam is a type of Christ. That reverses the entire interpretive direction. Adam is not the reference point. Christ is.</p>

<h3>4. Two Orders of Humanity</h3>
<blockquote>"The first man is of the earth; the second man is from heaven." (1 Corinthians 15:47)</blockquote>
<p>This introduces two levels of humanity: Earth-derived humanity (Adam) and Heaven-originated humanity (Christ). This is not just moral difference. It is origin difference. One comes from dust. One comes from eternal reality.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Adam is Real, But Not Ultimate</h3>
<p>Adam is not symbolic fiction. Adam is real history. But real history does not always equal ultimate meaning. Adam is the first appearance of humanity in time, not the final explanation of humanity in eternity. So Adam must be interpreted, not just accepted.</p>

<h3>2. Christ is Not Inserted into History</h3>
<p>A shallow view says: Adam sinned → God sent Christ. But Scripture reveals something deeper: Christ is not inserted after Adam. Christ is embedded before Adam.</p>
<p>This means: Christ is not reacting to human history. Human history is unfolding within Christ's eternal purpose. So Adam does not define Christ. Christ defines what Adam was always pointing toward.</p>

<h3>3. Humanity Was Never Neutral in God's Mind</h3>
<p>God did not create humanity without identity. He did not create Adam and later "discover" Christ as the solution. Instead: Humanity already had meaning before it had form and that meaning is Christ. So Adam is not the beginning of God's idea of humanity. Adam is the beginning of humanity appearing in physical reality.</p>

<h3>4. The Hidden Direction of Creation</h3>
<p>Creation is not random movement forward but it is directional revelation. Everything is moving toward: revelation of Christ, formation of Christ-image in humanity, restoration of divine likeness. So Adam is not the center of the story but Adam is the opening page of a story whose center is already established.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood deeply:</p>
<ul>
  <li>Identity is no longer based on origin in Adam</li>
  <li>Identity becomes rooted in destiny in Christ</li>
  <li>Salvation becomes restoration of original design, not just forgiveness</li>
  <li>Life becomes alignment with eternal purpose, not just moral effort</li>
</ul>
<p>A person begins to see themselves not as a broken version of Adam, but as a being created for Christ-expression.</p>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam is not the explanation of humanity. Christ is. Adam is humanity's beginning in time. Christ is humanity's meaning in eternity.
</p>`,
    estimatedReadingTime: 15,
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'ch-2',
    bookId: 'the-mystery-of-god',
    title: 'THE LAMB BEFORE THE FOUNDATION OF THE WORLD',
    slug: 'the-lamb-before-the-foundation-of-the-world',
    chapterNumber: 2,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is revealed as "the Lamb before creation," meaning redemption is not God's reaction to sin, but part of His eternal design before Adam, Eden, or the fall existed.
</blockquote>

<h2>INTRODUCTION</h2>
<p>One of the most mysterious statements in Scripture is that Christ is "the Lamb slain from the foundation of the world." This creates a deep theological tension because a "Lamb" implies sacrifice and sacrifice implies sin. But the text places the Lamb before the foundation of the world — which is before Adam, before Eden, and before any recorded sin.</p>
<p>This forces a radical question: Was redemption introduced after sin or was it already embedded in eternity? This chapter explores the possibility that salvation is not a response to failure, but a revelation of eternal purpose.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before the world was created, God already had a complete plan for humanity that included Christ as the Lamb. This means:</p>
<ul>
  <li>God did not wait for Adam to sin before planning salvation</li>
  <li>Redemption was already part of God's eternal design</li>
  <li>The cross is not God's reaction, it is God's revelation</li>
</ul>
<p>So salvation is not something God "added later." It is something God already carried within His eternal purpose.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="bluePurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" />
        <stop offset="100%" stop-color="#9333ea" />
      </linearGradient>
      <linearGradient id="roseOrange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e11d48" />
        <stop offset="100%" stop-color="#f97316" />
      </linearGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <line x1="80" y1="200" x2="720" y2="200" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.3" />

    <g transform="translate(160, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#bluePurple)" opacity="0.15" filter="url(#softGlow)" />
      <circle cx="0" cy="0" r="50" fill="url(#bluePurple)" opacity="0.85" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">THE LAMB</text>
      <text x="0" y="12" text-anchor="middle" fill="#f5f3ff" font-weight="semibold" font-size="11px">Slain before</text>
      <text x="0" y="25" text-anchor="middle" fill="#f5f3ff" font-weight="semibold" font-size="11px">creation</text>
    </g>

    <g transform="translate(400, 200)">
      <circle cx="0" cy="0" r="50" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.2" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">CREATION</text>
      <text x="0" y="12" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="10px">Adam & Eden</text>
    </g>

    <g transform="translate(640, 200)">
      <circle cx="0" cy="0" r="70" fill="url(#roseOrange)" opacity="0.15" filter="url(#softGlow)" />
      <circle cx="0" cy="0" r="50" fill="url(#roseOrange)" opacity="0.85" />
      <text x="0" y="-8" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="14px">THE CROSS</text>
      <text x="0" y="12" text-anchor="middle" fill="#fff1f2" font-weight="semibold" font-size="11px">Revelation</text>
      <text x="0" y="25" text-anchor="middle" fill="#fff1f2" font-weight="semibold" font-size="11px">in Time</text>
    </g>

    <path d="M 210 160 C 320 80, 480 80, 590 160" fill="none" stroke="url(#bluePurple)" stroke-width="3" stroke-linecap="round" />
    <path d="M 590 160 L 592 150 M 590 160 L 580 162" stroke="url(#bluePurple)" stroke-width="3" stroke-linecap="round" />
    
    <text x="400" y="70" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">ETERNAL PLAN REVEALED IN TIME</text>
    <text x="400" y="90" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Redemption is not a reaction, it is the design.</text>

    <text x="160" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">ETERNITY</text>
    <text x="160" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Revelation 13:8</text>

    <text x="400" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">BEGINNING</text>
    <text x="400" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Genesis 1:1</text>

    <text x="640" y="300" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">HISTORY</text>
    <text x="640" y="320" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">1 Peter 1:20</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>
<p>To understand this properly, we must read Scripture not as isolated verses, but as one continuous revelation.</p>

<h3>1. The Lamb Before Creation</h3>
<blockquote>"The Lamb slain from the foundation of the world." (Revelation 13:8)</blockquote>
<p>This is not describing an event in time. It is describing a reality in eternity. It means that before creation began, the reality of Christ as sacrificial Lamb already existed in God's purpose.</p>

<h3>2. Christ Chosen Before Time</h3>
<blockquote>"He was foreknown before the foundation of the world." (1 Peter 1:20)</blockquote>
<p>Christ is not introduced after humanity falls. He is "foreknown" before time begins. This places Christ outside historical reaction and inside eternal intention.</p>

<h3>3. Eternal Purpose in Christ</h3>
<blockquote>"He purposed in Christ before the ages." (Ephesians 1:9–10)</blockquote>
<p>God's purpose is not developed through time. It is established before time. Time unfolds what eternity already decided.</p>

<h3>4. The Creative Role of Christ</h3>
<blockquote>"Through Him all things were created." (Colossians 1:16)</blockquote>
<p>This includes Adam, Eden, the tree, the garden, history itself. Nothing in creation exists outside Christ's creative framework.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. The Lamb Does Not Begin With Sin</h3>
<p>The word "Lamb" is usually associated with sacrifice, blood, and atonement. But Scripture places the Lamb before sin enters history. This means the Lamb is not first about sin. The Lamb is first about identity in God's purpose. Sin reveals the need for redemption. But Christ reveals the meaning of existence itself.</p>

<h3>2. Redemption Is Not God's Emergency Plan</h3>
<p>A shallow view of salvation says: Humanity failed → God reacted → Christ was sent. But the deeper biblical pattern says: God's eternal purpose already included Christ → creation unfolds → sin enters history → Christ is revealed in time what already existed in eternity.</p>
<p>So the cross is not divine improvisation. It is divine revelation in history of what was already true in eternity.</p>

<h3>3. Why the Lamb Exists Before the Fall</h3>
<p>If sin had not yet occurred, why is the Lamb already present? Because the Lamb is not only about what is wrong. The Lamb is about: divine love before creation, self-giving nature of God, eternal relationship within God Himself, the expression of God's character in creation. So the Lamb is not only a solution. The Lamb is a revelation of who God is eternally.</p>

<h3>4. Creation Was Always Moving Toward Christ</h3>
<p>Creation is not moving toward an unknown future. Creation is moving toward a known center: Christ revealed. So Adam is not the center. Eden is not the center. Sin is not the center. History is not the center. Christ is the center before time begins.</p>

<h3>5. The Mystery of Divine Intention</h3>
<p>God does not create without meaning already established. Nothing in creation is random experimentation. Everything exists inside eternal intention. So humanity is not accidental, experimental, or reactive. Humanity is intentional, Christ-shaped, and eternally purposed.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood:</p>
<ul>
  <li>Salvation is no longer seen as a backup plan</li>
  <li>Christ is seen as eternal meaning, not temporary solution</li>
  <li>Faith becomes participation in eternal purpose, not just forgiveness</li>
  <li>Life becomes aligned with divine intention rather than human survival</li>
</ul>
<p>It reshapes how a person sees God completely.</p>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  The Lamb was not introduced after sin entered the world. The Lamb was already present before the world began. Therefore, redemption is not God's reaction to failure — but the unveiling of His eternal purpose in Christ.
</p>`,
    estimatedReadingTime: 12,
    createdAt: new Date('2026-01-05'),
  },
  {
    id: 'ch-3',
    bookId: 'the-mystery-of-god',
    title: 'HUMANITY IN THE MIND OF GOD',
    slug: 'humanity-in-the-mind-of-god',
    chapterNumber: 3,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Humanity did not begin in dust or history, but in the eternal thought of God, fully expressed in Christ before Adam was formed.
</blockquote>

<h2>INTRODUCTION</h2>
<p>Before anything existed — before earth, time, Eden, or Adam — there was thought within God. Not human thought. Divine thought.</p>
<p>Scripture repeatedly shows that creation is not random, nor reactive, but intentional. This means humanity was not an afterthought formed from circumstance, but a deliberate expression of God's eternal purpose.</p>
<p>To understand Adam correctly, we must go further back than Genesis 2. We must go into the "mind of God" revealed through Christ.</p>
<p>This chapter explores a radical idea: Humanity existed first as divine intention before it existed as physical form.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Before God created Adam, He already had a complete idea of what humanity should be. That idea is not guesswork or evolution. It is perfect, complete, and fully revealed in Christ.</p>
<p>So:</p>
<ul>
  <li>Adam is the first physical expression of humanity</li>
  <li>Christ is the eternal definition of humanity</li>
  <li>Humanity itself began as a thought in God, not a biological event</li>
</ul>
<p>This means humanity is not accidental — it is intentional.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="thoughtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#ec4899" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
    </defs>

    <g transform="translate(400, 200)">
      <circle cx="0" cy="0" r="90" fill="url(#thoughtGrad)" opacity="0.15" />
      <circle cx="0" cy="0" r="70" fill="url(#thoughtGrad)" opacity="0.85" />
      <text x="0" y="-12" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="15px">DIVINE INTENTION</text>
      <text x="0" y="10" text-anchor="middle" fill="#fdf2f8" font-size="11px">"He chose us in Him</text>
      <text x="0" y="25" text-anchor="middle" fill="#fdf2f8" font-size="11px">before creation"</text>
      <text x="0" y="42" text-anchor="middle" fill="#fdf2f8" font-size="9px" opacity="0.8">Ephesians 1:4</text>
    </g>

    <path d="M 310 180 C 220 150, 160 160, 160 200" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />
    <g transform="translate(160, 200)">
      <circle cx="0" cy="0" r="45" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.15" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="11px">IDENTITY</text>
      <text x="0" y="10" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="9px">Defined in Christ</text>
    </g>

    <path d="M 490 220 C 580 250, 640 240, 640 200" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" />
    <g transform="translate(640, 200)">
      <circle cx="0" cy="0" r="45" fill="currentColor" opacity="0.05" />
      <circle cx="0" cy="0" r="35" fill="currentColor" opacity="0.15" />
      <text x="0" y="-5" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="11px">EXISTENCE</text>
      <text x="0" y="10" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="9px">Formed in Dust</text>
    </g>

    <text x="400" y="320" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="13px">THE DESIGN PRECEDES THE PHYSICAL</text>
    <text x="400" y="340" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">Humanity began as a thought in God, not a biological event.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Creation Begins in Divine Will</h3>
<blockquote>"He chose us in Him before the foundation of the world." (Ephesians 1:4)</blockquote>
<p>Before physical creation, there is already divine choice. This means identity exists before existence. God does not discover humanity. He defines humanity before it appears.</p>

<h3>2. Christ as the Eternal Image</h3>
<blockquote>"He is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>If Christ is the image of God, then Christ is also the image according to which humanity is designed. So humanity is not self-defined. Humanity is Christ-defined.</p>

<h3>3. All Things Held in Christ</h3>
<blockquote>"In Him all things hold together." (Colossians 1:17)</blockquote>
<p>This means creation is not independent from Christ. Everything — origin, structure, meaning, purpose — is sustained in Him.</p>

<h3>4. The Eternal Purpose</h3>
<blockquote>"According to the eternal purpose that He accomplished in Christ Jesus." (Ephesians 3:11)</blockquote>
<p>God does not improvise history. He executes eternal purpose within time.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Humanity Begins as Divine Thought</h3>
<p>Before Adam is formed from dust, humanity already exists as an idea in God. But this is not abstract imagination. In God, thought is not passive — it is creative reality. So divine thought is not speculation. Divine thought is design reality. Humanity therefore begins as God's intentional expression of Himself in creation.</p>

<h3>2. Christ Is the Content of God's Thought About Humanity</h3>
<p>God does not think about humanity separately from Christ. God thinks humanity in Christ. So Christ is not inserted into human history later. Christ is the content of divine intention before history begins.</p>
<p>This means: God's thought = Christ-shaped humanity. Humanity in God's mind = Christ expressed in creation. Adam = first temporal unfolding of that eternal thought.</p>

<h3>3. Adam Is Not the Definition — He Is the Expression</h3>
<p>Adam is not the standard of humanity. He is the first visible manifestation of a deeper invisible design. So Adam is real, important, historical — but not final. Adam is what divine intention looks like when it enters time for the first time.</p>

<h3>4. Why Humanity Cannot Be Understood from Adam Alone</h3>
<p>If we start from Adam alone, humanity looks incomplete, fallen, fragmented, confused. But if we start from Christ, humanity becomes intentional, meaningful, Christ-shaped, destiny-driven. So interpretation changes based on origin reference.</p>

<h3>5. The Direction of Identity</h3>
<p>Humanity is not defined backward from Adam. Humanity is defined forward from Christ. This means we are not trying to "return to Eden only." We are moving toward Christ as fulfillment of original intention. Eden is beginning imagery. Christ is completed reality.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When this truth is understood:</p>
<ul>
  <li>You stop seeing yourself as an accident of history</li>
  <li>You begin to see yourself as intentional design</li>
  <li>Your identity is no longer based on failure in Adam</li>
  <li>Your identity becomes rooted in intention in Christ</li>
  <li>Life becomes discovery of divine purpose, not self-construction</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Humanity did not begin in the dust of Adam. Humanity began in the thought of God. And that thought is fully revealed in Christ.
</p>`,
    estimatedReadingTime: 14,
    createdAt: new Date('2026-01-10'),
  },
  {
    id: 'ch-4',
    bookId: 'the-mystery-of-god',
    title: 'CHRIST: THE TRUE IMAGE OF HUMANITY',
    slug: 'christ-the-true-image-of-humanity',
    chapterNumber: 4,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Christ is not merely an example of humanity; He is the original image according to which humanity was conceived, created, and ultimately fulfilled.
</blockquote>

<h2>INTRODUCTION</h2>
<p>One of the most important questions a human being can ask is: What does it truly mean to be human? For centuries, people have looked to culture, philosophy, science, politics, achievement, or even religion to answer that question. Yet Scripture presents a different answer.</p>
<p>The Bible does not define humanity by what humanity says about itself. It defines humanity by what God reveals in Christ. This means that if we want to understand humanity, we must look beyond Adam, beyond civilization, beyond history, and beyond ourselves. We must look to Christ.</p>
<p>Many believers see Christ primarily as Savior. While that is true, it is only part of the revelation. The New Testament presents Christ not only as the Savior of humanity but also as the true image of humanity. He does not merely show us how God saves humans. He shows us what a human being was always intended to be.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>When people read Genesis, they often assume that Adam is the model of humanity. After all, Adam appears first. But appearing first does not necessarily mean being ultimate.</p>
<p>A blueprint exists before a building is constructed. A thought exists before it is spoken. A destination exists before a journey begins.</p>
<p>Likewise, Christ exists as God's perfect image before humanity appears in history. Therefore, Adam is not the original pattern. Adam is the first earthly expression of a pattern already present in God. Christ is that pattern.</p>
<p>This changes how we understand human identity. Humanity is not defined by its beginning in Adam. Humanity is defined by its fulfillment in Christ.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="glowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
    </defs>

    <g transform="translate(180, 200)">
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="currentColor" opacity="0.05" />
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2" />
      <text x="0" y="-55" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="14px">FIRST ADAM</text>
      <circle cx="0" cy="-10" r="25" fill="currentColor" opacity="0.15" />
      <path d="M -15 25 L 15 25" stroke="currentColor" stroke-width="2" opacity="0.3" />
      <text x="0" y="45" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="11px">Earthly & Incomplete</text>
      <text x="0" y="60" text-anchor="middle" fill="currentColor" opacity="0.7" font-size="11px">"The Seed Pattern"</text>
    </g>

    <g transform="translate(400, 200)">
      <path d="M -60 0 L 40 0" stroke="url(#glowBlue)" stroke-width="4" stroke-linecap="round" />
      <polygon points="40,-8 56,0 40,8" fill="#2563eb" />
      <text x="-10" y="-20" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="12px">CONFORMED TO</text>
    </g>

    <g transform="translate(620, 200)">
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="url(#glowBlue)" opacity="0.1" />
      <rect x="-90" y="-90" width="180" height="180" rx="16" fill="none" stroke="#2563eb" stroke-width="2" />
      <text x="0" y="-55" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="14px">LAST ADAM (CHRIST)</text>
      <circle cx="0" cy="-10" r="25" fill="#2563eb" opacity="0.25" />
      <polygon points="0,-18 3,-7 14,-7 5,0 9,11 0,4 -9,11 -5,0 -14,-7 -3,-7" fill="#2563eb" opacity="0.8" />
      <text x="0" y="45" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="11px">Heavenly & Perfect</text>
      <text x="0" y="60" text-anchor="middle" fill="#2563eb" font-weight="bold" font-size="11px">"The Original Image"</text>
    </g>

    <text x="400" y="60" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="15px">IMAGE CONFORMITY FLOW</text>
    <text x="400" y="82" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">We do not define Christ by Adam; we understand humanity through Christ.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Christ Is the Image of the Invisible God</h3>
<blockquote>"He is the image of the invisible God." (Colossians 1:15)</blockquote>
<p>Paul does not say Christ merely reflects God. He says Christ is the image of God. In Christ, the invisible becomes visible. The unknowable becomes knowable. The hidden becomes revealed.</p>

<h3>2. Humanity Was Created in God's Image</h3>
<blockquote>"Let us make mankind in our image, according to our likeness." (Genesis 1:26)</blockquote>
<p>This raises a profound question: What exactly is that image? The New Testament answers by revealing Christ as the image of God. Therefore, when humanity is created in God's image, the fullest understanding of that image is eventually revealed in Christ.</p>

<h3>3. Christ Reveals Perfect Humanity</h3>
<p>Throughout the Gospels, Jesus demonstrates humanity as God intended it: complete dependence on the Father, perfect love, perfect obedience, perfect compassion, perfect authority, perfect humility.</p>
<p>Jesus does not become less human because of His union with God. He becomes the fullest expression of humanity. Simple morality diminishes humanity. Christ reveals humanity in its fullness.</p>

<h3>4. The Heavenly Man</h3>
<blockquote>"The first man was of the dust of the earth; the second man is of heaven." (1 Corinthians 15:47)</blockquote>
<p>Paul is not merely comparing two individuals. He is revealing two orders of humanity. Adam represents humanity originating from earth. Christ reveals humanity originating from heaven.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. The Image Is a Person</h3>
<p>Many people think the image of God is: intelligence, creativity, morality, self-awareness. While these may reflect aspects of the image, the New Testament points us toward something deeper. The image of God is ultimately revealed in a person. That person is Christ.</p>

<h3>2. Humanity Was Designed for Christ-Likeness</h3>
<p>If Christ is the true image, then humanity was designed from the beginning with Christ as its reference point. The purpose of humanity is not merely existence. The purpose of humanity is likeness. Not merely looking like Christ externally, but sharing in His life, character, and relationship with the Father.</p>

<h3>3. Adam Reveals Potential; Christ Reveals Fulfillment</h3>
<p>Adam reveals possibility. Christ reveals completion. Adam reveals beginning. Christ reveals destiny. Adam reveals humanity in seed form. Christ reveals humanity in harvest form. A seed is not false because it is incomplete. It is simply unfinished. Likewise, Adam is not wrong because he is first. He is simply not final.</p>

<h3>4. Why Christ Must Be the Starting Point</h3>
<p>One of the greatest mistakes in theology is beginning with fallen humanity and trying to work upward toward God. The New Testament does the reverse. It begins with Christ and then explains humanity through Him. Instead of asking "What does humanity tell us about God?" we ask "What does Christ reveal about humanity?"</p>

<h3>5. The Hidden Meaning of the New Creation</h3>
<p>The goal of salvation is not merely to forgive sins. The goal is to restore humanity into conformity with Christ. God is not merely rescuing people from judgment. He is bringing humanity into the image that existed in His heart before creation.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When Christ is understood as the true image of humanity:</p>
<ul>
  <li>Identity is no longer built on weakness or failure</li>
  <li>Humanity is understood through divine intention rather than human limitation</li>
  <li>Spiritual growth becomes participation in Christ's life</li>
  <li>Salvation becomes restoration into the image of God</li>
  <li>The believer sees Christ not only as the One who saves them, but also as the One who reveals what they were created to become</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam reveals humanity's beginning. Christ reveals humanity's meaning. To see Christ is not only to see God — it is to see humanity as it was always intended to be.
</p>`,
    estimatedReadingTime: 16,
    createdAt: new Date('2026-01-15'),
  },
  {
    id: 'ch-5',
    bookId: 'the-mystery-of-god',
    title: 'ADAM: THE FIRST EXPRESSION OF HUMANITY',
    slug: 'adam-the-first-expression-of-humanity',
    chapterNumber: 5,
    content: `<blockquote>
<strong>CHAPTER THEME:</strong><br />
Adam was not created as the final revelation of humanity, but as the first expression of a divine purpose that would ultimately be fulfilled in Christ.
</blockquote>

<h2>INTRODUCTION</h2>
<p>Few figures in Scripture have shaped humanity's understanding of itself more than Adam. For many believers, Adam is viewed primarily through the lens of the Fall. He is remembered as the man who sinned, lost paradise, and brought death into the world. While those realities are important, they can sometimes prevent us from seeing something equally important: Who was Adam before the Fall? And why was Adam created the way he was?</p>
<p>When God formed Adam from the dust of the earth, He was not making a mistake that would later need correction. Nor was Adam a failed version of Christ. Adam was exactly what God intended him to be at that stage of revelation.</p>
<p>To understand Christ correctly, we must first understand Adam correctly — not merely as a sinner, but as the first manifestation of humanity in God's unfolding purpose.</p>

<h2>SECTION A — SIMPLE TRUTH</h2>
<p>Adam was the first human being created by God. He was real. He was good. He was created in God's image. Yet Adam was also unfinished. This does not mean he was defective. A seed is not defective because it is not yet a tree. A child is not defective because they are not yet an adult.</p>
<p>Likewise, Adam was complete for his stage, but he was not the final expression of humanity. This is why the New Testament speaks of Christ as the Last Adam. The first Adam introduces humanity. The Last Adam completes the revelation of humanity. Adam is therefore best understood as the beginning of a journey rather than the destination.</p>

<div class="my-8 flex justify-center">
  <svg viewBox="0 0 800 400" width="100%" class="max-w-2xl rounded-2xl border border-slate-200/50 bg-slate-50/50 p-6 dark:border-slate-800/50 dark:bg-slate-900/50">
    <defs>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" />
        <stop offset="100%" stop-color="#047857" />
      </linearGradient>
    </defs>

    <path d="M 80 300 L 720 300" stroke="currentColor" stroke-width="2" opacity="0.3" />

    <g transform="translate(180, 300)">
      <path d="M -15 0 C -15 -20, 15 -20, 15 0 Z" fill="#b45309" opacity="0.8" />
      <rect x="-10" y="0" width="20" height="8" rx="3" fill="#78350f" />
      <text x="0" y="-35" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">ADAM (SEED)</text>
      <text x="0" y="-20" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="10px">Physical Potential</text>
    </g>

    <path d="M 180 270 C 300 240, 500 150, 620 180" fill="none" stroke="url(#greenGrad)" stroke-width="3" stroke-dasharray="4 2" opacity="0.5" />

    <g transform="translate(620, 200)">
      <circle cx="0" cy="-30" r="45" fill="url(#greenGrad)" opacity="0.15" />
      <circle cx="0" cy="-30" r="35" fill="url(#greenGrad)" opacity="0.85" />
      <rect x="-6" y="5" width="12" height="95" fill="#78350f" />
      
      <text x="0" y="-95" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="12px">CHRIST (HARVEST)</text>
      <text x="0" y="-80" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="10px">Spiritual Maturity</text>
    </g>

    <text x="400" y="80" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="15px">DEVELOPMENTAL PURPOSE FLOW</text>
    <text x="400" y="102" text-anchor="middle" fill="currentColor" opacity="0.6" font-size="11px">A seed is not a failure; it is simply unfinished. Christ is the full harvest.</text>
  </svg>
</div>

<h2>SECTION B — BIBLICAL FOUNDATION</h2>

<h3>1. Formed from the Dust</h3>
<p>Genesis tells us: "Then the Lord God formed man from the dust of the ground and breathed into his nostrils the breath of life." Adam is formed from two realities: dust from the earth, breath from God. This means humanity stands at the intersection of heaven and earth.</p>

<h3>2. Adam Became a Living Soul</h3>
<blockquote>"Man became a living soul."</blockquote>
<p>The text does not say Adam was given a soul. It says Adam became a living soul. Paul later contrasts this with Christ: "The first Adam became a living soul; the last Adam became a life-giving spirit." Adam possesses life. Christ imparts life.</p>

<h3>3. Everything God Made Was Good</h3>
<p>After creation, God declares: "It was very good." This includes Adam. Therefore Adam should not be viewed primarily as a failure. Adam is God's good creation. The Fall reveals what happened to Adam. It does not define why Adam was created.</p>

<h3>4. The First Man Was Earthly</h3>
<blockquote>"The first man was of the dust of the earth." (1 Corinthians 15:47)</blockquote>
<p>This is not criticism. It is description. The earthly comes first. The spiritual comes afterward. This order appears throughout creation: seed before harvest, child before maturity, foundation before building, dawn before noon.</p>

<h2>SECTION C — DEEP REVELATION</h2>

<h3>1. Why Did God Begin with Dust?</h3>
<p>If Christ is the ultimate revelation of humanity, why did God begin with Adam? Why start with dust? Because God often reveals His purposes through process rather than instant completion. Creation itself unfolds in stages. Light appears before humanity. Foundations appear before fulfillment.</p>

<h3>2. The Mystery of Incompleteness</h3>
<p>Modern thinking views incompleteness as failure. Scripture presents incompleteness as potential. An acorn is incomplete compared to an oak tree. Yet the oak tree already exists within the acorn as destiny. Likewise, Adam contains within himself a destiny that is fully revealed in Christ.</p>

<h3>3. Adam as Humanity in Seed Form</h3>
<p>The first Adam reveals humanity in seed form. The Last Adam reveals humanity in full maturity. This perspective changes how we read Genesis. Instead of asking "How do we get back to Adam?" a deeper question emerges: "Where was humanity always meant to go?" The answer is not backward. The answer is forward. Toward Christ.</p>

<h3>4. Why Adam Cannot Be the Final Standard</h3>
<p>If Adam is the final standard, then humanity's highest goal is merely to return to Eden. But the New Testament points beyond Eden. The story does not end in a garden. It ends in a transformed creation. The movement of Scripture is not simply restoration. It is fulfillment.</p>

<h3>5. The Hidden Glory of the First Adam</h3>
<p>Adam's greatest significance may not be what he accomplished. It may be what he pointed toward. Like a signpost on a road, Adam directs attention beyond himself. His life announces: "There is more to come." The first man introduces the mystery. The Last Adam reveals it.</p>

<h2>TRANSFORMATION STATEMENT</h2>
<p>When Adam is understood as the first expression rather than the final expression of humanity:</p>
<ul>
  <li>The focus shifts from failure to purpose</li>
  <li>The story of humanity becomes developmental rather than merely corrective</li>
  <li>Christ is seen as fulfillment, not merely repair</li>
  <li>The believer begins to understand spiritual growth as participation in humanity's intended destiny</li>
  <li>Instead of living with the mindset of recovering what was lost, one begins to pursue what was always intended</li>
</ul>

<p class="font-bold border-l-4 border-amber-500 pl-4 py-1 my-6 bg-amber-50/5 dark:bg-amber-950/5">
  Adam was not the end of God's vision for humanity. He was the first chapter. Christ is the revelation of how that story was always meant to unfold.
</p>`,
    estimatedReadingTime: 13,
    createdAt: new Date('2026-01-20'),
  },
];

export function getStaticBookBySlug(slug: string): Book | undefined {
  return STATIC_BOOKS.find(b => b.slug === slug);
}

export function getStaticChapterBySlug(bookSlug: string, chapterSlug: string): Chapter | undefined {
  const book = STATIC_BOOKS.find(b => b.slug === bookSlug);
  if (!book) return undefined;
  const chapters = getStaticChapters(book.id);
  return chapters.find(c => c.slug === chapterSlug);
}

export function getStaticBookReadingTime(bookId: string): number {
  const chapters = getStaticChapters(bookId);
  return chapters.reduce((sum, ch) => sum + (ch.estimatedReadingTime || 0), 0);
}

export function getStaticChapters(bookId: string): Chapter[] {
  if (bookId === 'lgcse-maths-workbook') return MATH_CHAPTERS;
  if (bookId === 'the-mystery-of-god') return MYSTERY_CHAPTERS;
  if (bookId === 'lgcse-accounting-workbook') return ACCOUNTING_CHAPTERS;
  return [];
}
