import type { Booklet } from './booklets';

export const mathsBooklet3: Booklet = {
  id: 'booklet-3',
  title: 'LGCSE Mathematics Practice Booklet 3',
  subtitle: 'Drawings, Graphs & Construction',
  description: 'Practice booklet focused on geometric constructions, coordinate graphs, transformations, and technical drawings.',
  totalMarks: 45,
  sections: [
    {
      id: 'b3-section-1',
      title: 'Section 1: Geometric Constructions',
      questions: [
        {
          id: 'b3-q1',
          number: 1,
          question: 'Using a ruler and protractor, construct triangle ABC where AB = 8 cm, angle A = 60 degrees, and AC = 6 cm. Measure and state the length of BC.',
          diagram: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="200" fill="#f9fafb" rx="8"/>
            <text x="150" y="20" text-anchor="middle" font-size="14" fill="#6b7280" font-family="sans-serif">Construction Grid</text>
            <line x1="50" y1="180" x2="250" y2="180" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="140" x2="250" y2="140" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="100" x2="250" y2="100" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="60" x2="250" y2="60" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="70" y1="40" x2="70" y2="190" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="130" y1="40" x2="130" y2="190" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="190" y1="40" x2="190" y2="190" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="250" y1="40" x2="250" y2="190" stroke="#e5e7eb" stroke-width="1"/>
            <text x="60" y="195" font-size="12" fill="#9ca3af">A</text>
            <text x="140" y="195" font-size="12" fill="#9ca3af">B (draw here)</text>
            <text x="230" y="195" font-size="12" fill="#9ca3af">C (draw here)</text>
          </svg>`,
          marks: 4,
          solution: 'BC ≈ 7.2 cm',
          solutionSteps: [
            'Draw AB = 8 cm horizontally',
            'At point A, measure 60° using a protractor',
            'Draw AC = 6 cm along the 60° angle',
            'Connect B to C',
            'Measure BC with a ruler: approximately 7.2 cm',
          ],
        },
        {
          id: 'b3-q2',
          number: 2,
          question: 'Construct a perpendicular bisector of the line segment PQ where PQ = 10 cm. Label the midpoint M.',
          diagram: `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="120" fill="#f9fafb" rx="8"/>
            <line x1="40" y1="60" x2="260" y2="60" stroke="#1f2937" stroke-width="2"/>
            <circle cx="40" cy="60" r="4" fill="#1f2937"/>
            <circle cx="260" cy="60" r="4" fill="#1f2937"/>
            <text x="40" y="85" text-anchor="middle" font-size="14" fill="#1f2937" font-weight="bold">P</text>
            <text x="260" y="85" text-anchor="middle" font-size="14" fill="#1f2937" font-weight="bold">Q</text>
            <text x="150" y="110" text-anchor="middle" font-size="12" fill="#6b7280">10 cm</text>
          </svg>`,
          marks: 3,
          solution: 'M is at the midpoint, 5 cm from P and 5 cm from Q.',
          solutionSteps: [
            'Place compass at P, set width greater than half of PQ',
            'Draw arcs above and below the line',
            'Without changing compass width, place at Q',
            'Draw arcs intersecting the first two arcs',
            'Draw a line through the two intersection points',
            'This line bisects PQ at M (5 cm from each end)',
          ],
        },
        {
          id: 'b3-q3',
          number: 3,
          question: 'Bisect the angle XYZ shown below. Show your construction arcs.',
          diagram: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="200" fill="#f9fafb" rx="8"/>
            <line x1="40" y1="160" x2="150" y2="100" stroke="#1f2937" stroke-width="2"/>
            <line x1="150" y1="100" x2="260" y2="160" stroke="#1f2937" stroke-width="2"/>
            <circle cx="150" cy="100" r="4" fill="#1f2937"/>
            <text x="40" y="175" font-size="14" fill="#1f2937" font-weight="bold">X</text>
            <text x="150" y="90" text-anchor="middle" font-size="14" fill="#1f2937" font-weight="bold">Y</text>
            <text x="260" y="175" font-size="14" fill="#1f2937" font-weight="bold">Z</text>
            <path d="M 80 145 A 75 75 0 0 1 115 115" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4"/>
            <text x="85" y="125" font-size="11" fill="#3b82f6">60°</text>
          </svg>`,
          marks: 3,
          solution: 'The bisector divides the angle into two equal parts of 30° each.',
          solutionSteps: [
            'Place compass at Y, draw an arc cutting both arms',
            'From each intersection point, draw arcs of equal radius',
            'The two arcs intersect at a point inside the angle',
            'Draw a line from Y through this intersection point',
            'This line bisects angle XYZ',
          ],
        },
        {
          id: 'b3-q4',
          number: 4,
          question: 'Draw a regular hexagon with side length 4 cm. Use a compass and ruler only.',
          diagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="260" fill="#f9fafb" rx="8"/>
            <circle cx="150" cy="140" r="80" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4"/>
            <text x="150" y="15" text-anchor="middle" font-size="12" fill="#6b7280">Draw construction circle first</text>
            <text x="150" y="250" text-anchor="middle" font-size="12" fill="#9ca3af">Mark 6 equally spaced points on the circle</text>
          </svg>`,
          marks: 3,
          solution: 'A regular hexagon with all sides equal to 4 cm.',
          solutionSteps: [
            'Draw a circle with radius 4 cm (same as side length)',
            'Mark any point on the circle as vertex A',
            'Without changing the compass width, place at A and mark the next point',
            'Repeat around the circle to get 6 points',
            'Connect adjacent points with straight lines',
            'You now have a regular hexagon',
          ],
        },
      ],
    },
    {
      id: 'b3-section-2',
      title: 'Section 2: Coordinate Graphs',
      questions: [
        {
          id: 'b3-q5',
          number: 5,
          question: 'Plot the following points on a coordinate grid and join them in order: A(1,2), B(4,2), C(4,5), D(1,5). What shape do you get? Find its area.',
          diagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="300" fill="#f9fafb" rx="8"/>
            <line x1="50" y1="250" x2="280" y2="250" stroke="#1f2937" stroke-width="2"/>
            <line x1="50" y1="250" x2="50" y2="20" stroke="#1f2937" stroke-width="2"/>
            <text x="165" y="275" text-anchor="middle" font-size="14" fill="#1f2937">x</text>
            <text x="30" y="135" text-anchor="middle" font-size="14" fill="#1f2937" transform="rotate(-90 30 135)">y</text>
            <line x1="90" y1="250" x2="90" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="130" y1="250" x2="130" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="170" y1="250" x2="170" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="210" y1="250" x2="210" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="250" y1="250" x2="250" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="210" x2="280" y2="210" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="170" x2="280" y2="170" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="130" x2="280" y2="130" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="90" x2="280" y2="90" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="50" y1="50" x2="280" y2="50" stroke="#e5e7eb" stroke-width="1"/>
            <text x="50" y="265" text-anchor="middle" font-size="10" fill="#6b7280">0</text>
            <text x="90" y="265" text-anchor="middle" font-size="10" fill="#6b7280">1</text>
            <text x="130" y="265" text-anchor="middle" font-size="10" fill="#6b7280">2</text>
            <text x="170" y="265" text-anchor="middle" font-size="10" fill="#6b7280">3</text>
            <text x="210" y="265" text-anchor="middle" font-size="10" fill="#6b7280">4</text>
            <text x="250" y="265" text-anchor="middle" font-size="10" fill="#6b7280">5</text>
            <text x="40" y="254" text-anchor="end" font-size="10" fill="#6b7280">0</text>
            <text x="40" y="214" text-anchor="end" font-size="10" fill="#6b7280">1</text>
            <text x="40" y="174" text-anchor="end" font-size="10" fill="#6b7280">2</text>
            <text x="40" y="134" text-anchor="end" font-size="10" fill="#6b7280">3</text>
            <text x="40" y="94" text-anchor="end" font-size="10" fill="#6b7280">4</text>
            <text x="40" y="54" text-anchor="end" font-size="10" fill="#6b7280">5</text>
            <text x="90" y="195" font-size="11" fill="#3b82f6" font-weight="bold">A</text>
            <text x="210" y="195" font-size="11" fill="#3b82f6" font-weight="bold">B</text>
            <text x="210" y="85" font-size="11" fill="#3b82f6" font-weight="bold">C</text>
            <text x="80" y="85" font-size="11" fill="#3b82f6" font-weight="bold">D</text>
          </svg>`,
          marks: 4,
          solution: 'Rectangle with area = 9 square units',
          solutionSteps: [
            'Plot A(1,2), B(4,2), C(4,5), D(1,5) on the grid',
            'Join A→B→C→D→A in order',
            'The shape is a rectangle (all angles 90°)',
            'Length AB = 4 - 1 = 3 units',
            'Width BC = 5 - 2 = 3 units',
            'Area = 3 × 3 = 9 square units',
          ],
        },
        {
          id: 'b3-q6',
          number: 6,
          question: 'Draw the graph of y = 2x - 1 for values of x from -2 to 3. Use a table of values and plot at least 6 points.',
          diagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="300" fill="#f9fafb" rx="8"/>
            <line x1="150" y1="280" x2="150" y2="20" stroke="#1f2937" stroke-width="2"/>
            <line x1="20" y1="150" x2="290" y2="150" stroke="#1f2937" stroke-width="2"/>
            <text x="150" y="295" text-anchor="middle" font-size="12" fill="#1f2937">x</text>
            <text x="10" y="145" text-anchor="end" font-size="12" fill="#1f2937">y</text>
            <text x="150" y="12" text-anchor="middle" font-size="10" fill="#9ca3af">y = 2x - 1</text>
            <line x1="55" y1="280" x2="55" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="90" y1="280" x2="90" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="125" y1="280" x2="125" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="185" y1="280" x2="185" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="220" y1="280" x2="220" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="255" y1="280" x2="255" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="55" x2="290" y2="55" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="90" x2="290" y2="90" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="125" x2="290" y2="125" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="185" x2="290" y2="185" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="220" x2="290" y2="220" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="255" x2="290" y2="255" stroke="#e5e7eb" stroke-width="1"/>
            <text x="55" y="165" text-anchor="middle" font-size="10" fill="#6b7280">-2</text>
            <text x="90" y="165" text-anchor="middle" font-size="10" fill="#6b7280">-1</text>
            <text x="125" y="165" text-anchor="middle" font-size="10" fill="#6b7280">0</text>
            <text x="185" y="165" text-anchor="middle" font-size="10" fill="#6b7280">1</text>
            <text x="220" y="165" text-anchor="middle" font-size="10" fill="#6b7280">2</text>
            <text x="255" y="165" text-anchor="middle" font-size="10" fill="#6b7280">3</text>
          </svg>`,
          marks: 4,
          solution: 'A straight line passing through (0,-1) with gradient 2',
          solutionSteps: [
            'Create table: x=-2,y=-5; x=-1,y=-3; x=0,y=-1; x=1,y=1; x=2,y=3; x=3,y=5',
            'Plot each point on the coordinate grid',
            'Draw a straight line through all the points',
            'The line crosses the y-axis at (0,-1) - the y-intercept',
            'The gradient (slope) = rise/run = 2',
          ],
        },
        {
          id: 'b3-q7',
          number: 7,
          question: 'The distance-time graph below shows a car journey. Find: (a) the speed during the first hour, (b) the distance at 3 hours, (c) the time when the car was stationary.',
          diagram: `<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:450px">
            <rect width="350" height="250" fill="#f9fafb" rx="8"/>
            <line x1="60" y1="210" x2="330" y2="210" stroke="#1f2937" stroke-width="2"/>
            <line x1="60" y1="210" x2="60" y2="30" stroke="#1f2937" stroke-width="2"/>
            <text x="195" y="240" text-anchor="middle" font-size="12" fill="#1f2937">Time (hours)</text>
            <text x="25" y="120" text-anchor="middle" font-size="12" fill="#1f2937" transform="rotate(-90 25 120)">Distance (km)</text>
            <text x="90" y="225" text-anchor="middle" font-size="10" fill="#6b7280">1</text>
            <text x="140" y="225" text-anchor="middle" font-size="10" fill="#6b7280">2</text>
            <text x="190" y="225" text-anchor="middle" font-size="10" fill="#6b7280">3</text>
            <text x="240" y="225" text-anchor="middle" font-size="10" fill="#6b7280">4</text>
            <text x="290" y="225" text-anchor="middle" font-size="10" fill="#6b7280">5</text>
            <text x="50" y="185" text-anchor="end" font-size="10" fill="#6b7280">20</text>
            <text x="50" y="145" text-anchor="end" font-size="10" fill="#6b7280">40</text>
            <text x="50" y="105" text-anchor="end" font-size="10" fill="#6b7280">60</text>
            <text x="50" y="65" text-anchor="end" font-size="10" fill="#6b7280">80</text>
            <polyline points="60,210 90,185 140,145 190,145 240,105 290,65" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <circle cx="60" cy="210" r="4" fill="#3b82f6"/>
            <circle cx="90" cy="185" r="4" fill="#3b82f6"/>
            <circle cx="140" cy="145" r="4" fill="#3b82f6"/>
            <circle cx="190" cy="145" r="4" fill="#3b82f6"/>
            <circle cx="240" cy="105" r="4" fill="#3b82f6"/>
            <circle cx="290" cy="65" r="4" fill="#3b82f6"/>
          </svg>`,
          marks: 5,
          solution: '(a) 20 km/h, (b) 60 km, (c) Between hours 2 and 3',
          solutionSteps: [
            '(a) Speed = distance/time = 20 km / 1 h = 20 km/h',
            '(b) At 3 hours, distance = 60 km (read from graph)',
            '(c) The flat section (horizontal line) shows the car was stationary',
            'This occurs between hour 2 and hour 3',
            'The car did not change distance during this time',
          ],
        },
      ],
    },
    {
      id: 'b3-section-3',
      title: 'Section 3: Transformations',
      questions: [
        {
          id: 'b3-q8',
          number: 8,
          question: 'The shape below is reflected in the mirror line x = 2. Draw the image and state the coordinates of the new vertices.',
          diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="280" fill="#f9fafb" rx="8"/>
            <line x1="30" y1="240" x2="280" y2="240" stroke="#1f2937" stroke-width="2"/>
            <line x1="30" y1="240" x2="30" y2="20" stroke="#1f2937" stroke-width="2"/>
            <line x1="130" y1="240" x2="130" y2="20" stroke="#e11d48" stroke-width="2" stroke-dasharray="8,4"/>
            <text x="130" y="15" text-anchor="middle" font-size="11" fill="#e11d48">Mirror line x=2</text>
            <text x="50" y="255" text-anchor="middle" font-size="10" fill="#6b7280">0</text>
            <text x="80" y="255" text-anchor="middle" font-size="10" fill="#6b7280">1</text>
            <text x="130" y="255" text-anchor="middle" font-size="10" fill="#6b7280">2</text>
            <text x="180" y="255" text-anchor="middle" font-size="10" fill="#6b7280">3</text>
            <text x="230" y="255" text-anchor="middle" font-size="10" fill="#6b7280">4</text>
            <text x="20" y="215" text-anchor="end" font-size="10" fill="#6b7280">1</text>
            <text x="20" y="165" text-anchor="end" font-size="10" fill="#6b7280">2</text>
            <text x="20" y="115" text-anchor="end" font-size="10" fill="#6b7280">3</text>
            <text x="20" y="65" text-anchor="end" font-size="10" fill="#6b7280">4</text>
            <polygon points="80,210 100,210 100,160 80,160" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
            <text x="75" y="225" font-size="10" fill="#3b82f6" font-weight="bold">P</text>
            <text x="95" y="225" font-size="10" fill="#3b82f6" font-weight="bold">Q</text>
            <text x="95" y="150" font-size="10" fill="#3b82f6" font-weight="bold">R</text>
            <text x="75" y="150" font-size="10" fill="#3b82f6" font-weight="bold">S</text>
          </svg>`,
          marks: 4,
          solution: 'P\'(4,1), Q\'(3,1), R\'(3,3), S\'(4,3) - a mirror image on the right side of x=2',
          solutionSteps: [
            'Original coordinates: P(0,1), Q(1,1), R(1,3), S(0,3)',
            'For reflection in x=2, each point moves to: x\' = 2(2) - x = 4 - x',
            'P(0,1) → P\'(4,1)',
            'Q(1,1) → Q\'(3,1)',
            'R(1,3) → R\'(3,3)',
            'S(0,3) → S\'(4,3)',
          ],
        },
        {
          id: 'b3-q9',
          number: 9,
          question: 'Rotate the triangle with vertices A(1,1), B(3,1), C(1,4) through 90 degrees clockwise about the origin. Draw the original and image.',
          diagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="300" fill="#f9fafb" rx="8"/>
            <line x1="150" y1="280" x2="150" y2="20" stroke="#1f2937" stroke-width="2"/>
            <line x1="20" y1="150" x2="290" y2="150" stroke="#1f2937" stroke-width="2"/>
            <text x="150" y="295" text-anchor="middle" font-size="12" fill="#1f2937">x</text>
            <text x="10" y="145" text-anchor="end" font-size="12" fill="#1f2937">y</text>
            <text x="275" y="145" text-anchor="end" font-size="10" fill="#9ca3af">O</text>
            <line x1="60" y1="280" x2="60" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="90" y1="280" x2="90" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="120" y1="280" x2="120" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="180" y1="280" x2="180" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="210" y1="280" x2="210" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="240" y1="280" x2="240" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="60" x2="290" y2="60" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="90" x2="290" y2="90" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="120" x2="290" y2="120" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="180" x2="290" y2="180" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="210" x2="290" y2="210" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="240" x2="290" y2="240" stroke="#e5e7eb" stroke-width="1"/>
            <polygon points="120,120 180,120 120,30" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
            <text x="115" y="135" font-size="11" fill="#3b82f6" font-weight="bold">A(1,1)</text>
            <text x="185" y="135" font-size="11" fill="#3b82f6" font-weight="bold">B(3,1)</text>
            <text x="105" y="25" font-size="11" fill="#3b82f6" font-weight="bold">C(1,4)</text>
          </svg>`,
          marks: 4,
          solution: 'A\'(1,-1), B\'(1,-3), C\'(4,-1)',
          solutionSteps: [
            'Original: A(1,1), B(3,1), C(1,4)',
            'Rule for 90° clockwise rotation about origin: (x,y) → (y,-x)',
            'A(1,1) → A\'(1,-1)',
            'B(3,1) → B\'(1,-3)',
            'C(1,4) → C\'(4,-1)',
            'Draw the new triangle and label the vertices',
          ],
        },
        {
          id: 'b3-q10',
          number: 10,
          question: 'Enlarge the rectangle with vertices P(1,1), Q(3,1), R(3,2), S(1,2) by scale factor 2, centre the origin (0,0). Draw both shapes.',
          diagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px">
            <rect width="300" height="300" fill="#f9fafb" rx="8"/>
            <line x1="150" y1="280" x2="150" y2="20" stroke="#1f2937" stroke-width="2"/>
            <line x1="20" y1="150" x2="290" y2="150" stroke="#1f2937" stroke-width="2"/>
            <text x="150" y="295" text-anchor="middle" font-size="12" fill="#1f2937">x</text>
            <text x="10" y="145" text-anchor="end" font-size="12" fill="#1f2937">y</text>
            <line x1="60" y1="280" x2="60" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="90" y1="280" x2="90" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="120" y1="280" x2="120" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="180" y1="280" x2="180" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="210" y1="280" x2="210" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="240" y1="280" x2="240" y2="20" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="60" x2="290" y2="60" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="90" x2="290" y2="90" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="120" x2="290" y2="120" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="180" x2="290" y2="180" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="210" x2="290" y2="210" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="20" y1="240" x2="290" y2="240" stroke="#e5e7eb" stroke-width="1"/>
            <polygon points="120,120 180,120 180,90 120,90" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
            <text x="115" y="135" font-size="9" fill="#3b82f6">P</text>
            <text x="185" y="135" font-size="9" fill="#3b82f6">Q</text>
            <text x="185" y="85" font-size="9" fill="#3b82f6">R</text>
            <text x="115" y="85" font-size="9" fill="#3b82f6">S</text>
          </svg>`,
          marks: 4,
          solution: 'P\'(2,2), Q\'(6,2), R\'(6,4), S\'(2,4) - doubled dimensions',
          solutionSteps: [
            'Original: P(1,1), Q(3,1), R(3,2), S(1,2)',
            'Scale factor 2 means multiply each coordinate by 2',
            'P(1,1) → P\'(2,2)',
            'Q(3,1) → Q\'(6,2)',
            'R(3,2) → R\'(6,4)',
            'S(1,2) → S\'(2,4)',
            'The enlarged shape has double the width and height',
          ],
        },
      ],
    },
    {
      id: 'b3-section-4',
      title: 'Section 4: Bar Charts and Pie Charts',
      questions: [
        {
          id: 'b3-q11',
          number: 11,
          question: 'Draw a bar chart to show the favourite fruits of 40 students: Apples 12, Bananas 8, Oranges 14, Grapes 6.',
          diagram: `<svg viewBox="0 0 350 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:450px">
            <rect width="350" height="280" fill="#f9fafb" rx="8"/>
            <line x1="60" y1="230" x2="330" y2="230" stroke="#1f2937" stroke-width="2"/>
            <line x1="60" y1="230" x2="60" y2="30" stroke="#1f2937" stroke-width="2"/>
            <text x="195" y="260" text-anchor="middle" font-size="12" fill="#1f2937">Fruit</text>
            <text x="25" y="130" text-anchor="middle" font-size="12" fill="#1f2937" transform="rotate(-90 25 130)">Number of Students</text>
            <rect x="85" y="110" width="40" height="120" fill="#3b82f6" rx="4"/>
            <rect x="150" y="150" width="40" height="80" fill="#10b981" rx="4"/>
            <rect x="215" y="90" width="40" height="140" fill="#f59e0b" rx="4"/>
            <rect x="280" y="170" width="40" height="60" fill="#ef4444" rx="4"/>
            <text x="105" y="248" text-anchor="middle" font-size="11" fill="#1f2937">Apples</text>
            <text x="170" y="248" text-anchor="middle" font-size="11" fill="#1f2937">Bananas</text>
            <text x="235" y="248" text-anchor="middle" font-size="11" fill="#1f2937">Oranges</text>
            <text x="300" y="248" text-anchor="middle" font-size="11" fill="#1f2937">Grapes</text>
            <text x="105" y="105" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">12</text>
            <text x="170" y="145" text-anchor="middle" font-size="10" fill="#10b981" font-weight="bold">8</text>
            <text x="235" y="85" text-anchor="middle" font-size="10" fill="#f59e0b" font-weight="bold">14</text>
            <text x="300" y="165" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">6</text>
            <text x="50" y="234" text-anchor="end" font-size="10" fill="#6b7280">0</text>
            <text x="50" y="190" text-anchor="end" font-size="10" fill="#6b7280">5</text>
            <text x="50" y="150" text-anchor="end" font-size="10" fill="#6b7280">10</text>
            <text x="50" y="110" text-anchor="end" font-size="10" fill="#6b7280">15</text>
          </svg>`,
          marks: 4,
          solution: 'Bar chart with: Apples=12, Bananas=8, Oranges=14, Grapes=6',
          solutionSteps: [
            'Draw x-axis (fruits) and y-axis (number of students)',
            'Scale y-axis from 0 to at least 14',
            'Draw bars with correct heights for each fruit',
            'Label each bar with its fruit name',
            'Title the chart "Favourite Fruits of 40 Students"',
          ],
        },
        {
          id: 'b3-q12',
          number: 12,
          question: 'A survey of 60 students showed: 20 prefer football, 15 prefer cricket, 18 prefer tennis, 7 prefer other sports. Draw a pie chart to represent this data.',
          diagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:350px">
            <rect width="300" height="300" fill="#f9fafb" rx="8"/>
            <circle cx="150" cy="140" r="100" fill="none" stroke="#e5e7eb" stroke-width="2"/>
            <text x="150" y="15" text-anchor="middle" font-size="12" fill="#6b7280">Complete the pie chart</text>
            <text x="150" y="275" text-anchor="middle" font-size="11" fill="#6b7280">Calculate angles: Football = 120°, Cricket = 90°</text>
            <text x="150" y="290" text-anchor="middle" font-size="11" fill="#6b7280">Tennis = 108°, Other = 42°</text>
          </svg>`,
          marks: 5,
          solution: 'Football: 120°, Cricket: 90°, Tennis: 108°, Other: 42°',
          solutionSteps: [
            'Total = 20 + 15 + 18 + 7 = 60 students',
            'Football angle = (20/60) × 360° = 120°',
            'Cricket angle = (15/60) × 360° = 90°',
            'Tennis angle = (18/60) × 360° = 108°',
            'Other angle = (7/60) × 360° = 42°',
            'Check: 120° + 90° + 108° + 42° = 360°',
          ],
        },
        {
          id: 'b3-q13',
          number: 13,
          question: 'The line graph shows temperature readings over 6 days. Read the temperatures and find: (a) the highest temperature, (b) the lowest temperature, (c) the range.',
          diagram: `<svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:450px">
            <rect width="350" height="250" fill="#f9fafb" rx="8"/>
            <line x1="60" y1="210" x2="330" y2="210" stroke="#1f2937" stroke-width="2"/>
            <line x1="60" y1="210" x2="60" y2="30" stroke="#1f2937" stroke-width="2"/>
            <text x="195" y="240" text-anchor="middle" font-size="12" fill="#1f2937">Day</text>
            <text x="25" y="120" text-anchor="middle" font-size="12" fill="#1f2937" transform="rotate(-90 25 120)">Temp (°C)</text>
            <text x="100" y="225" text-anchor="middle" font-size="10" fill="#6b7280">Mon</text>
            <text x="145" y="225" text-anchor="middle" font-size="10" fill="#6b7280">Tue</text>
            <text x="190" y="225" text-anchor="middle" font-size="10" fill="#6b7280">Wed</text>
            <text x="235" y="225" text-anchor="middle" font-size="10" fill="#6b7280">Thu</text>
            <text x="280" y="225" text-anchor="middle" font-size="10" fill="#6b7280">Fri</text>
            <text x="50" y="185" text-anchor="end" font-size="10" fill="#6b7280">10</text>
            <text x="50" y="155" text-anchor="end" font-size="10" fill="#6b7280">15</text>
            <text x="50" y="125" text-anchor="end" font-size="10" fill="#6b7280">20</text>
            <text x="50" y="95" text-anchor="end" font-size="10" fill="#6b7280">25</text>
            <text x="50" y="65" text-anchor="end" font-size="10" fill="#6b7280">30</text>
            <line x1="60" y1="185" x2="330" y2="185" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4"/>
            <line x1="60" y1="155" x2="330" y2="155" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4"/>
            <line x1="60" y1="125" x2="330" y2="125" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4"/>
            <line x1="60" y1="95" x2="330" y2="95" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4"/>
            <polyline points="100,155 145,125 190,95 235,125 280,155" fill="none" stroke="#ef4444" stroke-width="3"/>
            <circle cx="100" cy="155" r="5" fill="#ef4444"/>
            <circle cx="145" cy="125" r="5" fill="#ef4444"/>
            <circle cx="190" cy="95" r="5" fill="#ef4444"/>
            <circle cx="235" cy="125" r="5" fill="#ef4444"/>
            <circle cx="280" cy="155" r="5" fill="#ef4444"/>
            <text x="100" y="145" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">15</text>
            <text x="145" y="115" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">20</text>
            <text x="190" y="85" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">25</text>
            <text x="235" y="115" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">20</text>
            <text x="280" y="145" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">15</text>
          </svg>`,
          marks: 3,
          solution: '(a) 25°C, (b) 15°C, (c) Range = 10°C',
          solutionSteps: [
            '(a) Highest temperature = 25°C (Wednesday)',
            '(b) Lowest temperature = 15°C (Monday and Friday)',
            '(c) Range = Highest - Lowest = 25 - 15 = 10°C',
          ],
        },
      ],
    },
  ],
};
