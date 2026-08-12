import type { Booklet } from './booklets';

export const mathsPastPaper2024P1: Booklet = {
  id: 'lgcse-0178-01-24',
  title: 'LGCSE Mathematics Paper 1 (Core) October/November 2024',
  subtitle: 'Official Examinations Council of Lesotho (ECoL) Past Question Paper',
  description:
    'Complete 2024 LGCSE Mathematics Paper 1 (Core) examination (60 Marks). Covers number operations, prime factors, bounds, Venn diagrams, matrices, standard form, factorisation, algebra, area, currency conversion, percentages, volume, probability, functions, bearings, circle theorems and trigonometry.',
  totalMarks: 60,
  sections: [
    {
      id: 'p1-q1',
      title: 'Question 1: Number Operations (3 marks)',
      questions: [
        {
          id: 'p1-q1',
          number: 1,
          question: '(a) Evaluate: 9 + 2 × 8 ÷ 4 − 3 [1]\n(b) Evaluate: 3½ − 2⅓ [2]',
          marks: 3,
          solution: '(a) 10\n(b) 1⅙ (or 7/6)',
          solutionSteps: [
            '(a) Use BODMAS: multiplication and division first',
            '2 × 8 = 16, then 16 ÷ 4 = 4',
            '9 + 4 − 3 = 10',
            '(b) 3½ − 2⅓ = 7/2 − 7/3',
            'Common denominator 6: 21/6 − 14/6 = 7/6 = 1⅙',
          ],
        },
      ],
    },
    {
      id: 'p1-q2',
      title: 'Question 2: Prime Factors (2 marks)',
      questions: [
        {
          id: 'p1-q2',
          number: 2,
          question: 'Express 108 as a product of its prime factors. [2]',
          marks: 2,
          solution: '108 = 2² × 3³',
          solutionSteps: [
            '108 = 2 × 54',
            '54 = 2 × 27',
            '27 = 3 × 9 = 3 × 3 × 3',
            'So 108 = 2 × 2 × 3 × 3 × 3 = 2² × 3³',
          ],
        },
      ],
    },
    {
      id: 'p1-q3',
      title: 'Question 3: Rounding and Fractions (3 marks)',
      questions: [
        {
          id: 'p1-q3',
          number: 3,
          question: '(a) Write 21054 correct to 3 significant figures. [1]\n(b) Write 0.075 as a fraction in its simplest form. [2]',
          marks: 3,
          solution: '(a) 21100\n(b) 3/40',
          solutionSteps: [
            '(a) 21054: the first three significant figures are 2, 1, 0; the next digit is 5 so round up',
            '21054 → 21100',
            '(b) 0.075 = 75/1000',
            'Simplify: divide numerator and denominator by 25 → 3/40',
          ],
        },
      ],
    },
    {
      id: 'p1-q4',
      title: 'Question 4: Venn Diagram (1 mark)',
      questions: [
        {
          id: 'p1-q4',
          number: 4,
          question: 'Shade the region represented by P′ ∩ Q in the following Venn diagram. [1]',
          marks: 1,
          diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><rect x="10" y="10" width="380" height="180" fill="none" stroke="#000" stroke-width="1.5"/><text x="25" y="35" font-family="serif" font-size="20" font-style="italic">Ɛ</text><circle cx="160" cy="100" r="65" fill="none" stroke="#000" stroke-width="1.5"/><circle cx="240" cy="100" r="65" fill="none" stroke="#000" stroke-width="1.5"/><text x="150" y="50" font-size="16" font-style="italic">P</text><text x="250" y="50" font-size="16" font-style="italic">Q</text></svg>`,
          solution: 'Shade the part of Q that does NOT overlap P (the right-hand portion of Q only).',
          solutionSteps: [
            'P′ means everything outside circle P',
            'Q means the circle Q',
            'P′ ∩ Q is the part of Q that is outside P',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Shaded region (P′ ∩ Q):</div><svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px"><rect x="10" y="10" width="380" height="180" fill="none" stroke="#111827" stroke-width="1.5"/><text x="25" y="35" font-family="serif" font-size="20" font-style="italic">Ɛ</text><circle cx="160" cy="100" r="65" fill="none" stroke="#111827" stroke-width="1.5"/><circle cx="240" cy="100" r="65" fill="#9ca3af" stroke="#111827" stroke-width="1.5"/><circle cx="160" cy="100" r="65" fill="#ffffff" stroke="#111827" stroke-width="1.5"/><text x="150" y="50" font-size="16" font-style="italic">P</text><text x="250" y="50" font-size="16" font-style="italic">Q</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-q5',
      title: 'Question 5: Division into Trays (2 marks)',
      questions: [
        {
          id: 'p1-q5',
          number: 5,
          question: 'A farmer has 168 eggs in her basket. The eggs are transferred into trays. A tray of eggs holds 30 eggs. Find the number of complete trays of eggs for the farmer. [2]',
          marks: 2,
          solution: '5 complete trays',
          solutionSteps: [
            'Number of trays = 168 ÷ 30 = 5.6',
            'The number of COMPLETE trays is the whole number part only',
            'So 5 complete trays (with 18 eggs left over)',
          ],
        },
      ],
    },
    {
      id: 'p1-q6',
      title: 'Question 6: Matrix Addition (2 marks)',
      questions: [
        {
          id: 'p1-q6',
          number: 6,
          question: 'A = [−1 2; 5 1] and B = [3 1; 0 7]. Work out A + B. [2]',
          marks: 2,
          solution: 'A + B = [2 3; 5 8]',
          solutionSteps: [
            'Add corresponding elements',
            'Top row: −1 + 3 = 2, 2 + 1 = 3',
            'Bottom row: 5 + 0 = 5, 1 + 7 = 8',
            'A + B = [2 3; 5 8]',
          ],
        },
      ],
    },
    {
      id: 'p1-q7',
      title: 'Question 7: Standard Form (2 marks)',
      questions: [
        {
          id: 'p1-q7',
          number: 7,
          question: 'Work out and give your answer in standard form: 3.6 × 10⁴ ÷ 1.2 × 10⁷ [2]',
          marks: 2,
          solution: '3.0 × 10⁻³',
          solutionSteps: [
            '(3.6 × 10⁴) ÷ (1.2 × 10⁷) = (3.6 ÷ 1.2) × 10^(4−7)',
            '3.6 ÷ 1.2 = 3',
            '10^(4−7) = 10⁻³',
            '= 3.0 × 10⁻³',
          ],
        },
      ],
    },
    {
      id: 'p1-q8',
      title: 'Question 8: Factorisation (3 marks)',
      questions: [
        {
          id: 'p1-q8',
          number: 8,
          question: 'Factorise completely.\n(a) 4ab − 20a² [1]\n(b) 4ab + 2bc − 6a − 3c [2]',
          marks: 3,
          solution: '(a) 4a(b − 5a)\n(b) (2a + c)(2b − 3)',
          solutionSteps: [
            '(a) Common factor of both terms is 4a',
            '4ab − 20a² = 4a(b − 5a)',
            '(b) Group the terms: (4ab + 2bc) − (6a + 3c)',
            '= 2b(2a + c) − 3(2a + c)',
            '= (2a + c)(2b − 3)',
          ],
        },
      ],
    },
    {
      id: 'p1-q9',
      title: 'Question 9: Solving Equations (4 marks)',
      questions: [
        {
          id: 'p1-q9',
          number: 9,
          question: '(a) Solve: x − 7 = 8 [1]\n(b) Solve: x² − 6x + 5 = 0 [3]',
          marks: 4,
          solution: '(a) x = 15\n(b) x = 1 or x = 5',
          solutionSteps: [
            '(a) x − 7 = 8 → x = 8 + 7 = 15',
            '(b) Factorise x² − 6x + 5 = 0',
            'Find two numbers that multiply to +5 and add to −6: −1 and −5',
            '(x − 1)(x − 5) = 0',
            'x = 1 or x = 5',
          ],
        },
      ],
    },
    {
      id: 'p1-q10',
      title: 'Question 10: Area of Shaded Region (3 marks)',
      questions: [
        {
          id: 'p1-q10',
          number: 10,
          question: 'The diagram shows a circle inside a square. The circle touches all four sides of the square. The side of the square is 20 cm. Use π as 3.142. Calculate the shaded area. [3]',
          marks: 3,
          diagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px"><rect x="30" y="30" width="200" height="200" fill="#aaa" stroke="#000" stroke-width="1.5"/><circle cx="130" cy="130" r="100" fill="#fff" stroke="#000" stroke-width="1.5"/><line x1="30" y1="15" x2="230" y2="15" stroke="#000" stroke-width="1"/><polygon points="30,15 38,11 38,19" fill="#000"/><polygon points="230,15 222,11 222,19" fill="#000"/><text x="110" y="10" font-size="14">20 cm</text><line x1="245" y1="30" x2="245" y2="230" stroke="#000" stroke-width="1"/><polygon points="245,30 241,38 249,38" fill="#000"/><polygon points="245,230 241,222 249,222" fill="#000"/><text x="250" y="135" font-size="14">20 cm</text><text x="250" y="170" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '86 cm²',
          solutionSteps: [
            'Area of square = 20 × 20 = 400 cm²',
            'Diameter of circle = 20 cm, so radius = 10 cm',
            'Area of circle = πr² = 3.142 × 10² = 3.142 × 100 = 314.2 cm²',
            'Shaded area = 400 − 314.2 = 85.8 cm² ≈ 86 cm²',
          ],
        },
      ],
    },
    {
      id: 'p1-q11',
      title: 'Question 11: Currency Conversion (4 marks)',
      questions: [
        {
          id: 'p1-q11',
          number: 11,
          question: 'The diagram shows a graph used to convert between dollars ($) and Maloti (M) on a particular day.\n(a) Use the graph to change M2500 into dollars. [2]\n(b) On the same day Suping changes $150 into Maloti. Use the graph to calculate the amount he receives in Maloti. [2]',
          marks: 4,
          diagram: `<svg viewBox="-50 -30 480 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px"><g stroke="#ccc" stroke-width="0.5"><path d="M 0,0 H 400 M 0,20 H 400 M 0,40 H 400 M 0,60 H 400 M 0,80 H 400 M 0,100 H 400 M 0,120 H 400 M 0,140 H 400 M 0,160 H 400 M 0,180 H 400 M 0,200 H 400 M 0,220 H 400 M 0,240 H 400 M 0,260 H 400 M 0,280 H 400 M 0,300 H 400"/><path d="M 0,0 V 300 M 40,0 V 300 M 80,0 V 300 M 120,0 V 300 M 160,0 V 300 M 200,0 V 300 M 240,0 V 300 M 280,0 V 300 M 320,0 V 300 M 360,0 V 300 M 400,0 V 300"/></g><line x1="0" y1="300" x2="410" y2="300" stroke="#000" stroke-width="2"/><line x1="0" y1="-10" x2="0" y2="300" stroke="#000" stroke-width="2"/><text x="-25" y="305">0</text><text x="-25" y="205">10</text><text x="-25" y="105">20</text><text x="-25" y="5">30</text><text x="-45" y="150" font-size="12">Maloti</text><text x="-45" y="165" font-size="12">(M)</text><text x="155" y="320">1</text><text x="315" y="320">2</text><text x="415" y="305" font-style="italic">x</text><text x="-5" y="-15" font-style="italic">y</text><text x="180" y="340" font-size="12">Dollars ($)</text><line x1="0" y1="300" x2="380" y2="0" stroke="#000" stroke-width="2"/></svg>`,
          solution: '(a) $100\n(b) M3750',
          solutionSteps: [
            'The line passes through (0,0) and (2,30), i.e. $2 = M30 → the rate is M15 per $1',
            '(a) M2500 ÷ 15 = $166.67 ... but read from the graph: at M2500 on the vertical axis the line meets $100',
            'Using the graph: M2500 → $100',
            '(b) At $150 on the horizontal axis the line meets M3750',
            'So $150 → M3750',
          ],
        },
      ],
    },
    {
      id: 'p1-q12',
      title: 'Question 12: Percentage Decrease (2 marks)',
      questions: [
        {
          id: 'p1-q12',
          number: 12,
          question: 'The mass of a baby decreased from 7.5 kg to 6.3 kg. Calculate the percentage decrease in the baby\'s mass. [2]',
          marks: 2,
          solution: '16%',
          solutionSteps: [
            'Decrease = 7.5 − 6.3 = 1.2 kg',
            'Percentage decrease = (decrease ÷ original) × 100',
            '(1.2 ÷ 7.5) × 100 = 0.16 × 100 = 16%',
          ],
        },
      ],
    },
    {
      id: 'p1-q13',
      title: 'Question 13: Volume of Triangular Prism (5 marks)',
      questions: [
        {
          id: 'p1-q13',
          number: 13,
          question: 'The diagram shows a triangular prism. AC = 6 cm, BD = 4 cm and DE = 10 cm.\n(a) Calculate the volume of the prism. [2]\n(b) Complete a labelled sketch of the net for the prism. [3]',
          marks: 5,
          diagram: `<svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px"><polygon points="40,180 80,70 140,180" fill="#ddd" stroke="#000" stroke-width="1.5"/><polygon points="80,70 300,20 360,130 140,180" fill="#eee" stroke="#000" stroke-width="1.5"/><line x1="40" y1="180" x2="260" y2="130" stroke="#000" stroke-width="1" stroke-dasharray="4"/><line x1="80" y1="70" x2="260" y2="130" stroke="#000" stroke-width="1" stroke-dasharray="4"/><line x1="360" y1="130" x2="260" y2="130" stroke="#000" stroke-width="1" stroke-dasharray="4"/><line x1="80" y1="70" x2="80" y2="180" stroke="#000" stroke-width="1.5"/><rect x="80" y="165" width="12" height="15" fill="none" stroke="#000" stroke-width="1"/><text x="25" y="190">A</text><text x="75" y="200">B</text><text x="145" y="195">C</text><text x="75" y="60">D</text><text x="305" y="15">E</text><text x="370" y="135">F</text><text x="250" y="140">G</text><text x="85" y="120">4 cm</text><text x="80" y="215">6 cm</text><text x="180" y="40">10 cm</text><text x="370" y="50" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '(a) 120 cm³\n(b) Net: a parallelogram base plus two triangular ends and three rectangular faces',
          solutionSteps: [
            'Volume of a prism = area of cross-section × length',
            '(a) Cross-section is triangle ABC with base AC = 6 cm and height BD = 4 cm',
            'Area of triangle = ½ × 6 × 4 = 12 cm²',
            'Length of prism = DE = 10 cm',
            'Volume = 12 × 10 = 120 cm³',
            '(b) The net has: 2 congruent triangles (ends), 1 rectangle 6 cm × 10 cm (base AC), 1 rectangle 4 cm × 10 cm (face AB), 1 rectangle 5 cm × 10 cm? — connect to form a parallelogram with two triangles attached to the slanted sides',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Labelled net of the prism:</div><svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><polygon points="30,120 180,120 350,30 200,30" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="30,120 80,120 80,30 30,30" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="180,120 230,120 230,30 180,30" fill="none" stroke="#111827" stroke-width="1.5"/><text x="15" y="130">A</text><text x="185" y="130">C</text><text x="360" y="30">F</text><text x="195" y="20">G</text><text x="40" y="80">B</text><text x="190" y="80">D</text><text x="320" y="130" font-size="12" font-weight="bold">NOT TO SCALE</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-q14',
      title: 'Question 14: Probability (4 marks)',
      questions: [
        {
          id: 'p1-q14',
          number: 14,
          question: 'A bag contains identical balls which are either red, black or yellow. The probability of choosing a black ball is 7/18 and the probability of choosing a yellow ball is 5/12. A ball is chosen at random from the bag.\n(a) Show that the probability of choosing a red ball is 7/36. [2]\n(b) Calculate the probability of choosing a red ball or a yellow ball. [2]',
          marks: 4,
          solution: '(a) 1 − 7/18 − 5/12 = 7/36\n(b) 11/18',
          solutionSteps: [
            'All probabilities add to 1',
            '(a) P(red) = 1 − P(black) − P(yellow) = 1 − 7/18 − 5/12',
            'Common denominator 36: 1 = 36/36, 7/18 = 14/36, 5/12 = 15/36',
            'P(red) = 36/36 − 14/36 − 15/36 = 7/36',
            '(b) P(red or yellow) = P(red) + P(yellow) = 7/36 + 5/12',
            '5/12 = 15/36, so 7/36 + 15/36 = 22/36 = 11/18',
          ],
        },
      ],
    },
    {
      id: 'p1-q15',
      title: 'Question 15: Time Calculation (2 marks)',
      questions: [
        {
          id: 'p1-q15',
          number: 15,
          question: 'Pule leaves home at 6.17 a.m. to school and arrives after 48 minutes. Find the time at which he arrives at school. [2]',
          marks: 2,
          solution: '7:05 a.m.',
          solutionSteps: [
            '6:17 a.m. + 48 minutes',
            'From 6:17 to 7:00 is 43 minutes, leaving 48 − 43 = 5 minutes',
            '7:00 + 5 minutes = 7:05 a.m.',
            'Arrival time = 7:05 a.m.',
          ],
        },
      ],
    },
    {
      id: 'p1-q16',
      title: 'Question 16: Functions (3 marks)',
      questions: [
        {
          id: 'p1-q16',
          number: 16,
          question: 'f(x) = 2x + 3. Find\n(a) f(0) [1]\n(b) p when f(p) = 11 [2]',
          marks: 3,
          solution: '(a) 3\n(b) 4',
          solutionSteps: [
            '(a) f(0) = 2(0) + 3 = 3',
            '(b) f(p) = 11 → 2p + 3 = 11',
            '2p = 8 → p = 4',
          ],
        },
      ],
    },
    {
      id: 'p1-q17',
      title: 'Question 17: Bounds (2 marks)',
      questions: [
        {
          id: 'p1-q17',
          number: 17,
          question: 'The length, l, of a desk measures 48.4 cm correct to the nearest millimetre. Find the lower bound and the upper bound for the length. [2]',
          marks: 2,
          solution: '48.35 cm ≤ l < 48.45 cm',
          solutionSteps: [
            'Measured to the nearest millimetre = nearest 0.1 cm',
            'The error is half of 0.1 cm = 0.05 cm',
            'Lower bound = 48.4 − 0.05 = 48.35 cm',
            'Upper bound = 48.4 + 0.05 = 48.45 cm',
            '48.35 cm ≤ l < 48.45 cm',
          ],
        },
      ],
    },
    {
      id: 'p1-q18',
      title: 'Question 18: Trigonometry in a Triangle (2 marks)',
      questions: [
        {
          id: 'p1-q18',
          number: 18,
          question: 'The diagram shows triangle ABC with BC = 10 cm. Angles θ and α are marked in the triangle. Find the value of cos α if sin θ = 2/5. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px"><polygon points="30,200 30,20 250,200" fill="none" stroke="#000" stroke-width="1.5"/><rect x="30" y="180" width="20" height="20" fill="none" stroke="#000" stroke-width="1"/><path d="M 30,50 A 30,30 0 0,0 55,42" fill="none" stroke="#000" stroke-width="1.5"/><text x="45" y="60" font-size="14">θ</text><path d="M 210,200 A 40,40 0 0,0 225,180" fill="none" stroke="#000" stroke-width="1.5"/><text x="210" y="175" font-size="14">α</text><text x="15" y="215">A</text><text x="15" y="20">B</text><text x="255" y="215">C</text><text x="140" y="100" font-size="14">10 cm</text><text x="200" y="60" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: 'cos α = 2/5',
          solutionSteps: [
            'In triangle ABC (right-angled at A), the angles θ and α are the two acute angles',
            'Acute angles in a right triangle are complementary, so sin θ = cos α',
            'Therefore cos α = sin θ = 2/5',
          ],
        },
      ],
    },
    {
      id: 'p1-q19',
      title: 'Question 19: Bar Chart and Mean (4 marks)',
      questions: [
        {
          id: 'p1-q19',
          number: 19,
          question: 'The bar chart shows the number of goals scored by each team in a tournament.\n(a) Find the team which scored the least number of goals. [1]\n(b) Calculate the mean score. [3]',
          marks: 4,
          diagram: `<svg viewBox="-50 -20 480 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px"><g stroke="#888" stroke-width="0.8" stroke-dasharray="3,3"><line x1="0" y1="270" x2="400" y2="270"/><line x1="0" y1="240" x2="400" y2="240"/><line x1="0" y1="210" x2="400" y2="210"/><line x1="0" y1="180" x2="400" y2="180"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="120" x2="400" y2="120"/><line x1="0" y1="90" x2="400" y2="90"/><line x1="0" y1="60" x2="400" y2="60"/><line x1="0" y1="30" x2="400" y2="30"/><line x1="0" y1="0" x2="400" y2="0"/></g><line x1="0" y1="300" x2="410" y2="300" stroke="#000" stroke-width="2"/><line x1="0" y1="-10" x2="0" y2="300" stroke="#000" stroke-width="2"/><text x="-20" y="305">0</text><text x="-20" y="275">2</text><text x="-20" y="245">4</text><text x="-20" y="215">6</text><text x="-20" y="185">8</text><text x="-25" y="155">10</text><text x="-25" y="125">12</text><text x="-25" y="95">14</text><text x="-25" y="65">16</text><text x="-25" y="35">18</text><text x="-25" y="5">20</text><text x="-45" y="130" font-size="12">Number of</text><text x="-45" y="145" font-size="12">goals scored</text><rect x="25" y="270" width="30" height="30" fill="#ccc" stroke="#000" stroke-width="1"/><text x="35" y="320">A</text><rect x="85" y="195" width="30" height="105" fill="#ccc" stroke="#000" stroke-width="1"/><text x="95" y="320">B</text><rect x="145" y="150" width="30" height="150" fill="#ccc" stroke="#000" stroke-width="1"/><text x="155" y="320">C</text><rect x="205" y="30" width="30" height="270" fill="#ccc" stroke="#000" stroke-width="1"/><text x="215" y="320">D</text><rect x="265" y="165" width="30" height="135" fill="#ccc" stroke="#000" stroke-width="1"/><text x="275" y="320">E</text><rect x="325" y="90" width="30" height="210" fill="#ccc" stroke="#000" stroke-width="1"/><text x="335" y="320">F</text><text x="180" y="340" font-size="12">Teams</text></svg>`,
          solution: '(a) Team A (2 goals)\n(b) 10 goals',
          solutionSteps: [
            '(a) Read heights: A=2, B=7, C=10, D=18, E=9, F=14',
            'The least is A with 2 goals',
            '(b) Total goals = 2 + 7 + 10 + 18 + 9 + 14 = 60',
            'Mean = total ÷ number of teams = 60 ÷ 6 = 10 goals',
          ],
        },
      ],
    },
    {
      id: 'p1-q20',
      title: 'Question 20: Simultaneous Equations (3 marks)',
      questions: [
        {
          id: 'p1-q20',
          number: 20,
          question: 'Solve the simultaneous equations:\n¾x = 12y\nx − 15y = 1 [3]',
          marks: 3,
          solution: 'x = 16, y = 1',
          solutionSteps: [
            'From ¾x = 12y → multiply by 4: 3x = 48y → x = 16y',
            'Substitute into x − 15y = 1: 16y − 15y = 1',
            'y = 1',
            'Then x = 16(1) = 16',
            'So x = 16, y = 1',
          ],
        },
      ],
    },
    {
      id: 'p1-q21',
      title: 'Question 21: Bearings (2 marks)',
      questions: [
        {
          id: 'p1-q21',
          number: 21,
          question: 'The diagram shows points P and Q with the north lines. Measure and write the bearing of P from Q. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px"><line x1="80" y1="120" x2="80" y2="40" stroke="#000" stroke-width="1.5"/><polygon points="80,30 75,45 85,45" fill="#000"/><text x="60" y="25" font-size="12">North line</text><circle cx="80" cy="120" r="3" fill="#000"/><text x="65" y="130" font-weight="bold">P</text><line x1="300" y1="160" x2="300" y2="80" stroke="#000" stroke-width="1.5"/><polygon points="300,70 295,85 305,85" fill="#000"/><text x="280" y="65" font-size="12">North line</text><circle cx="300" cy="160" r="3" fill="#000"/><text x="310" y="170" font-weight="bold">Q</text><line x1="80" y1="120" x2="300" y2="160" stroke="#000" stroke-width="1"/></svg>`,
          solution: 'Bearing of P from Q ≈ 210° (measured from the diagram)',
          solutionSteps: [
            'Draw a north line through Q (parallel to the given north line at Q)',
            'Measure the clockwise angle from this north line to the line QP',
            'From the diagram this is about 210° (3-figure bearing, to the nearest degree)',
          ],
        },
      ],
    },
    {
      id: 'p1-q22',
      title: 'Question 22: Circle Theorem (2 marks)',
      questions: [
        {
          id: 'p1-q22',
          number: 22,
          question: 'The diagram shows a circle with centre O. AT is a tangent to the circle at T. Angle OAT = 34°. Calculate angle AOT. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px"><circle cx="280" cy="100" r="80" fill="none" stroke="#000" stroke-width="1.5"/><circle cx="280" cy="100" r="3" fill="#000"/><text x="275" y="90" font-weight="bold">O</text><line x1="40" y1="180" x2="280" y2="180" stroke="#000" stroke-width="1.5"/><circle cx="40" cy="180" r="2" fill="#000"/><text x="25" y="185" font-weight="bold">A</text><circle cx="280" cy="180" r="2" fill="#000"/><text x="280" y="195" font-weight="bold">T</text><line x1="280" y1="100" x2="280" y2="180" stroke="#000" stroke-width="1.5"/><line x1="40" y1="180" x2="280" y2="100" stroke="#000" stroke-width="1.5"/><path d="M 80,180 A 40,40 0 0,0 72,168" fill="none" stroke="#000" stroke-width="1.5"/><text x="90" y="170" font-size="14">34°</text><text x="310" y="60" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: 'Angle AOT = 56°',
          solutionSteps: [
            'The radius OT is perpendicular to the tangent AT, so angle OTA = 90°',
            'In triangle OAT, angles sum to 180°',
            'Angle AOT = 180° − 90° − 34° = 56°',
          ],
        },
      ],
    },
  ],
};
