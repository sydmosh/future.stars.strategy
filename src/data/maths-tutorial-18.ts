import type { Booklet } from './booklets';

export const mathsTutorial18: Booklet = {
  id: 'maths-tutorial-18',
  title: 'Tutorial 18 – Future Stars: Full Examination Papers',
  subtitle: 'National High School Mathematics Examination (Paper 1 Non-Calculator, Paper 2 Calculator Allowed, Paper 3 Advanced Challenge & Examiner\'s Report)',
  description:
    'Simulate a real national high school Mathematics examination (LGCSE/IGCSE/CAPS) covering Chapters 1–17. Includes Paper 1 (Non-Calculator, 100 Marks), Paper 2 (Calculator Allowed, 100 Marks), Paper 3 (Advanced Challenge, 100 Marks), and the official Examiner\'s Report with step-by-step solutions.',
  totalMarks: 300,
  revisionNotes: {
    title: 'Chapter 18 – Examination Guidelines & Overview',
    sections: [
      {
        heading: 'Structure of the Full Examination',
        content:
          'This final chapter synthesises all topics covered across Tutorials 1 through 17 into three complete national examination papers:\n\n• Paper 1 (Non-Calculator | 2 Hours | 100 Marks):\n  Tests core mental arithmetic, fraction/decimal conversions, basic algebra, geometric properties, basic statistics, simple simultaneous equations, linear function features, and mental financial math.\n\n• Paper 2 (Calculator Allowed | 2.5 Hours | 100 Marks):\n  Tests surds & indices, multi-step trigonometry, coordinate geometry, quadratic graphing, 2-variable simultaneous systems, frequency table statistics, and multi-year compound depreciation.\n\n• Paper 3 (Advanced Challenge Paper | 3 Hours | 100 Marks):\n  Designed for A-grade & scholarship candidates. Features multi-step algebraic solving, mensuration (cylinder volume & surface area), trigonometric towers & guy wires, grouped frequency histograms, linear programming vertex optimization, commercial loan financing, and calculus/algebraic optimization investigations.',
      },
      {
        heading: 'Examiner\'s Golden Rules',
        content:
          '1. ✅ ALWAYS show clear, step-by-step working. Method marks (M-marks) are awarded even if the final numerical answer has a minor arithmetic slip.\n2. ⚠️ Check exact instructions: When asked to "leave answers in terms of π", DO NOT approximate π as 3.142 or 22/7!\n3. ⚠️ Reversing Inequality Signs: ALWAYS flip the inequality sign when dividing or multiplying by a negative number.\n4. 💡 Rounding: Keep full precision on your calculator during intermediate steps, and round ONLY in your final line to 3 significant figures or 2 decimal places as specified.\n5. 💡 Units: Always append appropriate units (e.g. cm, m², m³, litres, Maloti) to final answers.',
      },
    ],
  },
  sections: [
    {
      id: 't18-section-paper1',
      title: 'PAPER 1 – Non-Calculator (100 Marks)',
      questions: [
        {
          id: 't18-p1-q1.1',
          number: 1,
          question: 'QUESTION 1.1 [2 Marks]: Evaluate 48 + 137 − 95.',
          marks: 2,
          solution: '90',
          expectedAnswer: '90',
          solutionSteps: [
            '48 + 137 = 185',
            '185 − 95 = 90',
          ],
        },
        {
          id: 't18-p1-q1.2',
          number: 2,
          question: 'QUESTION 1.2 [2 Marks]: Calculate 18 × 25.',
          marks: 2,
          solution: '450',
          expectedAnswer: '450',
          solutionSteps: [
            'Split 25 as (100 / 4) or 18 × 25 = 18 × 20 + 18 × 5',
            '= 360 + 90 = 450',
          ],
        },
        {
          id: 't18-p1-q1.3',
          number: 3,
          question: 'QUESTION 1.3 [2 Marks]: Evaluate 360 ÷ 15.',
          marks: 2,
          solution: '24',
          expectedAnswer: '24',
          solutionSteps: [
            '360 ÷ 15 = (360 ÷ 3) ÷ 5 = 120 ÷ 5 = 24',
          ],
        },
        {
          id: 't18-p1-q1.4',
          number: 4,
          question: 'QUESTION 1.4 [2 Marks]: Write 0.625 as a fraction in its simplest form.',
          marks: 2,
          solution: '5/8',
          expectedAnswer: '5/8',
          solutionSteps: [
            '0.625 = 625 / 1000',
            'Divide numerator and denominator by 125: 625 ÷ 125 = 5, 1000 ÷ 125 = 8',
            'Fraction in simplest form = 5/8',
          ],
        },
        {
          id: 't18-p1-q1.5',
          number: 5,
          question: 'QUESTION 1.5 [2 Marks]: Arrange in ascending order: 0.8, 3/4, 82%, 0.79.',
          marks: 2,
          solution: '3/4 (0.75), 0.79, 0.8 (0.80), 82% (0.82)',
          expectedAnswer: '3/4, 0.79, 0.8, 82%',
          solutionSteps: [
            'Convert all values to decimals for comparison:',
            '0.8 = 0.800',
            '3/4 = 0.750',
            '82% = 0.820',
            '0.79 = 0.790',
            'Ascending order: 0.75, 0.79, 0.80, 0.82 → 3/4, 0.79, 0.8, 82%',
          ],
        },
        {
          id: 't18-p1-q2.1',
          number: 6,
          question: 'QUESTION 2.1 [2 Marks]: Evaluate 3/4 + 5/8.',
          marks: 2,
          solution: '11/8 (or 1 3/8)',
          expectedAnswer: '11/8',
          solutionSteps: [
            'Common denominator is 8.',
            '3/4 = 6/8',
            '6/8 + 5/8 = 11/8 = 1 3/8',
          ],
        },
        {
          id: 't18-p1-q2.2',
          number: 7,
          question: 'QUESTION 2.2 [2 Marks]: Evaluate 7/9 − 2/9.',
          marks: 2,
          solution: '5/9',
          expectedAnswer: '5/9',
          solutionSteps: [
            'Same denominator: (7 − 2) / 9 = 5/9',
          ],
        },
        {
          id: 't18-p1-q2.3',
          number: 8,
          question: 'QUESTION 2.3 [2 Marks]: Find 35% of M640.',
          marks: 2,
          solution: 'M224',
          expectedAnswer: '224',
          solutionSteps: [
            '10% of 640 = 64',
            '30% of 640 = 64 × 3 = 192',
            '5% of 640 = 32',
            '35% = 192 + 32 = M224',
          ],
        },
        {
          id: 't18-p1-q2.4',
          number: 9,
          question: 'QUESTION 2.4 [2 Marks]: Convert 5/8 to a decimal.',
          marks: 2,
          solution: '0.625',
          expectedAnswer: '0.625',
          solutionSteps: [
            '1/8 = 0.125',
            '5/8 = 5 × 0.125 = 0.625',
          ],
        },
        {
          id: 't18-p1-q2.5',
          number: 10,
          question: 'QUESTION 2.5 [2 Marks]: Increase M500 by 12%.',
          marks: 2,
          solution: 'M560',
          expectedAnswer: '560',
          solutionSteps: [
            '12% of 500 = (12 / 100) × 500 = 60',
            'New Value = 500 + 60 = M560',
          ],
        },
        {
          id: 't18-p1-q3.1',
          number: 11,
          question: 'QUESTION 3.1 [2 Marks]: Simplify 5x + 3x − 4.',
          marks: 2,
          solution: '8x − 4',
          expectedAnswer: '8x - 4',
          solutionSteps: [
            'Combine like terms: (5x + 3x) − 4 = 8x − 4',
          ],
        },
        {
          id: 't18-p1-q3.2',
          number: 12,
          question: 'QUESTION 3.2 [2 Marks]: Expand 4(x + 6).',
          marks: 2,
          solution: '4x + 24',
          expectedAnswer: '4x + 24',
          solutionSteps: [
            'Multiply each term inside by 4: 4(x) + 4(6) = 4x + 24',
          ],
        },
        {
          id: 't18-p1-q3.3',
          number: 13,
          question: 'QUESTION 3.3 [3 Marks]: Factorise x² + 9x + 20.',
          marks: 3,
          solution: '(x + 4)(x + 5)',
          expectedAnswer: '(x + 4)(x + 5)',
          solutionSteps: [
            'Find two numbers that multiply to 20 and add to 9: 4 and 5.',
            'Factorised form: (x + 4)(x + 5)',
          ],
        },
        {
          id: 't18-p1-q3.4',
          number: 14,
          question: 'QUESTION 3.4 [3 Marks]: Solve 4x + 8 = 28.',
          marks: 3,
          solution: 'x = 5',
          expectedAnswer: '5',
          solutionSteps: [
            '4x = 28 − 8 → 4x = 20',
            'x = 20 / 4 = 5',
          ],
        },
        {
          id: 't18-p1-q3.5',
          number: 15,
          question: 'QUESTION 3.5 [5 Marks]: Solve 2(x − 5) = 14.',
          marks: 5,
          solution: 'x = 12',
          expectedAnswer: '12',
          solutionSteps: [
            `<div>
<p class="sol-section">Method 1: Expand the bracket</p>
<p><span class="sol-formula">2(x − 5) = 14</span><br/>
2x − 10 = 14<br/>
2x = 14 + 10 = 24<br/>
x = 24 ÷ 2 = <span class="sol-answer">12</span></p>
<p class="sol-section">Method 2: Divide both sides by 2 first</p>
<p><span class="sol-formula">x − 5 = 14 ÷ 2 = 7</span><br/>
x = 7 + 5 = <span class="sol-answer">12</span></p>
</div>`
          ],
        },
        {
          id: 't18-p1-q4.1',
          number: 16,
          question: 'QUESTION 4.1 [2 Marks]: State the sum of angles in a triangle.',
          marks: 2,
          solution: '180°',
          expectedAnswer: '180',
          solutionSteps: [
            'The sum of interior angles in any triangle is always 180°.',
          ],
        },
        {
          id: 't18-p1-q4.2',
          number: 17,
          question: 'QUESTION 4.2 [3 Marks]: Calculate the missing angle in a triangle with angles 48° and 63°.',
          marks: 3,
          solution: '69°',
          expectedAnswer: '69',
          solutionSteps: [
            'Missing angle = 180° − (48° + 63°)',
            '= 180° − 111° = 69°',
          ],
        },
        {
          id: 't18-p1-q4.3',
          number: 18,
          question: 'QUESTION 4.3 [4 Marks]: Calculate the circumference of a circle with radius 7 cm. Leave the answer in terms of π.',
          marks: 4,
          solution: '14π cm',
          expectedAnswer: '14pi',
          solutionSteps: [
            `<div>
<p class="sol-section">Circumference of a Circle</p>
<p><span class="sol-formula">C = 2πr</span></p>
<table>
<thead><tr><th>Variable</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Formula</td><td>C = 2πr</td></tr>
<tr><td>Radius (r)</td><td>7 cm</td></tr>
<tr><td>Substitution</td><td>C = 2 × π × 7</td></tr>
<tr class="sol-highlight"><td>Answer</td><td>C = 14π cm ← leave in terms of π</td></tr>
</tbody>
</table>
<p>⚠️ Do NOT substitute π ≈ 3.14 as the question says "leave in terms of π"</p>
</div>`
          ],
        },
        {
          id: 't18-p1-q4.4',
          number: 19,
          question: 'QUESTION 4.4 [2 Marks]: Calculate the area of a rectangle measuring 9 cm × 12 cm.',
          marks: 2,
          solution: '108 cm²',
          expectedAnswer: '108',
          solutionSteps: [
            'Area = length × width = 9 × 12 = 108 cm²',
          ],
        },
        {
          id: 't18-p1-q4.5',
          number: 20,
          question: 'QUESTION 4.5 [4 Marks]: State two main properties of a parallelogram.',
          marks: 4,
          solution: 'Opposite sides are equal and parallel; opposite angles are equal.',
          expectedAnswer: 'opposite sides equal and parallel',
          solutionSteps: [
            `<div>
<p class="sol-section">Properties of a Parallelogram</p>
<table>
<thead><tr><th>#</th><th>Property</th></tr></thead>
<tbody>
<tr><td>1</td><td>Opposite sides are <strong>parallel</strong> and <strong>equal in length</strong></td></tr>
<tr><td>2</td><td>Opposite angles are <strong>equal</strong></td></tr>
<tr><td>3</td><td>Adjacent angles are <strong>supplementary</strong> (add to 180°)</td></tr>
<tr><td>4</td><td>Diagonals <strong>bisect each other</strong></td></tr>
</tbody>
</table>
<p><span class="sol-answer">Any two of the above properties earn full marks.</span></p>
</div>`
          ],
        },
        {
          id: 't18-p1-q5.1-4',
          number: 21,
          question: 'QUESTION 5.1–5.4 [9 Marks]: Marks: 12, 15, 16, 18, 18, 20, 22. Find: 5.1) Mean [3] 5.2) Median [2] 5.3) Mode [2] 5.4) Range [2]',
          marks: 9,
          solution: '5.1) Mean = 17.29, 5.2) Median = 18, 5.3) Mode = 18, 5.4) Range = 10',
          expectedAnswer: '17.29',
          solutionSteps: [
            `<div>
<p class="sol-section">Dataset (ordered): 12, 15, 16, 18, 18, 20, 22</p>
<table>
<thead><tr><th>Measure</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>5.1) Mean</td><td>Sum = 12+15+16+18+18+20+22 = 121<br/>Mean = 121 ÷ 7</td><td><span class="sol-answer">17.29</span></td></tr>
<tr><td>5.2) Median</td><td>7 items → middle (4th) item<br/>12, 15, 16, <strong>18</strong>, 18, 20, 22</td><td><span class="sol-answer">18</span></td></tr>
<tr><td>5.3) Mode</td><td>18 appears twice (most frequent)</td><td><span class="sol-answer">18</span></td></tr>
<tr><td>5.4) Range</td><td>Maximum − Minimum = 22 − 12</td><td><span class="sol-answer">10</span></td></tr>
</tbody>
</table>
</div>`
          ],
        },
        {
          id: 't18-p1-q5.5-6',
          number: 22,
          question: 'QUESTION 5.5–5.6 [6 Marks]: Bag has 4 red, 5 blue, 1 green ball (total 10). 5.5) Find P(Blue) [3] 5.6) State P(Impossible event) [3]',
          marks: 6,
          solution: '5.5) P(Blue) = 1/2 (0.5), 5.6) P(Impossible) = 0',
          expectedAnswer: '0.5',
          solutionSteps: [
            `<div>
<p class="sol-section">5.5) Probability of a Blue Ball</p>
<table>
<thead><tr><th>Ball Colour</th><th>Count</th></tr></thead>
<tbody>
<tr><td>Red</td><td>4</td></tr>
<tr class="sol-highlight"><td>Blue</td><td>5</td></tr>
<tr><td>Green</td><td>1</td></tr>
<tr class="sol-total"><td>Total</td><td>10</td></tr>
</tbody>
</table>
<p><span class="sol-formula">P(Blue) = Favourable ÷ Total = 5 ÷ 10</span> = <span class="sol-answer">1/2 = 0.5</span></p>
<p class="sol-section">5.6) Impossible Event</p>
<p>An impossible event can never occur. Its probability = <span class="sol-answer">0</span></p>
</div>`
          ],
        },
        {
          id: 't18-p1-q6.1-3',
          number: 23,
          question: 'QUESTION 6 [15 Marks]: 6.1) Solve x + y = 9 and x − y = 3 [8] 6.2) Solve 3x − 6 = 12 [3] 6.3) Solve 4x > 20 [4]',
          marks: 15,
          solution: '6.1) x = 6, y = 3; 6.2) x = 6; 6.3) x > 5',
          expectedAnswer: '6, 3',
          solutionSteps: [
            `<div>
<p class="sol-section">6.1) Simultaneous Equations (Elimination Method) [8 marks]</p>
<table>
<thead><tr><th>Step</th><th>Working</th></tr></thead>
<tbody>
<tr><td>Equation 1</td><td>x + y = 9</td></tr>
<tr><td>Equation 2</td><td>x − y = 3</td></tr>
<tr><td>Add equations</td><td>2x = 12 → x = 6</td></tr>
<tr><td>Substitute x = 6 into Eq 1</td><td>6 + y = 9 → y = 3</td></tr>
<tr class="sol-highlight"><td>Solution</td><td>x = <span class="sol-answer">6</span>, y = <span class="sol-answer">3</span></td></tr>
</tbody>
</table>
<p class="sol-section">6.2) Linear Equation [3 marks]</p>
<p>3x − 6 = 12 → 3x = 18 → <span class="sol-formula">x = 18 ÷ 3</span> = <span class="sol-answer">6</span></p>
<p class="sol-section">6.3) Linear Inequality [4 marks]</p>
<p>4x &gt; 20 → <span class="sol-formula">x &gt; 20 ÷ 4</span> = <span class="sol-answer">x &gt; 5</span></p>
</div>`
          ],
        },
        {
          id: 't18-p1-q7',
          number: 24,
          question: 'QUESTION 7 [10 Marks]: Given f(x) = 2x + 5. Find: 7.1) f(4) [2] 7.2) Gradient [2] 7.3) y-intercept [2] 7.4) x-intercept [4]',
          marks: 10,
          solution: '7.1) f(4) = 13, 7.2) m = 2, 7.3) (0, 5), 7.4) (-2.5, 0)',
          expectedAnswer: '13',
          solutionSteps: [
            `<div>
<p class="sol-section">f(x) = 2x + 5 — Function Analysis</p>
<table>
<thead><tr><th>Part</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>7.1) f(4)</td><td>f(4) = 2(4) + 5 = 8 + 5</td><td><span class="sol-answer">13</span></td></tr>
<tr><td>7.2) Gradient (m)</td><td>Compare y = 2x + 5 with y = mx + c → m = 2</td><td><span class="sol-answer">m = 2</span></td></tr>
<tr><td>7.3) y-intercept</td><td>Set x = 0 → y = 2(0) + 5 = 5</td><td><span class="sol-answer">(0, 5)</span></td></tr>
<tr><td>7.4) x-intercept</td><td>Set y = 0 → 2x + 5 = 0 → 2x = −5 → x = −2.5</td><td><span class="sol-answer">(−2.5, 0)</span></td></tr>
</tbody>
</table>
<p><span class="sol-formula">Gradient = Rise ÷ Run = Δy ÷ Δx = 2</span></p>
</div>`
          ],
          diagram: `<svg viewBox="0 0 200 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><line x1="20" y1="120" x2="180" y2="120" stroke="#94a3b8" stroke-width="1.5"/><line x1="100" y1="20" x2="100" y2="140" stroke="#94a3b8" stroke-width="1.5"/><line x1="40" y1="140" x2="160" y2="20" stroke="#4f46e5" stroke-width="2.5"/><circle cx="100" cy="70" r="4" fill="#ef4444"/><circle cx="70" cy="120" r="4" fill="#ef4444"/><text x="108" y="70" font-size="9" font-weight="bold" fill="#ef4444">(0, 5)</text><text x="50" y="135" font-size="9" font-weight="bold" fill="#ef4444">(-2.5, 0)</text></svg>`,
        },
        {
          id: 't18-p1-q8',
          number: 25,
          question: 'QUESTION 8 [10 Marks]: 8.1) 15% of M800 [2] 8.2) Profit for Cost M550, Selling M720 [2] 8.3) Simple Interest on M8,000 at 5% for 3 yrs [3] 8.4) Selling price of M6,000 TV after 10% discount [3]',
          marks: 10,
          solution: '8.1) M120, 8.2) M170, 8.3) M1,200, 8.4) M5,400',
          expectedAnswer: '5400',
          solutionSteps: [
            `<div>
<p class="sol-section">Question 8 — Financial Mathematics Summary</p>
<table>
<thead><tr><th>Part</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>8.1) 15% of M800</td><td>0.15 × 800</td><td><span class="sol-answer">M120</span></td></tr>
<tr><td>8.2) Profit</td><td>Selling − Cost = 720 − 550</td><td><span class="sol-answer">M170</span></td></tr>
<tr><td>8.3) Simple Interest</td><td><span class="sol-formula">I = PRT ÷ 100 = 8000 × 5 × 3 ÷ 100</span></td><td><span class="sol-answer">M1,200</span></td></tr>
<tr><td>8.4) Discount Price</td><td>Discount = 10% × 6000 = 600<br/>Selling = 6000 − 600</td><td><span class="sol-answer">M5,400</span></td></tr>
</tbody>
</table>
</div>`
          ],
        },
      ],
    },
    {
      id: 't18-section-paper2',
      title: 'PAPER 2 – Calculator Allowed (100 Marks)',
      questions: [
        {
          id: 't18-p2-q1',
          number: 26,
          question: 'QUESTION 1: Surds and Indices [10 Marks]: Simplify: a) √196 [2] b) 5³ [2] c) 3⁴ [2] d) √75 [4]',
          marks: 10,
          solution: 'a) 14, b) 125, c) 81, d) 5√3 ≈ 8.66',
          expectedAnswer: '14',
          solutionSteps: [
            `<div>
<p class="sol-section">Surds and Indices</p>
<table>
<thead><tr><th>Part</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>a) √196</td><td>196 = 14 × 14</td><td><span class="sol-answer">14</span></td></tr>
<tr><td>b) 5³</td><td>5 × 5 × 5 = 25 × 5</td><td><span class="sol-answer">125</span></td></tr>
<tr><td>c) 3⁴</td><td>3 × 3 × 3 × 3 = 9 × 9</td><td><span class="sol-answer">81</span></td></tr>
<tr class="sol-highlight"><td>d) √75</td><td>√75 = √(25 × 3) = √25 × √3 = 5√3</td><td><span class="sol-answer">5√3 ≈ 8.66</span></td></tr>
</tbody>
</table>
<p class="sol-section">Tip for √75:</p>
<p>Find the largest perfect-square factor of 75: <span class="sol-formula">75 = 25 × 3</span><br/>
Then: √75 = √25 × √3 = <span class="sol-answer">5√3</span></p>
</div>`
          ],
        },
        {
          id: 't18-p2-q2.1-2',
          number: 27,
          question: 'QUESTION 2.1–2.2 [10 Marks]: 2.1) Ladder 13 m long, base 5 m from wall. Find height. [5] 2.2) Tree shadow 14 m, angle of elevation 48°. Find height. [5]',
          marks: 10,
          solution: '2.1) 12 m, 2.2) 15.55 m',
          expectedAnswer: '12',
          solutionSteps: [
            `<div>
<p class="sol-section">2.1) Pythagoras' Theorem — Ladder Problem</p>
<table>
<thead><tr><th>Step</th><th>Working</th></tr></thead>
<tbody>
<tr><td>Formula</td><td><span class="sol-formula">a² + b² = c² → h² = c² − b²</span></td></tr>
<tr><td>Hypotenuse (ladder)</td><td>c = 13 m</td></tr>
<tr><td>Base</td><td>b = 5 m</td></tr>
<tr><td>Calculation</td><td>h² = 13² − 5² = 169 − 25 = 144</td></tr>
<tr class="sol-highlight"><td>Height</td><td>h = √144 = <span class="sol-answer">12 m</span></td></tr>
</tbody>
</table>
<p class="sol-section">2.2) Trigonometry — Tree Height</p>
<table>
<thead><tr><th>Step</th><th>Working</th></tr></thead>
<tbody>
<tr><td>Given</td><td>Shadow = 14 m, Angle of elevation = 48°</td></tr>
<tr><td>Ratio</td><td><span class="sol-formula">tan θ = Opposite ÷ Adjacent = h ÷ 14</span></td></tr>
<tr><td>Rearrange</td><td>h = 14 × tan 48°</td></tr>
<tr><td>Calculate</td><td>h = 14 × 1.1106</td></tr>
<tr class="sol-highlight"><td>Height</td><td><span class="sol-answer">h ≈ 15.55 m</span></td></tr>
</tbody>
</table>
</div>`
          ],
        },
        {
          id: 't18-p2-q2.3-6',
          number: 28,
          question: 'QUESTION 2.3–2.6 [10 Marks]: 2.3) sin 40° [2] 2.4) cos 65° [2] 2.5) tan 30° [2] 2.6) Find θ if sin θ = 0.766 [4]',
          marks: 10,
          solution: '2.3) 0.643, 2.4) 0.423, 2.5) 0.577, 2.6) 50°',
          expectedAnswer: '50',
          solutionSteps: [
            `<div>
<p class="sol-section">Trigonometric Values</p>
<table>
<thead><tr><th>Part</th><th>Expression</th><th>Value</th></tr></thead>
<tbody>
<tr><td>2.3)</td><td>sin 40°</td><td><span class="sol-answer">≈ 0.6428</span></td></tr>
<tr><td>2.4)</td><td>cos 65°</td><td><span class="sol-answer">≈ 0.4226</span></td></tr>
<tr><td>2.5)</td><td>tan 30°</td><td><span class="sol-formula">= 1/√3</span> = <span class="sol-answer">≈ 0.5774</span></td></tr>
<tr class="sol-highlight"><td>2.6)</td><td>sin θ = 0.766 → θ = sin⁻¹(0.766)</td><td><span class="sol-answer">θ ≈ 50°</span></td></tr>
</tbody>
</table>
<p>Recall SOH CAH TOA:<br/><span class="sol-formula">Sin = Opposite/Hyp | Cos = Adjacent/Hyp | Tan = Opposite/Adjacent</span></p>
</div>`
          ],
        },
        {
          id: 't18-p2-q3',
          number: 29,
          question: 'QUESTION 3: Coordinate Geometry [15 Marks]: Points A(3, 4) and B(7, 12). 3.1) Gradient [4] 3.2) Midpoint [4] 3.3) Line equation [7]',
          marks: 15,
          solution: '3.1) m = 2, 3.2) (5, 8), 3.3) y = 2x − 2',
          expectedAnswer: 'y = 2x - 2',
          solutionSteps: [
            `<div>
<p class="sol-section">Points: A(3, 4) and B(7, 12)</p>
<table>
<thead><tr><th>Part</th><th>Formula</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>3.1) Gradient</td><td><span class="sol-formula">m = (y₂ − y₁) ÷ (x₂ − x₁)</span></td><td>(12 − 4) ÷ (7 − 3) = 8 ÷ 4</td><td><span class="sol-answer">m = 2</span></td></tr>
<tr><td>3.2) Midpoint</td><td><span class="sol-formula">M = ((x₁+x₂)/2, (y₁+y₂)/2)</span></td><td>((3+7)/2, (4+12)/2) = (10/2, 16/2)</td><td><span class="sol-answer">(5, 8)</span></td></tr>
<tr class="sol-highlight"><td>3.3) Equation</td><td><span class="sol-formula">y − y₁ = m(x − x₁)</span></td><td>y − 4 = 2(x − 3)<br/>y = 2x − 6 + 4</td><td><span class="sol-answer">y = 2x − 2</span></td></tr>
</tbody>
</table>
</div>`
          ],
        },
        {
          id: 't18-p2-q4',
          number: 30,
          question: 'QUESTION 4: Quadratic Function [15 Marks]: y = x² − 4. 4.1) Complete table for x = −3 to 3 [5] 4.2) Features [5] 4.3) Intercepts [5]',
          marks: 15,
          solution: '4.1) y = 5, 0, -3, -4, -3, 0, 5, 4.3) x-intercepts (-2,0) & (2,0), y-intercept (0,-4)',
          expectedAnswer: '5, 0, -3, -4, -3, 0, 5',
          solutionSteps: [
            `<div>
<p class="sol-section">4.1) Table of Values for y = x² − 4</p>
<table>
<thead><tr><th>x</th><th>x²</th><th>y = x² − 4</th></tr></thead>
<tbody>
<tr><td>−3</td><td>9</td><td>5</td></tr>
<tr><td>−2</td><td>4</td><td>0</td></tr>
<tr><td>−1</td><td>1</td><td>−3</td></tr>
<tr class="sol-highlight"><td>0</td><td>0</td><td>−4 (vertex)</td></tr>
<tr><td>1</td><td>1</td><td>−3</td></tr>
<tr><td>2</td><td>4</td><td>0</td></tr>
<tr><td>3</td><td>9</td><td>5</td></tr>
</tbody>
</table>
<p>4.2) Parabola opens <strong>upward</strong>, vertex at (0, −4), axis of symmetry <span class="sol-formula">x = 0</span></p>
<p>4.3) y-intercept: set x = 0 → <span class="sol-answer">(0, −4)</span><br/>
x-intercepts: set y = 0 → x² = 4 → x = ±2 → <span class="sol-answer">(−2, 0)</span> and <span class="sol-answer">(2, 0)</span></p>
</div>`
          ],
        },
        {
          id: 't18-p2-q5',
          number: 31,
          question: 'QUESTION 5: Simultaneous Equations [15 Marks]: Solve 2x + 3y = 18 and x − y = 1.',
          marks: 15,
          solution: 'x = 4.2, y = 3.2 (or x = 21/5, y = 16/5)',
          expectedAnswer: '4.2, 3.2',
          solutionSteps: [
            'From 2nd equation: x = y + 1',
            'Substitute into 1st equation: 2(y + 1) + 3y = 18',
            '2y + 2 + 3y = 18 → 5y = 16 → y = 3.2',
            'x = 3.2 + 1 = 4.2',
          ],
        },
        {
          id: 't18-p2-q6',
          number: 32,
          question: 'QUESTION 6: Statistics [15 Marks]: Frequency Table: Marks 20 (f=4), 30 (f=6), 40 (f=8), 50 (f=2). Calculate: Mean, Mode, Median.',
          marks: 15,
          solution: 'Mean = 34, Mode = 40, Median = 35',
          expectedAnswer: '34',
          solutionSteps: [
            `<div>
<p class="sol-section">Step 1: Build the frequency table</p>
<table>
<thead><tr><th>Marks (x)</th><th>Frequency (f)</th><th>fx</th><th>Cumulative f</th></tr></thead>
<tbody>
<tr><td>20</td><td>4</td><td>80</td><td>4</td></tr>
<tr><td>30</td><td>6</td><td>180</td><td>10</td></tr>
<tr class="sol-highlight"><td>40</td><td>8 ← highest</td><td>320</td><td>18</td></tr>
<tr><td>50</td><td>2</td><td>100</td><td>20</td></tr>
<tr class="sol-total"><td>Total</td><td>20</td><td>680</td><td>—</td></tr>
</tbody>
</table>
<p class="sol-section">Step 2: Mean</p>
<p><span class="sol-formula">Mean = Σfx ÷ Σf = 680 ÷ 20</span> = <span class="sol-answer">34</span></p>
<p class="sol-section">Step 3: Mode</p>
<p>Highest frequency = 8, for Marks = 40 → <span class="sol-answer">Mode = 40</span></p>
<p class="sol-section">Step 4: Median</p>
<p>Total n = 20 → Median position = average of 10th and 11th items.<br/>
Cumulative frequency reaches 10 at Marks = 30, and 18 at Marks = 40.<br/>
10th item = 30, 11th item = 40 → <span class="sol-formula">Median = (30 + 40) ÷ 2</span> = <span class="sol-answer">35</span></p>
</div>`
          ],
        },
        {
          id: 't18-p2-q7',
          number: 33,
          question: 'QUESTION 7: Financial Depreciation [10 Marks]: Car worth M240,000 depreciates by 12% per year. Find value after: a) 1 year b) 2 years c) 3 years.',
          marks: 10,
          solution: 'a) M211,200, b) M185,856, c) M163,553.28',
          expectedAnswer: '163553.28',
          solutionSteps: [
            `<div>
<p class="sol-section">Compound Depreciation — Car Value</p>
<p><span class="sol-formula">A = P × (1 − r)ⁿ</span> where P = M240,000, r = 12% = 0.12</p>
<table>
<thead><tr><th>Year</th><th>Formula</th><th>Calculation</th><th>Value</th></tr></thead>
<tbody>
<tr><td>a) After 1 year</td><td>240,000 × (0.88)¹</td><td>240,000 × 0.88</td><td><span class="sol-answer">M211,200</span></td></tr>
<tr><td>b) After 2 years</td><td>240,000 × (0.88)²</td><td>240,000 × 0.7744</td><td><span class="sol-answer">M185,856</span></td></tr>
<tr class="sol-highlight"><td>c) After 3 years</td><td>240,000 × (0.88)³</td><td>240,000 × 0.681472</td><td><span class="sol-answer">M163,553.28</span></td></tr>
</tbody>
</table>
<p>Note: Each year the car retains <span class="sol-formula">88%</span> of its previous value.</p>
</div>`
          ],
        },
      ],
    },
    {
      id: 't18-section-paper3',
      title: 'PAPER 3 – Advanced Challenge Paper (100 Marks)',
      questions: [
        {
          id: 't18-p3-q1',
          number: 34,
          question: 'QUESTION 1: Mixed Algebra [15 Marks]: a) Simplify 3(2x − 5) − 4(x + 2). b) Solve x² − 9x + 20 = 0. c) Solve simultaneously: 3x + 2y = 19 and 2x − y = 4.',
          marks: 15,
          solution: 'a) 2x − 23, b) x = 4 or x = 5, c) x = 3, y = 2',
          expectedAnswer: '3, 2',
          solutionSteps: [
            `<div>
<p class="sol-section">a) Simplify 3(2x − 5) − 4(x + 2)</p>
<p>3(2x − 5) = 6x − 15<br/>
4(x + 2) = 4x + 8<br/>
6x − 15 − 4x − 8 = <span class="sol-answer">2x − 23</span></p>
<p class="sol-section">b) Solve x² − 9x + 20 = 0</p>
<p>Find factors of 20 that add to −9: <span class="sol-formula">−4 and −5</span><br/>
(x − 4)(x − 5) = 0<br/>
<span class="sol-answer">x = 4</span> or <span class="sol-answer">x = 5</span></p>
<p class="sol-section">c) Solve simultaneously: 3x + 2y = 19 and 2x − y = 4</p>
<table>
<thead><tr><th>Step</th><th>Working</th></tr></thead>
<tbody>
<tr><td>Eq 2 × 2</td><td>4x − 2y = 8</td></tr>
<tr><td>Add to Eq 1</td><td>7x = 27 → x = 27/7 ≈ 3.86</td></tr>
<tr><td>Substitute</td><td>y = 2(27/7) − 4 = 54/7 − 28/7 = 26/7 ≈ 3.71</td></tr>
<tr class="sol-highlight"><td>Solution</td><td>x ≈ <span class="sol-answer">3.86</span>, y ≈ <span class="sol-answer">3.71</span></td></tr>
</tbody>
</table>
</div>`
          ],
        },
        {
          id: 't18-p3-q2',
          number: 35,
          question: 'QUESTION 2: Geometry & Mensuration [15 Marks]: Cylindrical water tank with Radius = 2.5 m and Height = 6 m. Calculate: a) Volume (in m³ and Litres) b) Total Surface Area.',
          marks: 15,
          solution: 'a) 117.81 m³ (117,810 L), b) 133.52 m²',
          expectedAnswer: '117.81',
          solutionSteps: [
            `<div>
<p class="sol-section">Cylinder: r = 2.5 m, h = 6 m</p>
<table>
<thead><tr><th>Quantity</th><th>Formula</th><th>Calculation</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>a) Volume</td><td><span class="sol-formula">V = πr²h</span></td><td>π × (2.5)² × 6 = π × 6.25 × 6 = 37.5π</td><td><span class="sol-answer">≈ 117.81 m³</span></td></tr>
<tr><td>Capacity</td><td>1 m³ = 1,000 L</td><td>117.81 × 1,000</td><td><span class="sol-answer">117,810 Litres</span></td></tr>
<tr><td>b) Curved SA</td><td><span class="sol-formula">2πrh</span></td><td>2π × 2.5 × 6 = 30π</td><td>≈ 94.25 m²</td></tr>
<tr><td>Two circular ends</td><td><span class="sol-formula">2πr²</span></td><td>2π × (2.5)² = 12.5π</td><td>≈ 39.27 m²</td></tr>
<tr class="sol-highlight"><td>Total SA</td><td>2πr² + 2πrh</td><td>12.5π + 30π = 42.5π</td><td><span class="sol-answer">≈ 133.52 m²</span></td></tr>
</tbody>
</table>
</div>`
          ],
          diagram: `<svg viewBox="0 0 180 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><ellipse cx="90" cy="35" rx="45" ry="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><path d="M 45 35 L 45 125 A 45 15 0 0 0 135 125 L 135 35" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/><text x="145" y="80" font-size="10" font-weight="bold" fill="#0369a1">h=6m</text><text x="90" y="30" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">r=2.5m</text></svg>`,
        },
        {
          id: 't18-p3-q3',
          number: 36,
          question: 'QUESTION 3: Trigonometry Challenge [15 Marks]: Communication tower is 65 m high. Observer stands 42 m away. Find: a) Angle of elevation b) Length of supporting cable from top to observer.',
          marks: 15,
          solution: 'a) 57.13°, b) 77.39 m',
          expectedAnswer: '57.13',
          solutionSteps: [
            `<div>
<p class="sol-section">Communication Tower: Height = 65 m, Distance = 42 m</p>
<table>
<thead><tr><th>Part</th><th>Formula</th><th>Working</th><th>Answer</th></tr></thead>
<tbody>
<tr><td>a) Angle of Elevation</td><td><span class="sol-formula">tan θ = Opp ÷ Adj = 65 ÷ 42</span></td><td>θ = tan⁻¹(1.5476)</td><td><span class="sol-answer">θ ≈ 57.13°</span></td></tr>
<tr class="sol-highlight"><td>b) Cable Length</td><td><span class="sol-formula">c² = h² + d² = 65² + 42²</span></td><td>= 4225 + 1764 = 5989<br/>c = √5989</td><td><span class="sol-answer">≈ 77.39 m</span></td></tr>
</tbody>
</table>
<p>The cable forms the <strong>hypotenuse</strong> of the right-angled triangle with legs 65 m (height) and 42 m (distance).</p>
</div>`
          ],
        },
        {
          id: 't18-p3-q4',
          number: 37,
          question: 'QUESTION 4: Statistics Challenge [15 Marks]: Grouped frequency for 40 learners: 10–19 (f=5), 20–29 (f=12), 30–39 (f=15), 40–49 (f=8). Calculate: a) Mean b) Modal class c) Median class.',
          marks: 15,
          solution: 'a) 30.25, b) 30–39, c) 30–39',
          expectedAnswer: '30.25',
          solutionSteps: [
            `<div>
<p class="sol-section">(a) Mean — Grouped Frequency Table</p>
<table>
<thead><tr><th>Class Interval</th><th>Frequency (f)</th><th>Midpoint (x)</th><th>fx</th><th>Cumulative f</th></tr></thead>
<tbody>
<tr><td>10–19</td><td>5</td><td>14.5</td><td>72.5</td><td>5</td></tr>
<tr><td>20–29</td><td>12</td><td>24.5</td><td>294</td><td>17</td></tr>
<tr class="sol-highlight"><td>30–39</td><td>15 ← highest</td><td>34.5</td><td>517.5</td><td>32</td></tr>
<tr><td>40–49</td><td>8</td><td>44.5</td><td>356</td><td>40</td></tr>
<tr class="sol-total"><td>Total</td><td>40</td><td>—</td><td>1240</td><td>—</td></tr>
</tbody>
</table>
<p><span class="sol-formula">Mean = Σfx ÷ Σf = 1240 ÷ 40</span> = <span class="sol-answer">31 marks</span></p>
<p class="sol-section">(b) Modal Class</p>
<p>The class with the highest frequency (15) is <span class="sol-answer">30–39</span></p>
<p class="sol-section">(c) Median Class</p>
<p>N = 40 → Median position = N/2 = <strong>20th observation</strong><br/>
Cumulative frequency table shows: up to 29 → 17 learners; up to 39 → 32 learners.<br/>
The 20th learner falls in the <span class="sol-answer">30–39</span> class interval.</p>
</div>`
          ],
        },
        {
          id: 't18-p3-q5',
          number: 38,
          question: 'QUESTION 5: Linear Programming [15 Marks]: Maximise Profit P = 45x + 35y subject to x + y ≤ 30, 2x + y ≤ 40, x ≥ 0, y ≥ 0. Find the maximum profit.',
          marks: 15,
          solution: 'Maximum Profit = M1,150 at point (10, 20)',
          expectedAnswer: '1150',
          solutionSteps: [
            `<div>
<p class="sol-section">Step 1: Find the corner points of the feasible region</p>
<p>Intersection of x + y = 30 and 2x + y = 40:<br/>
Subtract: x = 10 → substitute: y = 20 → Point <span class="sol-formula">(10, 20)</span></p>
<p class="sol-section">Step 2: Evaluate Objective Function P = 45x + 35y at each vertex</p>
<table>
<thead><tr><th>Corner Point</th><th>P = 45x + 35y</th><th>Profit</th></tr></thead>
<tbody>
<tr><td>(0, 0)</td><td>45(0) + 35(0)</td><td>M0</td></tr>
<tr><td>(20, 0)</td><td>45(20) + 35(0)</td><td>M900</td></tr>
<tr class="sol-highlight"><td>(10, 20)</td><td>45(10) + 35(20) = 450 + 700</td><td>M1,150 ← MAX</td></tr>
<tr><td>(0, 30)</td><td>45(0) + 35(30)</td><td>M1,050</td></tr>
</tbody>
</table>
<p>Maximum profit = <span class="sol-answer">M1,150</span> at point (10, 20)</p>
</div>`
          ],
          diagram: `<svg viewBox="0 0 200 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><line x1="30" y1="130" x2="180" y2="130" stroke="#475569" stroke-width="1.5"/><line x1="30" y1="20" x2="30" y2="130" stroke="#475569" stroke-width="1.5"/><polygon points="30,130 110,130 75,70 30,40" fill="#10b981" fill-opacity="0.3" stroke="#059669" stroke-width="2"/><circle cx="75" cy="70" r="4" fill="#ef4444"/><text x="80" y="65" font-size="9" font-weight="bold" fill="#ef4444">Max (10, 20)</text></svg>`,
        },
        {
          id: 't18-p3-q6',
          number: 39,
          question: 'QUESTION 6: Financial Mathematics [15 Marks]: Machinery worth M950,000. Deposit = 20%. Balance financed for 5 years at 9% simple interest. Calculate: a) Deposit b) Balance c) Total Interest d) Total Repayment e) Annual Repayment.',
          marks: 15,
          solution: 'a) M190,000, b) M760,000, c) M342,000, d) M1,102,000, e) M220,400/yr',
          expectedAnswer: '220400',
          solutionSteps: [
            `<div>
<p class="sol-section">Hire Purchase Financial Breakdown</p>
<table>
<thead><tr><th>Item</th><th>Formula</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>a) Deposit (20%)</td><td>0.20 × M950,000</td><td>M190,000</td></tr>
<tr><td>b) Balance Financed</td><td>950,000 − 190,000</td><td>M760,000</td></tr>
<tr><td>c) Simple Interest</td><td>(760,000 × 9% × 5)</td><td>M342,000</td></tr>
<tr class="sol-total"><td>d) Total Repayment</td><td>760,000 + 342,000</td><td>M1,102,000</td></tr>
<tr class="sol-highlight"><td>e) Annual Repayment</td><td>1,102,000 ÷ 5</td><td>M220,400/year</td></tr>
</tbody>
</table>
<p><span class="sol-formula">Simple Interest I = P × R × T ÷ 100</span></p>
<p>I = 760,000 × 9 × 5 ÷ 100 = <span class="sol-answer">M342,000</span></p>
</div>`
          ],
        },
        {
          id: 't18-p3-q7',
          number: 40,
          question: 'QUESTION 7: Investigation / Optimization [10 Marks]: A farmer has 200 m of fencing for a rectangular field (length x, width y). a) Write perimeter relation b) Express Area A(x) c) Find dimensions for maximum area d) Calculate max area.',
          marks: 10,
          solution: 'a) x + y = 100, b) A(x) = 100x − x², c) x = 50 m, y = 50 m (Square), d) 2,500 m²',
          expectedAnswer: '2500',
          solutionSteps: [
            `<div>
<p class="sol-section">a) Perimeter Constraint</p>
<p>Perimeter: <span class="sol-formula">2x + 2y = 200 → x + y = 100 → y = 100 − x</span></p>
<p class="sol-section">b) Area Function</p>
<p><span class="sol-formula">A(x) = x × y = x(100 − x) = 100x − x²</span></p>
<p class="sol-section">c) Find Maximum Dimensions</p>
<p>A(x) = 100x − x² is a downward parabola. Maximum at vertex:<br/>
<span class="sol-formula">x = −b ÷ (2a) = −100 ÷ (2 × −1) = 100 ÷ 2 = 50 m</span><br/>
y = 100 − 50 = <span class="sol-answer">50 m</span><br/>
Shape is a <strong>square</strong> (50 m × 50 m)</p>
<p class="sol-section">d) Maximum Area</p>
<table>
<thead><tr><th>Dimension</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Length (x)</td><td>50 m</td></tr>
<tr><td>Width (y)</td><td>50 m</td></tr>
<tr class="sol-highlight"><td>Maximum Area</td><td><span class="sol-answer">50 × 50 = 2,500 m²</span></td></tr>
</tbody>
</table>
<p>💡 A square always gives the maximum area for a given perimeter.</p>
</div>`
          ],
          diagram: `<svg viewBox="0 0 200 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><line x1="20" y1="130" x2="180" y2="130" stroke="#94a3b8" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="140" stroke="#94a3b8" stroke-width="1.5"/><path d="M 40 130 Q 100 10 160 130" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="100" cy="40" r="4" fill="#ef4444"/><text x="100" y="25" font-size="9" font-weight="bold" fill="#ef4444" text-anchor="middle">Max Area at x = 50m</text></svg>`,
        },
      ],
    },
  ],
};
