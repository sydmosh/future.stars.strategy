import type { Booklet } from './booklets';

export const mathsTutorial12: Booklet = {
  id: 'maths-tutorial-12',
  title: 'Tutorial 12 – Mensuration: Perimeter, Area, Surface Area and Volume',
  subtitle: 'Perimeter, Area, Surface Area and Volume',
  description:
    'Master perimeter, area of 2D shapes (squares, rectangles, triangles, parallelograms, trapeziums, circles, composite shapes), surface area & volume of 3D solids (cubes, cuboids, cylinders, cones, spheres), capacity, and unit conversions with step-by-step solutions.',
  totalMarks: 95,
  revisionNotes: {
    title: 'Chapter 12 – Quick Revision Notes',
    sections: [
      {
        heading: 'What is Mensuration?',
        content:
          'Mensuration is the branch of mathematics that deals with the measurement of length, perimeter, area, surface area, volume, and capacity.\n\nKey Applications:\n• Construction & Architecture (building dimensions, material estimation)\n• Engineering & Manufacturing (part volumes, material density)\n• Agriculture & Surveying (land area, seed/fertiliser requirements, fencing)\n• Interior Design & Tiling (flooring areas, paint coverage, wall dimensions)',
      },
      {
        heading: 'Perimeter Formulae (2D Shapes)',
        content:
          'Perimeter is the total distance around the boundary of a 2D shape.\n\n• Square: P = 4s\n• Rectangle: P = 2(l + w)\n• Triangle: P = a + b + c\n• Circle (Circumference): C = 2πr = πd  (π ≈ 22/7 or 3.142)',
        examples: [
          'Square side 9 cm: P = 4 × 9 = 36 cm',
          'Rectangle 14 cm × 8 cm: P = 2(14 + 8) = 44 cm',
          'Circle radius 7 cm: C = 2 × (22/7) × 7 = 44 cm',
        ],
      },
      {
        heading: 'Area Formulae (2D Shapes)',
        content:
          'Area measures the amount of surface enclosed inside a shape. Units: cm², m², km².\n\n• Square: A = s²\n• Rectangle: A = l × w\n• Triangle: A = ½ × b × h\n• Parallelogram: A = b × h\n• Trapezium: A = ½(a + b)h  (where a and b are parallel sides)\n• Circle: A = πr²',
        examples: [
          'Triangle (b=16 cm, h=10 cm): A = ½ × 16 × 10 = 80 cm²',
          'Trapezium (a=8, b=12, h=6): A = ½ × (8 + 12) × 6 = 60 cm²',
          'Circle (r=14 cm): A = (22/7) × 14² = 616 cm²',
        ],
      },
      {
        heading: 'Composite Figures',
        content:
          'A composite figure is made of two or more simple shapes combined.\n\nSteps to solve:\n1. Divide the shape into simple component shapes (rectangles, triangles, semi-circles).\n2. Calculate the individual area of each component.\n3. Add (or subtract, for cut-outs) the areas to find the net total area.',
        examples: [
          'L-shaped region: divide into 2 rectangles, calculate areas, add together.',
          'Path around a garden: Area of outer shape − Area of inner shape.',
        ],
      },
      {
        heading: 'Surface Area & Volume Formulae (3D Solids)',
        content:
          'Surface Area (SA) is the total area of all outer faces. Volume (V) is the space occupied inside. Units: cm³, m³.\n\n• Cube (side a):\n  SA = 6a² | V = a³\n\n• Cuboid (l, w, h):\n  SA = 2(lw + lh + wh) | V = l × w × h\n\n• Cylinder (r, h):\n  SA = 2πr² + 2πrh | V = πr²h\n\n• Cone (r, h):\n  V = ⅓πr²h\n\n• Sphere (r):\n  V = ⁴⁄₃πr³',
        examples: [
          'Cube side 5 cm: V = 5³ = 125 cm³',
          'Cuboid 8 × 6 × 5 cm: SA = 2(48 + 40 + 30) = 236 cm², V = 240 cm³',
          'Cylinder (r=5, h=14): V = (22/7) × 25 × 14 = 1100 cm³',
        ],
      },
      {
        heading: 'Capacity & Unit Conversions',
        content:
          'Capacity is the volume of fluid a container can hold.\n\nVolume to Capacity:\n• 1 cm³ = 1 mL\n• 1,000 cm³ = 1 Litre (L)\n• 1 m³ = 1,000 Litres (L) = 1,000,000 cm³\n\nLength & Area Conversions:\n• 10 mm = 1 cm | 100 cm = 1 m | 1,000 m = 1 km\n• 100 cm² = 1 dm² | 10,000 cm² = 1 m²',
        examples: [
          '3 Litres = 3 × 1,000 = 3,000 cm³',
          '4,500 cm³ = 4,500 ÷ 1,000 = 4.5 Litres',
          '12,000 Litres = 12,000 ÷ 1,000 = 12 m³',
        ],
      },
      {
        heading: '⭐ Exam Tips & Common Mistakes',
        content:
          '1. ⚠️ Check units carefully! Make sure lengths are in the same unit (e.g. all in metres or all in centimetres) before calculating.\n2. ❌ Diameter vs Radius: Formulae for circle area and cylinder volume use RADIUS (r), not diameter (d = 2r).\n3. ⚠️ Don\'t confuse Perimeter (cm) with Area (cm²) or Volume (cm³).\n4. 💡 For hollow shapes or outer paths: Outer Area − Inner Area.\n5. 💡 Cone vs Cylinder: A cone volume is exactly ⅓ of a cylinder with the same base and height (3 cones fill 1 cylinder).\n6. ✅ Always show full calculation steps for partial credit in exams.',
      },
    ],
  },
  sections: [
    {
      id: 't12-section-a',
      title: 'SECTION A – Basic Questions',
      questions: [
        {
          id: 't12-q1',
          number: 1,
          question: 'Find the perimeter of a square with side 9 cm.',
          marks: 1,
          solution: '36 cm',
          expectedAnswer: '36',
          solutionSteps: [
            'Formula for perimeter of a square: P = 4s',
            'P = 4 × 9 cm = 36 cm',
          ],
          diagram: `<svg viewBox="0 0 200 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><rect x="50" y="30" width="100" height="100" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5" rx="4"/><text x="100" y="145" font-size="12" font-weight="bold" fill="#4f46e5" text-anchor="middle">s = 9 cm</text><text x="35" y="85" font-size="12" font-weight="bold" fill="#4f46e5" text-anchor="middle">9 cm</text><text x="100" y="85" font-size="13" font-weight="bold" fill="#312e81" text-anchor="middle">Square</text></svg>`,
        },
        {
          id: 't12-q2',
          number: 2,
          question: 'Find the perimeter of a rectangle with length 14 cm and width 8 cm.',
          marks: 1,
          solution: '44 cm',
          expectedAnswer: '44',
          solutionSteps: [
            'Formula for perimeter of a rectangle: P = 2(l + w)',
            'P = 2(14 + 8) = 2(22) = 44 cm',
          ],
          diagram: `<svg viewBox="0 0 240 140" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="140" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><rect x="30" y="30" width="180" height="80" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" rx="4"/><text x="120" y="20" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">l = 14 cm</text><text x="220" y="75" font-size="12" font-weight="bold" fill="#15803d">w = 8 cm</text><text x="120" y="75" font-size="13" font-weight="bold" fill="#14532d" text-anchor="middle">Rectangle</text></svg>`,
        },
        {
          id: 't12-q3',
          number: 3,
          question: 'Find the perimeter of a triangle with sides 8 cm, 11 cm, and 15 cm.',
          marks: 1,
          solution: '34 cm',
          expectedAnswer: '34',
          solutionSteps: [
            'Perimeter of a triangle: P = a + b + c',
            'P = 8 + 11 + 15 = 34 cm',
          ],
          diagram: `<svg viewBox="0 0 220 150" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="150" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><polygon points="30,120 190,120 140,30" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/><text x="110" y="135" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">15 cm</text><text x="70" y="70" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">8 cm</text><text x="175" y="70" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">11 cm</text></svg>`,
        },
        {
          id: 't12-q4',
          number: 4,
          question: 'Find the circumference of a circle with radius 7 cm. (Use π = 22/7)',
          marks: 1,
          solution: '44 cm',
          expectedAnswer: '44',
          solutionSteps: [
            'Circumference formula: C = 2πr',
            'C = 2 × (22 / 7) × 7 = 2 × 22 = 44 cm',
          ],
          diagram: `<svg viewBox="0 0 180 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><circle cx="90" cy="80" r="55" fill="#f0f9ff" stroke="#0284c7" stroke-width="2.5"/><line x1="90" y1="80" x2="145" y2="80" stroke="#0369a1" stroke-width="2" stroke-dasharray="4,2"/><circle cx="90" cy="80" r="3" fill="#0369a1"/><text x="115" y="75" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">r = 7 cm</text></svg>`,
        },
        {
          id: 't12-q5',
          number: 5,
          question: 'Find the area of a square with side 12 cm.',
          marks: 1,
          solution: '144 cm²',
          expectedAnswer: '144',
          solutionSteps: [
            'Formula for area of a square: A = s²',
            'A = 12² = 12 × 12 = 144 cm²',
          ],
        },
        {
          id: 't12-q6',
          number: 6,
          question: 'Find the area of a rectangle measuring 15 cm × 9 cm.',
          marks: 1,
          solution: '135 cm²',
          expectedAnswer: '135',
          solutionSteps: [
            'Formula for area of a rectangle: A = l × w',
            'A = 15 × 9 = 135 cm²',
          ],
        },
        {
          id: 't12-q7',
          number: 7,
          question: 'Find the area of a triangle with Base = 16 cm and Height = 10 cm.',
          marks: 1,
          solution: '80 cm²',
          expectedAnswer: '80',
          solutionSteps: [
            'Formula for area of a triangle: A = ½ × b × h',
            'A = ½ × 16 × 10 = 8 × 10 = 80 cm²',
          ],
        },
        {
          id: 't12-q8',
          number: 8,
          question: 'Find the area of a parallelogram with Base = 18 cm and Height = 9 cm.',
          marks: 1,
          solution: '162 cm²',
          expectedAnswer: '162',
          solutionSteps: [
            'Formula for area of a parallelogram: A = b × h',
            'A = 18 × 9 = 162 cm²',
          ],
          diagram: `<svg viewBox="0 0 240 140" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="140" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><polygon points="60,30 200,30 160,110 20,110" fill="#fdf4ff" stroke="#c026d3" stroke-width="2.5"/><line x1="60" y1="30" x2="60" y2="110" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="4,3"/><text x="50" y="75" font-size="11" font-weight="bold" fill="#a21caf" text-anchor="end">h=9 cm</text><text x="90" y="125" font-size="11" font-weight="bold" fill="#a21caf" text-anchor="middle">b = 18 cm</text></svg>`,
        },
        {
          id: 't12-q9',
          number: 9,
          question: 'Find the area of a trapezium with parallel sides 8 cm and 12 cm, and Height = 6 cm.',
          marks: 1,
          solution: '60 cm²',
          expectedAnswer: '60',
          solutionSteps: [
            'Formula for area of a trapezium: A = ½(a + b)h',
            'A = ½ × (8 + 12) × 6 = ½ × 20 × 6 = 10 × 6 = 60 cm²',
          ],
          diagram: `<svg viewBox="0 0 220 140" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="140" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><polygon points="70,30 150,30 190,110 30,110" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><line x1="70" y1="30" x2="70" y2="110" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3"/><text x="110" y="22" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">a = 8 cm</text><text x="110" y="125" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">b = 12 cm</text><text x="60" y="75" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="end">h = 6 cm</text></svg>`,
        },
        {
          id: 't12-q10',
          number: 10,
          question: 'Find the area of a circle with radius 14 cm. (Use π = 22/7)',
          marks: 1,
          solution: '616 cm²',
          expectedAnswer: '616',
          solutionSteps: [
            'Formula for area of a circle: A = πr²',
            'A = (22 / 7) × 14² = (22 / 7) × 196 = 22 × 28 = 616 cm²',
          ],
        },
        {
          id: 't12-q11',
          number: 11,
          question: 'Find the volume of a cube with side 5 cm.',
          marks: 1,
          solution: '125 cm³',
          expectedAnswer: '125',
          solutionSteps: [
            'Formula for volume of a cube: V = a³',
            'V = 5³ = 5 × 5 × 5 = 125 cm³',
          ],
        },
        {
          id: 't12-q12',
          number: 12,
          question: 'Find the volume of a cuboid measuring 8 cm × 6 cm × 5 cm.',
          marks: 1,
          solution: '240 cm³',
          expectedAnswer: '240',
          solutionSteps: [
            'Formula for volume of a cuboid: V = l × w × h',
            'V = 8 × 6 × 5 = 240 cm³',
          ],
        },
        {
          id: 't12-q13',
          number: 13,
          question: 'Find the volume of a cylinder with Radius = 3 cm and Height = 10 cm. (Use π ≈ 3.142)',
          marks: 1,
          solution: '282.78 cm³',
          expectedAnswer: '282.78',
          solutionSteps: [
            'Formula for volume of a cylinder: V = πr²h',
            'V = 3.142 × 3² × 10 = 3.142 × 9 × 10 = 282.78 cm³',
          ],
          diagram: `<svg viewBox="0 0 180 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><ellipse cx="90" cy="35" rx="45" ry="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><path d="M 45 35 L 45 125 A 45 15 0 0 0 135 125 L 135 35" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/><ellipse cx="90" cy="125" rx="45" ry="15" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="90" y1="35" x2="135" y2="35" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="3,2"/><text x="110" y="30" font-size="10" font-weight="bold" fill="#0369a1">r=3cm</text><text x="145" y="80" font-size="10" font-weight="bold" fill="#0369a1">h=10cm</text></svg>`,
        },
        {
          id: 't12-q14',
          number: 14,
          question: 'Convert 3 litres into cubic centimetres (cm³).',
          marks: 1,
          solution: '3,000 cm³',
          expectedAnswer: '3000',
          solutionSteps: [
            'Conversion factor: 1 Litre = 1,000 cm³',
            '3 Litres = 3 × 1,000 = 3,000 cm³',
          ],
        },
        {
          id: 't12-q15',
          number: 15,
          question: 'Convert 4,500 cm³ into litres.',
          marks: 1,
          solution: '4.5 L',
          expectedAnswer: '4.5',
          solutionSteps: [
            'Conversion factor: 1,000 cm³ = 1 Litre',
            '4,500 cm³ = 4,500 ÷ 1,000 = 4.5 Litres',
          ],
        },
      ],
    },
    {
      id: 't12-section-b',
      title: 'SECTION B – Intermediate Questions',
      questions: [
        {
          id: 't12-q16',
          number: 16,
          question: 'A rectangular field measures 80 m × 45 m. Calculate: a) Perimeter b) Area',
          marks: 2,
          solution: 'a) 250 m, b) 3,600 m²',
          expectedAnswer: '250',
          solutionSteps: [
            'a) Perimeter P = 2(l + w) = 2(80 + 45) = 2(125) = 250 m',
            'b) Area A = l × w = 80 × 45 = 3,600 m²',
          ],
        },
        {
          id: 't12-q17',
          number: 17,
          question: 'A circular garden has radius 10 m. (Use π ≈ 3.142) Find: a) Circumference b) Area',
          marks: 2,
          solution: 'a) 62.84 m, b) 314.2 m²',
          expectedAnswer: '62.84',
          solutionSteps: [
            'a) Circumference C = 2πr = 2 × 3.142 × 10 = 62.84 m',
            'b) Area A = πr² = 3.142 × 10² = 3.142 × 100 = 314.2 m²',
          ],
        },
        {
          id: 't12-q18',
          number: 18,
          question: 'A triangular piece of land has Base = 24 m and Height = 15 m. Find its area.',
          marks: 2,
          solution: '180 m²',
          expectedAnswer: '180',
          solutionSteps: [
            'Area of triangle: A = ½ × b × h',
            'A = ½ × 24 × 15 = 12 × 15 = 180 m²',
          ],
        },
        {
          id: 't12-q19',
          number: 19,
          question: 'A trapezium has parallel sides of 16 cm and 24 cm, with a height of 10 cm. Find its area.',
          marks: 2,
          solution: '200 cm²',
          expectedAnswer: '200',
          solutionSteps: [
            'Area of trapezium: A = ½(a + b)h',
            'A = ½ × (16 + 24) × 10 = ½ × 40 × 10 = 200 cm²',
          ],
        },
        {
          id: 't12-q20',
          number: 20,
          question: 'A cube has side length 9 cm. Calculate: a) Surface area b) Volume',
          marks: 2,
          solution: 'a) 486 cm², b) 729 cm³',
          expectedAnswer: '486',
          solutionSteps: [
            'a) Surface area SA = 6a² = 6 × (9²) = 6 × 81 = 486 cm²',
            'b) Volume V = a³ = 9³ = 729 cm³',
          ],
        },
        {
          id: 't12-q21',
          number: 21,
          question: 'A cuboid measures 12 cm × 8 cm × 6 cm. Find: a) Surface area b) Volume',
          marks: 2,
          solution: 'a) 432 cm², b) 576 cm³',
          expectedAnswer: '432',
          solutionSteps: [
            'a) SA = 2(lw + lh + wh) = 2(12×8 + 12×6 + 8×6) = 2(96 + 72 + 48) = 2(216) = 432 cm²',
            'b) Volume V = l × w × h = 12 × 8 × 6 = 576 cm³',
          ],
        },
        {
          id: 't12-q22',
          number: 22,
          question: 'A cylinder has Radius = 5 cm and Height = 14 cm. Find its volume. (Use π = 22/7)',
          marks: 2,
          solution: '1,100 cm³',
          expectedAnswer: '1100',
          solutionSteps: [
            'Volume of cylinder V = πr²h',
            'V = (22 / 7) × 5² × 14 = (22 / 7) × 25 × 14 = 22 × 25 × 2 = 1,100 cm³',
          ],
        },
        {
          id: 't12-q23',
          number: 23,
          question: 'Find the total surface area of a cylinder with Radius = 7 cm and Height = 15 cm. (Use π = 22/7)',
          marks: 2,
          solution: '968 cm²',
          expectedAnswer: '968',
          solutionSteps: [
            'Total Surface Area of cylinder SA = 2πr² + 2πrh',
            '2πr² = 2 × (22/7) × 49 = 308 cm²',
            '2πrh = 2 × (22/7) × 7 × 15 = 660 cm²',
            'Total SA = 308 + 660 = 968 cm²',
          ],
        },
        {
          id: 't12-q24',
          number: 24,
          question: 'Find the volume of a cone with Radius = 6 cm and Height = 12 cm. (Use π ≈ 3.142)',
          marks: 2,
          solution: '452.45 cm³',
          expectedAnswer: '452.45',
          solutionSteps: [
            'Volume of a cone: V = ⅓πr²h',
            'V = ⅓ × 3.142 × 6² × 12 = ⅓ × 3.142 × 36 × 12 = 3.142 × 144 = 452.45 cm³',
          ],
          diagram: `<svg viewBox="0 0 180 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><ellipse cx="90" cy="130" rx="45" ry="15" fill="#fae8ff" stroke="#c026d3" stroke-width="2"/><line x1="45" y1="130" x2="90" y2="25" stroke="#c026d3" stroke-width="2"/><line x1="135" y1="130" x2="90" y2="25" stroke="#c026d3" stroke-width="2"/><line x1="90" y1="25" x2="90" y2="130" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="90" y1="130" x2="135" y2="130" stroke="#a21caf" stroke-width="1.5" stroke-dasharray="3,2"/><text x="110" y="145" font-size="10" font-weight="bold" fill="#a21caf">r=6cm</text><text x="95" y="80" font-size="10" font-weight="bold" fill="#a21caf">h=12cm</text></svg>`,
        },
        {
          id: 't12-q25',
          number: 25,
          question: 'Find the volume of a sphere with radius 7 cm. (Use π = 22/7)',
          marks: 2,
          solution: '1,437.33 cm³',
          expectedAnswer: '1437.33',
          solutionSteps: [
            'Volume of sphere V = ⁴⁄₃πr³',
            'V = ⁴⁄₃ × (22 / 7) × 7³ = ⁴⁄₃ × (22 / 7) × 343 = ⁴⁄₃ × 22 × 49 = 4,312 / 3 ≈ 1,437.33 cm³',
          ],
          diagram: `<svg viewBox="0 0 180 160" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="160" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><circle cx="90" cy="80" r="50" fill="#fef2f2" stroke="#ef4444" stroke-width="2.5"/><ellipse cx="90" cy="80" rx="50" ry="16" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2"/><line x1="90" y1="80" x2="140" y2="80" stroke="#dc2626" stroke-width="2"/><text x="115" y="75" font-size="10" font-weight="bold" fill="#dc2626">r=7cm</text></svg>`,
        },
        {
          id: 't12-q26',
          number: 26,
          question: 'A water tank contains 12,000 litres. Express this volume in cubic metres (m³).',
          marks: 1,
          solution: '12 m³',
          expectedAnswer: '12',
          solutionSteps: [
            'Conversion factor: 1,000 Litres = 1 m³',
            'Volume in m³ = 12,000 ÷ 1,000 = 12 m³',
          ],
        },
        {
          id: 't12-q27',
          number: 27,
          question: 'A room measures 8 m × 6 m. The floor is to be tiled. Find the area to be tiled.',
          marks: 1,
          solution: '48 m²',
          expectedAnswer: '48',
          solutionSteps: [
            'Area of floor A = Length × Width',
            'A = 8 × 6 = 48 m²',
          ],
        },
        {
          id: 't12-q28',
          number: 28,
          question: 'A wall measures 9 m × 3.5 m. Find the area to be painted.',
          marks: 1,
          solution: '31.5 m²',
          expectedAnswer: '31.5',
          solutionSteps: [
            'Area of wall A = Length × Height',
            'A = 9 × 3.5 = 31.5 m²',
          ],
        },
        {
          id: 't12-q29',
          number: 29,
          question: 'A circular swimming pool has a diameter of 18 m. Find its circumference. (Use π ≈ 3.142)',
          marks: 2,
          solution: '56.56 m',
          expectedAnswer: '56.56',
          solutionSteps: [
            'Formula using diameter: C = πd',
            'C = 3.142 × 18 = 56.556 ≈ 56.56 m',
          ],
        },
        {
          id: 't12-q30',
          number: 30,
          question: 'A farmer fences a square field with side 65 m. Calculate the total length of fencing required.',
          marks: 1,
          solution: '260 m',
          expectedAnswer: '260',
          solutionSteps: [
            'Fencing length = Perimeter of the square field',
            'P = 4 × 65 = 260 m',
          ],
        },
      ],
    },
    {
      id: 't12-section-c',
      title: 'SECTION C – Examination Questions',
      questions: [
        {
          id: 't12-q31',
          number: 31,
          question:
            'A school playground is rectangular, measuring 120 m × 80 m. Calculate: a) The perimeter. b) The area. c) The cost of fencing at M95 per metre.',
          marks: 3,
          solution: 'a) 400 m, b) 9,600 m², c) M38,000',
          expectedAnswer: '38000',
          solutionSteps: [
            'a) Perimeter P = 2(120 + 80) = 2(200) = 400 m',
            'b) Area A = 120 × 80 = 9,600 m²',
            'c) Total fencing cost = 400 m × M95 = M38,000',
          ],
        },
        {
          id: 't12-q32',
          number: 32,
          question:
            'A cylindrical water tank has Radius = 2.5 m and Height = 4 m. (Use π = 3.142) Calculate: a) Volume in m³ b) Capacity in litres',
          marks: 3,
          solution: 'a) 78.55 m³, b) 78,550 L',
          expectedAnswer: '78.55',
          solutionSteps: [
            'a) Volume V = πr²h = 3.142 × (2.5)² × 4 = 3.142 × 6.25 × 4 = 78.55 m³',
            'b) Capacity = 78.55 × 1,000 = 78,550 Litres',
          ],
        },
        {
          id: 't12-q33',
          number: 33,
          question: 'A cone has Radius = 8 cm and Height = 15 cm. Calculate its volume. (Use π ≈ 3.142)',
          marks: 2,
          solution: '1,005.44 cm³',
          expectedAnswer: '1005.44',
          solutionSteps: [
            'Volume of cone: V = ⅓πr²h',
            'V = ⅓ × 3.142 × 8² × 15 = ⅓ × 3.142 × 64 × 15 = 3.142 × 320 = 1,005.44 cm³',
          ],
        },
        {
          id: 't12-q34',
          number: 34,
          question: 'A spherical football has a radius of 11 cm. Calculate its volume. (Use π ≈ 3.142)',
          marks: 2,
          solution: '5,576.09 cm³',
          expectedAnswer: '5576.09',
          solutionSteps: [
            'Volume of sphere: V = ⁴⁄₃πr³',
            'V = ⁴⁄₃ × 3.142 × 11³ = ⁴⁄₃ × 3.142 × 1331 = 5,576.09 cm³',
          ],
        },
        {
          id: 't12-q35',
          number: 35,
          question: 'A company manufactures wooden cubes with side 18 cm. Find: a) Surface area b) Volume',
          marks: 2,
          solution: 'a) 1,944 cm², b) 5,832 cm³',
          expectedAnswer: '1944',
          solutionSteps: [
            'a) Surface Area SA = 6a² = 6 × (18²) = 6 × 324 = 1,944 cm²',
            'b) Volume V = a³ = 18³ = 5,832 cm³',
          ],
        },
        {
          id: 't12-q36',
          number: 36,
          question:
            'A classroom measures Length = 12 m, Width = 8 m, Height = 3.5 m. Calculate: a) Floor area b) Ceiling area c) Total area of the four walls',
          marks: 3,
          solution: 'a) 96 m², b) 96 m², c) 140 m²',
          expectedAnswer: '140',
          solutionSteps: [
            'a) Floor area = 12 × 8 = 96 m²',
            'b) Ceiling area = 12 × 8 = 96 m²',
            'c) Area of 4 walls = 2(Length × Height) + 2(Width × Height)',
            '   = 2(12 × 3.5) + 2(8 × 3.5) = 2(42) + 2(28) = 84 + 56 = 140 m²',
          ],
        },
        {
          id: 't12-q37',
          number: 37,
          question:
            'A circular flower bed has a radius of 14 m. A path 2 m wide is built all around the outside. Calculate the area of the path. (Use π = 22/7)',
          marks: 3,
          solution: '188.57 m²',
          expectedAnswer: '188.57',
          solutionSteps: [
            'Inner radius r = 14 m',
            'Outer radius R = 14 + 2 = 16 m',
            'Area of path = Outer Circle Area − Inner Circle Area = π(R² − r²)',
            'Area = (22 / 7) × (16² − 14²) = (22 / 7) × (256 − 196) = (22 / 7) × 60 = 1,320 / 7 ≈ 188.57 m²',
          ],
          diagram: `<svg viewBox="0 0 200 180" class="w-full max-w-xs mx-auto my-2" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="180" fill="#f8fafc" rx="8" stroke="#e2e8f0"/><circle cx="100" cy="90" r="70" fill="#fde68a" stroke="#d97706" stroke-width="2"/><circle cx="100" cy="90" r="50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><line x1="100" y1="90" x2="150" y2="90" stroke="#15803d" stroke-width="1.5"/><line x1="150" y1="90" x2="170" y2="90" stroke="#b45309" stroke-width="1.5"/><text x="125" y="85" font-size="9" font-weight="bold" fill="#15803d">r=14m</text><text x="160" y="85" font-size="9" font-weight="bold" fill="#b45309">2m</text></svg>`,
        },
        {
          id: 't12-q38',
          number: 38,
          question:
            'A cylindrical fuel tank has Radius = 1.5 m and Height = 5 m. If the tank is 80% full, calculate: a) Total capacity in m³ b) Volume of fuel inside c) Empty space remaining',
          marks: 3,
          solution: 'a) 35.34 m³, b) 28.27 m³, c) 7.07 m³',
          expectedAnswer: '35.34',
          solutionSteps: [
            'a) Total volume V = πr²h = 3.142 × (1.5)² × 5 = 3.142 × 2.25 × 5 = 35.3475 ≈ 35.34 m³',
            'b) Volume of fuel = 80% of 35.3475 = 0.80 × 35.3475 = 28.278 ≈ 28.27 m³',
            'c) Empty space = 20% of 35.3475 = 0.20 × 35.3475 = 7.0695 ≈ 7.07 m³',
          ],
        },
        {
          id: 't12-q39',
          number: 39,
          question:
            'A rectangular swimming pool measures Length = 25 m, Width = 12 m, Depth = 2 m. Calculate: a) The volume of water required to fill the pool. b) The capacity in litres.',
          marks: 2,
          solution: 'a) 600 m³, b) 600,000 L',
          expectedAnswer: '600000',
          solutionSteps: [
            'a) Volume V = Length × Width × Depth = 25 × 12 × 2 = 600 m³',
            'b) Capacity = 600 × 1,000 = 600,000 Litres',
          ],
        },
        {
          id: 't12-q40',
          number: 40,
          question:
            'A cone and a cylinder have the same radius (6 cm) and same height (15 cm). Calculate: a) Volume of cylinder b) Volume of cone c) How many cones of this size are needed to fill the cylinder?',
          marks: 3,
          solution: 'a) 1,696.68 cm³, b) 565.56 cm³, c) 3 cones',
          expectedAnswer: '3',
          solutionSteps: [
            'a) Cylinder Volume V_cyl = πr²h = 3.142 × 6² × 15 = 3.142 × 36 × 15 = 1,696.68 cm³',
            'b) Cone Volume V_cone = ⅓πr²h = ⅓ × 1,696.68 = 565.56 cm³',
            'c) Number of cones = 1,696.68 ÷ 565.56 = 3 cones (since Cone Volume is exactly ⅓ of Cylinder Volume)',
          ],
        },
        {
          id: 't12-q41',
          number: 41,
          question:
            'A school hall floor measures 30 m × 18 m. Floor tiles are square, measuring 60 cm × 60 cm. Calculate: a) Area of floor in m² b) Area of one tile in m² c) Number of tiles required',
          marks: 3,
          solution: 'a) 540 m², b) 0.36 m², c) 1,500 tiles',
          expectedAnswer: '1500',
          solutionSteps: [
            'a) Floor area = 30 × 18 = 540 m²',
            'b) Tile side in metres = 60 cm = 0.6 m. Area of 1 tile = 0.6 × 0.6 = 0.36 m²',
            'c) Number of tiles = Floor Area ÷ Tile Area = 540 ÷ 0.36 = 1,500 tiles',
          ],
        },
        {
          id: 't12-q42',
          number: 42,
          question:
            'A storage box is in the shape of a cuboid measuring Length = 2.5 m, Width = 1.8 m, Height = 1.2 m. Calculate: a) Volume b) Total surface area',
          marks: 2,
          solution: 'a) 5.4 m³, b) 19.32 m²',
          expectedAnswer: '5.4',
          solutionSteps: [
            'a) Volume V = l × w × h = 2.5 × 1.8 × 1.2 = 5.4 m³',
            'b) Surface area SA = 2(lw + lh + wh) = 2(2.5×1.8 + 2.5×1.2 + 1.8×1.2)',
            '   = 2(4.5 + 3.0 + 2.16) = 2(9.66) = 19.32 m²',
          ],
        },
        {
          id: 't12-q43',
          number: 43,
          question:
            'A farmer owns a circular field with radius 35 m. He plants maize on the entire field. If 1 m² requires 5 seeds, calculate: a) Area of the field (use π = 22/7) b) Total number of seeds required',
          marks: 3,
          solution: 'a) 3,850 m², b) 19,250 seeds',
          expectedAnswer: '19250',
          solutionSteps: [
            'a) Area A = πr² = (22 / 7) × 35² = (22 / 7) × 1225 = 22 × 175 = 3,850 m²',
            'b) Total seeds required = 3,850 × 5 = 19,250 seeds',
          ],
        },
        {
          id: 't12-q44',
          number: 44,
          question:
            'A rainwater harvesting tank is a cylinder with Diameter = 2 m and Height = 3.5 m. (Use π = 22/7) Calculate: a) The radius b) The volume c) The capacity in litres',
          marks: 3,
          solution: 'a) 1 m, b) 11 m³, c) 11,000 L',
          expectedAnswer: '11000',
          solutionSteps: [
            'a) Radius r = Diameter ÷ 2 = 2 ÷ 2 = 1 m',
            'b) Volume V = πr²h = (22 / 7) × 1² × 3.5 = 22 × 0.5 = 11 m³',
            'c) Capacity in litres = 11 × 1,000 = 11,000 Litres',
          ],
        },
        {
          id: 't12-q45',
          number: 45,
          question:
            'A construction company is building a concrete slab measuring Length = 18 m, Width = 12 m, Thickness = 0.20 m. Calculate: a) Area of the slab b) Volume of concrete required c) If 1 m³ of concrete costs M1,850, calculate the total cost',
          marks: 3,
          solution: 'a) 216 m², b) 43.2 m³, c) M79,920',
          expectedAnswer: '79920',
          solutionSteps: [
            'a) Area of slab = 18 × 12 = 216 m²',
            'b) Volume of concrete = 216 × 0.20 = 43.2 m³',
            'c) Total cost = 43.2 m³ × M1,850 = M79,920',
          ],
        },
      ],
    },
  ],
};
