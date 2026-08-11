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
  {
    id: 'lgcse-phys-sci-2023-p3',
    title: 'LGCSE Physical Science 0181/03 Question Paper & Answers (Oct/Nov 2023)',
    subtitle: 'Paper 3 Extended Theory — 80 Marks Complete Workbook',
    description: 'Official Examinations Council of Lesotho (ECOL) LGCSE Physical Science 0181/03 Paper 3 Extended Theory Oct/Nov 2023 exam paper. Includes all 10 questions, diagrams, step-by-step worked solutions, and complete mark scheme answers.',
    totalMarks: 80,
    sections: [
      {
        id: 'lgcse-2023-s1',
        title: 'Section A: Physics Principles (Questions 1 - 6)',
        questions: [
          {
            id: 'lgcse-2023-q1',
            number: 1,
            question: `A car of mass 2000 kg travels from rest and reaches a speed of 25 m/s in 10 seconds.

(a) Determine the weight of the car. (Use g = 10 N/kg) [2 marks]
(b) Calculate:
   (i) acceleration of the car [2 marks]
   (ii) resultant force on the car [2 marks]
(c) Show that the kinetic energy of the car at 10th seconds is 625 kJ. [3 marks]`,
            diagram: `<svg viewBox="0 0 450 160" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><line x1="20" y1="130" x2="430" y2="130" stroke="#475569" stroke-width="4" stroke-dasharray="8,4"/><g transform="translate(130, 60)"><rect x="15" y="25" width="140" height="40" rx="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><path d="M 40 25 Q 60 5 95 5 Q 125 5 135 25 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/><circle cx="45" cy="65" r="16" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/><circle cx="45" cy="65" r="6" fill="#cbd5e1"/><circle cx="125" cy="65" r="16" fill="#1e293b" stroke="#94a3b8" stroke-width="3"/><circle cx="125" cy="65" r="6" fill="#cbd5e1"/><path d="M 165 40 L 210 40 M 200 32 L 215 40 L 200 48" stroke="#ef4444" stroke-width="3" fill="none"/><text x="170" y="25" font-size="12" font-weight="bold" fill="#ef4444">F_resultant</text></g><text x="30" y="35" font-size="12" font-weight="bold" fill="#1e293b">Car Mass (m) = 2000 kg</text><text x="30" y="55" font-size="12" fill="#475569">u = 0 m/s  ──(t = 10s)──>  v = 25 m/s</text></svg>`,
            marks: 9,
            expectedAnswer: '20000 N, 2.5 m/s², 5000 N, 625 kJ',
            solution: `(a) Weight = m × g = 2000 kg × 10 N/kg = 20,000 N
(b)(i) Acceleration a = (v - u) / t = (25 - 0) / 10 = 2.5 m/s²
(b)(ii) Resultant Force F = m × a = 2000 kg × 2.5 m/s² = 5,000 N
(c) Kinetic Energy KE = ½mv² = ½ × 2000 × (25)² = 1000 × 625 = 625,000 J = 625 kJ. (Shown)`,
            solutionSteps: [
              'Part (a): Weight = mass × gravity = 2000 × 10 = 20,000 N',
              'Part (b)(i): Acceleration = (final velocity - initial velocity) ÷ time = (25 - 0) ÷ 10 = 2.5 m/s²',
              'Part (b)(ii): Resultant force = mass × acceleration = 2000 × 2.5 = 5,000 N',
              'Part (c): KE = ½ × mass × speed² = 0.5 × 2000 × 625 = 625,000 J. Convert Joules to kJ by dividing by 1000: 625,000 ÷ 1000 = 625 kJ.'
            ],
          },
          {
            id: 'lgcse-2023-q2',
            number: 2,
            question: `Fig. 2.1 shows a water tank containing 100kg of water. The copper tubes connected to the tank are covered with a solar collector and enclosed in thick glass.
The specific heat capacity of water is 4200 J/(kg °C).

(a) Suggest, with a reason, the best paint colour for the solar collector. [2 marks]
(b) State what is meant by the statement 'specific heat capacity of water is 4200 J/(kg °C)'. [1 mark]
(c) Calculate the amount of energy needed to raise the temperature of water from 10 °C to 20 °C. [2 marks]
(d) Mention any change that could be done on the water to make its temperature to increase faster. [1 mark]`,
            diagram: `<svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(30, 20)"><circle cx="35" cy="35" r="20" fill="#f59e0b" stroke="#d97706" stroke-width="2"/><path d="M 35 5 L 35 0 M 35 65 L 35 70 M 5 35 L 0 35 M 65 35 L 70 35 M 14 14 L 10 10 M 56 56 L 60 60 M 14 56 L 10 60 M 56 14 L 60 10" stroke="#f59e0b" stroke-width="3"/><text x="23" y="40" font-size="11" font-weight="bold" fill="#ffffff">Sun</text><path d="M 60 70 L 110 120 M 75 60 L 125 110 M 90 50 L 140 100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/></g><g transform="translate(120, 110) rotate(-30)"><rect x="0" y="0" width="160" height="35" fill="#1e293b" rx="4" stroke="#475569" stroke-width="2"/><rect x="-5" y="-5" width="170" height="45" fill="none" stroke="#38bdf8" stroke-width="2" rx="6"/><text x="25" y="22" font-size="12" font-weight="bold" fill="#f8fafc">Solar Collector</text></g><g transform="translate(290, 30)"><rect x="0" y="0" width="130" height="70" rx="35" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/><text x="18" y="32" font-size="12" font-weight="bold" fill="#0f172a">Hot-water tank</text><text x="32" y="50" font-size="11" fill="#0369a1">(100 kg H₂O)</text></g><path d="M 235 75 Q 260 60 290 65" stroke="#b45309" stroke-width="6" fill="none"/><path d="M 235 75 Q 260 60 290 65" stroke="#f59e0b" stroke-width="3" fill="none"/><text x="200" y="195" font-size="13" font-weight="bold" fill="#0f172a">Fig. 2.1: Solar Water Heating System</text></svg>`,
            marks: 6,
            expectedAnswer: 'Black, 4,200,000 J',
            solution: `(a) Paint Colour: Matte Black / Black.
Reason: Black is an excellent absorber of thermal radiation (heat radiation) from the sun.
(b) Meaning: It requires 4200 Joules of heat energy to raise the temperature of 1 kg of water by 1 °C.
(c) Energy Q = m · c · ΔT = 100 kg × 4200 J/(kg °C) × (20 - 10) °C = 4,200,000 J (or 4.2 MJ).
(d) Change: Reduce the mass / volume of water in the tank (or increase the surface area of the solar collector).`,
            solutionSteps: [
              'Part (a): Black paint absorbs infrared radiation efficiently compared to shiny/light colours which reflect heat.',
              'Part (b): Specific heat capacity defines energy required per unit mass (1 kg) per degree temperature change (1 °C).',
              'Part (c): Q = m × c × ΔT = 100 × 4200 × 10 = 4,200,000 J = 4.2 MJ.',
              'Part (d): Reducing the mass of water means less heat energy is needed to achieve the same temperature rise.'
            ],
          },
          {
            id: 'lgcse-2023-q3',
            number: 3,
            question: `Fig. 3.1 shows an object O placed in front of a thin converging lens of focal length 2.0 cm.

(a) On Fig 3.1, mark a principal focus and label it F on the right of O. [1 mark]
(b)(i) On Fig. 3.1, draw rays to locate the position of the image of O. Label the image I. [3 marks]
(b)(ii) State the nature of the image. [1 mark]`,
            diagram: `<svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><line x1="20" y1="110" x2="440" y2="110" stroke="#475569" stroke-width="2"/><line x1="230" y1="20" x2="230" y2="200" stroke="#0284c7" stroke-width="3"/><path d="M 220 25 C 230 15 230 15 240 25 M 220 195 C 230 205 230 205 240 195" stroke="#0284c7" stroke-width="3" fill="none"/><g transform="translate(130, 110)"><line x1="0" y1="0" x2="0" y2="-50" stroke="#1e293b" stroke-width="4"/><polygon points="-6,-50 0,-65 6,-50" fill="#1e293b"/><text x="-8" y="-72" font-size="14" font-weight="bold" fill="#1e293b">O</text></g><circle cx="310" cy="110" r="4" fill="#ef4444"/><text x="305" y="130" font-size="13" font-weight="bold" fill="#ef4444">F</text><circle cx="150" cy="110" r="4" fill="#94a3b8"/><text x="142" y="130" font-size="12" fill="#64748b">F'</text><line x1="130" y1="60" x2="230" y2="60" stroke="#16a34a" stroke-width="2"/><line x1="230" y1="60" x2="390" y2="160" stroke="#16a34a" stroke-width="2"/><line x1="130" y1="60" x2="390" y2="160" stroke="#2563eb" stroke-width="2"/><g transform="translate(390, 110)"><line x1="0" y1="0" x2="0" y2="50" stroke="#ef4444" stroke-width="4" stroke-dasharray="4,2"/><polygon points="-6,50 0,65 6,50" fill="#ef4444"/><text x="-5" y="82" font-size="14" font-weight="bold" fill="#ef4444">I</text></g><text x="330" y="30" font-size="12" font-weight="bold" fill="#0284c7">Thin Converging Lens</text><text x="350" y="100" font-size="11" fill="#475569">Principal axis</text><text x="180" y="195" font-size="13" font-weight="bold" fill="#0f172a">Fig. 3.1: Ray Diagram for Converging Lens</text></svg>`,
            marks: 5,
            expectedAnswer: 'Real and inverted',
            solution: `(a) Mark point F along the principal axis to the right of the lens at a distance of 2.0 cm from the optical centre.
(b)(i) Ray 1: Draw a horizontal ray from the top of object O to the lens, refracting through principal focus F.
Ray 2: Draw a straight ray passing through the optical centre of the lens.
Image I: Draw an inverted arrow from the principal axis down to the intersection point of the two rays and label it I.
(b)(ii) Nature of Image: Real and inverted.`,
            solutionSteps: [
              'Focal length = 2.0 cm. Place focus F on principal axis.',
              'Parallel incident ray refracts through principal focus F.',
              'Central ray passes undeviated through optical centre.',
              'Intersection yields a real, inverted image labeled I.'
            ],
          },
          {
            id: 'lgcse-2023-q4',
            number: 4,
            question: `Fig. 4.1 shows a model of a generator designed by a student. A coil is left to swing freely between the two poles of a permanent magnet. The coil swings in and out of the magnet as shown by the arrow.

(a) Describe how the device can generate electricity. [2 marks]
(b) State three factors that affect the amount of the electricity generated. [3 marks]
(c) Suggest, with reason, whether the type of electricity generated by the model is a.c. or d.c. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 200" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="200" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(40, 40)"><rect x="0" y="0" width="80" height="100" rx="6" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><text x="30" y="60" font-size="28" font-weight="bold" fill="#ffffff">N</text><text x="8" y="90" font-size="11" fill="#fee2e2">Magnetic pole</text></g><g transform="translate(330, 40)"><rect x="0" y="0" width="80" height="100" rx="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><text x="32" y="60" font-size="28" font-weight="bold" fill="#ffffff">S</text><text x="8" y="90" font-size="11" fill="#dbeafe">Magnetic pole</text></g><g transform="translate(180, 20)"><path d="M 45 0 L 45 30" stroke="#475569" stroke-width="4"/><rect x="10" y="30" width="70" height="80" fill="none" stroke="#d97706" stroke-width="6" rx="8"/><text x="32" y="75" font-size="13" font-weight="bold" fill="#b45309">Coil</text><path d="M -10 20 Q 45 -5 100 20 M 90 10 L 102 22 L 85 27" stroke="#16a34a" stroke-width="3" fill="none"/></g><text x="160" y="188" font-size="13" font-weight="bold" fill="#0f172a">Fig. 4.1: Swinging Coil Generator Model</text></svg>`,
            marks: 7,
            expectedAnswer: 'a.c., alternating current',
            solution: `(a) As the coil swings in and out between the N and S magnetic poles, it cuts magnetic field lines (flux). This changing magnetic flux induces an electromotive force (e.m.f.) and current in the coil via electromagnetic induction.
(b) 1. Speed of movement of the coil (frequency of swing).
2. Strength of the magnetic field (stronger magnets).
3. Number of turns in the coil.
(c) Type: Alternating current (a.c.).
Reason: The direction of motion of the coil continuously reverses as it swings back and forth, causing the induced voltage and current to periodically reverse direction.`,
            solutionSteps: [
              'Part (a): Faraday\'s Law of Electromagnetic Induction: Cutting magnetic flux induces voltage/current.',
              'Part (b): Factors increasing induced e.m.f: higher speed, stronger magnetic field, more turns in coil.',
              'Part (c): Swinging motion is oscillatory (back & forth), producing alternating current (a.c.).'
            ],
          },
          {
            id: 'lgcse-2023-q5',
            number: 5,
            question: `Fig. 5.1 shows a circuit of a transformer connected to a lamp.

(a) State the type of transformer shown in Fig. 5.1. [1 mark]
(b) State the name of the structure labelled X. [1 mark]
(c) Explain why the bulb lights when the a.c. supply is connected. [2 marks]
(d) The transformer in Fig. 5.1 is 100% efficient with 1000 turns in the primary coil and 100 turns in the secondary coil. A current of 0.2 A flows in the primary coil when supplied with 240 V.
   (i) Calculate the voltage in the secondary coil. [2 marks]
   (ii) Calculate the current in the lamp. [2 marks]`,
            diagram: `<svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(140, 30)"><rect x="0" y="0" width="180" height="130" fill="none" stroke="#64748b" stroke-width="14" rx="8"/><rect x="15" y="15" width="150" height="100" fill="#f8fafc" rx="4"/><text x="40" y="-8" font-size="13" font-weight="bold" fill="#ef4444">Structure X (Soft Iron Core)</text></g><g transform="translate(60, 45)"><circle cx="-20" cy="50" r="14" fill="none" stroke="#0284c7" stroke-width="2"/><path d="M -28 50 Q -20 40 -12 50 Q -4 60 4 50" stroke="#0284c7" stroke-width="2" fill="none"/><text x="-45" y="20" font-size="11" font-weight="bold" fill="#0284c7">a.c. supply</text><path d="M -6 50 L 80 50 M -6 50 L -6 100 L 80 100" stroke="#0284c7" stroke-width="2" fill="none"/><path d="M 80 35 C 60 40 60 60 80 65 C 60 70 60 90 80 95 C 60 100 60 115 80 120" stroke="#d97706" stroke-width="4" fill="none"/><text x="10" y="140" font-size="12" font-weight="bold" fill="#d97706">Primary coil</text></g><g transform="translate(320, 45)"><path d="M 0 45 C 15 50 15 65 0 70 C 15 75 15 90 0 95" stroke="#d97706" stroke-width="4" fill="none"/><path d="M 0 45 L 70 45 M 0 95 L 70 95" stroke="#16a34a" stroke-width="2" fill="none"/><circle cx="70" cy="70" r="14" fill="#fef08a" stroke="#16a34a" stroke-width="2"/><path d="M 60 60 L 80 80 M 80 60 L 60 80" stroke="#ca8a04" stroke-width="2"/><text x="-10" y="140" font-size="12" font-weight="bold" fill="#d97706">Secondary coil</text></g><text x="160" y="195" font-size="13" font-weight="bold" fill="#0f172a">Fig. 5.1: Transformer Circuit</text></svg>`,
            marks: 8,
            expectedAnswer: '24 V, 2 A',
            solution: `(a) Step-down transformer (Primary turns Np = 1000 > Secondary turns Ns = 100).
(b) Structure X: Soft iron core (or laminated iron core).
(c) The alternating current in the primary coil produces a changing magnetic field in the soft iron core. This changing magnetic field links with the secondary coil, inducing an alternating voltage across the secondary coil that drives current through the bulb.
(d)(i) Voltage Vs = Vp × (Ns / Np) = 240 V × (100 / 1000) = 24 V.
(d)(ii) Current Is = (Vp × Ip) / Vs = (240 V × 0.2 A) / 24 V = 2.0 A. (Or Is = Ip × (Np / Ns) = 0.2 × 10 = 2.0 A).`,
            solutionSteps: [
              'Part (a): More primary turns than secondary turns means voltage is stepped down.',
              'Part (b): Core X is made of soft iron to concentrate magnetic flux.',
              'Part (c): Mutual induction occurs via magnetic flux linkage in the soft iron core.',
              'Part (d)(i): Vs = 240 × (100/1000) = 24 V.',
              'Part (d)(ii): Power in = Power out => 240 × 0.2 = 24 × Is => Is = 48 / 24 = 2.0 A.'
            ],
          },
          {
            id: 'lgcse-2023-q6',
            number: 6,
            question: `Fig. 6.1 shows how a radioactive source is used in industries to control the thickness of paper. Rollers on the machinery press hard to control thickness of the paper.

(a) State, with a reason, the types of radiation that pass through the paper. [2 marks]
(b) The radioactive source used in this factory is strontium-90 (⁹⁰₃₈Sr). The half-life of strontium-90 is about 29 years.
   (i) Suggest why it is important to use a radioactive source that has a long half-life. [1 mark]
   (ii) Strontium-90 decays by emitting a beta-particle. Complete the equation for the decay of Strontium-90:
        ⁹⁰₃₈Sr ──> ⁹⁰_ X + _ _ e [2 marks]`,
            diagram: `<svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="220" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(190, 15)"><polygon points="30,0 60,40 0,40" fill="#1e293b"/><circle cx="30" cy="25" r="8" fill="#f59e0b"/><text x="5" y="-3" font-size="11" font-weight="bold" fill="#ef4444">Radioactive Source</text><path d="M 20 45 L 20 100 M 30 45 L 30 100 M 40 45 L 40 100" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/></g><rect x="40" y="95" width="380" height="10" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/><text x="195" y="90" font-size="12" font-weight="bold" fill="#b45309">Paper</text><g transform="translate(80, 50)"><ellipse cx="30" cy="30" rx="25" ry="35" fill="#94a3b8" stroke="#475569" stroke-width="2"/><ellipse cx="30" cy="100" rx="25" ry="35" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="5" y="-5" font-size="12" font-weight="bold" fill="#334155">Rollers</text></g><g transform="translate(300, 50)"><ellipse cx="30" cy="30" rx="25" ry="35" fill="#94a3b8" stroke="#475569" stroke-width="2"/><ellipse cx="30" cy="100" rx="25" ry="35" fill="#94a3b8" stroke="#475569" stroke-width="2"/><text x="5" y="-5" font-size="12" font-weight="bold" fill="#334155">Rollers</text></g><g transform="translate(190, 120)"><rect x="10" y="0" width="40" height="30" fill="#0284c7" stroke="#0369a1" stroke-width="2" rx="4"/><text x="5" y="45" font-size="11" font-weight="bold" fill="#0284c7">Detector</text><rect x="-30" y="55" width="120" height="35" fill="#ffffff" stroke="#475569" stroke-width="2" rx="6"/><path d="M 30 80 L 15 63" stroke="#ef4444" stroke-width="3"/><text x="-25" y="73" font-size="9" fill="#16a34a" font-weight="bold">LOW</text><text x="18" y="62" font-size="9" fill="#0f172a" font-weight="bold">SET POINT</text><text x="60" y="73" font-size="9" fill="#dc2626" font-weight="bold">HIGH</text></g><text x="140" y="212" font-size="13" font-weight="bold" fill="#0f172a">Fig. 6.1: Paper Thickness Gauge Control</text></svg>`,
            marks: 5,
            expectedAnswer: 'Beta radiation, 90 39 Y',
            solution: `(a) Type: Beta (β) radiation.
Reason: Beta particles can penetrate paper, and the count rate detected varies with paper thickness. (Alpha is stopped completely; Gamma is not attenuated enough).
(b)(i) Reason: A long half-life ensures a constant, stable count rate over long industrial operations without requiring frequent source replacement or re-calibration.
(b)(ii) Nuclear Decay Equation:
⁹⁰₃₈Sr ──> ⁹⁰₃≼Y + ⁰₋₁e`,
            solutionSteps: [
              'Part (a): Beta particles have suitable penetrating power for paper thickness monitoring.',
              'Part (b)(i): Long half-life (29 years) provides stable source activity over machine operational lifetime.',
              'Part (b)(ii): Beta decay increases atomic number by 1 (38 -> 39, Yttrium Y), mass number stays 90.'
            ],
          },
        ],
      },
      {
        id: 'lgcse-2023-s2',
        title: 'Section B: Chemistry Principles (Questions 7 - 10)',
        questions: [
          {
            id: 'lgcse-2023-q7',
            number: 7,
            question: `Table 7.1 gives information about some group I elements:
Element | Proton number | Density/g/cm³
Lithium | 3 | 0.53
Sodium | 11 | 0.97
Potassium | 19 | 0.86
Rubidium | 37 | 1.53

(a) Using information in Table 7.1:
   (i) write the electron arrangement of a sodium atom, [1 mark]
   (ii) describe the trend in density of the group I elements. [2 marks]
(b) A student dropped sodium in water. The two reacted to form a solution and a hydrogen gas.
   (i) Write a balanced chemical equation for this reaction. [3 marks]
   (ii) Draw a dot-and-cross diagram, using only the outer shells to show bonding in water molecule. [2 marks]
   (iii) Describe a test for hydrogen gas. [2 marks]
   (iv) The solution was tested using litmus paper. Describe the colour change that would be observed. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 180" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(40, 20)"><rect x="0" y="0" width="160" height="130" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="6"/><text x="15" y="22" font-size="12" font-weight="bold" fill="#0f172a">Table 7.1: Group I Data</text><text x="15" y="45" font-size="11" fill="#334155">Li (3)  ──>  0.53 g/cm³</text><text x="15" y="65" font-size="11" fill="#334155">Na (11) ──>  0.97 g/cm³</text><text x="15" y="85" font-size="11" font-weight="bold" fill="#ef4444">K (19)  ──>  0.86 g/cm³</text><text x="15" y="105" font-size="11" fill="#334155">Rb (37) ──>  1.53 g/cm³</text></g><g transform="translate(230, 25)"><circle cx="80" cy="65" r="40" fill="none" stroke="#0284c7" stroke-width="2"/><circle cx="35" cy="65" r="20" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="125" cy="65" r="20" fill="none" stroke="#64748b" stroke-width="2"/><text x="75" y="70" font-size="16" font-weight="bold" fill="#0284c7">O</text><text x="30" y="70" font-size="14" font-weight="bold" fill="#475569">H</text><text x="120" y="70" font-size="14" font-weight="bold" fill="#475569">H</text><circle cx="53" cy="60" r="3" fill="#ef4444"/><text x="50" y="76" font-size="12" font-weight="bold" fill="#0284c7">×</text><circle cx="107" cy="60" r="3" fill="#ef4444"/><text x="104" y="76" font-size="12" font-weight="bold" fill="#0284c7">×</text><circle cx="80" cy="32" r="3" fill="#ef4444"/><circle cx="80" cy="39" r="3" fill="#ef4444"/><circle cx="80" cy="91" r="3" fill="#ef4444"/><circle cx="80" cy="98" r="3" fill="#ef4444"/><text x="15" y="138" font-size="11" font-weight="bold" fill="#0f172a">H₂O Dot-and-Cross Bonding</text></g></svg>`,
            marks: 12,
            expectedAnswer: '2,8,1; 2Na + 2H2O -> 2NaOH + H2; Red to blue',
            solution: `(a)(i) Electron arrangement of Sodium (11 protons): 2, 8, 1.
(a)(ii) Trend in density: Density generally increases down the group from Lithium to Rubidium, with Potassium being an anomaly (less dense than sodium).
(b)(i) Balanced Chemical Equation: 2Na(s) + 2H₂O(l) ──> 2NaOH(aq) + H₂(g)
(b)(ii) Dot-and-cross diagram: Oxygen in centre with 2 lone pairs (4 non-bonding electrons) and 2 single covalent bonds to 2 Hydrogen atoms (each bond sharing 1 electron from H and 1 from O).
(b)(iii) Test for hydrogen: Place a lighted splint into the gas. It burns with a distinctive 'pop' sound.
(b)(iv) Colour change: Red litmus paper turns blue (due to alkaline sodium hydroxide solution).`,
            solutionSteps: [
              'Part (a)(i): 11 electrons fill shells as 2 (1st shell), 8 (2nd shell), 1 (valence shell).',
              'Part (a)(ii): Overall increasing trend down group, Potassium is an exception (0.86 < 0.97).',
              'Part (b)(i): Alkali metal + water -> Metal hydroxide + hydrogen gas. Balanced: 2Na + 2H2O -> 2NaOH + H2.',
              'Part (b)(ii): H2O covalent bonding: Central O shares 1 electron pair with each H atom, leaving 2 lone pairs on O.',
              'Part (b)(iii): Lighted splint gives squeaky pop sound.',
              'Part (b)(iv): NaOH is a strong base, turning red litmus blue.'
            ],
          },
          {
            id: 'lgcse-2023-q8',
            number: 8,
            question: `Fig. 8.1 shows the blast furnace used in the extraction of iron from hematite.

(a) Name the substances labelled P and Q. [2 marks]
(b) The reaction of iron ore with carbon monoxide is represented by the following equation:
    Fe₂O₃(s) + 3CO(g) ──> 2Fe(l) + 3CO₂(g)
   (i) Explain why this reaction is a redox reaction. [2 marks]
   (ii) State the type of an oxide carbon dioxide is. [1 mark]
   (iii) Calculate the mass of iron that can be extracted from 50 kg of iron ore Fe₂O₃. [Ar: Fe,56; O,16; C,12] [4 marks]
(c) The liquid iron produced is purified and some components are added to form an alloy, steel.
   (i) Draw a diagram to show the arrangement of particles in steel. [2 marks]
   (ii) Mention one industrial use of stainless steel. [1 mark]`,
            diagram: `<svg viewBox="0 0 450 230" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="230" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(140, 15)"><polygon points="40,0 110,0 130,160 20,160" fill="#334155" stroke="#1e293b" stroke-width="3"/><path d="M 65 0 L 65 25 M 85 0 L 85 25" stroke="#f59e0b" stroke-width="4"/><text x="-70" y="25" font-size="11" font-weight="bold" fill="#0f172a">Raw Materials Input</text><path d="M -5 20 L 55 20" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,2"/><text x="45" y="45" font-size="11" fill="#fca5a5">1000 °C</text><text x="45" y="85" font-size="11" fill="#fdba74">1500 °C</text><text x="45" y="125" font-size="11" fill="#fef08a">1900 °C</text><rect x="25" y="130" width="100" height="15" fill="#cbd5e1" stroke="#475569"/><text x="-40" y="142" font-size="12" font-weight="bold" fill="#2563eb">P (Molten Slag)</text><path d="M -5 140 L 25 140" stroke="#2563eb" stroke-width="2"/><rect x="25" y="145" width="100" height="15" fill="#ef4444" stroke="#b91c1c"/><text x="135" y="157" font-size="12" font-weight="bold" fill="#dc2626">Q (Molten Iron)</text><path d="M 125 152 L 155 152" stroke="#dc2626" stroke-width="2"/></g><text x="140" y="215" font-size="13" font-weight="bold" fill="#0f172a">Fig. 8.1: Industrial Blast Furnace</text></svg>`,
            marks: 12,
            expectedAnswer: '35 kg',
            solution: `(a) P: Molten slag (Calcium silicate, CaSiO₃). Q: Molten iron (Fe).
(b)(i) It is a redox reaction because oxidation and reduction occur simultaneously. Fe₂O₃ is reduced (loses oxygen to form Fe) while CO is oxidized (gains oxygen to form CO₂).
(b)(ii) Type of oxide: Acidic oxide (non-metal oxide).
(b)(iii) Mass of Iron Calculation:
Molar mass of Fe₂O₃ = (2 × 56) + (3 × 16) = 112 + 48 = 160 g/mol.
Mass of Fe in 1 mole Fe₂O₃ = 2 × 56 = 112 g.
Mass fraction of Fe = 112 / 160 = 0.70 (70%).
Mass of Fe from 50 kg iron ore = 50 kg × (112 / 160) = 35 kg.
(c)(i) Steel particle arrangement: Regular layers of metallic iron atoms disrupted by smaller carbon/alloying atoms interspersed in the lattice.
(c)(ii) Industrial use: Surgical instruments, cutlery, chemical reactor vessels, pipes.`,
            solutionSteps: [
              'Part (a): Slag (P) floats on top of dense molten iron (Q) at furnace base.',
              'Part (b)(i): Loss of oxygen = reduction (Fe2O3 -> Fe); Gain of oxygen = oxidation (CO -> CO2).',
              'Part (b)(ii): CO2 dissolves in water to form carbonic acid, making it an acidic oxide.',
              'Part (b)(iii): Mr(Fe2O3) = 160. Fraction Fe = 112/160 = 0.7. Mass Fe = 50 × 0.7 = 35 kg.',
              'Part (c)(i): Alloy structure disrupts regular atom layers, preventing sliding and making steel harder than pure iron.',
              'Part (c)(ii): Stainless steel resists corrosion, ideal for medical instruments and chemical equipment.'
            ],
          },
          {
            id: 'lgcse-2023-q9',
            number: 9,
            question: `Ammonia is produced through a Haber process as shown in the equation:
3H₂ + N₂ ⇌ 2NH₃

(a) Name the meaning of the symbol " ⇌ " in the equation. [1 mark]
(b) State a fertiliser made from ammonia. [1 mark]
(c) Mention a property of transition elements that makes one of them suitable for use in Haber process. Support your answer. [2 marks]
(d) Haber process is an exothermic process.
   (i) Explain, in terms of bond breaking and bond formation, why the Haber process is an exothermic process. [1 mark]
   (ii) Explain how increasing the temperature would affect the rate of the Haber process. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 170" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="170" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(40, 20)"><line x1="30" y1="120" x2="380" y2="120" stroke="#475569" stroke-width="2"/><line x1="30" y1="120" x2="30" y2="10" stroke="#475569" stroke-width="2"/><text x="15" y="10" font-size="11" font-weight="bold" fill="#475569">Energy</text><text x="320" y="135" font-size="11" font-weight="bold" fill="#475569">Reaction Progress</text><line x1="40" y1="70" x2="110" y2="70" stroke="#3b82f6" stroke-width="3"/><text x="45" y="62" font-size="12" font-weight="bold" fill="#3b82f6">3H₂ + N₂</text><path d="M 110 70 Q 180 20 230 70 Q 280 100 340 100" stroke="#ef4444" stroke-width="3" fill="none"/><line x1="280" y1="100" x2="370" y2="100" stroke="#16a34a" stroke-width="3"/><text x="290" y="92" font-size="12" font-weight="bold" fill="#16a34a">2NH₃</text><path d="M 200 70 L 200 100 M 195 75 L 200 70 L 205 75 M 195 95 L 200 100 L 205 95" stroke="#d97706" stroke-width="2"/><text x="208" y="88" font-size="11" font-weight="bold" fill="#d97706">ΔH (Exothermic - Released)</text></g></svg>`,
            marks: 7,
            expectedAnswer: 'Reversible reaction, Ammonium nitrate',
            solution: `(a) Symbol " ⇌ ": Reversible reaction (reaction can proceed in both forward and backward directions).
(b) Fertiliser: Ammonium nitrate (NH₄NO₃) / Ammonium sulfate / Urea.
(c) Property: Transition elements act as catalysts.
Support: Iron (Fe), a transition element, is used as a catalyst in the Haber process to speed up the rate of reaction by lowering activation energy.
(d)(i) Exothermic explanation: More energy is released when forming new bonds in ammonia (6 × N-H) than energy absorbed to break bonds in reactants (N≡N and 3 × H-H).
(d)(ii) Effect of temperature on rate: Increasing temperature increases the rate of reaction because particles gain kinetic energy, move faster, and collide more frequently with energy equal to or exceeding activation energy.`,
            solutionSteps: [
              'Part (a): ⇌ indicates equilibrium/reversibility.',
              'Part (b): Ammonia reacts with nitric acid to yield ammonium nitrate fertiliser.',
              'Part (c): Transition metals like Iron provide catalytic surface area.',
              'Part (d)(i): Exothermic => Energy released in bond making > Energy absorbed in bond breaking.',
              'Part (d)(ii): Higher temperature increases collision frequency and fraction of successful collisions.'
            ],
          },
          {
            id: 'lgcse-2023-q10',
            number: 10,
            question: `Petroleum is a mixture made mostly of hydrocarbons such as C₄H₁₀.

(a) State the name of the hydrocarbon, C₄H₁₀. [1 mark]
(b) Petroleum components are widely used in everyday life. Explain how long-term excessive use of petroleum harms the environment. [3 marks]
(c) Other hydrocarbons such as propene, C₃H₆, can be derived from petroleum.
   (i) Describe the process used to manufacture hydrocarbons such as C₃H₆ from petroleum. [3 marks]
   (ii) Draw the graphical structure of polypropene. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 180" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(30, 25)"><rect x="0" y="0" width="160" height="120" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="6"/><text x="10" y="25" font-size="12" font-weight="bold" fill="#0f172a">Catalytic Cracking</text><text x="10" y="55" font-size="11" fill="#334155">Long Alkane Fractions</text><path d="M 10 75 L 140 75 M 130 68 L 142 75 L 130 82" stroke="#ef4444" stroke-width="2"/><text x="10" y="105" font-size="11" font-weight="bold" fill="#16a34a">C₃H₆ (Propene) + Alkanes</text></g><g transform="translate(230, 25)"><rect x="0" y="0" width="190" height="120" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="6"/><text x="25" y="25" font-size="12" font-weight="bold" fill="#0f172a">Polypropene Structure</text><text x="60" y="50" font-size="16" font-weight="bold" fill="#0284c7">H   H</text><text x="45" y="70" font-size="16" font-weight="bold" fill="#0284c7">──[ C ── C ]──</text><text x="80" y="72" font-size="11" font-weight="bold" fill="#ef4444">n</text><text x="56" y="95" font-size="16" font-weight="bold" fill="#0284c7">H  CH₃</text></g></svg>`,
            marks: 9,
            expectedAnswer: 'Butane, Catalytic cracking',
            solution: `(a) Name of C₄H₁₀: Butane.
(b) Environmental impacts:
1. Carbon dioxide (CO₂) release leads to enhanced global warming and climate change.
2. Incomplete combustion generates toxic carbon monoxide (CO) and unburnt hydrocarbons.
3. Sulfur/nitrogen oxides cause acid rain damaging trees, soil, and aquatic ecosystems.
(c)(i) Process: Catalytic Cracking. Long-chain alkane fractions from petroleum are heated to high temperatures (500°C - 700°C) over a catalyst (zeolite/silica-alumina) to break C-C covalent bonds into shorter alkanes and alkenes like propene.
(c)(ii) Polypropene structure: Repeating unit -[-CH₂-CH(CH₃)-]-n with single bonds along main chain and brackets.`,
            solutionSteps: [
              'Part (a): C4H10 follows CnH2n+2 formula for butane.',
              'Part (b): Petroleum combustion releases greenhouse gases (CO2) and acid rain precursors (SO2, NOx).',
              'Part (c)(i): Cracking converts heavy oil fractions into high-demand alkenes (propene) and lighter fuels.',
              'Part (c)(ii): Polymerisation of propene breaks double bond to form long-chain polypropene.'
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lgcse-phys-sci-2026-p3',
    title: 'LGCSE Physical Science 0181/03 Question Paper & Answers (May/June 2026)',
    subtitle: 'Paper 3 Extended Theory — 80 Marks Complete Workbook',
    description: 'Official Examinations Council of Lesotho (ECOL) LGCSE Physical Science 0181/03 Paper 3 Extended Theory May/June 2026 exam paper. Includes all 9 questions, speed-time graphs, circuit diagrams, nuclear radiation deflection, electrolysis cell diagrams, worked solutions, and complete mark scheme answers.',
    totalMarks: 80,
    sections: [
      {
        id: 'lgcse-2026-s1',
        title: 'Section A: Physics Principles (Questions 1 - 5)',
        questions: [
          {
            id: 'lgcse-2026-q1',
            number: 1,
            question: `A racehorse of mass 300 kg runs in a straight and rough racecourse. It starts from rest and accelerates to a speed of 16 m/s in 10 s and maintains the same speed for another 20 s.

(a) State a reason why speed is a scalar quantity. [1 mark]
(b) State the energy change(s) that occur(s) when the horse runs. [2 marks]
(c) State a reason why horse hoofs wear faster on a rough racecourse. [1 mark]
(d) Calculate the time it takes the horse to run a distance of 160 m. [3 marks]
(e) State, with a reason, the net force on the horse in the last 20 s. [2 marks]
(f) Sketch distance-time graph for the motion of the horse in the last 20 s. [2 marks]
(g) Fig. 1.2 shows a sketch of a speed-time graph for the motion of another horse that also ran for 30 seconds. Describe the acceleration of the horse in the first 10 seconds. [1 mark]`,
            diagram: `<svg viewBox="0 0 450 200" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="200" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(60, 20)"><line x1="30" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2"/><line x1="30" y1="130" x2="30" y2="20" stroke="#475569" stroke-width="2"/><text x="-15" y="20" font-size="11" font-weight="bold" fill="#475569">speed</text><text x="-15" y="32" font-size="11" font-weight="bold" fill="#475569">m/s</text><text x="340" y="148" font-size="11" font-weight="bold" fill="#475569">time/s</text><line x1="25" y1="40" x2="35" y2="40" stroke="#0f172a" stroke-width="2"/><text x="5" y="44" font-size="12" font-weight="bold" fill="#0f172a">16</text><text x="25" y="145" font-size="12" fill="#0f172a">0</text><line x1="160" y1="125" x2="160" y2="135" stroke="#0f172a" stroke-width="2"/><text x="152" y="148" font-size="12" font-weight="bold" fill="#0f172a">10</text><line x1="310" y1="125" x2="310" y2="135" stroke="#0f172a" stroke-width="2"/><text x="302" y="148" font-size="12" font-weight="bold" fill="#0f172a">30</text><path d="M 30 130 Q 110 40 160 40" stroke="#0284c7" stroke-width="3" fill="none"/><line x1="160" y1="40" x2="310" y2="40" stroke="#0284c7" stroke-width="3"/><line x1="30" y1="40" x2="160" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="160" y1="40" x2="160" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="310" y1="40" x2="310" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/></g><text x="150" y="190" font-size="13" font-weight="bold" fill="#0f172a">Fig. 1.2: Speed-Time Graph of Horse Motion</text></svg>`,
            marks: 12,
            expectedAnswer: 'Scalar (magnitude only), 10 s, Net force = 0 N',
            solution: `(a) Speed has magnitude only and no specific direction.
(b) Chemical energy (in horse muscles/food) ──> Kinetic energy + Thermal energy (heat due to friction).
(c) Higher friction between horse hoofs and the rough surface causes greater mechanical wear and abrasion.
(d) During acceleration (0 to 10s): Distance s₁ = ½ × base × height = ½ × 10 s × 16 m/s = 80 m.
Remaining distance needed = 160 m - 80 m = 80 m.
At constant speed of 16 m/s: time t₂ = distance / speed = 80 m / 16 m/s = 5 s.
Total time = 10 s + 5 s = 15 seconds. (Alternative: distance during first 10s constant speed = 160 m requires t = 160/16 = 10 s at 16 m/s).
(e) Net force = 0 N. Reason: The horse travels at a constant speed (zero acceleration), so by Newton's First Law, resultant force is zero.
(f) Distance-time graph for last 20 s (from t = 10s to t = 30s): A straight diagonal line with constant positive slope starting from 80m up to 400m.
(g) Decreasing acceleration (gradient of the speed-time curve decreases over time until it becomes 0 at t = 10s).`,
            solutionSteps: [
              'Part (a): Scalar quantities possess magnitude only (e.g. speed), unlike vectors which possess direction.',
              'Part (b): Muscles transform stored chemical potential energy into kinetic energy of motion and thermal energy.',
              'Part (c): Frictional force causes surface erosion and wear on hoof material.',
              'Part (d): s = area under graph. First 10s distance = ½(10)(16) = 80m. Next 80m at 16m/s takes 80/16 = 5s. Total time = 15s.',
              'Part (e): Constant speed => acceleration a = 0 m/s² => F_net = m·a = 0 N.',
              'Part (f): At constant speed, distance increases linearly with time (straight line with constant slope).',
              'Part (g): The slope/gradient of the v-t curve gets flatter, indicating decreasing acceleration.'
            ],
          },
          {
            id: 'lgcse-2026-q2',
            number: 2,
            question: `Fig. 2.1 shows a melting ice cube of mass 0.3 kg placed in a container filled with warm water. Pure ice melts at a temperature of 0 °C. Temperature of water drops from 44 °C to 20 °C. Specific heat capacity of water is 4200 J/kg°C. Latent heat of fusion of ice is 3.4 × 10⁵ J/kg.

(a) Define the term latent heat of fusion. [2 marks]
(b) Describe, in terms of molecular forces and motion, the behaviour of particles of ice during melting. [2 marks]
(c) Calculate the total thermal energy absorbed by the ice as it changed from a solid at 0 °C to a liquid at 20 °C. [2 marks]
(d) Calculate the mass of water in which ice was placed. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 220" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="220" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(140, 20)"><rect x="20" y="20" width="130" height="150" fill="none" stroke="#475569" stroke-width="3" rx="4"/><rect x="23" y="70" width="124" height="97" fill="#38bdf8" fill-opacity="0.5" rx="2"/><path d="M 45 60 L 95 55 L 115 75 L 85 95 L 40 85 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="145" y="70" font-size="12" font-weight="bold" fill="#0284c7">← ice cube (0.3 kg)</text><line x1="120" y1="70" x2="140" y2="70" stroke="#0284c7" stroke-width="1.5"/><text x="-65" y="110" font-size="12" font-weight="bold" fill="#0369a1">warm water ──></text><line x1="-5" y1="110" x2="40" y2="110" stroke="#0369a1" stroke-width="1.5"/><text x="145" y="135" font-size="12" font-weight="bold" fill="#475569">← container</text><line x1="120" y1="135" x2="140" y2="135" stroke="#475569" stroke-width="1.5"/></g><text x="150" y="205" font-size="13" font-weight="bold" fill="#0f172a">Fig. 2.1: Melting Ice Cube in Water</text></svg>`,
            marks: 8,
            expectedAnswer: '127,200 J, 1.26 kg',
            solution: `(a) Latent heat of fusion is the amount of heat energy required to change a unit mass (1 kg) of a substance from solid to liquid phase at constant temperature (melting point).
(b) Heat energy breaks/overcomes intermolecular forces holding ice molecules in fixed positions. Molecules gain freedom of movement, changing from a rigid lattice to sliding past one another while average kinetic energy (temperature) remains constant during melting.
(c) Heat energy to melt ice at 0°C: Q₁ = m × L_f = 0.3 kg × 3.4 × 10⁵ J/kg = 102,000 J.
Heat energy to warm melted ice from 0°C to 20°C: Q₂ = m × c × ΔT = 0.3 kg × 4200 J/kg°C × (20 - 0) °C = 25,200 J.
Total thermal energy absorbed Q_total = Q₁ + Q₂ = 102,000 J + 25,200 J = 127,200 J (or 127.2 kJ).
(d) Conservation of energy: Heat lost by warm water = Heat absorbed by ice.
m_water × c × ΔT_water = Q_total
m_water × 4200 J/kg°C × (44°C - 20°C) = 127,200 J
m_water × 4200 × 24 = 127,200
m_water × 100,800 = 127,200
m_water = 127,200 / 100,800 = 1.26 kg.`,
            solutionSteps: [
              'Part (a): Latent heat of fusion = energy needed for solid to liquid phase change at constant melting point.',
              'Part (b): Intermolecular bonds weaken/break, molecules transition from fixed lattice to fluid motion.',
              'Part (c): Q_total = m·Lf + m·c·ΔT = (0.3 × 340,000) + (0.3 × 4200 × 20) = 102,000 + 25,200 = 127,200 J.',
              'Part (d): Heat lost by water = m_water × 4200 × (44-20) = 100,800 × m_water = 127,200 => m_water = 1.26 kg.'
            ],
          },
          {
            id: 'lgcse-2026-q3',
            number: 3,
            question: `Radiographers use X-rays to create images of the body's internal structures.

(a) State one other use of X-rays. [1 mark]
(b) Describe how X-rays create images of the internal structures. [3 marks]`,
            marks: 4,
            expectedAnswer: 'Airport security scanner / industrial flaw detection',
            solution: `(a) Airport security baggage scanning / checking welds and industrial metal castings for cracks/flaws / radiation therapy for cancer treatment.
(b) X-rays are passed through the patient's body toward a detector plate or photographic film. Dense tissues (like bones) absorb X-rays strongly and appear bright white on the film, while soft tissues (muscles/organs) allow X-rays to pass through easily and appear dark. This differential absorption creates a contrast image of internal structures.`,
            solutionSteps: [
              'Part (a): Non-medical uses include luggage inspection at security checkpoints and industrial non-destructive testing.',
              'Part (b): High-density bone absorbs X-rays; low-density tissue transmits X-rays, producing image shadow contrast.'
            ],
          },
          {
            id: 'lgcse-2026-q4',
            number: 4,
            question: `(a) Fig. 4.1 shows the type of transformer used in the power stations of two different companies, P and Q. The transformer is used to increase voltage from 20 kV to 300 kV. It is used in the two companies when transmitting voltage of the same power over equal distance. P transmits 100 kV while Q transmits 300 kV.
   (i) Describe how the transformer converts 20 kV to 300 kV. [3 marks]
   (ii) Explain why the transformer of the company Q is more efficient than that of the company P in transmitting power. [2 marks]

(b) Fig. 4.2 shows two separate solenoids connected to DC power supplies. A cobalt bar is placed inside one solenoid, and a nickel bar is placed in the other.
   Suggest what would be observed regarding the magnetic interaction between end B and end C when the switches are closed, and explain if reversing the battery terminals would change this observation. [3 marks]

(c) Two kettles X and Y have heating elements made from the same material. The elements have the same lengths but different thickness. The thickness of the element of kettle Y is twice that of kettle X. The kettles are each connected to a 240 V power supply for 5 minutes.
   By using calculations, suggest which kettle draws more energy. [3 marks]`,
            diagram: `<svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(30, 20)"><rect x="40" y="10" width="120" height="110" fill="none" stroke="#475569" stroke-width="10" rx="4"/><rect x="50" y="20" width="100" height="90" fill="#f8fafc"/><path d="M 40 30 C 25 35 25 55 40 60 C 25 65 25 85 40 90" stroke="#d97706" stroke-width="3" fill="none"/><text x="-15" y="60" font-size="10" font-weight="bold" fill="#0284c7">20 kV a.c.</text><path d="M 160 25 C 175 30 175 40 160 45 C 175 50 175 60 160 65 C 175 70 175 80 160 85 C 175 90 175 100 160 105" stroke="#d97706" stroke-width="3" fill="none"/><text x="170" y="65" font-size="10" font-weight="bold" fill="#16a34a">output (300 kV)</text><text x="65" y="145" font-size="11" font-weight="bold" fill="#0f172a">Fig. 4.1</text></g><g transform="translate(250, 20)"><g transform="translate(0,0)"><rect x="20" y="20" width="60" height="15" fill="#94a3b8" stroke="#334155"/><text x="0" y="32" font-size="9" fill="#0f172a">A</text><text x="83" y="32" font-size="9" fill="#0f172a">B</text><path d="M 20 20 C 15 10 30 10 30 20 C 25 10 40 10 40 20 C 35 10 50 10 50 20 C 45 10 60 10 60 20 C 55 10 70 10 70 20 C 65 10 80 10 80 20" stroke="#d97706" stroke-width="1.5" fill="none"/><path d="M 20 20 L 25 50 L 40 50 M 80 20 L 75 50 L 60 50" stroke="#0f172a" stroke-width="1.5" fill="none"/><line x1="45" y1="50" x2="55" y2="50" stroke="#0f172a" stroke-width="3"/></g><g transform="translate(90,0)"><rect x="20" y="20" width="60" height="15" fill="#cbd5e1" stroke="#334155"/><text x="0" y="32" font-size="9" fill="#0f172a">C</text><text x="83" y="32" font-size="9" fill="#0f172a">D</text><path d="M 20 20 C 15 10 30 10 30 20 C 25 10 40 10 40 20 C 35 10 50 10 50 20 C 45 10 60 10 60 20 C 55 10 70 10 70 20 C 65 10 80 10 80 20" stroke="#d97706" stroke-width="1.5" fill="none"/><path d="M 20 20 L 25 50 L 40 50 M 80 20 L 75 50 L 60 50" stroke="#0f172a" stroke-width="1.5" fill="none"/><line x1="45" y1="50" x2="55" y2="50" stroke="#0f172a" stroke-width="3"/></g><text x="50" y="90" font-size="11" font-weight="bold" fill="#0f172a">Fig. 4.2</text></g><text x="140" y="195" font-size="12" font-weight="bold" fill="#0f172a">Fig. 4.1 Transformer & Fig. 4.2 Solenoids</text></svg>`,
            marks: 11,
            expectedAnswer: 'Kettle Y draws 2x more energy',
            solution: `(a)(i) The 20 kV alternating current in the primary coil creates a continuously changing magnetic field in the soft iron core. This changing magnetic flux links with the secondary coil (which has 15 times more turns, Ns/Np = 300/20 = 15), inducing a 300 kV alternating voltage across the secondary output.
(a)(ii) Higher transmission voltage (300 kV vs 100 kV) reduces transmission current (I = P/V). Since power lost as heat in cables is P_loss = I² × R, transmitting at 3× higher voltage reduces current to 1/3, reducing power loss by a factor of 9 (1/9 of P's loss). Company Q has significantly lower heat loss.
(b) Observation: End B and End C will attract each other (both cobalt and nickel are ferromagnetic and become magnetized by their solenoids). Reversing battery terminals reverses magnetic polarity of BOTH solenoids simultaneously, so B and C still attract — the observation does NOT change.
(c) Calculation: Resistance R = ρL/A. Element Y is twice as thick, so it has a larger cross-sectional area A_Y > A_X, giving R_Y < R_X (lower resistance). Power P = V²/R — since R_Y is smaller, P_Y is larger. Energy E = P × t, so Kettle Y draws MORE energy than Kettle X.`,
            solutionSteps: [
              'Part (a)(i): Mutual electromagnetic induction in soft iron core with Ns > Np steps up voltage from 20 kV to 300 kV.',
              'Part (a)(ii): P_loss = I²R. Higher V means lower I, so heat loss in transmission lines is much smaller for Company Q.',
              'Part (b): Both cores magnetize. Reversing both batteries flips both poles equally, so B and C still attract.',
              'Part (c): Thicker wire → larger area A → smaller resistance R → higher power P = V²/R → more energy E = P × t. Kettle Y wins.'
            ],
          },
          {
            id: 'lgcse-2026-q5',
            number: 5,
            question: `(a) Fig. 5.1 shows radioactive uranium-238 sample in a lead container with thick paper placed at the opening. Uranium-238 decays into thorium-234. Radiation passes through charged plates. Detectors are placed at points A, B and C.
   (i) State the nature of radiation in the decay. [1 mark]
   (ii) State, with a reason, the radiation that will be detected by detector B. [2 marks]

(b) Fusion reaction of hydrogen isotopes in the sun is shown by the equation:
    ²₁H + ³₁H ──> ⁴₂He + ¹₀n
    During the reaction, the mass of 3.2 × 10⁻²⁹ kg is lost and converted to energy.
    Calculate the energy released from the reaction. (Take c = 3 × 10⁸ m/s). [2 marks]`,
            diagram: `<svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(40, 30)"><rect x="0" y="30" width="50" height="60" fill="#94a3b8" stroke="#334155" stroke-width="2"/><circle cx="25" cy="60" r="6" fill="#ef4444"/><text x="-5" y="110" font-size="11" font-weight="bold" fill="#0f172a">uranium - 238</text><rect x="50" y="40" width="10" height="40" fill="#fef08a" stroke="#d97706"/><text x="40" y="25" font-size="10" fill="#b45309">thick paper</text><rect x="80" y="10" width="80" height="12" fill="#ef4444" stroke="#b91c1c"/><text x="85" y="20" font-size="10" font-weight="bold" fill="#ffffff">+ + + + + + + +</text><text x="85" y="5" font-size="10" font-weight="bold" fill="#ef4444">positive plate</text><rect x="80" y="90" width="80" height="12" fill="#3b82f6" stroke="#1d4ed8"/><text x="85" y="100" font-size="10" font-weight="bold" fill="#ffffff">- - - - - - - -</text><text x="85" y="115" font-size="10" font-weight="bold" fill="#3b82f6">negative plate</text><line x1="60" y1="60" x2="210" y2="60" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,2"/><g transform="translate(210, 10)"><rect x="0" y="0" width="30" height="20" fill="#e2e8f0" stroke="#475569"/><text x="35" y="15" font-size="12" font-weight="bold" fill="#0f172a">A</text></g><g transform="translate(210, 50)"><rect x="0" y="0" width="30" height="20" fill="#e2e8f0" stroke="#475569"/><text x="35" y="15" font-size="12" font-weight="bold" fill="#0f172a">B</text></g><g transform="translate(210, 90)"><rect x="0" y="0" width="30" height="20" fill="#e2e8f0" stroke="#475569"/><text x="35" y="15" font-size="12" font-weight="bold" fill="#0f172a">C</text></g></g><text x="160" y="195" font-size="13" font-weight="bold" fill="#0f172a">Fig. 5.1: Deflection of Radiation</text></svg>`,
            marks: 5,
            expectedAnswer: 'Gamma radiation, 2.88 × 10⁻¹² J',
            solution: `(a)(i) Alpha particle radiation — ²³⁸U decays to ²³⁴Th by emitting an alpha particle (⁴He nucleus).
(a)(ii) Detector B will detect Gamma (γ) radiation.
Reason: Thick paper stops alpha particles completely. Gamma rays are uncharged and penetrate the paper, passing straight through the electric field without being deflected — hitting Detector B in the middle.
(b) Using Einstein's mass-energy equivalence: E = Δm × c²
E = 3.2 × 10⁻²⁹ kg × (3 × 10⁸ m/s)²
E = 3.2 × 10⁻²⁹ × 9 × 10¹⁶
E = 2.88 × 10⁻¹² J`,
            solutionSteps: [
              'Part (a)(i): U-238 decays to Th-234 by emitting an alpha particle (helium-4 nucleus, ⁴He).',
              'Part (a)(ii): Thick paper stops alpha. Gamma is uncharged and undeflected by the electric field → hits Detector B.',
              'Part (b): E = mc² = (3.2 × 10⁻²⁹) × (3 × 10⁸)² = 3.2 × 10⁻²⁹ × 9 × 10¹⁶ = 2.88 × 10⁻¹² J.'
            ],
          },
        ],
      },
      {
        id: 'lgcse-2026-s2',
        title: 'Section B: Chemistry Principles (Questions 6 - 9)',
        questions: [
          {
            id: 'lgcse-2026-q6',
            number: 6,
            question: `Table 6.1 gives information about some elements in Group VII of the Periodic Table.
Table 6.1:
Element | Relative atomic mass | Density (g/cm³) | Boiling point (°C)
Fluorine | 19 | 0.00170 | -188
Chlorine | 35.5 | 0.00321 | -35
Bromine | 80 | 3.10 | 59
Iodine | 127 | 4.94 | 184

(a) Define the term relative atomic mass. [2 marks]
(b) Using the information from Table 6.1, describe one general trend shown in any of the physical properties of the elements. [2 marks]
(c) Chlorine has the proton number 17 and it reacts to form chloride ions.
   (i) Describe how the chloride ions are formed. [1 mark]
   (ii) With reference to its group number or location in the Periodic Table, explain why chlorine is classified as a non-metal. [2 marks]
(d) Table 6.2 shows some information about calcium. Complete the table:
    Symbol: ⁴⁰₂₀Ca | Protons: 20 | Neutrons: ... | Electrons: ...
    Symbol: ...... | Protons: 20 | Neutrons: 20 | Electrons: 18 [3 marks]`,
            marks: 10,
            expectedAnswer: 'Density increases down group; 20 neutrons, 20 electrons; Ca²⁺ ion',
            solution: `(a) Relative atomic mass (Ar) is the weighted average mass of naturally occurring atoms of an element compared to 1/12th of the mass of a carbon-12 atom.
(b) Density increases down Group VII (from 0.00170 g/cm³ for fluorine to 4.94 g/cm³ for iodine). OR Boiling point increases down the group (from -188°C for fluorine to 184°C for iodine).
(c)(i) A chlorine atom (electron arrangement 2,8,7) gains 1 electron to complete its outer shell (2,8,8), forming a negatively charged chloride ion: Cl⁻.
(c)(ii) Chlorine is in Group VII on the right side of the Periodic Table. It has 7 outer-shell electrons and gains electrons in reactions (forming negative ions) — this is characteristic of non-metals.
(d) Table 6.2 Completion:
- Row 1 (⁴⁰₂₀Ca atom): Neutrons = 40 − 20 = 20; Electrons = 20.
- Row 2: Symbol = ⁴⁰₂₀Ca²⁺ (Calcium ion: 20 protons, 20 neutrons, 18 electrons).`,
            solutionSteps: [
              'Part (a): Ar = weighted average atomic mass relative to 1/12th of carbon-12 mass.',
              'Part (b): Boiling point and density both increase steadily going down Group VII (Halogens).',
              'Part (c)(i): Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8).',
              'Part (c)(ii): Group VII elements have 7 valence electrons — they gain electrons to form negative ions, a non-metal property.',
              'Part (d): Neutrons = Mass number − Atomic number = 40 − 20 = 20. With 18 electrons and 20 protons, it is Ca²⁺.'
            ],
          },
          {
            id: 'lgcse-2026-q7',
            number: 7,
            question: `Fig. 7.1 shows an electrolytic cell used to investigate rusting using iron electrodes. Oxygen gas is bubbled onto the electrode. Water contains hydrated iron(III) oxide (rust).

(a)(i) Write a balanced equation for the half-reaction showing oxidation of iron at the electrodes. [2 marks]
(a)(ii) Describe how the presence of iron(III) ions in iron(III) oxide can be confirmed. [3 marks]
(b) Zinc is a metal used to protect iron from rusting through galvanising. Explain how zinc protects iron. [2 marks]
(c) Describe two economic importances of recycling materials made of iron. [2 marks]`,
            diagram: `<svg viewBox="0 0 450 210" class="w-full max-w-md mx-auto my-3" xmlns="http://www.w3.org/2000/svg"><rect width="450" height="210" fill="#f8fafc" rx="10" stroke="#cbd5e1"/><g transform="translate(130, 20)"><line x1="30" y1="10" x2="150" y2="10" stroke="#0f172a" stroke-width="2"/><line x1="90" y1="5" x2="90" y2="15" stroke="#0f172a" stroke-width="3"/><line x1="95" y1="8" x2="95" y2="12" stroke="#0f172a" stroke-width="2"/><line x1="30" y1="10" x2="30" y2="40" stroke="#0f172a" stroke-width="2"/><line x1="150" y1="10" x2="150" y2="40" stroke="#0f172a" stroke-width="2"/><rect x="20" y="40" width="20" height="80" fill="#475569" stroke="#1e293b"/><rect x="140" y="40" width="20" height="80" fill="#475569" stroke="#1e293b"/><rect x="10" y="60" width="160" height="90" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="2" rx="4"/><path d="M 0 100 L 25 100 L 25 120" stroke="#0f172a" stroke-width="2" fill="none"/><circle cx="28" cy="115" r="3" fill="#ffffff" stroke="#0f172a"/><circle cx="22" cy="110" r="3" fill="#ffffff" stroke="#0f172a"/><text x="-90" y="95" font-size="10" font-weight="bold" fill="#0f172a">oxygen gas bubbled ──></text><text x="180" y="100" font-size="11" font-weight="bold" fill="#0284c7">← water</text><path d="M 30 145 Q 90 135 150 145" fill="#b45309" stroke="#78350f"/><text x="5" y="165" font-size="11" font-weight="bold" fill="#78350f">hydrated iron(III) oxide (rust)</text></g><text x="140" y="198" font-size="13" font-weight="bold" fill="#0f172a">Fig. 7.1: Rusting Electrolytic Cell</text></svg>`,
            marks: 9,
            expectedAnswer: 'Fe -> Fe³⁺ + 3e⁻, NaOH test (red-brown ppt), Sacrificial protection',
            solution: `(a)(i) Oxidation half-equation: Fe(s) → Fe³⁺(aq) + 3e⁻  (accept: Fe → Fe²⁺ + 2e⁻)
(a)(ii) Add aqueous sodium hydroxide (NaOH) or aqueous ammonia (NH₃) to the solution. A red-brown precipitate of iron(III) hydroxide — Fe(OH)₃ — will form. The precipitate is insoluble in excess alkali, confirming Fe³⁺ ions.
(b) Zinc provides sacrificial protection. Zinc is more reactive than iron, so it corrodes and oxidises preferentially in place of iron: Zn → Zn²⁺ + 2e⁻. Even if the zinc coating is scratched, the zinc still protects the iron underneath.
(c) 1. Saves money/energy: Recycling scrap iron uses significantly less energy than extracting iron from haematite ore in a blast furnace.
2. Conserves natural resources: Preserves iron ore, coal/coke, and limestone deposits for future use.`,
            solutionSteps: [
              'Part (a)(i): Oxidation = loss of electrons. Fe → Fe³⁺ + 3e⁻.',
              'Part (a)(ii): Test for Fe³⁺: add NaOH(aq) → red-brown Fe(OH)₃ precipitate, insoluble in excess.',
              'Part (b): Zinc is higher in the reactivity series than iron and acts as a sacrificial anode.',
              'Part (c): Economic benefits — saves energy (vs blast furnace) and conserves iron ore reserves.'
            ],
          },
          {
            id: 'lgcse-2026-q8',
            number: 8,
            question: `The equation represents a reaction of excess calcium carbonate with a dilute hydrochloric acid to form calcium chloride:
CaCO₃(s) + 2HCl ........ ──> CaCl₂(aq) + H₂O(l) + CO₂(g)

(a) On the dotted line in the equation, write the state symbol for hydrochloric acid. [1 mark]
(b) Describe how calcium chloride crystals can be obtained after the reaction. [3 marks]
(c) The concentration of the acid used is 0.5 mol/dm³ while the volume was 50 cm³.
   (i) Calculate in moles, the amount of acid used in the reaction. [3 marks]
   (ii) Calculate the volume of carbon dioxide gas produced during the reaction at r.t.p. [2 marks]
(d) Use a diagram to describe bonding in calcium chloride. [3 marks]`,
            marks: 12,
            expectedAnswer: '(aq), 0.025 mol, 0.3 dm³, [Ca²⁺][Cl⁻]₂',
            solution: `(a) State symbol for dilute hydrochloric acid: (aq) — meaning aqueous (dissolved in water).
(b) Steps to obtain CaCl₂ crystals:
1. Filter the reaction mixture to remove the excess unreacted CaCO₃ solid.
2. Heat/evaporate the filtrate (CaCl₂ solution) until it reaches the point of crystallisation.
3. Allow the solution to cool so crystals form, then filter off the crystals and dry them between filter papers.
(c)(i) Moles of acid: n = Concentration × Volume = 0.5 mol/dm³ × (50 ÷ 1000) dm³ = 0.5 × 0.05 = 0.025 moles.
(c)(ii) From the equation, 2 moles HCl produces 1 mole CO₂.
Moles of CO₂ = 0.025 ÷ 2 = 0.0125 moles.
Volume of CO₂ at r.t.p = 0.0125 × 24 dm³ = 0.30 dm³ (or 300 cm³).
(d) CaCl₂ has ionic bonding:
Calcium atom (2,8,8,2) loses 2 electrons → Ca²⁺ ion (2,8,8).
Two chlorine atoms (2,8,7) each gain 1 electron → 2 Cl⁻ ions (2,8,8).
Strong electrostatic attraction acts between Ca²⁺ and the two Cl⁻ ions.`,
            solutionSteps: [
              'Part (a): Acids dissolved in water take state symbol (aq).',
              'Part (b): Filter excess CaCO₃ → evaporate filtrate to crystallisation point → cool, filter, dry crystals.',
              'Part (c)(i): n = C × V = 0.5 × (50/1000) = 0.025 mol HCl.',
              'Part (c)(ii): Moles CO₂ = 0.025 ÷ 2 = 0.0125 mol. Volume = 0.0125 × 24 = 0.30 dm³ (300 cm³).',
              'Part (d): Ca loses 2e⁻ → Ca²⁺; each of 2 Cl atoms gains 1e⁻ → Cl⁻. Ionic bonding holds them together.'
            ],
          },
          {
            id: 'lgcse-2026-q9',
            number: 9,
            question: `Fermentation is an enzyme driven chemical reaction that produces ethanol present in alcoholic beverages.

(a) Ethanol belongs to the alcohol homologous series.
   (i) State one other use of ethanol. [1 mark]
   (ii) Name the first member of the homologous series. [1 mark]
(b) Draw the graphical structure of ethanol. [2 marks]
(c) Describe another chemical reaction that can produce ethanol. [3 marks]
(d) Describe the cause of the sour taste on alcoholic beverages when exposed to air. [2 marks]`,
            marks: 9,
            expectedAnswer: 'Methanol, Hydration of ethene',
            solution: `(a)(i) Solvent (in perfumes, paints, medicines) OR Fuel / Biofuel.
(a)(ii) First member of the alcohol homologous series: Methanol (CH₃OH).
(b) Graphical Structure of Ethanol (C₂H₅OH):
   H   H
 H─C───C─O─H
   H   H
(Each bond is a covalent single bond. Carbon has 4 bonds, oxygen has 2 bonds, hydrogen has 1 bond.)
(c) Catalytic Hydration of Ethene:
Ethene gas (C₂H₄) is reacted with steam (H₂O) at 300°C and 60–70 atm pressure using a phosphoric acid (H₃PO₄) catalyst:
C₂H₄ + H₂O → C₂H₅OH
(d) When alcoholic beverages are exposed to air, atmospheric oxygen oxidises ethanol (C₂H₅OH) in the presence of airborne bacteria (acetobacter) to produce ethanoic acid (CH₃COOH — vinegar). This ethanoic acid gives the sour acidic taste.`,
            solutionSteps: [
              'Part (a)(i): Uses include biofuel/fuel additive and solvent in cosmetics and pharmaceuticals.',
              'Part (a)(ii): Methanol (CH₃OH) is the 1-carbon member of the alcohol series.',
              'Part (b): Displayed formula shows 2 C atoms, 5 H atoms, and one -OH hydroxyl group, all joined by single covalent bonds.',
              'Part (c): Catalytic hydration: C₂H₄ + H₂O → C₂H₅OH at 300°C, 60 atm, H₃PO₄ catalyst.',
              'Part (d): Oxidation of ethanol by air and bacteria → ethanoic acid (CH₃COOH/vinegar) → sour taste.'
            ],
          },
        ],
      },
    ],
  },
];



