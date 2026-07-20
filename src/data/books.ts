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
    coverImage: '',
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
  return [];
}
