import type { Booklet } from './booklets';

export const physicsBooklets: Booklet[] = [
  {
    id: 'phys-booklet-1',
    title: 'IGCSE Physics Practice Booklet 1',
    subtitle: 'Forces, Energy & Waves',
    description: 'A comprehensive practice booklet covering fundamental IGCSE Physics topics including forces, energy transfers, and waves.',
    totalMarks: 25,
    sections: [
      {
        id: 'phys-s1',
        title: 'Section 1: Forces',
        questions: [
          {
            id: 'phys-q1',
            number: 1,
            question: 'Define "force" and state its SI unit.',
            marks: 1,
            solution: 'A force is a push or a pull that can change the motion or shape of an object. The SI unit is the newton (N).',
            solutionSteps: [
              'Force is a vector quantity (has magnitude and direction)',
              'It can cause acceleration, deceleration, or deformation',
              'Measured in newtons (N)',
            ],
          },
          {
            id: 'phys-q2',
            number: 2,
            question: 'A resultant force of 10 N acts on a mass of 2 kg. Calculate the acceleration.',
            marks: 2,
            solution: 'a = F/m = 10 N ÷ 2 kg = 5 m/s²',
            solutionSteps: [
              'Use Newton\'s Second Law: F = ma',
              'Rearrange: a = F/m',
              'a = 10 ÷ 2 = 5 m/s²',
            ],
          },
          {
            id: 'phys-q3',
            number: 3,
            question: 'State the relationship between the gravitational potential energy of an object, its mass, the gravitational field strength, and its height.',
            marks: 1,
            solution: 'GPE = mgh (where m = mass, g = gravitational field strength, h = height)',
            solutionSteps: [
              'GPE depends on mass, gravity, and height',
              'g ≈ 10 N/kg on Earth',
              'Energy is measured in joules (J)',
            ],
          },
          {
            id: 'phys-q4',
            number: 4,
            question: 'A book of mass 3 kg is lifted 2 m off the ground. Calculate the gravitational potential energy gained. (g = 10 N/kg)',
            marks: 2,
            solution: 'GPE = mgh = 3 × 10 × 2 = 60 J',
            solutionSteps: [
              'GPE = mgh',
              'GPE = 3 kg × 10 N/kg × 2 m',
              'GPE = 60 J',
            ],
          },
        ],
      },
      {
        id: 'phys-s2',
        title: 'Section 2: Energy',
        questions: [
          {
            id: 'phys-q5',
            number: 5,
            question: 'State the principle of conservation of energy.',
            marks: 1,
            solution: 'Energy cannot be created or destroyed; it can only be transferred from one form to another. The total energy in a closed system remains constant.',
            solutionSteps: [
              'Energy is always conserved',
              'It changes form (e.g., kinetic to potential)',
              'No energy is lost, only converted',
            ],
          },
          {
            id: 'phys-q6',
            number: 6,
            question: 'Calculate the kinetic energy of a car of mass 1000 kg travelling at 20 m/s.',
            marks: 2,
            solution: 'KE = ½mv² = ½ × 1000 × 20² = 200,000 J = 200 kJ',
            solutionSteps: [
              'KE = ½mv²',
              'KE = 0.5 × 1000 × (20)²',
              'KE = 0.5 × 1000 × 400',
              'KE = 200,000 J = 200 kJ',
            ],
          },
          {
            id: 'phys-q7',
            number: 7,
            question: 'State the formula for electrical power.',
            marks: 1,
            solution: 'P = IV (Power = Current × Voltage)',
            solutionSteps: [
              'Power is the rate of energy transfer',
              'Measured in watts (W)',
              '1 W = 1 J/s',
            ],
          },
        ],
      },
      {
        id: 'phys-s3',
        title: 'Section 3: Waves',
        questions: [
          {
            id: 'phys-q8',
            number: 8,
            question: 'Define "wave speed" and state its formula.',
            marks: 1,
            solution: 'Wave speed is the speed at which energy is transferred through a medium. v = fλ (speed = frequency × wavelength).',
            solutionSteps: [
              'Wave speed (v) is measured in m/s',
              'Frequency (f) is measured in Hz',
              'Wavelength (λ) is measured in metres',
            ],
          },
          {
            id: 'phys-q9',
            number: 9,
            question: 'A sound wave has a frequency of 440 Hz and a wavelength of 0.78 m. Calculate the speed of sound.',
            marks: 2,
            solution: 'v = fλ = 440 × 0.78 = 343.2 m/s',
            solutionSteps: [
              'v = fλ',
              'v = 440 Hz × 0.78 m',
              'v = 343.2 m/s',
            ],
          },
          {
            id: 'phys-q10',
            number: 10,
            question: 'State the three properties of electromagnetic waves.',
            marks: 2,
            solution: '(1) They transfer energy. (2) They do not need a medium to travel. (3) They travel at the speed of light in a vacuum (3 × 10⁸ m/s).',
            solutionSteps: [
              'EM waves include radio, micro, IR, visible, UV, X-ray, gamma',
              'They are transverse waves',
              'They all travel at c = 3 × 10⁸ m/s in a vacuum',
              'They can be reflected, refracted, and diffracted',
            ],
          },
          {
            id: 'phys-q11',
            number: 11,
            question: 'Light travels from glass (refractive index 1.5) into air (refractive index 1.0). Calculate the critical angle.',
            marks: 2,
            solution: 'sin c = 1/n = 1/1.5 = 0.667. c = 41.8°',
            solutionSteps: [
              'sin c = n₂/n₁ = 1.0/1.5',
              'sin c = 0.6667',
              'c = sin⁻¹(0.6667) = 41.8°',
              'Total internal reflection occurs above this angle',
            ],
          },
        ],
      },
    ],
  },
];
