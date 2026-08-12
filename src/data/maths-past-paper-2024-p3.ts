import type { Booklet } from './booklets';

export const mathsPastPaper2024P3: Booklet = {
  id: 'lgcse-0178-03-24',
  title: 'LGCSE Mathematics Paper 3 (Core) October/November 2024',
  subtitle: 'Official Examinations Council of Lesotho (ECoL) Past Question Paper',
  description:
    'Complete 2024 LGCSE Mathematics Paper 3 (Core) examination (100 Marks). Covers Venn diagrams, surds and indices, sequences, scale drawing and bearings, mensuration, quadratic graphs, algebra, ratio and proportion, compound interest, transformations, statistics and probability.',
  totalMarks: 100,
  sections: [
    {
      id: 'p3-q1',
      title: 'Question 1: Venn Diagram (6 marks)',
      questions: [
        {
          id: 'p3-q1',
          number: 1,
          question: 'There are 52 students in a club.\n30 students play chess (C).\n18 students play drama (D).\n22 students play chess but not drama.\n\n(a) Complete the Venn diagram. [3]\n(b) Find the number of students who play drama only. [1]\n(c) A student is chosen at random from the group. Find the probability that the student plays either chess or drama. [2]',
          marks: 6,
          diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px">
            <rect x="10" y="10" width="380" height="180" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="25" y="35" font-family="serif" font-size="20" font-style="italic">Ɛ</text>
            <circle cx="160" cy="110" r="60" fill="none" stroke="#000" stroke-width="1.5"/>
            <circle cx="240" cy="110" r="60" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="150" y="40" font-size="16" font-style="italic">C</text>
            <text x="240" y="40" font-size="16" font-style="italic">D</text>
          </svg>`,
          solution: '(a) Only C = 22, Both = 8, Only D = 10, Neither = 12\n(b) 10\n(c) 10/13',
          solutionSteps: [
            '22 students play chess but not drama → only C = 22',
            'Chess total = 30, so students playing both = 30 − 22 = 8',
            'Drama total = 18, so students playing drama only = 18 − 8 = 10',
            '52 − (22 + 8 + 10) = 12 students play neither',
            '(b) Number playing drama only = 10',
            '(c) P(chess or drama) = (22 + 8 + 10) ÷ 52 = 40/52 = 10/13',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Completed Venn diagram:</div><svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px"><rect x="10" y="10" width="380" height="180" fill="none" stroke="#111827" stroke-width="1.5"/><text x="25" y="35" font-family="serif" font-size="20" font-style="italic">Ɛ</text><circle cx="160" cy="110" r="60" fill="none" stroke="#111827" stroke-width="1.5"/><circle cx="240" cy="110" r="60" fill="none" stroke="#111827" stroke-width="1.5"/><text x="150" y="45" font-size="16" font-style="italic">C</text><text x="240" y="45" font-size="16" font-style="italic">D</text><text x="118" y="120" font-size="20" font-weight="bold">22</text><text x="196" y="120" font-size="20" font-weight="bold">8</text><text x="268" y="120" font-size="20" font-weight="bold">10</text><text x="330" y="160" font-size="20" font-weight="bold">12</text><text x="332" y="40" font-size="14">52</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q2',
      title: 'Question 2: Number and Surds (5 marks)',
      questions: [
        {
          id: 'p3-q2',
          number: 2,
          question: '(a) Evaluate: √(5460/30 − (1.573)²) [2]\n\n(b) Without using a calculator, simplify, clearly showing your working: the 11th root of (5³⁶ + 5³⁴)/130 [3]',
          marks: 5,
          solution: '(a) 13.4 (to 3 significant figures)\n(b) 125',
          solutionSteps: [
            '(a) 5460 ÷ 30 = 182',
            '(1.573)² = 2.474329',
            '√(182 − 2.474329) = √179.525671 ≈ 13.3987',
            '≈ 13.4 (3 s.f.)',
            '(b) 5³⁶ + 5³⁴ = 5³⁴(5² + 1) = 5³⁴ × 26',
            '(5³⁴ × 26) ÷ 130 = 5³⁴ × 26/130 = 5³⁴/5 = 5³³',
            '11th root of 5³³ = 5^(33/11) = 5³ = 125',
          ],
        },
      ],
    },
    {
      id: 'p3-q3',
      title: 'Question 3: Sequences and Patterns (11 marks)',
      questions: [
        {
          id: 'p3-q3',
          number: 3,
          question: 'The diagram shows patterns formed using triangles and squares.\n\n(a) Draw pattern 4. [1]\n(b) Complete the table. [3]\n(c) Find, in its simplest form, (i) the nth term for the total number of triangles and squares, [2] (ii) the (n + 13)th term for the total number of triangles and squares. [2]\n(d) There are 188 triangles in one pattern. Find the total number of triangles and squares in this pattern. [3]',
          marks: 11,
          diagram: `<svg viewBox="0 0 550 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
            <g transform="translate(30, 20)">
              <rect x="20" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,20 35,0 50,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,50 35,70 50,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,20 0,35 20,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="50,20 70,35 50,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <text x="15" y="95" font-size="14">Pattern 1</text>
            </g>
            <g transform="translate(150, 20)">
              <rect x="20" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <rect x="50" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,20 35,0 50,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="50,20 65,0 80,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,50 35,70 50,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="50,50 65,70 80,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <text x="30" y="95" font-size="14">Pattern 2</text>
            </g>
            <g transform="translate(290, 20)">
              <rect x="20" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <rect x="50" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <rect x="80" y="20" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,20 35,0 50,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="50,20 65,0 80,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="80,20 95,0 110,20" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="20,50 35,70 50,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="50,50 65,70 80,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <polygon points="80,50 95,70 110,50" fill="none" stroke="#000" stroke-width="1.5"/>
              <text x="45" y="95" font-size="14">Pattern 3</text>
            </g>
            <text x="450" y="115" font-size="14">Pattern 4</text>
          </svg>`,
          solution:
            '(a) Pattern 4 has 4 squares, 10 triangles.\n(b) Pattern 4: squares 4, triangles 10, total 14. Pattern 20: squares 20, triangles 42, total 62.\n(c) (i) 3n + 2   (ii) 3n + 41\n(d) 281',
          solutionSteps: [
            'Pattern n contains n squares and (2n + 2) triangles, so totals are n + 2n + 2 = 3n + 2',
            '(a) Pattern 4: 4 squares and 2(4) + 2 = 10 triangles',
            '(b) Pattern 4 total = 4 + 10 = 14',
            'Pattern 20: squares 20, triangles 2(20) + 2 = 42, total 20 + 42 = 62',
            '(c)(i) nth term for total = 3n + 2',
            '(c)(ii) (n + 13)th term = 3(n + 13) + 2 = 3n + 39 + 2 = 3n + 41',
            '(d) 2n + 2 = 188 → 2n = 186 → n = 93',
            'Total in pattern 93 = 3(93) + 2 = 279 + 2 = 281',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Pattern 4 (to draw for part (a)):</div><svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:200px"><g transform="translate(20,15)"><rect x="20" y="20" width="30" height="30" fill="none" stroke="#111827" stroke-width="1.5"/><rect x="50" y="20" width="30" height="30" fill="none" stroke="#111827" stroke-width="1.5"/><rect x="80" y="20" width="30" height="30" fill="none" stroke="#111827" stroke-width="1.5"/><rect x="110" y="20" width="30" height="30" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="20,20 35,0 50,20" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="50,20 65,0 80,20" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="80,20 95,0 110,20" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="110,20 125,0 140,20" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="20,50 35,70 50,50" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="50,50 65,70 80,50" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="80,50 95,70 110,50" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="110,50 125,70 140,50" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="20,20 0,35 20,50" fill="none" stroke="#111827" stroke-width="1.5"/><polygon points="140,20 160,35 140,50" fill="none" stroke="#111827" stroke-width="1.5"/><text x="85" y="95" font-size="14">Pattern 4: 4 squares, 10 triangles</text></g></svg><table style="border-collapse:collapse;margin-top:8px;font-size:12px;"><tr><td style="border:1px solid #111827;padding:6px 10px;"><b>Pattern</b></td><td style="border:1px solid #111827;padding:6px 10px;">1</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">3</td><td style="border:1px solid #111827;padding:6px 10px;">4</td><td style="border:1px solid #111827;padding:6px 10px;">…</td><td style="border:1px solid #111827;padding:6px 10px;">20</td></tr><tr><td style="border:1px solid #111827;padding:6px 10px;"><b>Squares</b></td><td style="border:1px solid #111827;padding:6px 10px;">1</td><td style="border:1px solid #111827;padding:6px 10px;">2</td><td style="border:1px solid #111827;padding:6px 10px;">3</td><td style="border:1px solid #111827;padding:6px 10px;">4</td><td style="border:1px solid #111827;padding:6px 10px;">…</td><td style="border:1px solid #111827;padding:6px 10px;">20</td></tr><tr><td style="border:1px solid #111827;padding:6px 10px;"><b>Triangles</b></td><td style="border:1px solid #111827;padding:6px 10px;">4</td><td style="border:1px solid #111827;padding:6px 10px;">6</td><td style="border:1px solid #111827;padding:6px 10px;">8</td><td style="border:1px solid #111827;padding:6px 10px;">10</td><td style="border:1px solid #111827;padding:6px 10px;">…</td><td style="border:1px solid #111827;padding:6px 10px;">42</td></tr><tr><td style="border:1px solid #111827;padding:6px 10px;"><b>Total</b></td><td style="border:1px solid #111827;padding:6px 10px;">5</td><td style="border:1px solid #111827;padding:6px 10px;">8</td><td style="border:1px solid #111827;padding:6px 10px;">11</td><td style="border:1px solid #111827;padding:6px 10px;">14</td><td style="border:1px solid #111827;padding:6px 10px;">…</td><td style="border:1px solid #111827;padding:6px 10px;">62</td></tr></table></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q4',
      title: 'Question 4: Scale Drawing, Bearings and Construction (10 marks)',
      questions: [
        {
          id: 'p3-q4',
          number: 4,
          question: 'The diagram shows a map of an island drawn to the scale shown. A, B and C are points at the edges of the island.\n\n(a) Find the shortest actual distance of A from C. [2]\n(b) Measure the bearing of B from C. [3]\n(c) A tower T is to be built such that it is equidistant (I) from AB and BC, (II) from A and C. Construct and mark, with T, the position of the tower. [5]',
          marks: 10,
          diagram: `<svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px">
            <line x1="60" y1="100" x2="60" y2="20" stroke="#000" stroke-width="1.5"/>
            <polygon points="60,10 54,25 66,25" fill="#000"/>
            <text x="40" y="15" font-size="12">North line</text>
            <path d="M 110,75 C 130,50 180,55 210,50 C 250,50 310,65 330,40 C 350,30 400,30 430,60 C 450,30 470,70 480,80 L 510,120 C 530,170 510,210 520,230 C 510,235 500,230 510,240 C 490,260 460,265 450,280 C 440,310 350,320 260,330 C 180,340 120,300 110,280 C 90,240 100,200 95,160 Z" fill="none" stroke="#000" stroke-width="1.5"/>
            <circle cx="110" cy="75" r="3" fill="#000"/>
            <text x="95" y="70" font-weight="bold">A</text>
            <circle cx="338" cy="42" r="3" fill="#000"/>
            <text x="330" y="30" font-weight="bold">B</text>
            <circle cx="425" cy="285" r="3" fill="#000"/>
            <text x="420" y="305" font-weight="bold">C</text>
            <text x="450" y="30" font-size="14" font-weight="bold">Scale: 1 cm to 50 km</text>
          </svg>`,
          solution:
            '(a) Measure AC with a ruler on the printed paper, then multiply by 50 km per cm. On the exam map AC ≈ 21.9 cm → ≈ 1095 km.\n(b) Draw a north line at C and measure clockwise from North: bearing ≈ 340°.\n(c) T is where the angle bisector of angle ABC meets the perpendicular bisector of AC.',
          solutionSteps: [
            '(a) Join A and C with a straight line and measure its length in centimetres',
            'Convert using the scale: distance = measured cm × 50 km',
            'Approximately 1095 km (check the measurement on the printed page)',
            '(b) Draw a North line through C, parallel to the North arrow shown',
            'Measure the angle clockwise from North to the line CB',
            'Bearing ≈ 340° (to the nearest degree)',
            '(c) Points equidistant from AB and BC lie on the angle bisector of angle ABC',
            'Points equidistant from A and C lie on the perpendicular bisector of AC',
            'T is the intersection of the angle bisector and the perpendicular bisector',
          ],
        },
      ],
    },
    {
      id: 'p3-q5',
      title: 'Question 5: Mensuration — Cuboid and Cylinder (7 marks)',
      questions: [
        {
          id: 'p3-q5',
          number: 5,
          question: 'The diagram shows an open cuboid with length 40 cm, width 20 cm and height 8 cm. The cuboid is completely filled with water.\n\n(a) Calculate (i) the volume of water in the cuboid, [2] (ii) the total surface area of the open cuboid in contact with water. [3]\n(b) All the water from the cuboid is poured into a cylinder of radius 12 cm. Calculate the height of the water in the cylinder. [2]',
          marks: 7,
          diagram: `<svg viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px">
            <polygon points="30,120 200,130 380,30 210,20" fill="#bbb" stroke="#000" stroke-width="1.5"/>
            <polygon points="200,130 380,30 380,70 200,170" fill="#aaa" stroke="#000" stroke-width="1.5"/>
            <polygon points="30,120 200,130 200,170 30,160" fill="#888" stroke="#000" stroke-width="1.5"/>
            <text x="100" y="160" font-size="14">20 cm</text>
            <text x="290" y="120" font-size="14">40 cm</text>
            <text x="390" y="55" font-size="14">8 cm</text>
            <text x="330" y="160" font-size="12" font-weight="bold">NOT TO SCALE</text>
          </svg>`,
          solution: '(a)(i) 6400 cm³   (ii) 1760 cm²\n(b) 14.1 cm',
          solutionSteps: [
            '(a)(i) Volume = length × width × height = 40 × 20 × 8 = 6400 cm³',
            '(a)(ii) The open cuboid has no top, so water touches: base + 2 long sides + 2 short sides',
            'Base = 40 × 20 = 800 cm²',
            'Long sides: 2 × (40 × 8) = 640 cm²',
            'Short sides: 2 × (20 × 8) = 320 cm²',
            'Total = 800 + 640 + 320 = 1760 cm²',
            '(b) Volume of cylinder = πr²h = π × 12² × h = 6400',
            'h = 6400 ÷ (144π) ≈ 6400 ÷ 452.39 ≈ 14.1 cm',
          ],
        },
      ],
    },
    {
      id: 'p3-q6',
      title: 'Question 6: Graphs of Quadratic Functions (7 marks)',
      questions: [
        {
          id: 'p3-q6',
          number: 6,
          question: '(a)(i) Complete the table of values for y = x² − x − 3. [2]\n(a)(ii) Draw the graph of y = x² − x − 3 on the grid for −3 ≤ x ≤ 4. [4]\n(b) Write the equation of the axis of symmetry of the graph. [1]\n\nTable:\nx:  −3  −2  −1  0  1  2  3  4\ny:   9   .  −1 −3 −3 −1  3  .',
          marks: 7,
          diagram: `<svg viewBox="-50 -50 450 450" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px">
            <line x1="0" y1="350" x2="400" y2="350" stroke="#000" stroke-width="2"/>
            <line x1="150" y1="0" x2="150" y2="420" stroke="#000" stroke-width="2"/>
            <text x="0" y="365">-3</text>
            <text x="50" y="365">-2</text>
            <text x="100" y="365">-1</text>
            <text x="145" y="365">0</text>
            <text x="200" y="365">1</text>
            <text x="250" y="365">2</text>
            <text x="300" y="365">3</text>
            <text x="350" y="365">4</text>
            <text x="405" y="355" font-style="italic">x</text>
            <text x="130" y="410">-4</text>
            <text x="130" y="390">-2</text>
            <text x="130" y="300">2</text>
            <text x="130" y="250">4</text>
            <text x="130" y="200">6</text>
            <text x="130" y="150">8</text>
            <text x="125" y="100">10</text>
            <text x="145" y="15" font-style="italic">y</text>
            <path d="M 0,0 L 400,0 M 0,25 L 400,25 M 0,50 L 400,50 M 0,75 L 400,75 M 0,100 L 400,100 M 0,125 L 400,125 M 0,150 L 400,150 M 0,175 L 400,175 M 0,200 L 400,200 M 0,225 L 400,225 M 0,250 L 400,250 M 0,275 L 400,275 M 0,300 L 400,300 M 0,325 L 400,325 M 0,350 L 400,350 M 0,375 L 400,375 M 0,400 L 400,400" stroke="#ccc" stroke-width="0.5"/>
            <path d="M 0,0 L 0,400 M 25,0 L 25,400 M 50,0 L 50,400 M 75,0 L 75,400 M 100,0 L 100,400 M 125,0 L 125,400 M 150,0 L 150,400 M 175,0 L 175,400 M 200,0 L 200,400 M 225,0 L 225,400 M 250,0 L 250,400 M 275,0 L 275,400 M 300,0 L 300,400 M 325,0 L 325,400 M 350,0 L 350,400 M 375,0 L 375,400 M 400,0 L 400,400" stroke="#ccc" stroke-width="0.5"/>
          </svg>`,
          solution: '(a)(i) y(−2) = 3, y(4) = 9\n(a)(ii) Plot the points and draw a smooth U-shaped curve\n(b) x = 1/2 (x = 0.5)',
          solutionSteps: [
            '(a)(i) When x = −2: y = (−2)² − (−2) − 3 = 4 + 2 − 3 = 3',
            'When x = 4: y = 4² − 4 − 3 = 16 − 4 − 3 = 9',
            'Table points: (−3,9) (−2,3) (−1,−1) (0,−3) (1,−3) (2,−1) (3,3) (4,9)',
            '(a)(ii) Plot each point and join with a smooth curve',
            '(b) Axis of symmetry passes through the midpoint of the two roots / the minimum',
            'x = −b/2a = −(−1)/(2×1) = 1/2, so the axis is x = 0.5',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Graph of y = x² − x − 3 (−3 ≤ x ≤ 4):</div><svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><line x1="180" y1="20" x2="180" y2="300" stroke="#111827" stroke-width="1.5"/><line x1="40" y1="220" x2="360" y2="220" stroke="#111827" stroke-width="1.5"/><text x="60" y="238">-3</text><text x="100" y="238">-2</text><text x="140" y="238">-1</text><text x="175" y="238">0</text><text x="220" y="238">1</text><text x="260" y="238">2</text><text x="300" y="238">3</text><text x="338" y="238">4</text><text x="372" y="226" font-style="italic">x</text><text x="162" y="210">0</text><text x="166" y="270">-2</text><text x="166" y="188">2</text><text x="166" y="148">4</text><text x="166" y="108">6</text><text x="166" y="68">8</text><text x="160" y="28">10</text><text x="192" y="24" font-style="italic">y</text><line x1="200" y1="20" x2="200" y2="288" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="6,4"/><text x="206" y="40" font-size="11" fill="#9333ea">x = 0.5</text><polyline points="60,40 100,160 140,240 180,280 220,280 260,240 300,160 340,40" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="60" cy="40" r="3.5" fill="#dc2626"/><circle cx="100" cy="160" r="3.5" fill="#dc2626"/><circle cx="140" cy="240" r="3.5" fill="#dc2626"/><circle cx="180" cy="280" r="3.5" fill="#dc2626"/><circle cx="220" cy="280" r="3.5" fill="#dc2626"/><circle cx="260" cy="240" r="3.5" fill="#dc2626"/><circle cx="300" cy="160" r="3.5" fill="#dc2626"/><circle cx="340" cy="40" r="3.5" fill="#dc2626"/></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q7',
      title: 'Question 7: Algebra — Quadratic Problem Solving (10 marks)',
      questions: [
        {
          id: 'p3-q7',
          number: 7,
          question: 'A square plot A has side x m. A square plot B has side 2 m longer than plot A.\n\n(a) Find, in terms of x, an expression for (i) the perimeter of plot A, [1] (ii) the area of plot B. [1]\n(b) The total area of the two plots is 130 m². Form an equation, in terms of x, for the total area, and show that it reduces to x² + 2x − 63 = 0. [3]\n(c) Solve the equation x² + 2x − 63 = 0. [3]\n(d) The cost of fencing is M80 per metre. Find the cost of fencing plot A. [2]',
          marks: 10,
          solution: '(a)(i) 4x   (ii) (x + 2)²\n(b) x² + (x + 2)² = 130 → x² + 2x − 63 = 0\n(c) x = 7 (x = −9 rejected)\n(d) M2240',
          solutionSteps: [
            '(a)(i) Perimeter of a square = 4 × side = 4x',
            '(a)(ii) Side of B = x + 2, so area of B = (x + 2)²',
            '(b) x² + (x + 2)² = 130',
            'x² + x² + 4x + 4 = 130',
            '2x² + 4x + 4 = 130 → divide by 2: x² + 2x + 2 = 65',
            'x² + 2x − 63 = 0  ✓',
            '(c) Factorise: (x + 9)(x − 7) = 0 → x = −9 or x = 7',
            'x = −9 is rejected (length cannot be negative), so x = 7 m',
            '(d) Perimeter of A = 4 × 7 = 28 m',
            'Cost = 28 × 80 = M2240',
          ],
        },
      ],
    },
    {
      id: 'p3-q8',
      title: 'Question 8: Ratio and Proportion (7 marks)',
      questions: [
        {
          id: 'p3-q8',
          number: 8,
          question: 'A bus left Maseru to Quthing carrying 80 passengers. 65 passengers are adults and the rest are children.\n\n(a) Write, in its simplest form, the ratio of Adults : Children. [2]\n(b) When it reached Mafeteng bus stop, 20% of the adults and 1/3 of the children left the bus. Calculate the number of passengers who remained in the bus. [3]\n(c) Some passengers got onto the bus from Mafeteng to Quthing and the new total number of passengers is 70. The ratio of Men : Women : Children is now 5 : 3 : 2. Calculate the number of children in the bus. [2]',
          marks: 7,
          solution: '(a) 13 : 3\n(b) 62\n(c) 14',
          solutionSteps: [
            'Children = 80 − 65 = 15',
            '(a) Adults : Children = 65 : 15 = 13 : 3',
            '(b) Adults who left = 20% of 65 = 13',
            'Children who left = 1/3 of 15 = 5',
            'Remaining = (65 − 13) + (15 − 5) = 52 + 10 = 62',
            '(c) Ratio Men : Women : Children = 5 : 3 : 2 (total 10 parts)',
            'Children = 2/10 × 70 = 14',
          ],
        },
      ],
    },
    {
      id: 'p3-q9',
      title: 'Question 9: Compound and Simple Interest (4 marks)',
      questions: [
        {
          id: 'p3-q9',
          number: 9,
          question: 'Lindiwe invested the same amount of money for 2 years, in company A and company B. Company A offers compound interest and company B offers simple interest per annum. Both companies offer 10% interest per annum.\n\nCalculate the amount invested in each company if the compound interest exceeds simple interest by M120. [4]',
          marks: 4,
          solution: 'M12000 invested in each company',
          solutionSteps: [
            'Let the amount invested be Mx in each company',
            'Compound interest for 2 years at 10% = x[(1.1)² − 1] = x(1.21 − 1) = 0.21x',
            'Simple interest for 2 years at 10% = x × 0.10 × 2 = 0.2x',
            'Compound interest − simple interest = 0.21x − 0.2x = 0.01x',
            '0.01x = 120 → x = 120/0.01 = 12000',
            'Check: compound interest = 0.21 × 12000 = 2520; simple = 0.2 × 12000 = 2400; difference = 120 ✓',
          ],
        },
      ],
    },
    {
      id: 'p3-q10',
      title: 'Question 10: Transformations (7 marks)',
      questions: [
        {
          id: 'p3-q10',
          number: 10,
          question: 'The diagram shows triangles A, B and C on the grid.\n\n(a) Describe fully, a single transformation which maps (i) A onto B, [2] (ii) C onto A. [3]\n(b) Reflect triangle A in the line y = −x. [2]',
          marks: 7,
          diagram: `<svg viewBox="-100 -50 500 350" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px">
            <g stroke="#ccc" stroke-width="0.5">
              <path d="M -80,-40 H 400 M -80,-20 H 400 M -80,0 H 400 M -80,20 H 400 M -80,40 H 400 M -80,60 H 400 M -80,80 H 400 M -80,100 H 400 M -80,120 H 400 M -80,140 H 400 M -80,160 H 400 M -80,180 H 400 M -80,200 H 400 M -80,220 H 400 M -80,240 H 400 M -80,260 H 400 M -80,280 H 400"/>
              <path d="M -80,-40 V 280 M 0,-40 V 280 M 20,-40 V 280 M 40,-40 V 280 M 60,-40 V 280 M 80,-40 V 280 M 100,-40 V 280 M 120,-40 V 280 M 140,-40 V 280 M 160,-40 V 280 M 180,-40 V 280 M 200,-40 V 280 M 220,-40 V 280 M 240,-40 V 280 M 260,-40 V 280 M 280,-40 V 280 M 300,-40 V 280 M 320,-40 V 280 M 340,-40 V 280 M 360,-40 V 280 M 380,-40 V 280"/>
            </g>
            <line x1="-80" y1="160" x2="380" y2="160" stroke="#000" stroke-width="2"/>
            <line x1="0" y1="-40" x2="0" y2="280" stroke="#000" stroke-width="2"/>
            <text x="-60" y="180">-4</text>
            <text x="-20" y="180">-2</text>
            <text x="-10" y="180">0</text>
            <text x="40" y="180">2</text>
            <text x="80" y="180">4</text>
            <text x="120" y="180">6</text>
            <text x="160" y="180">8</text>
            <text x="200" y="180">10</text>
            <text x="240" y="180">12</text>
            <text x="-15" y="220">-2</text>
            <text x="-15" y="260">-4</text>
            <text x="-15" y="120">2</text>
            <text x="-15" y="80">4</text>
            <text x="-15" y="40">6</text>
            <polygon points="20,140 20,100 80,140" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="35" y="125" font-weight="bold" font-style="italic">A</text>
            <polygon points="140,180 140,220 220,220" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="155" y="210" font-weight="bold" font-style="italic">B</text>
            <polygon points="80,80 200,160 200,80" fill="none" stroke="#000" stroke-width="1.5"/>
            <text x="150" y="110" font-weight="bold" font-style="italic">C</text>
          </svg>`,
          solution:
            '(a)(i) A rotation of 90° clockwise about the point (3, 0) maps A onto B. (Answer depends on measurements taken from the printed grid; state the centre and angle.)\n(a)(ii) A rotation of 180° about the point (7, 2) maps C onto A. (Answer depends on measurements taken from the printed grid; state the centre and angle.)\n(b) Reflection of A in y = −x gives a triangle with vertices (−1, −1), (−3, −1), (−1, −4).',
          solutionSteps: [
            '(a)(i) Compare the corresponding vertices of A and B: the triangle has been turned, not slid, so it is a rotation',
            'Use tracing paper or join corresponding points to find the centre of rotation',
            'B is A rotated 90° clockwise about the centre of rotation',
            '(a)(ii) Compare corresponding vertices of C and A: the triangle is upside-down, so it is a rotation of 180°',
            'Find the centre of rotation by joining corresponding points (the centre is the midpoint of each join)',
            '(b) To reflect in y = −x, swap each coordinate and change both signs: (x, y) → (−y, −x)',
            'A(1,1) → (−1,−1), A(1,3) → (−3,−1), A(4,1) → (−1,−4)',
            'Plot the reflection on the grid',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Triangle A reflected in y = −x (red, dashed):</div><svg viewBox="-100 -60 420 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px"><g stroke="#d1d5db" stroke-width="0.5"><path d="M -80,-40 H 300 M -80,-20 H 300 M -80,0 H 300 M -80,20 H 300 M -80,40 H 300 M -80,60 H 300 M -80,80 H 300 M -80,100 H 300 M -80,120 H 300 M -80,140 H 300 M -80,160 H 300 M -80,180 H 300 M -80,200 H 300 M -80,220 H 300 M -80,240 H 300 M -80,260 H 300"/><path d="M -80,-40 V 260 M -60,-40 V 260 M -40,-40 V 260 M -20,-40 V 260 M 0,-40 V 260 M 20,-40 V 260 M 40,-40 V 260 M 60,-40 V 260 M 80,-40 V 260 M 100,-40 V 260 M 120,-40 V 260 M 140,-40 V 260 M 160,-40 V 260 M 180,-40 V 260 M 200,-40 V 260 M 220,-40 V 260 M 240,-40 V 260 M 260,-40 V 260 M 280,-40 V 260"/></g><line x1="-80" y1="160" x2="300" y2="160" stroke="#111827" stroke-width="1.5"/><line x1="0" y1="-40" x2="0" y2="260" stroke="#111827" stroke-width="1.5"/><text x="-75" y="178">-4</text><text x="-25" y="178">-2</text><text x="-8" y="178">0</text><text x="33" y="178">2</text><text x="73" y="178">4</text><text x="113" y="178">6</text><text x="153" y="178">8</text><text x="193" y="178">10</text><text x="-12" y="220">-2</text><text x="-12" y="260">-4</text><text x="-12" y="120">2</text><text x="-12" y="80">4</text><text x="-12" y="40">6</text><line x1="-80" y1="80" x2="80" y2="240" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="6,4"/><text x="64" y="95" font-size="11" fill="#9333ea">y = −x</text><polygon points="20,140 20,100 80,140" fill="none" stroke="#111827" stroke-width="1.5"/><text x="33" y="126" font-weight="bold" font-style="italic">A</text><polygon points="-20,180 -60,180 -20,240" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><text x="-68" y="176" font-weight="bold" font-style="italic" fill="#dc2626">A′</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q11',
      title: 'Question 11: Statistics — Pie Chart (8 marks)',
      questions: [
        {
          id: 'p3-q11',
          number: 11,
          question: 'The table shows a summary of the types of mode of transport for 45 students in a class.\n\nMode | Frequency | Sector angle (°)\nCar  |     .     | 72\nTaxi |     6     | 48\nBus  |     .     | 176\nBicycle | 8  | 64\n\n(a) Complete the table. [3]\n(b) A student is chosen at random from the class. Calculate the probability that the student uses (i) taxi, [1] (ii) bicycle or a car. [2]\n(c) Complete the pie chart and label the sectors. [2]',
          marks: 8,
          solution: '(a) Car frequency 9, Bus frequency 22\n(b)(i) 6/45 = 2/15   (ii) 17/45\n(c) Draw sectors of 72°, 48°, 176° and 64° and label Car, Taxi, Bus, Bicycle',
          solutionSteps: [
            'Total of the sector angles = 72 + 48 + 176 + 64 = 360° ✓',
            'Angle per student = 360 ÷ 45 = 8° per student',
            '(a) Car: 72/8 = 9 students',
            'Bus: 176/8 = 22 students',
            'Check: 9 + 6 + 22 + 8 = 45 ✓',
            '(b)(i) P(taxi) = 6/45 = 2/15',
            '(b)(ii) P(bicycle or car) = (8 + 9)/45 = 17/45',
            '(c) Draw each sector with the angle given in the table and label the sectors',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Completed pie chart:</div><svg viewBox="-130 -130 260 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px"><circle cx="0" cy="0" r="100" fill="none" stroke="#111827" stroke-width="1.5"/><path d="M 0,0 L 0,-100 A 100 100 0 0 1 74.3,-66.9 Z" fill="#fecaca" stroke="#111827" stroke-width="1"/><path d="M 0,0 L 74.3,-66.9 A 100 100 0 0 1 92.7,37.5 Z" fill="#fef3c7" stroke="#111827" stroke-width="1"/><path d="M 0,0 L 92.7,37.5 A 100 100 0 0 1 -7.0,99.8 Z" fill="#dbeafe" stroke="#111827" stroke-width="1"/><path d="M 0,0 L -7.0,99.8 A 100 100 0 0 1 0,-100 Z" fill="#dcfce7" stroke="#111827" stroke-width="1"/><line x1="0" y1="0" x2="0" y2="-100" stroke="#111827" stroke-width="1"/><line x1="0" y1="0" x2="74.3" y2="-66.9" stroke="#111827" stroke-width="1"/><line x1="0" y1="0" x2="92.7" y2="37.5" stroke="#111827" stroke-width="1"/><line x1="0" y1="0" x2="-7.0" y2="99.8" stroke="#111827" stroke-width="1"/><text x="8" y="-30" font-size="13" font-weight="bold" text-anchor="middle">Taxi 48°</text><text x="82" y="-44" font-size="13" font-weight="bold">Bicycle 64°</text><text x="52" y="88" font-size="13" font-weight="bold">Car 72°</text><text x="-60" y="-46" font-size="13" font-weight="bold" text-anchor="middle">Bus 176°</text></svg></div>',
          ],
        },
      ],
    },
    {
      id: 'p3-q12',
      title: 'Question 12: Algebra — Formulas and Equations (9 marks)',
      questions: [
        {
          id: 'p3-q12',
          number: 12,
          question: '(a) P = ∛(a)/2.\n(i) Find the value of P when a = 12. [1]\n(ii) Make a the subject of the formula. [2]\n\n(b) Solve the equation: (x − 3)/6 − (x − 4)/8 = 2 [3]\n\n(c) Solve the simultaneous equations:\n3x − 6y = 24\n2x + y = 1 [3]',
          marks: 9,
          solution: '(a)(i) P ≈ 1.145   (ii) a = (2P)³ = 8P³\n(b) x = 48\n(c) x = 2, y = −3',
          solutionSteps: [
            '(a)(i) P = ∛12 ÷ 2 ≈ 2.2894 ÷ 2 ≈ 1.145',
            '(a)(ii) P = ∛(a)/2 → 2P = ∛(a)',
            'Cube both sides: a = (2P)³ = 8P³',
            '(b) Multiply both sides by 24 (LCM of 6 and 8): 4(x − 3) − 3(x − 4) = 48',
            'Expand: 4x − 12 − 3x + 12 = 48',
            'Simplify: x = 48',
            'Check: (48−3)/6 − (48−4)/8 = 45/6 − 44/8 = 7.5 − 5.5 = 2 ✓',
            '(c) From equation (2): y = 1 − 2x',
            'Substitute into (1): 3x − 6(1 − 2x) = 24',
            '3x − 6 + 12x = 24 → 15x = 30 → x = 2',
            'y = 1 − 2(2) = 1 − 4 = −3',
            'So x = 2, y = −3',
          ],
        },
      ],
    },
    {
      id: 'p3-q13',
      title: 'Question 13: Distance–Time Graph (9 marks)',
      questions: [
        {
          id: 'p3-q13',
          number: 13,
          question: 'Sampu cycles from home to Putsoa Lodge. The distance–time graph represents his journey.\n\n(a) Find (i) the distance Sampu cycled after 1 hour and 30 minutes, [1] (ii) the time at which Sampu had covered 15 km. [1]\n(b) Calculate Sampu\'s average speed from home to Putsoa Lodge. Give your answer in kilometres per hour. [3]\n(c) Sampu stayed at Putsoa Lodge for 45 minutes. He then cycled back home at the constant speed of 32 km/h. Complete the travel journey on the grid. [2]\n(d) Change 32 km/h to metres per second (m/s). [2]',
          marks: 9,
          diagram: `<svg viewBox="-60 -20 480 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px">
            <line x1="0" y1="350" x2="400" y2="350" stroke="#000" stroke-width="2"/>
            <line x1="0" y1="0" x2="0" y2="350" stroke="#000" stroke-width="2"/>
            <text x="-55" y="180" font-size="12">Distance</text>
            <text x="-50" y="195" font-size="12">(km)</text>
            <text x="-20" y="355">0</text>
            <text x="-25" y="280">10</text>
            <text x="-25" y="210">20</text>
            <text x="-25" y="140">30</text>
            <text x="-25" y="70">40</text>
            <text x="-25" y="10">50</text>
            <text x="-80" y="355" font-size="12">Home</text>
            <text x="-120" y="70" font-size="12">Putsoa Lodge</text>
            <text x="0" y="375" font-size="10">10:20</text>
            <text x="35" y="375" font-size="10">10:50</text>
            <text x="70" y="375" font-size="10">11:20</text>
            <text x="105" y="375" font-size="10">11:50</text>
            <text x="140" y="375" font-size="10">12:20</text>
            <text x="175" y="375" font-size="10">12:50</text>
            <text x="210" y="375" font-size="10">13:20</text>
            <text x="245" y="375" font-size="10">13:50</text>
            <text x="280" y="375" font-size="10">14:20</text>
            <text x="315" y="375" font-size="10">15:50</text>
            <text x="150" y="400" font-size="12">Time (hours)</text>
            <line x1="0" y1="350" x2="140" y2="70" stroke="#000" stroke-width="2"/>
          </svg>`,
          solution:
            '(a)(i) 37.5 km   (ii) 10:56\n(b) 25 km/h\n(c) Stay horizontal at the lodge for 45 minutes, then a straight line back to Home arriving at about 14:39.\n(d) 32 km/h = 8.89 m/s (to 3 s.f.)',
          solutionSteps: [
            'From the graph the journey takes 2 hours (10:20 to 12:20) and covers 50 km',
            '(a)(i) The graph is a straight line, so distance is proportional to time',
            '1 hour 30 minutes = 1.5 h → distance = (1.5 ÷ 2) × 50 = 37.5 km',
            '(a)(ii) 15 km → time = (15 ÷ 50) × 120 minutes = 36 minutes',
            '36 minutes after 10:20 is 10:56',
            '(b) Average speed = total distance ÷ total time = 50 ÷ 2 = 25 km/h',
            '(c) While Sampu stays at the lodge the distance stays constant → horizontal line for 45 minutes (until 13:05)',
            'Return journey: 50 km at 32 km/h takes 50/32 ≈ 1.56 h ≈ 1 h 34 min → arrival ≈ 14:39',
            'Draw a straight line from the lodge point down to Home',
            '(d) 32 km/h = 32 × 1000 ÷ 3600 m/s = 32000/3600 = 8.89 m/s (3 s.f.)',
            '<div><div style="font-weight:600;color:#065f46;margin-bottom:6px;">Completed distance–time graph (stay at lodge + return journey):</div><svg viewBox="-80 -20 480 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px"><line x1="0" y1="350" x2="400" y2="350" stroke="#111827" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="350" stroke="#111827" stroke-width="2"/><text x="-55" y="180" font-size="12">Distance</text><text x="-50" y="195" font-size="12">(km)</text><text x="-20" y="355">0</text><text x="-25" y="280">10</text><text x="-25" y="210">20</text><text x="-25" y="140">30</text><text x="-25" y="70">40</text><text x="-25" y="10">50</text><text x="-75" y="355" font-size="12">Home</text><text x="-120" y="70" font-size="12">Putsoa Lodge</text><text x="0" y="375" font-size="10">10:20</text><text x="35" y="375" font-size="10">10:50</text><text x="70" y="375" font-size="10">11:20</text><text x="105" y="375" font-size="10">11:50</text><text x="140" y="375" font-size="10">12:20</text><text x="175" y="375" font-size="10">12:50</text><text x="210" y="375" font-size="10">13:20</text><text x="245" y="375" font-size="10">13:50</text><text x="280" y="375" font-size="10">14:20</text><text x="315" y="375" font-size="10">14:50</text><text x="150" y="400" font-size="12">Time (hours)</text><line x1="0" y1="350" x2="140" y2="70" stroke="#111827" stroke-width="2"/><line x1="140" y1="70" x2="192.5" y2="70" stroke="#dc2626" stroke-width="2"/><line x1="192.5" y1="70" x2="302" y2="350" stroke="#dc2626" stroke-width="2"/><circle cx="140" cy="70" r="4" fill="#dc2626"/><circle cx="192.5" cy="70" r="4" fill="#dc2626"/><circle cx="302" cy="350" r="4" fill="#dc2626"/><text x="116" y="58" font-size="11" fill="#dc2626">arrive 12:20</text><text x="145" y="110" font-size="11" fill="#dc2626">stay 45 min</text><text x="196" y="235" font-size="11" fill="#dc2626">return 32 km/h → 14:39</text></svg></div>',
          ],
        },
      ],
    },
  ],
};