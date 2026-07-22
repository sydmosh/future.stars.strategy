import type { Booklet } from './booklets';

export const biologyBooklets: Booklet[] = [
  {
    id: 'bio-booklet-1',
    title: 'IGCSE Biology Practice Booklet 1',
    subtitle: 'Cell Biology, Nutrition & Transport',
    description: 'A comprehensive practice booklet covering fundamental IGCSE Biology topics including cell structure, nutrition, transport in plants and animals.',
    totalMarks: 25,
    sections: [
      {
        id: 'bio-s1',
        title: 'Section 1: Cell Biology',
        questions: [
          {
            id: 'bio-q1',
            number: 1,
            question: 'State the function of the nucleus in a eukaryotic cell.',
            marks: 1,
            solution: 'The nucleus controls the activities of the cell and contains the genetic material (DNA).',
            solutionSteps: [
              'The nucleus contains chromosomes made of DNA',
              'DNA carries genetic information',
              'The nucleus controls cell division and protein synthesis',
            ],
          },
          {
            id: 'bio-q2',
            number: 2,
            question: 'Name the organelle responsible for photosynthesis in plant cells.',
            marks: 1,
            solution: 'Chloroplast',
            solutionSteps: [
              'Chloroplasts contain chlorophyll',
              'Chlorophyll absorbs light energy',
              'This energy is used to convert CO₂ and water into glucose',
            ],
          },
          {
            id: 'bio-q3',
            number: 3,
            question: 'Describe the difference between plant and animal cells. Give three differences.',
            marks: 3,
            solution: 'Plant cells have: (1) a cell wall, (2) chloroplasts, (3) a large permanent vacuole. Animal cells do not have these structures.',
            solutionSteps: [
              'Plant cells have a rigid cell wall outside the cell membrane; animal cells only have a cell membrane',
              'Plant cells contain chloroplasts for photosynthesis; animal cells do not',
              'Plant cells have a large central vacuole; animal cells have small, temporary vacuoles or none',
            ],
          },
          {
            id: 'bio-q4',
            number: 4,
            question: 'What is the purpose of microscopy in biology?',
            marks: 1,
            solution: 'To observe structures that are too small to be seen with the naked eye.',
            solutionSteps: [
              'Many biological structures are microscopic',
              'Microscopes magnify images of these structures',
              'This allows detailed study of cells and organelles',
            ],
          },
          {
            id: 'bio-q5',
            number: 5,
            question: 'Calculate the actual size of a cell if the magnified image is 50 mm wide and the magnification is ×500.',
            marks: 2,
            solution: '0.1 mm (or 100 μm)',
            solutionSteps: [
              'Actual size = Magnified size ÷ Magnification',
              'Actual size = 50 mm ÷ 500',
              'Actual size = 0.1 mm = 100 μm',
            ],
          },
        ],
      },
      {
        id: 'bio-s2',
        title: 'Section 2: Nutrition',
        questions: [
          {
            id: 'bio-q6',
            number: 6,
            question: 'Name the enzyme that breaks down starch in the small intestine.',
            marks: 1,
            solution: 'Amylase (pancreatic amylase)',
            solutionSteps: [
              'Amylase is produced by the pancreas',
              'It is released into the small intestine',
              'It breaks starch down into maltose',
            ],
          },
          {
            id: 'bio-q7',
            number: 7,
            question: 'Explain the role of bile in digestion.',
            marks: 2,
            solution: 'Bile emulsifies (breaks down) large fat droplets into smaller droplets, increasing the surface area for the enzyme lipase to work on.',
            solutionSteps: [
              'Bile is produced by the liver and stored in the gallbladder',
              'Bile breaks large fat globules into smaller droplets (emulsification)',
              'This increases the surface area for lipase enzyme action',
            ],
          },
          {
            id: 'bio-q8',
            number: 8,
            question: 'State the products of photosynthesis and write the word equation.',
            marks: 2,
            solution: 'Products: glucose and oxygen. Word equation: Carbon dioxide + Water → Glucose + Oxygen (in the presence of light and chlorophyll)',
            solutionSteps: [
              'Photosynthesis uses carbon dioxide and water',
              'Light energy is absorbed by chlorophyll',
              'The products are glucose (a sugar) and oxygen',
            ],
          },
          {
            id: 'bio-q9',
            number: 9,
            question: 'Name the vitamin that is synthesised in the skin when exposed to sunlight.',
            marks: 1,
            solution: 'Vitamin D',
            solutionSteps: [
              'Vitamin D is essential for calcium absorption',
              'It is produced when UV light hits the skin',
              'It helps maintain healthy bones and teeth',
            ],
          },
        ],
      },
      {
        id: 'bio-s3',
        title: 'Section 3: Transport in Plants',
        questions: [
          {
            id: 'bio-q10',
            number: 10,
            question: 'Name the tissue that carries water from the roots to the leaves.',
            marks: 1,
            solution: 'Xylem',
            solutionSteps: [
              'Xylem vessels are made of dead cells',
              'They form continuous tubes from roots to leaves',
              'Water moves up by transpiration pull',
            ],
          },
          {
            id: 'bio-q11',
            number: 11,
            question: 'Explain how transpiration causes water to move up a plant.',
            marks: 3,
            solution: 'Water evaporates from the leaves (transpiration), creating a pull (transpiration pull) that draws water up through the xylem from the roots.',
            solutionSteps: [
              'Water evaporates from the mesophyll cells into air spaces in the leaf',
              'Water vapour exits through the stomata (transpiration)',
              'This creates a suction force (transpiration pull)',
              'The pull draws water up through the xylem vessels',
              'Cohesion between water molecules helps maintain the continuous column',
            ],
          },
          {
            id: 'bio-q12',
            number: 12,
            question: 'What is the role of the phloem in a plant?',
            marks: 1,
            solution: 'Phloem transports dissolved sugars (food) from the leaves to other parts of the plant (translocation).',
            solutionSteps: [
              'Phloem consists of living sieve tube elements',
              'It carries sugars from leaves (source) to storage/-growing areas (sink)',
              'This process is called translocation',
            ],
          },
        ],
      },
      {
        id: 'bio-s4',
        title: 'Section 4: Transport in Animals',
        questions: [
          {
            id: 'bio-q13',
            number: 13,
            question: 'Name the blood vessel that carries oxygenated blood from the heart to the body.',
            marks: 1,
            solution: 'Artery (specifically the aorta for the main artery)',
            solutionSteps: [
              'Arteries carry blood away from the heart',
              'The aorta is the main artery',
              'It carries oxygenated blood to the body tissues',
            ],
          },
          {
            id: 'bio-q14',
            number: 14,
            question: 'Describe the function of red blood cells.',
            marks: 2,
            solution: 'Red blood cells contain haemoglobin which binds to oxygen in the lungs and carries it to the body tissues.',
            solutionSteps: [
              'Red blood cells contain the protein haemoglobin',
              'Haemoglobin binds oxygen in the lungs (forming oxyhaemoglobin)',
              'The red blood cells transport oxygen to body tissues',
              'They release oxygen where it is needed for respiration',
            ],
          },
          {
            id: 'bio-q15',
            number: 15,
            question: 'State two functions of the human heart.',
            marks: 2,
            solution: '(1) Pumps oxygenated blood to the body. (2) Pumps deoxygenated blood to the lungs.',
            solutionSteps: [
              'The right side of the heart pumps deoxygenated blood to the lungs',
              'The left side of the heart pumps oxygenated blood to the body',
              'The heart provides the pressure to push blood through the blood vessels',
            ],
          },
        ],
      },
    ],
  },
];
