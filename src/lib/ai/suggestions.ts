import type { Subject } from './prompts';

const SUBJECT_SUGGESTIONS: Record<Subject, { patterns: RegExp[]; suggestions: string[] }[]> = {
  maths: [
    { patterns: [/algebra|equation|solve|quadratic|factor/i], suggestions: [
      'Can you show me how to solve a quadratic equation step by step?',
      'What is the difference between linear and quadratic equations?',
      'Show me practice problems for algebraic factorisation',
    ]},
    { patterns: [/geometry|angle|area|volume|pythagor|circle/i], suggestions: [
      'How do I calculate the area of a circle?',
      'Explain Pythagoras theorem with an example',
      'Show me a geometry problem from the practice booklets',
    ]},
    { patterns: [/statistic|mean|median|mode|probability|graph|chart/i], suggestions: [
      'What is the difference between mean, median, and mode?',
      'How do I calculate probability of combined events?',
      'Show me how to draw and interpret a pie chart',
    ]},
    { patterns: [/number|fraction|decimal|percent|ratio/i], suggestions: [
      'How do I add and subtract fractions?',
      'Explain how to work with ratios and proportions',
      'What are significant figures and how do I use them?',
    ]},
    { patterns: [/trig|sin|cos|tan/i], suggestions: [
      'Explain SOH CAH TOA with examples',
      'How do I find missing angles using trigonometry?',
      'Show me a trigonometry word problem',
    ]},
    { patterns: [/booklet|practice|exercise|paper/i], suggestions: [
      'Show me question 5 from booklet 3',
      'What practice booklets are available for maths?',
      'Give me a mixed revision exercise to try',
    ]},
  ],
  biology: [
    { patterns: [/cell|organelle|nucleus|mitochondria|membrane/i], suggestions: [
      'Explain the difference between plant and animal cells',
      'Draw and label a diagram of a plant cell',
      'What is the function of mitochondria?',
    ]},
    { patterns: [/photosynthesis|leaf|chloroplast|chlorophyll/i], suggestions: [
      'Explain the process of photosynthesis step by step',
      'What factors affect the rate of photosynthesis?',
      'Draw a diagram showing photosynthesis',
    ]},
    { patterns: [/heart|blood|circulation|artery|vein/i], suggestions: [
      'Explain the double circulation system',
      'Draw and label the structure of the heart',
      'What is the difference between arteries and veins?',
    ]},
    { patterns: [/enzyme|digestion|nutrient|protein|carbohydrate/i], suggestions: [
      'How do enzymes work? Explain the lock and key model',
      'What are the main nutrients and their functions?',
      'Explain the process of digestion',
    ]},
    { patterns: [/ecosystem|food.?chain|habitat|adapt/i], suggestions: [
      'Explain how energy flows through a food chain',
      'What is the difference between abiotic and biotic factors?',
      'How do organisms adapt to their environment?',
    ]},
  ],
  accounting: [
    { patterns: [/equation|asset|liability|capital|balance/i], suggestions: [
      'Explain the accounting equation with examples',
      'How does a transaction affect the accounting equation?',
      'Show me how to classify assets, liabilities, and capital',
    ]},
    { patterns: [/double.?entry|debit|credit|ledger|t.?account/i], suggestions: [
      'Explain debit and credit rules clearly',
      'Show me how to record transactions using double entry',
      'What is a T-account and how do I balance it?',
    ]},
    { patterns: [/trial.?balance|error|suspense|correction/i], suggestions: [
      'How do I prepare a trial balance?',
      'What are the different types of errors in accounting?',
      'How do I correct errors using a suspense account?',
    ]},
    { patterns: [/profit|loss|income|statement|financial/i], suggestions: [
      'How do I prepare an Income Statement?',
      'Explain the difference between gross profit and net profit',
      'Show me how to prepare a Balance Sheet',
    ]},
    { patterns: [/depreciation|bad.?debt|allowance|doubtful/i], suggestions: [
      'Explain straight line vs reducing balance depreciation',
      'How do I account for bad debts?',
      'What is the allowance for doubtful debts?',
    ]},
    { patterns: [/bank|reconciliation|control/i], suggestions: [
      'How do I prepare a bank reconciliation statement?',
      'What is a Sales Ledger Control Account?',
      'Explain the purpose of control accounts',
    ]},
    { patterns: [/partnership|ratio|profitability|liquidity/i], suggestions: [
      'How do partnership accounts work?',
      'What are the key financial ratios I should know?',
      'How do I calculate and interpret the current ratio?',
    ]},
  ],
  physics: [
    { patterns: [/force|newton|motion|acceleration|friction/i], suggestions: [
      'Explain Newton\'s three laws of motion',
      'What is the difference between mass and weight?',
      'How do I calculate force using F = ma?',
    ]},
    { patterns: [/energy|kinetic|potential|work|power/i], suggestions: [
      'Explain the law of conservation of energy',
      'How do I calculate kinetic and potential energy?',
      'What is efficiency and how is it calculated?',
    ]},
    { patterns: [/wave|frequency|amplitude|wavelength|sound|light/i], suggestions: [
      'What is the difference between transverse and longitudinal waves?',
      'Explain the wave equation v = fλ',
      'How does reflection and refraction of light work?',
    ]},
    { patterns: [/circuit|current|voltage|resistance|ohm|electric/i], suggestions: [
      'Explain Ohm\'s Law V = IR with examples',
      'What is the difference between series and parallel circuits?',
      'Draw a simple circuit diagram and explain it',
    ]},
    { patterns: [/moment|pressure|density|upthrust/i], suggestions: [
      'How do I calculate moments and use the principle of moments?',
      'Explain pressure in fluids',
      'What is the relationship between pressure, force, and area?',
    ]},
    { patterns: [/nuclear|radioactive|half.?life|atom|isotope/i], suggestions: [
      'Explain the structure of an atom',
      'What are the different types of radioactive decay?',
      'How do I calculate half-life?',
    ]},
  ],
  general: [
    { patterns: [/maths?|algebra|geometry|statistic|number|fraction|trig/i], suggestions: [
      'Switch to Maths mode and help me with algebra',
      'Show me maths practice booklets for LGCSE',
      'Explain Pythagoras theorem with a diagram',
    ]},
    { patterns: [/biology|cell|photosynthesis|enzyme|heart|ecosystem|dna/i], suggestions: [
      'Switch to Biology mode and explain cell structure',
      'Draw a plant cell diagram and explain each part',
      'Help me study for my biology exam',
    ]},
    { patterns: [/accounting|accou|debit|credit|ledger|trial.?balance|profit|loss/i], suggestions: [
      'Switch to Accounting mode and explain double entry',
      'Show me how to prepare a trial balance',
      'Help me understand the accounting equation',
    ]},
    { patterns: [/physics|force|energy|wave|circuit|newton|electric/i], suggestions: [
      'Switch to Physics mode and explain Newton\'s laws',
      'Help me understand electrical circuits',
      'Draw a wave diagram and explain wave properties',
    ]},
    { patterns: [/book|read|chapter|study|learn|practice/i], suggestions: [
      'What study materials are available on Mosh Books?',
      'Show me the available practice booklets',
      'How can I prepare effectively for my exams?',
    ]},
  ],
};

const FALLBACK_SUGGESTIONS: Record<Subject, string[]> = {
  maths: [
    'Can you explain how to solve a quadratic equation?',
    'Show me a geometry problem with a diagram',
    'What are the key topics I need to know for LGCSE Maths?',
  ],
  biology: [
    'Explain the difference between plant and animal cells',
    'What is photosynthesis and how does it work?',
    'Help me understand the human circulatory system',
  ],
  accounting: [
    'Explain the accounting equation with examples',
    'How do I prepare a trial balance?',
    'What is double entry bookkeeping?',
  ],
  physics: [
    'Explain Newton\'s laws of motion',
    'How do electric circuits work?',
    'What is the difference between speed and velocity?',
  ],
  general: [
    'What study materials are available on Mosh Books?',
    'Which subject should I start studying?',
    'How can I prepare for LGCSE exams effectively?',
  ],
};

export function getSuggestedQuestions(
  subject: Subject,
  lastUserMessage: string,
  lastAssistantMessage: string,
  messageCount: number
): string[] {
  if (messageCount <= 1) {
    return FALLBACK_SUGGESTIONS[subject];
  }

  const subjectRules = SUBJECT_SUGGESTIONS[subject] || [];

  const combined = `${lastUserMessage} ${lastAssistantMessage}`;

  for (const rule of subjectRules) {
    if (rule.patterns.some(p => p.test(combined))) {
      return rule.suggestions.slice(0, 3);
    }
  }

  for (const rule of subjectRules) {
    if (rule.patterns.some(p => p.test(lastUserMessage))) {
      return rule.suggestions.slice(0, 3);
    }
  }

  return FALLBACK_SUGGESTIONS[subject].slice(0, 3);
}
