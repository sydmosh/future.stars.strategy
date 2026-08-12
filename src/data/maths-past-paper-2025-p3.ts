import type { Booklet } from './booklets';

export const mathsPastPaper2025P3: Booklet = {
  id: 'lgcse-0178-03-25',
  title: 'LGCSE Mathematics Paper 3 (Core) May/June 2025',
  subtitle: 'Official Examinations Council of Lesotho (ECoL) Past Question Paper',
  description:
    'Complete 2025 LGCSE Mathematics Paper 3 (Core) examination (100 Marks). Covers sequences and patterns, functions, transformations, statistics, mensuration (cube and cylinder), quadratic graphs, distance-time graphs, angles and trigonometry, Venn diagrams and temperature bounds, profit and investment, time and matrices, quadratic equations and algebra.',
  totalMarks: 100,
  sections: [
    {
      id: 'p3-q1',
      title: 'Question 1: Sequences and Patterns (5 marks)',
      questions: [
        {
          id: 'p3-q1',
          number: 1,
          question:
            'The diagram shows a sequence of patterns made of shaded and unshaded triangles.\n\n(a) Complete the table. [2]\n(b) Find (i) the number of unshaded triangles in pattern 6, [1] (ii) the nth term for the total number of triangles in pattern n. [2]',
          marks: 5,
          diagram: `<svg viewBox="0 0 680 135" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px">
            <g transform="translate(10, 5)">
              <polygon points="20,10 0,44.64 40,44.64" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <text x="-2" y="98" font-size="12">Pattern 1</text>
            </g>
            <g transform="translate(85, 5)">
              <polygon points="20,10 60,10 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="20,79.28 60,79.28 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <text x="16" y="98" font-size="12">Pattern 2</text>
            </g>
            <g transform="translate(195, 5)">
              <polygon points="20,10 60,10 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="60,10 100,10 80,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="20,79.28 60,79.28 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="60,79.28 100,79.28 80,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="80,44.64 120,44.64 100,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="80,44.64 120,44.64 100,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <text x="36" y="98" font-size="12">Pattern 3</text>
            </g>
            <g transform="translate(345, 5)">
              <polygon points="20,10 60,10 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="60,10 100,10 80,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="100,10 140,10 120,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="20,79.28 60,79.28 40,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="60,79.28 100,79.28 80,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="100,79.28 140,79.28 120,44.64" fill="#fff" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="0,44.64 40,44.64 20,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="40,44.64 80,44.64 60,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="80,44.64 120,44.64 100,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="80,44.64 120,44.64 100,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="120,44.64 160,44.64 140,10" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <polygon points="120,44.64 160,44.64 140,79.28" fill="#888" stroke="#111827" stroke-width="1.5"/>
              <text x="56" y="98" font-size="12">Pattern 4</text>
            </g>
          </svg>`,
          solution:
            '(a) Pattern 3: shaded 6, total 10; Pattern 4: shaded 8, total 14.\n(b)(i) 10   (ii) 4n − 2',
          solutionSteps: [
            'Shaded triangles: 2, 4, … increase by 2 each pattern',
            'Pattern 3 shaded = 6, Pattern 4 shaded = 8',
            'Unshaded triangles: 0, 2, 4, 6 … = 2(n − 1)',
            'Total triangles: 2, 6, 10, … increase by 4 each pattern',
            '(a) Pattern 3 total = 6 + 4 = 10; Pattern 4 total = 8 + 6 = 14',
            '(b)(i) Unshaded in pattern 6 = 2(6 − 1) = 10',
            '(b)(ii) Total = shaded + unshaded = 2n + 2(n − 1) = 4n − 2',
            'Check: n = 1 → 2, n = 2 → 6, n = 4 → 14 ✓',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Completed table:</div><table style="border-collapse:collapse;margin-top:8px;font-size:12px;"><tr style="background:#f0fdf4;"><td style="border:1px solid #111827;padding:6px 10px;"><b>Pattern number</b></td><td style="border:1px solid #111827;padding:6px 10px;">1</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">3</td><td style="border:1px solid #111827;padding:6px 10px;">4</td></tr><tr><td style="border:1px solid #111827;padding:6px 10px;">Shaded</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">4</td><td style="border:1px solid #111827;padding:6px 10px;font-weight:bold;color:#dc2626">6</td><td style="border:1px solid #111827;padding:6px 10px;font-weight:bold;color:#dc2626">8</td></tr><tr><td style="border:1px solid #111827;padding:6px 10px;">Unshaded</td><td style="border:1px solid #111827;padding:6px 10px;">0</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">4</td><td style="border:1px solid #111827;padding:6px 10px;">6</td></tr><tr style="background:#f0fdf4;"><td style="border:1px solid #111827;padding:6px 10px;">Total</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">6</td><td style="border:1px solid #111827;padding:6px 10px;">10</td><td style="border:1px solid #111827;padding:6px 10px;font-weight:bold;color:#dc2626">14</td></tr></table></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q2',
      title: 'Question 2: Functions (7 marks)',
      questions: [
        {
          id: 'p3-q2',
          number: 2,
          question:
            'h(x) = 2x − 5 and g(x) = x² + 1.\n\n(a) Find g(−6). [1]\n(b) Express 2g(x) − h(x) in the form px² + qx + r, where p, q and r are integers. [3]\n(c) Find the value of x for which x h(x) − 2g(x) = −12. [3]',
          marks: 7,
          solution: '(a) 37\n(b) 2x² − 2x + 7\n(c) x = 2',
          solutionSteps: [
            '(a) g(−6) = (−6)² + 1 = 36 + 1 = 37',
            '(b) 2g(x) − h(x) = 2(x² + 1) − (2x − 5)',
            '= 2x² + 2 − 2x + 5 = 2x² − 2x + 7',
            'So p = 2, q = −2, r = 7',
            '(c) x h(x) − 2g(x) = −12',
            'x(2x − 5) − 2(x² + 1) = −12',
            '2x² − 5x − 2x² − 2 = −12',
            '−5x − 2 = −12 → −5x = −10 → x = 2',
          ],
        },
      ],
    },
    {
      id: 'p3-q3',
      title: 'Question 3: Transformations (8 marks)',
      questions: [
        {
          id: 'p3-q3',
          number: 3,
          question:
            'The diagram shows triangles P, Q and R.\n\n(a) R is mapped onto Q by reflection. State the equation of the mirror line. [1]\n(b) Describe fully a single transformation that maps P onto Q. [3]\n(c) On the grid, draw the image of Q after enlargement, centre (0, 0), scale factor 1/2. [2]\n(d) Calculate the area of triangle P. [2]',
          marks: 8,
          diagram: `<svg viewBox="-100 -50 550 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
            <g stroke="#ccc" stroke-width="0.5">
              <path d="M -80,-40 H 420 M -80,-20 H 420 M -80,0 H 420 M -80,20 H 420 M -80,40 H 420 M -80,60 H 420 M -80,80 H 420 M -80,100 H 420 M -80,120 H 420 M -80,140 H 420 M -80,160 H 420 M -80,180 H 420 M -80,200 H 420 M -80,220 H 420"/>
              <path d="M -80,-40 V 220 M -60,-40 V 220 M -40,-40 V 220 M -20,-40 V 220 M 0,-40 V 220 M 20,-40 V 220 M 40,-40 V 220 M 60,-40 V 220 M 80,-40 V 220 M 100,-40 V 220 M 120,-40 V 220 M 140,-40 V 220 M 160,-40 V 220 M 180,-40 V 220 M 200,-40 V 220 M 220,-40 V 220 M 240,-40 V 220 M 260,-40 V 220 M 280,-40 V 220 M 300,-40 V 220 M 320,-40 V 220 M 340,-40 V 220 M 360,-40 V 220 M 380,-40 V 220 M 400,-40 V 220"/>
            </g>
            <line x1="-80" y1="160" x2="410" y2="160" stroke="#111827" stroke-width="2"/>
            <line x1="0" y1="-40" x2="0" y2="220" stroke="#111827" stroke-width="2"/>
            <text x="-65" y="175">-4</text><text x="-45" y="175">-3</text><text x="-25" y="175">-2</text><text x="-10" y="175">-1</text><text x="-5" y="175">0</text><text x="20" y="175">1</text><text x="40" y="175">2</text><text x="60" y="175">3</text><text x="80" y="175">4</text><text x="100" y="175">5</text><text x="120" y="175">6</text><text x="140" y="175">7</text><text x="160" y="175">8</text><text x="180" y="175">9</text><text x="195" y="175">10</text><text x="215" y="175">11</text><text x="235" y="175">12</text><text x="255" y="175">13</text><text x="415" y="165" font-style="italic">x</text>
            <text x="-15" y="215">-3</text><text x="-15" y="198">-2</text><text x="-15" y="180">-1</text><text x="-15" y="140">1</text><text x="-15" y="120">2</text><text x="-15" y="100">3</text><text x="-15" y="80">4</text><text x="-15" y="60">5</text><text x="-15" y="40">6</text><text x="-10" y="-20" font-style="italic">y</text>
            <polygon points="-60,120 -20,60 -20,120" fill="none" stroke="#111827" stroke-width="1.5"/>
            <text x="-38" y="95" font-weight="bold" font-style="italic">R</text>
            <polygon points="40,60 100,120 40,120" fill="none" stroke="#111827" stroke-width="1.5"/>
            <text x="50" y="95" font-weight="bold" font-style="italic">Q</text>
            <polygon points="180,120 240,120 240,180" fill="none" stroke="#111827" stroke-width="1.5"/>
            <text x="210" y="140" font-weight="bold" font-style="italic">P</text>
          </svg>`,
          solution:
            '(a) x = 0.5\n(b) Rotation 180° about (7, 2)\n(c) Vertices (1, 2.5), (2.5, 1), (1, 1)\n(d) 4.5 units²',
          solutionSteps: [
            '(a) R has vertices (−4,2),(−1,5),(−1,2); Q has (2,5),(5,2),(2,2)',
            'Reflecting across x = 0.5 sends (−1,2) → (2,2) and (−4,2) → (5,2), so the mirror line is x = 0.5',
            '(b) P has vertices (9,2),(12,2),(12,−1); Q has (2,5),(5,2),(2,2)',
            'Midpoints of joins: (12,2)→(2,2) gives (7,2); (9,2)→(5,2) gives (7,2); (12,−1)→(2,5) gives (7,2)',
            'All midpoints coincide at (7,2), so it is a rotation of 180° about (7, 2)',
            '(c) Enlargement centre (0,0), scale factor 1/2 halves each coordinate',
            'Q vertices (2,5),(5,2),(2,2) → (1, 2.5),(2.5, 1),(1, 1)',
            '(d) Triangle P is right-angled: legs (12,2)−(9,2) = 3 and (12,2)−(12,−1) = 3',
            'Area = ½ × 3 × 3 = 4.5 units²',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Mirror line (green) and enlargement image of Q (red):</div><svg viewBox="-100 -50 550 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px"><g stroke="#d1d5db" stroke-width="0.5"><path d="M -80,-40 H 420 M -80,-20 H 420 M -80,0 H 420 M -80,20 H 420 M -80,40 H 420 M -80,60 H 420 M -80,80 H 420 M -80,100 H 420 M -80,120 H 420 M -80,140 H 420 M -80,160 H 420 M -80,180 H 420 M -80,200 H 420 M -80,220 H 420"/><path d="M -80,-40 V 220 M -60,-40 V 220 M -40,-40 V 220 M -20,-40 V 220 M 0,-40 V 220 M 20,-40 V 220 M 40,-40 V 220 M 60,-40 V 220 M 80,-40 V 220 M 100,-40 V 220 M 120,-40 V 220 M 140,-40 V 220 M 160,-40 V 220 M 180,-40 V 220 M 200,-40 V 220 M 220,-40 V 220 M 240,-40 V 220 M 260,-40 V 220 M 280,-40 V 220 M 300,-40 V 220 M 320,-40 V 220 M 340,-40 V 220 M 360,-40 V 220 M 380,-40 V 220 M 400,-40 V 220"/></g><line x1="-80" y1="160" x2="410" y2="160" stroke="#111827" stroke-width="2"/><line x1="0" y1="-40" x2="0" y2="220" stroke="#111827" stroke-width="2"/><line x1="20" y1="-40" x2="20" y2="220" stroke="#065f46" stroke-width="1.5" stroke-dasharray="6,4"/><text x="24" y="-28" font-size="11" fill="#065f46">x = 0.5</text><polygon points="-60,120 -20,60 -20,120" fill="none" stroke="#111827" stroke-width="1.5"/><text x="-38" y="95" font-weight="bold" font-style="italic">R</text><polygon points="40,60 100,120 40,120" fill="none" stroke="#111827" stroke-width="1.5"/><text x="50" y="95" font-weight="bold" font-style="italic">Q</text><polygon points="180,120 240,120 240,180" fill="none" stroke="#111827" stroke-width="1.5"/><text x="210" y="140" font-weight="bold" font-style="italic">P</text><polygon points="20,200 50,160 20,160" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="30" y="195" font-weight="bold" font-style="italic" fill="#dc2626">Q′</text><circle cx="7" cy="2" r="3" fill="#9333ea"/><text x="12" y="6" font-size="11" fill="#9333ea">(7,2)</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q4',
      title: 'Question 4: Statistics (11 marks)',
      questions: [
        {
          id: 'p3-q4',
          number: 4,
          question:
            '(a) Shoe sizes: 3(10), 4(12), 5(16), 6(6), 7(4), 8(2).\n(i) Find the total number of pairs. [1]\n(ii) State the mode. [1]\n(iii) Determine the range. [1]\n(iv) Find the probability that at least size 6 is chosen. [2]\n\n(b) Maize masses (kg): 142, 140, 130, 150, 160, 136, 158, 132, 128, 130. Find the median. [2]\n\n(c) Liau Tau\'s marks: Sesotho 78, English 59, Physical Science 64, Business Studies 47. Calculate the Mathematics mark for an average of 65. [3]',
          marks: 11,
          solution: '(a)(i) 50   (ii) 5   (iii) 5   (iv) 6/25\n(b) 138 kg\n(c) 142',
          solutionSteps: [
            '(a)(i) Total = 10 + 12 + 16 + 6 + 4 + 2 = 50 pairs',
            '(a)(ii) Mode = shoe size 5 (highest frequency 16)',
            '(a)(iii) Range = 8 − 3 = 5',
            '(a)(iv) At least size 6: sizes 6, 7, 8 → 6 + 4 + 2 = 12 pairs',
            'P(at least size 6) = 12/50 = 6/25',
            '(b) Order the masses: 128, 130, 130, 132, 136, 140, 142, 150, 158, 160',
            '10 values, so median = mean of 5th and 6th = (136 + 140)/2 = 138 kg',
            '(c) Sum of the 5 given subjects = 78 + 59 + 64 + 47 = 248',
            'Let the Mathematics mark be m; average of 6 subjects = (248 + m)/6 = 65',
            '248 + m = 390 → m = 142',
          ],
        },
      ],
    },
    {
      id: 'p3-q5',
      title: 'Question 5: Mensuration — Cube and Cylinder (6 marks)',
      questions: [
        {
          id: 'p3-q5',
          number: 5,
          question:
            'A solid cube (side 6 cm) and a solid cylinder (radius 3 cm) have equal volumes.\n\n(a) Calculate the volume of the cube. [1]\n(b) Calculate the height h of the cylinder. [3]\n(c) Calculate the curved surface area of the cylinder. [2]',
          marks: 6,
          diagram: `<svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px">
            <g transform="translate(20,20)">
              <polygon points="10,150 110,150 110,50 10,50" fill="none" stroke="#111827" stroke-width="1.5"/>
              <polygon points="110,150 150,110 150,10 110,50" fill="none" stroke="#111827" stroke-width="1.5"/>
              <polygon points="10,50 50,10 150,10 110,50" fill="none" stroke="#111827" stroke-width="1.5"/>
              <text x="55" y="175" font-size="14">6 cm</text>
              <text x="40" y="-5" font-weight="bold">cube</text>
            </g>
            <g transform="translate(260,20)">
              <ellipse cx="80" cy="30" rx="60" ry="20" fill="none" stroke="#111827" stroke-width="1.5"/>
              <line x1="20" y1="30" x2="20" y2="150" stroke="#111827" stroke-width="1.5"/>
              <line x1="140" y1="30" x2="140" y2="150" stroke="#111827" stroke-width="1.5"/>
              <path d="M 20,150 A 60,20 0 0,0 140,150" fill="none" stroke="#111827" stroke-width="1.5"/>
              <path d="M 20,150 A 60,20 0 0,1 140,150" fill="none" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
              <text x="95" y="22" font-size="14">3 cm</text>
              <text x="-15" y="95" font-style="italic" font-size="14">h</text>
              <text x="45" y="-5" font-weight="bold">cylinder</text>
              <text x="95" y="100" font-size="12" font-weight="bold">NOT TO SCALE</text>
            </g>
          </svg>`,
          solution: '(a) 216 cm³\n(b) 7.64 cm\n(c) 144 cm²',
          solutionSteps: [
            '(a) Volume of cube = 6³ = 216 cm³',
            '(b) Cylinder volume = πr²h = π × 3² × h = 9πh',
            'Equal volumes: 9πh = 216 → h = 216/(9π) = 24/π ≈ 7.64 cm',
            '(c) Curved surface area = 2πrh = 2π × 3 × h = 6πh',
            'Substitute h = 24/π: 6π × (24/π) = 144 cm²',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Volume check:</div><svg viewBox="0 0 420 80" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><rect x="10" y="15" width="60" height="40" fill="none" stroke="#111827" stroke-width="1.5"/><text x="20" y="40" font-size="12">6³</text><text x="95" y="40" font-size="14">= 216 cm³ = π × 3² × h</text><text x="95" y="62" font-size="13" fill="#dc2626">→ h = 216 ÷ 9π ≈ 7.64 cm,  CSA = 2π(3)h = 144 cm²</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q6',
      title: 'Question 6: Quadratic Graph (7 marks)',
      questions: [
        {
          id: 'p3-q6',
          number: 6,
          question:
            'y = x² + 2x − 3.\nTable: x = −3,−2,−1,0,1,2 with y = 0,−3,?,−3,0,5.\n\n(a) Complete the table. [2]\n(b) On the grid, draw the graph of y = x² + 2x − 3 for −4 ≤ x ≤ 2. [3]\n(c) On the same grid, draw the line y = x + 3 for −4 ≤ x ≤ 3. [2]',
          marks: 7,
          diagram: `<svg viewBox="-60 -50 480 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px">
            <path d="M 0,0 L 400,0 M 0,25 L 400,25 M 0,50 L 400,50 M 0,75 L 400,75 M 0,100 L 400,100 M 0,125 L 400,125 M 0,150 L 400,150 M 0,175 L 400,175 M 0,200 L 400,200 M 0,225 L 400,225 M 0,250 L 400,250 M 0,275 L 400,275 M 0,300 L 400,300 M 0,325 L 400,325 M 0,350 L 400,350 M 0,375 L 400,375 M 0,400 L 400,400" stroke="#ccc" stroke-width="0.5"/>
            <path d="M 0,0 L 0,400 M 25,0 L 25,400 M 50,0 L 50,400 M 75,0 L 75,400 M 100,0 L 100,400 M 125,0 L 125,400 M 150,0 L 150,400 M 175,0 L 175,400 M 200,0 L 200,400 M 225,0 L 225,400 M 250,0 L 250,400 M 275,0 L 275,400 M 300,0 L 300,400 M 325,0 L 325,400 M 350,0 L 350,400 M 375,0 L 375,400 M 400,0 L 400,400" stroke="#ccc" stroke-width="0.5"/>
            <line x1="0" y1="240" x2="410" y2="240" stroke="#111827" stroke-width="2"/>
            <line x1="200" y1="0" x2="200" y2="410" stroke="#111827" stroke-width="2"/>
            <text x="0" y="255">-4</text><text x="50" y="255">-3</text><text x="100" y="255">-2</text><text x="150" y="255">-1</text><text x="195" y="255">0</text><text x="250" y="255">1</text><text x="300" y="255">2</text><text x="350" y="255">3</text><text x="400" y="255">4</text><text x="415" y="245" font-style="italic">x</text>
            <text x="180" y="400">-4</text><text x="180" y="360">-3</text><text x="180" y="320">-2</text><text x="180" y="280">-1</text><text x="180" y="200">1</text><text x="180" y="160">2</text><text x="180" y="120">3</text><text x="180" y="80">4</text><text x="180" y="40">5</text><text x="180" y="10">6</text><text x="195" y="-10" font-style="italic">y</text>
          </svg>`,
          solution: '(a) y(−1) = −4\n(b) Plot and join with a smooth curve\n(c) Straight line through (−4,−1) … (3,6)',
          solutionSteps: [
            '(a) When x = −1: y = (−1)² + 2(−1) − 3 = 1 − 2 − 3 = −4',
            'Full table: x = −3→0, −2→−3, −1→−4, 0→−3, 1→0, 2→5; also −4→5',
            '(b) Plot (−4,5),(−3,0),(−2,−3),(−1,−4),(0,−3),(1,0),(2,5) and draw a smooth curve',
            '(c) For y = x + 3: (−4,−1),(−3,0),(−2,1),(−1,2),(0,3),(1,4),(2,5),(3,6)',
            'Plot these points and join with a straight line',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Graph of y = x² + 2x − 3 (red) and y = x + 3 (blue):</div><svg viewBox="-60 -50 480 480" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><path d="M 0,0 L 400,0 M 0,25 L 400,25 M 0,50 L 400,50 M 0,75 L 400,75 M 0,100 L 400,100 M 0,125 L 400,125 M 0,150 L 400,150 M 0,175 L 400,175 M 0,200 L 400,200 M 0,225 L 400,225 M 0,250 L 400,250 M 0,275 L 400,275 M 0,300 L 400,300 M 0,325 L 400,325 M 0,350 L 400,350 M 0,375 L 400,375 M 0,400 L 400,400" stroke="#eee" stroke-width="0.5"/><path d="M 0,0 L 0,400 M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400 M 400,0 L 400,400" stroke="#eee" stroke-width="0.5"/><line x1="0" y1="240" x2="410" y2="240" stroke="#111827" stroke-width="2"/><line x1="200" y1="0" x2="200" y2="410" stroke="#111827" stroke-width="2"/><text x="0" y="255">-4</text><text x="50" y="255">-3</text><text x="100" y="255">-2</text><text x="150" y="255">-1</text><text x="195" y="255">0</text><text x="250" y="255">1</text><text x="300" y="255">2</text><text x="350" y="255">3</text><text x="180" y="400">-4</text><text x="180" y="360">-3</text><text x="180" y="280">-1</text><text x="180" y="200">1</text><text x="180" y="120">3</text><text x="180" y="40">5</text><polyline points="0,40 50,240 100,340 150,440 200,340 250,240 300,40" fill="none" stroke="#dc2626" stroke-width="2.5"/><line x1="0" y1="200" x2="350" y2="350" stroke="#2563eb" stroke-width="2.5"/><circle cx="0" cy="40" r="3.5" fill="#dc2626"/><circle cx="50" cy="240" r="3.5" fill="#dc2626"/><circle cx="100" cy="340" r="3.5" fill="#dc2626"/><circle cx="150" cy="440" r="3.5" fill="#dc2626"/><circle cx="200" cy="340" r="3.5" fill="#dc2626"/><circle cx="250" cy="240" r="3.5" fill="#dc2626"/><circle cx="300" cy="40" r="3.5" fill="#dc2626"/><circle cx="0" cy="200" r="3.5" fill="#2563eb"/><circle cx="100" cy="300" r="3.5" fill="#2563eb"/><circle cx="200" cy="400" r="3.5" fill="#2563eb"/><circle cx="300" cy="500" r="3.5" fill="#2563eb"/><circle cx="350" cy="550" r="3.5" fill="#2563eb"/></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q7',
      title: 'Question 7: Distance–Time Graph (6 marks)',
      questions: [
        {
          id: 'p3-q7',
          number: 7,
          question:
            'A distance–time graph records an object for 60 seconds, starting at 15 m.\n\n(a) Calculate the speed between the 15th and 30th seconds. [2]\n(b) Explain what was happening between the 30th and 55th seconds. [1]\n(c) Calculate the average speed for the movement recorded. [3]',
          marks: 6,
          diagram: `<svg viewBox="-60 -20 480 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px">
            <line x1="0" y1="20" x2="280" y2="20" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
            <line x1="0" y1="120" x2="140" y2="120" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
            <line x1="140" y1="120" x2="140" y2="220" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
            <line x1="280" y1="20" x2="280" y2="220" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
            <line x1="380" y1="20" x2="380" y2="220" stroke="#111827" stroke-width="1" stroke-dasharray="4"/>
            <line x1="0" y1="220" x2="410" y2="220" stroke="#111827" stroke-width="2"/>
            <line x1="0" y1="0" x2="0" y2="220" stroke="#111827" stroke-width="2"/>
            <text x="-55" y="110" font-size="12">distance</text><text x="-45" y="125" font-size="12">(m)</text>
            <text x="-20" y="225">0</text><text x="-25" y="170">15</text><text x="-25" y="125">25</text><text x="-25" y="25">50</text>
            <text x="135" y="240">15</text><text x="275" y="240">30</text><text x="375" y="240">55</text><text x="400" y="240">60</text><text x="180" y="260" font-size="12">time (s)</text>
            <path d="M 0,165 L 140,120 L 280,20 L 380,20 L 410,220" fill="none" stroke="#dc2626" stroke-width="2.5"/>
            <text x="380" y="70" font-size="12" font-weight="bold">NOT TO SCALE</text>
          </svg>`,
          solution: '(a) 1.67 m/s\n(b) Stationary (object at rest)\n(c) 1.42 m/s',
          solutionSteps: [
            'From the graph: at 15 s distance = 25 m, at 30 s distance = 50 m',
            '(a) Speed between 15 s and 30 s = (50 − 25)/(30 − 15) = 25/15 ≈ 1.67 m/s',
            '(b) Between 30 s and 55 s the distance stays at 50 m (horizontal line), so the object is stationary',
            '(c) Total distance travelled = (25−15) + (50−25) + (50−50) + (50−0) = 10 + 25 + 0 + 50 = 85 m',
            'Average speed = total distance ÷ total time = 85/60 ≈ 1.42 m/s (3 s.f.)',
          ],
        },
      ],
    },
    {
      id: 'p3-q8',
      title: 'Question 8: Angles and Trigonometry (9 marks)',
      questions: [
        {
          id: 'p3-q8',
          number: 8,
          question:
            '(a) Three straight lines cross. Given angles 109°, 92° and y°, calculate y. [2]\n\n(b) Triangles ABE and BCD: DC = 12 m, BE = 8 m, ED = 2 m, angle BAE = 32°. Calculate (i) angle BDC, [2] (ii) length BC, [2] (iii) area of triangle ABE. [3]',
          marks: 9,
          diagram: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px">
            <line x1="20" y1="180" x2="380" y2="40" stroke="#111827" stroke-width="1.5"/>
            <line x1="60" y1="20" x2="340" y2="180" stroke="#111827" stroke-width="1.5"/>
            <line x1="100" y1="190" x2="280" y2="10" stroke="#111827" stroke-width="1.5"/>
            <text x="120" y="90" font-size="14">109°</text>
            <text x="180" y="170" font-size="14">92°</text>
            <text x="265" y="115" font-size="14">y°</text>
            <text x="310" y="80" font-size="12" font-weight="bold">NOT TO SCALE</text>
          </svg><svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;margin-top:8px">
            <polygon points="30,180 250,180 250,60" fill="none" stroke="#111827" stroke-width="1.5"/>
            <rect x="235" y="165" width="15" height="15" fill="none" stroke="#111827" stroke-width="1"/>
            <line x1="250" y1="60" x2="250" y2="20" stroke="#111827" stroke-width="1.5"/>
            <polygon points="250,180 470,180 250,20" fill="none" stroke="#111827" stroke-width="1.5"/>
            <path d="M 70,180 A 40,40 0 0,0 65,162" fill="none" stroke="#111827" stroke-width="1.2"/>
            <text x="80" y="172" font-size="12">32°</text>
            <text x="15" y="190" font-weight="bold">A</text><text x="250" y="195" font-weight="bold">B</text><text x="480" y="190" font-weight="bold">C</text><text x="255" y="65" font-weight="bold">E</text><text x="250" y="15" font-weight="bold">D</text>
            <text x="225" y="45" font-size="12">2 m</text><text x="225" y="120" font-size="12">8 m</text><text x="370" y="90" font-size="12">12 m</text>
            <text x="400" y="40" font-size="12" font-weight="bold">NOT TO SCALE</text>
          </svg>`,
          solution:
            '(a) 159°\n(b)(i) 33.6°   (ii) 6.63 m   (iii) 51.2 m²',
          solutionSteps: [
            '(a) The three marked angles at the intersections of the three lines are exterior angles of the triangle they enclose',
            'Sum of the three exterior angles = 360°, so 109 + 92 + y = 360',
            'y = 360 − 109 − 92 = 159°',
            '(b) BD = BE + ED = 8 + 2 = 10 m. Triangle BCD is right-angled at B',
            '(b)(i) In triangle BCD: cos(BDC) = BD/DC = 10/12 = 0.8333 → BDC ≈ 33.6°',
            '(b)(ii) BC = √(DC² − BD²) = √(12² − 10²) = √44 ≈ 6.63 m',
            '(b)(iii) In right triangle ABE, tan(32°) = BE/AB → AB = 8/tan(32°) ≈ 8/0.6249 ≈ 12.80 m',
            'Area of ABE = ½ × AB × BE = ½ × 12.80 × 8 ≈ 51.2 m²',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Triangle BCD (right-angled at B) and angle y:</div><svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px"><polygon points="20,170 220,170 220,30" fill="#fef3c7" stroke="#111827" stroke-width="1.5"/><rect x="205" y="155" width="15" height="15" fill="#fff" stroke="#111827" stroke-width="1"/><text x="5" y="185" font-weight="bold">B</text><text x="225" y="25" font-weight="bold">D</text><text x="225" y="185" font-weight="bold">C</text><text x="120" y="100" font-size="12">10 m</text><text x="310" y="90" font-size="12">12 m</text><text x="70" y="60" font-size="13" fill="#dc2626">BDC ≈ 33.6°</text><text x="150" y="40" font-size="12">√44 ≈ 6.63 m</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q9',
      title: 'Question 9: Venn Diagrams, Temperature Bounds and Warming (9 marks)',
      questions: [
        {
          id: 'p3-q9',
          number: 9,
          question:
            '(a) 64 people: 40 fizzy drink, 36 fruit juice, 5 neither. Find how many preferred both. [3]\n(b) Temperatures: (i) lowest minimum temperature [1]; (ii) Oxbow difference [1]; (iii) least possible temperature in Semonkong. [1]\n(c) Item warms constantly from −5.5°C to 27.3°C in 8.2 minutes. Time to reach 22°C, in minutes and seconds. [3]',
          marks: 9,
          solution:
            '(a) 17\n(b)(i) Oxbow   (ii) 13°C   (iii) −4.5°C\n(c) 6 min 53 s',
          solutionSteps: [
            '(a) People who like at least one = 64 − 5 = 59',
            'Fizzy + juice = 40 + 36 = 76',
            'Both = 76 − 59 = 17',
            '(b)(i) Lowest minimum temperature = −6°C at Oxbow',
            '(b)(ii) Oxbow difference = 7 − (−6) = 13°C',
            '(b)(iii) Semonkong min = −4°C to nearest degree → actual range [−4.5, −3.5), so least possible = −4.5°C',
            '(c) Total rise = 27.3 − (−5.5) = 32.8°C in 8.2 min → rate = 32.8/8.2 = 4°C/min',
            'Rise to 22°C = 22 − (−5.5) = 27.5°C → time = 27.5/4 = 6.875 min',
            '0.875 min = 52.5 s, so ≈ 6 min 53 s',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Venn diagram (both = 17):</div><svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px"><rect x="10" y="10" width="380" height="180" fill="none" stroke="#111827" stroke-width="1.5"/><text x="25" y="35" font-family="serif" font-size="18" font-style="italic">Ɛ</text><circle cx="160" cy="110" r="60" fill="#fef3c7" stroke="#111827" stroke-width="1.5" opacity="0.6"/><circle cx="240" cy="110" r="60" fill="#dbeafe" stroke="#111827" stroke-width="1.5" opacity="0.6"/><text x="150" y="40" font-size="14" font-style="italic">Fizzy</text><text x="240" y="40" font-size="14" font-style="italic">Juice</text><text x="190" y="118" font-size="18" font-weight="bold" fill="#dc2626">17</text><text x="120" y="118" font-size="16">23</text><text x="268" y="118" font-size="16">19</text><text x="335" y="160" font-size="16">5</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q10',
      title: 'Question 10: Profit and Investment (9 marks)',
      questions: [
        {
          id: 'p3-q10',
          number: 10,
          question:
            '(a) Cost M25 400, profit M8 400. Percentage profit. [2]\n(b) Cost M14 750, 18% profit. Selling price. [2]\n(c) M22 800 for 16 months at 7.5% simple interest p.a. Interest gained. [2]\n(d) 6% compound interest p.a., total M75 000 after 2 years. Amount invested. [3]',
          marks: 9,
          solution: '(a) 33.1%\n(b) M17 405\n(c) M2 280\n(d) M66 755',
          solutionSteps: [
            '(a) % profit = (8400/25400) × 100 ≈ 33.07% → 33.1%',
            '(b) Selling price = 14750 × 1.18 = M17 405',
            '(c) Time = 16/12 years; I = 22800 × 0.075 × (16/12) = 22800 × 0.1 = M2 280',
            '(d) Amount = P(1.06)² = 75000 → P = 75000 ÷ 1.1236 ≈ M66 755',
          ],
        },
      ],
    },
    {
      id: 'p3-q11',
      title: 'Question 11: Time and Matrices (9 marks)',
      questions: [
        {
          id: 'p3-q11',
          number: 11,
          question:
            '(a) Two cars leave at 9.51 p.m.\n(i) One takes 4.95 hours. Arrival time. [3]\n(ii) The other arrives at 5.37 a.m. Time taken, in hours and minutes. [3]\n\n(b) P = (2, −6, 0.5)ᵀ, Q = [[2,1],[−3,0]], R = [[−3,−5],[2,3]].\n(i) −½P. [1]\n(ii) 2Q − R. [2]',
          marks: 9,
          solution:
            '(a)(i) 2.48 a.m.   (ii) 7 h 46 min\n(b)(i) (−1, 3, −0.25)ᵀ   (ii) [[7,7],[−8,−3]]',
          solutionSteps: [
            '(a)(i) 4.95 h = 4 h 57 min; 9:51 p.m. + 4 h 57 min = 2:48 a.m.',
            '(a)(ii) 9:51 p.m. → 12:00 a.m. = 2 h 9 min; + 5 h 37 min = 7 h 46 min',
            '(b)(i) −½P = (−1, 3, −0.25)ᵀ',
            '(b)(ii) 2Q = [[4,2],[−6,0]]',
            '2Q − R = [[4,2],[−6,0]] − [[−3,−5],[2,3]] = [[7,7],[−8,−3]]',
          ],
        },
      ],
    },
    {
      id: 'p3-q12',
      title: 'Question 12: Quadratic Equation (7 marks)',
      questions: [
        {
          id: 'p3-q12',
          number: 12,
          question:
            'A = x² + 10, B = 2x + 6, C = 3x + 4, x positive.\n\n(a) Sum of A, B and C is 44. Form an equation and show it reduces to x² + 5x − 24 = 0. [2]\n(b) Solve x² + 5x − 24 = 0. [3]\n(c) Hence find A + B. [2]',
          marks: 7,
          solution: '(a) shown below\n(b) x = 3 (x = −8 rejected)\n(c) 31',
          solutionSteps: [
            '(a) (x² + 10) + (2x + 6) + (3x + 4) = 44',
            'x² + 5x + 20 = 44 → x² + 5x − 24 = 0  ✓',
            '(b) (x + 8)(x − 3) = 0 → x = −8 or x = 3',
            'x is positive, so x = 3',
            '(c) A + B = (x² + 10) + (2x + 6) = x² + 2x + 16',
            'At x = 3: 9 + 6 + 16 = 31',
          ],
        },
      ],
    },
    {
      id: 'p3-q13',
      title: 'Question 13: Algebra (8 marks)',
      questions: [
        {
          id: 'p3-q13',
          number: 13,
          question:
            '(a) Expand and simplify (x − 5)² − 10(2 − x). [3]\n(b) n = k + 0.75√m. Find n when k = 0.33 and m = 1.11. [2]\n(c) n = k + 3p/4. Make p the subject. [3]',
          marks: 8,
          solution: '(a) x² + 5\n(b) 1.12\n(c) p = 4(n − k)/3',
          solutionSteps: [
            '(a) (x − 5)² − 10(2 − x) = x² − 10x + 25 − 20 + 10x = x² + 5',
            '(b) √1.11 ≈ 1.0536; 0.75 × 1.0536 ≈ 0.7902',
            'n = 0.33 + 0.7902 ≈ 1.1202 → 1.12 (3 s.f.)',
            '(c) n = k + 3p/4',
            '3p/4 = n − k → p = 4(n − k)/3',
          ],
        },
      ],
    },
  ],
};
