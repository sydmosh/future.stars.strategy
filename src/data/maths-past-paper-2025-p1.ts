import type { Booklet } from './booklets';

export const mathsPastPaper2025P1: Booklet = {
  id: 'lgcse-0178-01-25',
  title: 'LGCSE Mathematics Paper 1 (Core) May/June 2025',
  subtitle: 'Official Examinations Council of Lesotho (ECoL) Past Question Paper',
  description:
    'Complete 2025 LGCSE Mathematics Paper 1 (Core) examination (60 Marks). Covers fractions, percentages, prime factors, formulae, loci, inequalities, factorisation, polygons, circle geometry, standard form, speed, equations, bearings, statistics, coordinates, angles in polygons and circle theorems.',
  totalMarks: 60,
  sections: [
    {
      id: 'p1-25-q1',
      title: 'Question 1: Fractions and Decimals (3 marks)',
      questions: [
        {
          id: 'p1-25-q1',
          number: 1,
          question: '(a) Work out: 2/5 − 1/6 [1]\n(b) Work out: 1.25 ÷ 0.5 [2]',
          marks: 3,
          solution: '(a) 7/30\n(b) 2.5',
          solutionSteps: [
            '(a) 2/5 − 1/6: common denominator 30 → 12/30 − 5/30 = 7/30',
            '(b) 1.25 ÷ 0.5 = (1.25 × 10) ÷ (0.5 × 10) = 12.5 ÷ 5 = 2.5',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q2',
      title: 'Question 2: Percentage Calculation (2 marks)',
      questions: [
        {
          id: 'p1-25-q2',
          number: 2,
          question: 'Evaluate: (1/10) × 6 ÷ 30% [2]',
          marks: 2,
          solution: '2',
          solutionSteps: [
            '30% = 30/100 = 3/10',
            '(1/10) × 6 = 6/10 = 3/5',
            '(3/5) ÷ (3/10) = (3/5) × (10/3) = 30/15 = 2',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q3',
      title: 'Question 3: Prime Factors (2 marks)',
      questions: [
        {
          id: 'p1-25-q3',
          number: 3,
          question: 'Express 605 as a product of its prime factors. [2]',
          marks: 2,
          solution: '605 = 5 × 11²',
          solutionSteps: [
            '605 ends in 5, so divisible by 5: 605 = 5 × 121',
            '121 = 11 × 11',
            'So 605 = 5 × 11 × 11 = 5 × 11²',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q4',
      title: 'Question 4: Percentage as a Fraction (2 marks)',
      questions: [
        {
          id: 'p1-25-q4',
          number: 4,
          question: 'Write 33⅓% as a fraction in its simplest form. [2]',
          marks: 2,
          solution: '1/3',
          solutionSteps: [
            '33⅓% = 33⅓ / 100',
            '33⅓ = 100/3, so (100/3) / 100 = 100/300 = 1/3',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q5',
      title: 'Question 5: Formulae (4 marks)',
      questions: [
        {
          id: 'p1-25-q5',
          number: 5,
          question: 'v² = u² + 2ax\n(a) Find v when u = 8, a = 4 and x = 10. [2]\n(b) Make a the subject of the formula. [2]',
          marks: 4,
          solution: '(a) v = 12\n(b) a = (v² − u²) / 2x',
          solutionSteps: [
            '(a) v² = 8² + 2(4)(10) = 64 + 80 = 144',
            'v = √144 = 12',
            '(b) v² = u² + 2ax → v² − u² = 2ax',
            'a = (v² − u²) / 2x',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q6',
      title: 'Question 6: Locus (2 marks)',
      questions: [
        {
          id: 'p1-25-q6',
          number: 6,
          question: 'The diagram shows the triangle PQR and the line l. Describe the locus represented by line l. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px"><polygon points="160,20 60,180 340,180" fill="none" stroke="#000" stroke-width="1.5"/><line x1="60" y1="180" x2="310" y2="30" stroke="#000" stroke-width="1.5"/><path d="M 80,180 A 25,25 0 0,0 72,156" fill="none" stroke="#000" stroke-width="1.2"/><line x1="83" y1="162" x2="88" y2="167" stroke="#000" stroke-width="1.2"/><text x="155" y="15" font-weight="bold" font-style="italic">P</text><text x="40" y="190" font-weight="bold" font-style="italic">Q</text><text x="350" y="190" font-weight="bold" font-style="italic">R</text><text x="245" y="45" font-weight="bold" font-style="italic">l</text></svg>`,
          solution: 'Line l is the angle bisector of angle PQR; the locus of points equidistant from the sides QP and QR.',
          solutionSteps: [
            'The line l passes through vertex Q and the arc shows it makes equal angles with QP and QR',
            'So l is the angle bisector of angle PQR',
            'It is the locus of points equidistant from the two sides of the angle',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Line l is the angle bisector of ∠PQR:</div><svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px"><polygon points="160,20 60,180 340,180" fill="none" stroke="#111827" stroke-width="1.5"/><line x1="60" y1="180" x2="310" y2="30" stroke="#dc2626" stroke-width="2.5"/><path d="M 80,180 A 25,25 0 0,0 72,156" fill="none" stroke="#111827" stroke-width="1.2"/><line x1="83" y1="162" x2="88" y2="167" stroke="#111827" stroke-width="1.2"/><text x="155" y="15" font-weight="bold" font-style="italic">P</text><text x="40" y="190" font-weight="bold" font-style="italic">Q</text><text x="350" y="190" font-weight="bold" font-style="italic">R</text><text x="245" y="45" font-weight="bold" font-style="italic">l</text><text x="120" y="120" font-size="12" fill="#dc2626">angle bisector</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q7',
      title: 'Question 7: Inequality (2 marks)',
      questions: [
        {
          id: 'p1-25-q7',
          number: 7,
          question: 'Solve the inequality: 3 − 2x < 9 [2]',
          marks: 2,
          solution: 'x > −3',
          solutionSteps: [
            '3 − 2x < 9',
            '−2x < 6',
            'Divide by −2 (reverse the inequality sign): x > −3',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q8',
      title: 'Question 8: Factorisation (2 marks)',
      questions: [
        {
          id: 'p1-25-q8',
          number: 8,
          question: 'Factorise completely: 3x² − 12 [2]',
          marks: 2,
          solution: '3(x − 2)(x + 2)',
          solutionSteps: [
            'Take out the common factor 3: 3(x² − 4)',
            'x² − 4 is a difference of two squares = (x − 2)(x + 2)',
            'So 3x² − 12 = 3(x − 2)(x + 2)',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q9',
      title: 'Question 9: Interior Angle of Polygon (2 marks)',
      questions: [
        {
          id: 'p1-25-q9',
          number: 9,
          question: 'The diagram shows a regular pentagon. Calculate the value of x. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 250 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px"><polygon points="125,15 230,90 190,210 60,210 20,90" fill="none" stroke="#000" stroke-width="1.5"/><path d="M 105,29 A 25,25 0 0,0 145,29" fill="none" stroke="#000" stroke-width="1.2"/><text x="120" y="55" font-size="14">x°</text></svg>`,
          solution: 'x = 108°',
          solutionSteps: [
            'Sum of interior angles of a pentagon = (5 − 2) × 180° = 540°',
            'All 5 angles are equal, so each = 540° ÷ 5 = 108°',
            'x = 108°',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q10',
      title: 'Question 10: Area of a Segment (3 marks)',
      questions: [
        {
          id: 'p1-25-q10',
          number: 10,
          question: 'The diagram shows a circle of radius 6 cm, centre O. The line AB is a tangent at C. Angle BOC = 60° and AC = CB. Find the area of the shaded region in the form a + bπ, where a and b are integers. [3]',
          marks: 3,
          diagram: `<svg viewBox="0 0 450 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><circle cx="225" cy="110" r="80" fill="none" stroke="#000" stroke-width="1.5"/><circle cx="225" cy="110" r="2" fill="#000"/><text x="220" y="100" font-weight="bold">O</text><line x1="25" y1="190" x2="425" y2="190" stroke="#000" stroke-width="1.5"/><path d="M 35,190 L 225,190 A 80,80 0 0,1 156,150 Z" fill="#bbb" opacity="0.4"/><path d="M 415,190 L 225,190 A 80,80 0 0,0 294,150 Z" fill="#bbb" opacity="0.4"/><line x1="225" y1="110" x2="225" y2="190" stroke="#000" stroke-width="1.5"/><path d="M 225,135 A 25,25 0 0,1 247,122" fill="none" stroke="#000" stroke-width="1.2"/><text x="232" y="132" font-size="12">60°</text><line x1="120" y1="186" x2="120" y2="194" stroke="#000" stroke-width="1.5"/><line x1="123" y1="186" x2="123" y2="194" stroke="#000" stroke-width="1.5"/><line x1="320" y1="186" x2="320" y2="194" stroke="#000" stroke-width="1.5"/><line x1="323" y1="186" x2="323" y2="194" stroke="#000" stroke-width="1.5"/><text x="15" y="195" font-weight="bold">A</text><text x="220" y="210" font-weight="bold">C</text><text x="430" y="195" font-weight="bold">B</text><text x="200" y="155" font-size="12">6 cm</text><text x="380" y="80" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '36√3 − 12π',
          solutionSteps: [
            'OC ⊥ AB (radius to tangent). Since AC = CB, C is the midpoint of AB and OC bisects angle AOB',
            '∠BOC = 60°, so in right triangle OCB: CB = 6 tan 60° = 6√3 cm',
            'AB = 2 × 6√3 = 12√3 cm',
            'Area of triangle AOB = ½ × 12√3 × 6 = 36√3 cm²',
            'Sector AOB has angle 2 × 60° = 120° = 1/3 of the circle, so its area = (1/3) × π × 6² = 12π cm²',
            'Shaded area (triangle AOB − sector AOB) = 36√3 − 12π cm²',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Shaded region = triangle AOB − sector AOB:</div><svg viewBox="0 0 450 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><circle cx="225" cy="110" r="80" fill="none" stroke="#111827" stroke-width="1.5"/><text x="220" y="100" font-weight="bold">O</text><line x1="25" y1="190" x2="425" y2="190" stroke="#111827" stroke-width="1.5"/><path d="M 35,190 L 225,190 A 80,80 0 0,1 156,150 Z" fill="#9ca3af" opacity="0.4"/><path d="M 415,190 L 225,190 A 80,80 0 0,0 294,150 Z" fill="#9ca3af" opacity="0.4"/><line x1="225" y1="110" x2="225" y2="190" stroke="#111827" stroke-width="1.5"/><line x1="120" y1="186" x2="120" y2="194" stroke="#111827" stroke-width="1.5"/><line x1="123" y1="186" x2="123" y2="194" stroke="#111827" stroke-width="1.5"/><line x1="320" y1="186" x2="320" y2="194" stroke="#111827" stroke-width="1.5"/><line x1="323" y1="186" x2="323" y2="194" stroke="#111827" stroke-width="1.5"/><text x="15" y="195" font-weight="bold">A</text><text x="220" y="210" font-weight="bold">C</text><text x="430" y="195" font-weight="bold">B</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q11',
      title: 'Question 11: Standard Form and Powers (4 marks)',
      questions: [
        {
          id: 'p1-25-q11',
          number: 11,
          question: '(a) Work out and leave your answer in standard form: 3.2 × 10⁸ − 1.5 × 10⁷ [2]\n(b) Work out: (1⁷/₉)^(1/2) [2]',
          marks: 4,
          solution: '(a) 3.05 × 10⁸\n(b) 4/3',
          solutionSteps: [
            '(a) 1.5 × 10⁷ = 0.15 × 10⁸',
            '3.2 × 10⁸ − 0.15 × 10⁸ = 3.05 × 10⁸',
            '(b) 1⁷/₉ = 16/9',
            '(16/9)^(1/2) = √(16/9) = 4/3',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q12',
      title: 'Question 12: Speed (3 marks)',
      questions: [
        {
          id: 'p1-25-q12',
          number: 12,
          question: 'A car travels 75 km in 1 hour 15 minutes. Calculate the speed of the car in km/h. [3]',
          marks: 3,
          solution: '60 km/h',
          solutionSteps: [
            '1 hour 15 minutes = 1.25 hours',
            'Speed = distance ÷ time = 75 ÷ 1.25',
            '75 ÷ 1.25 = 7500 ÷ 125 = 60 km/h',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q13',
      title: 'Question 13: Linear Equation (2 marks)',
      questions: [
        {
          id: 'p1-25-q13',
          number: 13,
          question: 'Solve the equation: 3x − 1 = 11 [2]',
          marks: 2,
          solution: 'x = 4',
          solutionSteps: [
            '3x − 1 = 11',
            '3x = 12',
            'x = 4',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q14',
      title: 'Question 14: Simultaneous Equations (3 marks)',
      questions: [
        {
          id: 'p1-25-q14',
          number: 14,
          question: 'Solve the simultaneous equations:\n2x = ⅓y\ny = 9x − 3 [3]',
          marks: 3,
          solution: 'x = 1, y = 6',
          solutionSteps: [
            'From 2x = ⅓y → multiply by 3: 6x = y, so y = 6x',
            'Substitute into y = 9x − 3: 6x = 9x − 3',
            '3 = 3x → x = 1',
            'y = 6(1) = 6',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q15',
      title: 'Question 15: Trigonometry and Bearings (4 marks)',
      questions: [
        {
          id: 'p1-25-q15',
          number: 15,
          question: 'The diagram shows a right-angled triangular land ABC. Angle ACB = 28°. AC = 15 km and AB = 8 km.\n(a) Calculate the length of BC. [2]\n(b) Calculate the bearing of C from B. [2]',
          marks: 4,
          diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px"><line x1="50" y1="160" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><polygon points="50,10 45,25 55,25" fill="#000"/><text x="30" y="10" font-size="12">North line</text><polygon points="50,160 50,60 350,160" fill="none" stroke="#000" stroke-width="1.5"/><rect x="50" y="145" width="15" height="15" fill="none" stroke="#000" stroke-width="1"/><path d="M 310,160 A 40,40 0 0,0 323,150" fill="none" stroke="#000" stroke-width="1.2"/><text x="290" y="152" font-size="12">28°</text><text x="35" y="175" font-weight="bold">A</text><text x="35" y="65" font-weight="bold">B</text><text x="360" y="165" font-weight="bold">C</text><text x="15" y="115" font-size="12">8 km</text><text x="190" y="180" font-size="12">15 km</text><text x="320" y="70" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '(a) 17 km\n(b) 118°',
          solutionSteps: [
            'Right angle at A, so use Pythagoras: BC² = AC² + AB² = 15² + 8² = 225 + 64 = 289',
            'BC = √289 = 17 km',
            '(b) BA is due south of B, so the south direction at B is 180°',
            'Angle ABC = 90° − 28° = 62° (between BA and BC)',
            'Bearing of C from B = 180° − 62° = 118°',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Triangle with BC = 17 km and bearing of C from B = 118°:</div><svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px"><line x1="50" y1="160" x2="50" y2="20" stroke="#111827" stroke-width="1.5"/><polygon points="50,10 45,25 55,25" fill="#111827"/><text x="30" y="10" font-size="12">North line</text><polygon points="50,160 50,60 350,160" fill="none" stroke="#111827" stroke-width="1.5"/><rect x="50" y="145" width="15" height="15" fill="none" stroke="#111827" stroke-width="1"/><path d="M 310,160 A 40,40 0 0,0 323,150" fill="none" stroke="#111827" stroke-width="1.2"/><text x="290" y="152" font-size="12">28°</text><text x="35" y="175" font-weight="bold">A</text><text x="35" y="65" font-weight="bold">B</text><text x="360" y="165" font-weight="bold">C</text><text x="15" y="115" font-size="12">8 km</text><text x="190" y="180" font-size="12">15 km</text><line x1="50" y1="60" x2="40" y2="55" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><text x="14" y="52" font-size="11" fill="#dc2626">bearing 118°</text><text x="320" y="70" font-size="12" font-weight="bold">NOT TO SCALE</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q16',
      title: 'Question 16: Pie Chart Angles (3 marks)',
      questions: [
        {
          id: 'p1-25-q16',
          number: 16,
          question: 'The table shows the number of animals owned by Mr Sandile and their pie chart sector angles. Complete the table. [3]',
          marks: 3,
          solution: 'horses 40°, donkeys 20°',
          solutionSteps: [
            'Total frequency = 12 + 18 + 4 + 2 = 36 animals',
            'Angle per animal = 360° ÷ 36 = 10° per animal',
            'horses (4): 4 × 10° = 40°',
            'donkeys (2): 2 × 10° = 20°',
            'Check: 120 + 180 + 40 + 20 = 360° ✓',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Completed pie chart (sector angles):</div><svg viewBox="-130 -130 260 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px"><circle cx="0" cy="0" r="100" fill="none" stroke="#111827" stroke-width="1.5"/><path d="M 0,0 L 0,-100 A 100 100 0 0 1 86.6,-50 Z" fill="#dbeafe" stroke="#111827" stroke-width="1"/><path d="M 0,0 L 86.6,-50 A 100 100 0 0 1 -86.6,-50 Z" fill="#fef3c7" stroke="#111827" stroke-width="1"/><path d="M 0,0 L -86.6,-50 A 100 100 0 0 1 -64.3,76.6 Z" fill="#bbf7d0" stroke="#111827" stroke-width="1"/><path d="M 0,0 L -64.3,76.6 A 100 100 0 0 1 0,-100 Z" fill="#fecaca" stroke="#111827" stroke-width="1"/><text x="-60" y="-65" font-size="12" font-weight="bold">cows 120°</text><text x="40" y="-60" font-size="12" font-weight="bold">sheep 180°</text><text x="30" y="60" font-size="12" font-weight="bold">horses 40°</text><text x="-95" y="55" font-size="12" font-weight="bold">donkeys 20°</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q17',
      title: 'Question 17: Coordinates and Distance (4 marks)',
      questions: [
        {
          id: 'p1-25-q17',
          number: 17,
          question: 'A straight line passes through A(1, 3), B(2, 4) and C(a, 8).\n(a) Find the length of AB in the form √l. [2]\n(b) Find the x-coordinate of C. [2]',
          marks: 4,
          diagram: `<svg viewBox="-40 -20 480 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px"><line x1="0" y1="180" x2="420" y2="180" stroke="#000" stroke-width="1.5"/><line x1="100" y1="0" x2="100" y2="220" stroke="#000" stroke-width="1.5"/><text x="90" y="195">0</text><text x="425" y="185" font-style="italic">x</text><text x="95" y="-5" font-style="italic">y</text><line x1="20" y1="210" x2="380" y2="30" stroke="#000" stroke-width="1.5"/><circle cx="150" cy="145" r="3" fill="#000"/><text x="160" y="155" font-size="14">A (1, 3)</text><circle cx="210" cy="115" r="3" fill="#000"/><text x="220" y="125" font-size="14">B (2, 4)</text><circle cx="290" cy="75" r="3" fill="#000"/><text x="300" y="85" font-size="14">C (a, 8)</text><text x="380" y="110" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '(a) √2 units\n(b) a = 6',
          solutionSteps: [
            '(a) AB = √[(2−1)² + (4−3)²] = √(1 + 1) = √2 units',
            '(b) Gradient of line = (4 − 3)/(2 − 1) = 1',
            'Equation: y − 3 = 1(x − 1) → y = x + 2',
            'At C, y = 8 → 8 = a + 2 → a = 6',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Line y = x + 2 with C at (6, 8):</div><svg viewBox="-40 -20 480 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px"><line x1="0" y1="180" x2="420" y2="180" stroke="#111827" stroke-width="1.5"/><line x1="100" y1="0" x2="100" y2="220" stroke="#111827" stroke-width="1.5"/><text x="90" y="195">0</text><text x="425" y="185" font-style="italic">x</text><text x="95" y="-5" font-style="italic">y</text><line x1="20" y1="210" x2="380" y2="30" stroke="#111827" stroke-width="1.5"/><circle cx="150" cy="145" r="3" fill="#111827"/><text x="160" y="155" font-size="14">A (1, 3)</text><circle cx="210" cy="115" r="3" fill="#111827"/><text x="220" y="125" font-size="14">B (2, 4)</text><circle cx="390" cy="75" r="4" fill="#dc2626"/><text x="340" y="65" font-size="14" font-weight="bold" fill="#dc2626">C (6, 8)</text><text x="380" y="110" font-size="12" font-weight="bold">NOT TO SCALE</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q18',
      title: 'Question 18: Angles in a Hexagon (2 marks)',
      questions: [
        {
          id: 'p1-25-q18',
          number: 18,
          question: 'The diagram shows a hexagon with two right angles and the other four equal angles. Calculate the size of one of the four equal angles. [2]',
          marks: 2,
          diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px"><polygon points="20,220 380,220 380,120 300,20 100,20 20,120" fill="none" stroke="#000" stroke-width="1.5"/><rect x="20" y="200" width="20" height="20" fill="none" stroke="#000" stroke-width="1"/><rect x="360" y="200" width="20" height="20" fill="none" stroke="#000" stroke-width="1"/><path d="M 20,140 A 20,20 0 0,0 35,130" fill="none" stroke="#000" stroke-width="1.2"/><line x1="25" y1="133" x2="31" y2="137" stroke="#000" stroke-width="1.2"/><path d="M 115,20 A 20,20 0 0,0 107,35" fill="none" stroke="#000" stroke-width="1.2"/><line x1="110" y1="28" x2="114" y2="34" stroke="#000" stroke-width="1.2"/><path d="M 285,20 A 20,20 0 0,1 293,35" fill="none" stroke="#000" stroke-width="1.2"/><line x1="286" y1="34" x2="290" y2="28" stroke="#000" stroke-width="1.2"/><path d="M 380,140 A 20,20 0 0,1 365,130" fill="none" stroke="#000" stroke-width="1.2"/><line x1="369" y1="137" x2="375" y2="133" stroke="#000" stroke-width="1.2"/></svg>`,
          solution: '135°',
          solutionSteps: [
            'Sum of interior angles of a hexagon = (6 − 2) × 180° = 720°',
            'Two right angles = 2 × 90° = 180°',
            'Remaining 4 equal angles total 720° − 180° = 540°',
            'Each = 540° ÷ 4 = 135°',
          ],
        },
      ],
    },
    {
      id: 'p1-25-q19',
      title: 'Question 19: Circle Theorems (2 marks)',
      questions: [
        {
          id: 'p1-25-q19',
          number: 19,
          question: 'The diagram shows a circle with centre O. Angle OAC = 50° and AB is a tangent at A. OB is a straight line. Find (a) the size of a° [1] (b) the size of b°. [1]',
          marks: 2,
          diagram: `<svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><circle cx="120" cy="100" r="80" fill="none" stroke="#000" stroke-width="1.5"/><circle cx="120" cy="100" r="2" fill="#000"/><text x="115" y="90" font-weight="bold">O</text><line x1="120" y1="180" x2="420" y2="180" stroke="#000" stroke-width="1.5"/><text x="110" y="195" font-weight="bold">A</text><text x="425" y="190" font-weight="bold">B</text><line x1="120" y1="100" x2="420" y2="180" stroke="#000" stroke-width="1.5"/><circle cx="192" cy="119" r="2" fill="#000"/><text x="195" y="115" font-weight="bold">C</text><line x1="120" y1="180" x2="192" y2="119" stroke="#000" stroke-width="1.5"/><line x1="120" y1="100" x2="120" y2="180" stroke="#000" stroke-width="1.5"/><path d="M 120,120 A 20,20 0 0,1 138,105" fill="none" stroke="#000" stroke-width="1.2"/><text x="128" y="125" font-size="12">b°</text><path d="M 120,150 A 30,30 0 0,1 142,156" fill="none" stroke="#000" stroke-width="1.2"/><text x="128" y="148" font-size="12">50°</text><path d="M 150,180 A 30,30 0 0,0 142,162" fill="none" stroke="#000" stroke-width="1.2"/><text x="150" y="172" font-size="12">a°</text><text x="360" y="110" font-size="12" font-weight="bold">NOT TO SCALE</text></svg>`,
          solution: '(a) a = 40°\n(b) b = 80°',
          solutionSteps: [
            'OA is a radius and AB is a tangent, so angle OAB = 90°',
            'The chord AC makes angle OAC = 50° with OA, so the angle it makes with the tangent AB is 90° − 50° = 40°',
            'a (between AB and AC) = 40°',
            '(b) OA = OC (radii), so triangle OAC is isosceles with base AC',
            'Angle OAC = 50°, therefore angle OCA = 50°',
            'Angle AOC (which is b) = 180° − 50° − 50° = 80°',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Angles found: a = 40°, b = 80°:</div><svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><circle cx="120" cy="100" r="80" fill="none" stroke="#111827" stroke-width="1.5"/><circle cx="120" cy="100" r="2" fill="#111827"/><text x="115" y="90" font-weight="bold">O</text><line x1="120" y1="180" x2="420" y2="180" stroke="#111827" stroke-width="1.5"/><text x="110" y="195" font-weight="bold">A</text><text x="425" y="190" font-weight="bold">B</text><line x1="120" y1="100" x2="420" y2="180" stroke="#111827" stroke-width="1.5"/><circle cx="192" cy="119" r="2" fill="#111827"/><text x="195" y="115" font-weight="bold">C</text><line x1="120" y1="180" x2="192" y2="119" stroke="#111827" stroke-width="1.5"/><line x1="120" y1="100" x2="120" y2="180" stroke="#111827" stroke-width="1.5"/><path d="M 120,120 A 20,20 0 0,1 138,105" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="128" y="125" font-size="12" fill="#dc2626">80°</text><path d="M 120,150 A 30,30 0 0,1 142,156" fill="none" stroke="#111827" stroke-width="1.2"/><text x="128" y="148" font-size="12">50°</text><path d="M 150,180 A 30,30 0 0,0 142,162" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="150" y="172" font-size="12" fill="#dc2626">40°</text><text x="360" y="110" font-size="12" font-weight="bold">NOT TO SCALE</text></svg></div>',
          ],
        },
      ],
    },
  ],
};
