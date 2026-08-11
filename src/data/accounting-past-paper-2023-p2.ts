import type { Booklet } from './booklets';

export const accountingPastPaper2023P2: Booklet = {
  id: 'lgcse-acc-2023-p2',
  title: 'LGCSE Accounting Paper 2 (May/June 2023)',
  subtitle: 'Official Examinations Council of Lesotho (ECoL) Past Question Paper 2',
  description: 'Complete 2023 LGCSE Accounting Paper 2 examination (100 Marks). Covers Books of Prime Entry & Source Documents, Capital vs Revenue Expenditure, Petty Cash Book (Imprest System), Financial Ratio Analysis, Sole Trader Financial Statements with Adjustments, and Manufacturing Accounts.',
  totalMarks: 100,
  type: 'past-paper',
  year: 2023,
  revisionNotes: {
    title: 'ECoL LGCSE Accounting Paper 2 (2023) — Master Exam Formulas & Concepts',
    sections: [
      {
        heading: 'Source Documents & Ledgers Overview',
        content: 'Transactions are recorded first in Business Source Documents, then in Books of Prime Entry (Journals), and finally posted to specific Ledger Accounts:\n• Purchases Invoice → Purchases Journal → Purchases Ledger (Creditor account)\n• Sales Invoice → Sales Journal → Sales Ledger (Debtor account)\n• Cheque Counterfoil → Cash Book → Ledger\n• Debit Note / Credit Note → Returns Journals → Ledgers',
        examples: [
          'Purchased goods on credit → Debit Purchases, Credit Supplier (Document: Purchases Invoice)',
          'Sold goods for cash → Debit Cash/Bank, Credit Sales (Document: Cash Receipt / Cash Slip)',
          'Returned goods to supplier → Debit Supplier, Credit Returns Outwards (Document: Debit Note / Credit Note)',
        ],
      },
      {
        heading: 'Petty Cash Book (Imprest System)',
        content: 'Under the Imprest System, the petty cashier is given a fixed sum of money (Imprest Amount) at the start of the period. At the end of the period, the total expenses paid are reimbursed to restore the cash balance back to the original imprest amount.\nImprest Balance = Total Imprest Received − Total Expenses Paid.',
        examples: [
          'Imprest Amount = M500',
          'Total Petty Cash Expenses Paid = M454 (Postage M74 + Stationery M138 + Travel M242)',
          'Balance c/d at end of month = M500 − M454 = M46',
          'Reimbursement needed to restore imprest = M454',
        ],
      },
      {
        heading: 'Financial Performance & Liquidity Ratios',
        content: '1. Expenses / Turnover Percentage = (Total Expenses / Turnover) × 100%\n2. Current Ratio = Current Assets / Current Liabilities (Ideal standard = 2 : 1)\n3. Rate of Inventory Turnover = Cost of Goods Sold / Average Inventory (or Turnover / Average Inventory)\n4. Return on Capital Employed (ROCE) = (Net Profit / Total Capital Employed) × 100%',
        examples: [
          'ROCE 2023 = (M26,000 Net Profit / M150,000 Capital Employed) × 100 = 17.33%',
          'Current Ratio 2023 = M780,000 Current Assets / M420,000 Current Liabilities = 1.86 : 1',
        ],
      },
      {
        heading: 'Sole Trader Financial Statement Adjustments',
        content: 'Year-End Adjustments to master:\n• Rent Prepaid: Subtract from Rent expense in Income Statement; list as Current Asset in Statement of Financial Position.\n• Accrued Expenses: Add to expense in Income Statement; list under Current Liabilities.\n• Accrued Income: Add to revenue in Income Statement; list under Current Assets.\n• Bad Debts & Provision for Doubtful Debts: Write off bad debt from Trade Receivables first; calculate new provision percentage on remaining net receivables.',
        examples: [
          'Trade Receivables M5,800 − M200 Bad Debt = M5,600',
          'Provision for Doubtful Debts = 2% of M5,600 = M112',
          'Net Receivables on Balance Sheet = M5,600 − M112 = M5,488',
        ],
      },
      {
        heading: 'Manufacturing Account Structure',
        content: 'Production Cost = Cost of Raw Materials Consumed + Direct Labour + Factory Overheads + Opening WIP − Closing WIP.\n• Cost of Materials Consumed = Opening Raw Materials + Purchases of Raw Materials − Closing Raw Materials.\n• Prime Cost = Direct Materials + Direct Wages + Direct Expenses.\n• Factory Overheads include factory supervisor wages, factory rent, factory machinery depreciation, and general factory expenses.',
        examples: [
          'Raw Materials Consumed = M14,080 + M87,640 − M12,440 = M89,280',
          'Prime Cost = M89,280 + M80,380 Direct Wages = M169,660',
          'Production Cost = M169,660 Prime Cost + M78,620 Overheads + M1,620 Opening WIP − M1,900 Closing WIP = M248,000',
        ],
      },
    ],
  },
  sections: [
    {
      id: 'sec-p2-q1',
      title: 'Question 1: Source Documents, Double Entry & Ledger Divisions (22 Marks)',
      questions: [
        {
          id: 'acc-2023-p2-q1a',
          number: 1,
          question: '1 (a) The following transactions were available from the books of Rabutla Wholesale Store for May 2023:\n\nMay 3: Bought goods from Neo M4 500\nMay 8: Purchased stationery from Sheshe M850\nMay 12: Sold goods to Thapelo General Dealer for cash M3 800\nMay 18: Paid Neo amount owed on September 3 by cheque in full M4 300\nMay 23: Bought goods from Nkoe Manufacturing Company M2 500\nMay 29: Returned stationery to Sheshe M60\n\nComplete the table below to show the account to be debited, the account to be credited, and the business source document for each transaction. (Sept 3 is given as an example).',
          marks: 16,
          diagram: `<div class="overflow-x-auto my-3">
  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono">
    <thead>
      <tr class="bg-indigo-100 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200">
        <th class="border border-gray-300 dark:border-gray-700 p-2 text-left">Date</th>
        <th class="border border-gray-300 dark:border-gray-700 p-2 text-left">Account to be debited</th>
        <th class="border border-gray-300 dark:border-gray-700 p-2 text-left">Account to be credited</th>
        <th class="border border-gray-300 dark:border-gray-700 p-2 text-left">Business documents</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-50 dark:bg-gray-800/40 font-semibold text-gray-500">
        <td class="border p-2">Sept 3 (Example)</td>
        <td class="border p-2">Purchases</td>
        <td class="border p-2">Neo</td>
        <td class="border p-2">Purchases Invoice</td>
      </tr>
      <tr><td class="border p-2 font-bold">May 8</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 font-bold">May 12</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 font-bold">May 18</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 font-bold">May 23</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 font-bold">May 29</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
    </tbody>
  </table>
</div>`,
          solution: 'May 8: Stationery / Sheshe / Invoice | May 12: Cash / Sales / Cash Receipt | May 18: Neo / Bank / Cheque counterfoil | May 23: Purchases / Nkoe Manufacturing Company / Purchases Invoice | May 29: Sheshe / Stationery / Debit Note',
          solutionSteps: [
            '<div class="space-y-3 font-sans">',
            '  <h4 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm">Completed Transaction Analysis Table:</h4>',
            '  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200">',
            '        <th class="border p-2 text-left">Date</th>',
            '        <th class="border p-2 text-left">Account to be debited</th>',
            '        <th class="border p-2 text-left">Account to be credited</th>',
            '        <th class="border p-2 text-left">Business documents</th>',
            '      </tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr class="text-gray-500 bg-gray-50 dark:bg-gray-800/50"><td class="border p-2">Sept 3</td><td class="border p-2">Purchases</td><td class="border p-2">Neo</td><td class="border p-2">Purchases Invoice</td></tr>',
            '      <tr><td class="border p-2 font-bold">May 8</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Stationery</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Sheshe</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Invoice (Purchases Invoice)</td></tr>',
            '      <tr><td class="border p-2 font-bold">May 12</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Cash (or Bank)</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Sales</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Cash Receipt / Cash Slip</td></tr>',
            '      <tr><td class="border p-2 font-bold">May 18</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Neo</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Bank</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Cheque Counterfoil</td></tr>',
            '      <tr><td class="border p-2 font-bold">May 23</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Purchases</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Nkoe Manufacturing Company</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Purchases Invoice</td></tr>',
            '      <tr><td class="border p-2 font-bold">May 29</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Sheshe</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Stationery (or Returns)</td><td class="border p-2 font-semibold text-emerald-700 dark:text-emerald-400">Debit Note (or Credit Note)</td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
        {
          id: 'acc-2023-p2-q1b',
          number: 2,
          question: '1 (b) State three divisions of the ledger and give one example of account kept in each division.',
          marks: 6,
          diagram: `<div class="overflow-x-auto my-3">
  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono">
    <thead>
      <tr class="bg-purple-100 dark:bg-purple-950/60 text-purple-950 dark:text-purple-200">
        <th class="border p-2 text-left">Ledger division</th>
        <th class="border p-2 text-left">Examples of Accounts</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2 text-gray-400">1. [ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 text-gray-400">2. [ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 text-gray-400">3. [ Your answer ]</td><td class="border p-2 text-gray-400">[ Your answer ]</td></tr>
    </tbody>
  </table>
</div>`,
          solution: '1. Sales Ledger (Debtors Ledger) — Customer Accounts (e.g., Thapelo General Dealer account) | 2. Purchases Ledger (Creditors Ledger) — Supplier Accounts (e.g., Neo account, Nkoe Manufacturing Co account) | 3. General Ledger (Nominal Ledger) — Real and Nominal Accounts (e.g., Sales, Purchases, Stationery, Rent, Equipment)',
          solutionSteps: [
            '<div class="space-y-3 font-sans">',
            '  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-purple-100 dark:bg-purple-950/60 text-purple-950 dark:text-purple-200">',
            '        <th class="border p-2 text-left">Ledger division</th>',
            '        <th class="border p-2 text-left">Examples of Accounts</th>',
            '      </tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-2 font-bold text-indigo-700 dark:text-indigo-300">1. Sales Ledger (Debtors Ledger)</td><td class="border p-2 text-gray-800 dark:text-gray-200">Personal accounts of credit customers / debtors (e.g., Thapelo General Dealer, Thabo)</td></tr>',
            '      <tr><td class="border p-2 font-bold text-indigo-700 dark:text-indigo-300">2. Purchases Ledger (Creditors Ledger)</td><td class="border p-2 text-gray-800 dark:text-gray-200">Personal accounts of credit suppliers / creditors (e.g., Neo, Sheshe, Nkoe Manufacturing Co)</td></tr>',
            '      <tr><td class="border p-2 font-bold text-indigo-700 dark:text-indigo-300">3. General Ledger (Nominal Ledger)</td><td class="border p-2 text-gray-800 dark:text-gray-200">Impersonal, expense, revenue, asset, liability & capital accounts (e.g., Sales, Purchases, Stationery, Cash, Capital)</td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
      ],
    },
    {
      id: 'sec-p2-q2',
      title: 'Question 2: Capital vs Revenue Expenditure & Petty Cash Book (25 Marks)',
      questions: [
        {
          id: 'acc-2023-p2-q2a',
          number: 3,
          question: '2 (a) Define with examples the following terms:\n(i) Capital Expenditure [2 marks]\n(ii) Revenue Expenditure [2 marks]',
          marks: 4,
          solution: '(i) Capital Expenditure: Expenditure incurred on purchasing, acquiring, or improving non-current assets that provide long-term financial benefit to the business (e.g., purchasing machinery, delivery van, or building extensions).\n(ii) Revenue Expenditure: Day-to-day operational expenses incurred to run the business and maintain non-current assets in working order within the current period (e.g., paying wages, purchasing fuel, machine repairs, rent).',
          solutionSteps: [
            'Capital Expenditure = Long-term asset acquisition/improvement (e.g., buying a vehicle or motor van).',
            'Revenue Expenditure = Short-term operating expense (e.g., motor van fuel or vehicle maintenance).',
          ],
        },
        {
          id: 'acc-2023-p2-q2b',
          number: 4,
          question: '2 (b) Suggest one effect of incorrect treatment of capital expenditure as revenue expenditure on the financial statements:\n(i) On the Income Statement [1 mark]\n(ii) On the Statement of Financial Position [1 mark]',
          marks: 2,
          solution: '(i) Income Statement: Profit for the year (Net Profit) will be understated (too low) because asset cost is incorrectly charged as an expense.\n(ii) Statement of Financial Position: Non-current assets (and total owner\'s capital) will be understated (too low).',
          solutionSteps: [
            '(i) Treating capital expenditure as revenue expense increases total expenses → Profit for year is UNDERSTATED.',
            '(ii) Asset is omitted from non-current assets → Total Non-Current Assets & Capital are UNDERSTATED.',
          ],
        },
        {
          id: 'acc-2023-p2-q2c',
          number: 5,
          question: '2 (c) State two stakeholders and their interests in the financial statements of a business.',
          marks: 4,
          diagram: `<div class="overflow-x-auto my-3">
  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono">
    <thead>
      <tr class="bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200">
        <th class="border p-2 text-left">Stakeholder</th>
        <th class="border p-2 text-left">Interest in Financial Statements</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2 text-gray-400">1. [ Stakeholder 1 ]</td><td class="border p-2 text-gray-400">[ Their interest ]</td></tr>
      <tr><td class="border p-2 text-gray-400">2. [ Stakeholder 2 ]</td><td class="border p-2 text-gray-400">[ Their interest ]</td></tr>
    </tbody>
  </table>
</div>`,
          solution: '1. Owners / Shareholders — Interest: To measure profitability, assess return on investment (ROCE), and check growth of equity.\n2. Banks / Lenders — Interest: To assess liquidity and evaluate the business\'s ability to repay loans and pay interest on time.\n(Other valid options: Suppliers - check creditworthiness; Tax Authority - verify taxable profit; Employees - job security).',
          solutionSteps: [
            'Owners: Want to know if the business is making profit and whether their capital investment is secure.',
            'Bank / Lenders: Want to check if the business has enough liquid funds to service loan repayments.',
          ],
        },
        {
          id: 'acc-2023-p2-q2d',
          number: 6,
          question: '2 (d) Record the following transactions in the Petty Cash Book of Mosa with analysis columns for postage, printing and stationery, and travelling expenses. M500 was given to the Petty Cashier on May 1 2023 under the imprest system.\n\nMay 2: Paid for postage stamps M32\nMay 2: Paid for stationery M40\nMay 3: Paid for transport M21\nMay 3: Paid for postage stamps M24\nMay 8: Paid for pencils M12\nMay 12: Paid for transport M64\nMay 23: Paid for pens M26\nMay 26: Paid for taxi fare M52\nMay 28: Paid for taxi fare M50\nMay 29: Paid for envelopes M18\nMay 30: Paid for printing of letter heads M60\nMay 31: Paid for taxi fare M55\n\nBalance the petty cash book at the end of May and bring down the balance on 1 June 2023.',
          marks: 15,
          solution: 'Total Expenses Paid = M454 | Postage = M74 | Printing & Stationery = M138 | Travelling Expenses = M242 | Balance c/d on 31 May = M46 | Imprest Restored on 1 June = M454',
          solutionSteps: [
            '<div class="space-y-3 font-sans overflow-x-auto">',
            '  <h4 class="font-bold text-gray-900 dark:text-white text-sm">Mosa — Petty Cash Book for the month of May 2023</h4>',
            '  <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold">',
            '        <th class="border p-1.5 text-right">Total Rec. (M)</th>',
            '        <th class="border p-1.5 text-center">Date</th>',
            '        <th class="border p-1.5 text-left">Details</th>',
            '        <th class="border p-1.5 text-center">Vo. No.</th>',
            '        <th class="border p-1.5 text-right">Total Paid (M)</th>',
            '        <th class="border p-1.5 text-right">Postage (M)</th>',
            '        <th class="border p-1.5 text-right">Printing &amp; Stat. (M)</th>',
            '        <th class="border p-1.5 text-right">Travelling Exp. (M)</th>',
            '      </tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-1 text-right font-bold text-indigo-600">500</td><td class="border p-1 text-center">May 1</td><td class="border p-1">Bank (Imprest received)</td><td class="border p-1 text-center">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 2</td><td class="border p-1">Postage stamps</td><td class="border p-1 text-center">1</td><td class="border p-1 text-right">32</td><td class="border p-1 text-right">32</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 2</td><td class="border p-1">Stationery</td><td class="border p-1 text-center">2</td><td class="border p-1 text-right">40</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">40</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 3</td><td class="border p-1">Transport</td><td class="border p-1 text-center">3</td><td class="border p-1 text-right">21</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">21</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 3</td><td class="border p-1">Postage stamps</td><td class="border p-1 text-center">4</td><td class="border p-1 text-right">24</td><td class="border p-1 text-right">24</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 8</td><td class="border p-1">Pencils</td><td class="border p-1 text-center">5</td><td class="border p-1 text-right">12</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">12</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 12</td><td class="border p-1">Transport</td><td class="border p-1 text-center">6</td><td class="border p-1 text-right">64</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">64</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 23</td><td class="border p-1">Pens</td><td class="border p-1 text-center">7</td><td class="border p-1 text-right">26</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">26</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 26</td><td class="border p-1">Taxi fare</td><td class="border p-1 text-center">8</td><td class="border p-1 text-right">52</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">52</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 28</td><td class="border p-1">Taxi fare</td><td class="border p-1 text-center">9</td><td class="border p-1 text-right">50</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">50</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 29</td><td class="border p-1">Envelopes</td><td class="border p-1 text-center">10</td><td class="border p-1 text-right">18</td><td class="border p-1 text-right">18</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 30</td><td class="border p-1">Printing letter heads</td><td class="border p-1 text-center">11</td><td class="border p-1 text-right">60</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">60</td><td class="border p-1 text-right">—</td></tr>',
            '      <tr><td class="border p-1"></td><td class="border p-1 text-center">May 31</td><td class="border p-1">Taxi fare</td><td class="border p-1 text-center">12</td><td class="border p-1 text-right">55</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">—</td><td class="border p-1 text-right">55</td></tr>',
            '      <tr class="font-bold bg-gray-100 dark:bg-gray-800"><td class="border p-1"></td><td class="border p-1 text-center">May 31</td><td class="border p-1">Totals</td><td class="border p-1"></td><td class="border p-1 text-right font-bold">454</td><td class="border p-1 text-right text-indigo-600">74</td><td class="border p-1 text-right text-indigo-600">138</td><td class="border p-1 text-right text-indigo-600">242</td></tr>',
            '      <tr class="font-bold"><td class="border p-1"></td><td class="border p-1 text-center">May 31</td><td class="border p-1">Balance c/d</td><td class="border p-1"></td><td class="border p-1 text-right">46</td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td></tr>',
            '      <tr class="font-bold bg-gray-200 dark:bg-gray-700"><td class="border p-1 text-right">500</td><td class="border p-1"></td><td class="border p-1">Total</td><td class="border p-1"></td><td class="border p-1 text-right">500</td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td></tr>',
            '      <tr class="font-bold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200"><td class="border p-1 text-right">46</td><td class="border p-1 text-center">Jun 1</td><td class="border p-1">Balance b/d</td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td></tr>',
            '      <tr class="font-bold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300"><td class="border p-1 text-right">454</td><td class="border p-1 text-center">Jun 1</td><td class="border p-1">Bank (Reimbursement)</td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td><td class="border p-1"></td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
      ],
    },
    {
      id: 'sec-p2-q3',
      title: 'Question 3: Financial Ratio Analysis & Performance Evaluation (12 Marks)',
      questions: [
        {
          id: 'acc-2023-p2-q3a1',
          number: 7,
          question: '3 (a)(i) Rabele provided financial information for his business (31 May 2022 & 31 May 2023):\n- Turnover: 2022 = M900 000 | 2023 = M840 000\n- Gross Profit: 2022 = M300 000 | 2023 = M210 000\n- Expenses: 2022 = M150 000 | 2023 = M180 000\n- Profit for the year: 2022 = M150 000 | 2023 = M30 000\n- Current Assets: 2022 = M820 000 | 2023 = M780 000\n- Current Liabilities: 2022 = M375 000 | 2023 = M420 000\n\nSuggest two actions Rabele could take to improve his profit for the year in 2023.',
          marks: 4,
          solution: '1. Reduce operating expenses (e.g., negotiate cheaper rent/utility costs, eliminate wasted administration expenditure).\n2. Increase sales turnover by advertising or offering targeted sales promotions.\n3. Increase gross profit margin by negotiating discounts from trade suppliers to reduce Cost of Goods Sold.',
          solutionSteps: [
            'Action 1: Cut down expenses (which rose from M150,000 to M180,000).',
            'Action 2: Boost sales volume / turnover (which fell from M900,000 to M840,000).',
          ],
        },
        {
          id: 'acc-2023-p2-q3a2',
          number: 8,
          question: '3 (a)(ii) Calculate the following ratios for both years 2022 and 2023 (correct to two decimal places):\n1. Expenses / Turnover percentage\n2. Current ratio',
          marks: 4,
          diagram: `<div class="overflow-x-auto my-3">
  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono">
    <thead>
      <tr class="bg-indigo-100 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200">
        <th class="border p-2 text-left">Ratio</th>
        <th class="border p-2 text-center">May 2022</th>
        <th class="border p-2 text-center">May 2023</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="border p-2 font-bold">Expenses / turnover percentage</td><td class="border p-2 text-center text-gray-400">[ Your answer ]</td><td class="border p-2 text-center text-gray-400">[ Your answer ]</td></tr>
      <tr><td class="border p-2 font-bold">Current ratio</td><td class="border p-2 text-center text-gray-400">[ Your answer ]</td><td class="border p-2 text-center text-gray-400">[ Your answer ]</td></tr>
    </tbody>
  </table>
</div>`,
          solution: 'Expenses/Turnover %: 2022 = 16.67% | 2023 = 21.43% || Current Ratio: 2022 = 2.19 : 1 | 2023 = 1.86 : 1',
          solutionSteps: [
            '<div class="space-y-3 font-sans">',
            '  <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200">',
            '        <th class="border p-2 text-left">Ratio</th>',
            '        <th class="border p-2 text-center">May 2022</th>',
            '        <th class="border p-2 text-center">May 2023</th>',
            '      </tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-2 font-bold">Expenses / turnover %</td><td class="border p-2 text-center font-bold text-emerald-700 dark:text-emerald-400">16.67%<br/><span class="text-[10px] font-normal text-gray-500">(150,000 / 900,000 × 100)</span></td><td class="border p-2 text-center font-bold text-emerald-700 dark:text-emerald-400">21.43%<br/><span class="text-[10px] font-normal text-gray-500">(180,000 / 840,000 × 100)</span></td></tr>',
            '      <tr><td class="border p-2 font-bold">Current ratio</td><td class="border p-2 text-center font-bold text-emerald-700 dark:text-emerald-400">2.19 : 1<br/><span class="text-[10px] font-normal text-gray-500">(820,000 / 375,000)</span></td><td class="border p-2 text-center font-bold text-emerald-700 dark:text-emerald-400">1.86 : 1<br/><span class="text-[10px] font-normal text-gray-500">(780,000 / 420,000)</span></td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
        {
          id: 'acc-2023-p2-q3b',
          number: 9,
          question: '3 (b) Rabele\'s rate of inventory turnover fell from 10 times in 2022 to 8 times in 2023. Explain two possible reasons for this fall.',
          marks: 2,
          solution: '1. Holding excess or slow-moving stock due to poor inventory management.\n2. Fall in sales volume / customer demand during 2023.',
          solutionSteps: [
            'Reason 1: Rabele bought too much stock that did not sell quickly.',
            'Reason 2: Demand fell, causing turnover to decline from M900,000 to M840,000.',
          ],
        },
        {
          id: 'acc-2023-p2-q3c',
          number: 10,
          question: '3 (c) Suggest two ways Rabele could use to improve his rate of inventory turnover.',
          marks: 2,
          solution: '1. Run promotional sales or offer discounts to clear slow-moving inventory.\n2. Reduce inventory re-order quantities to maintain lower stock levels.',
          solutionSteps: [
            'Strategy 1: Discount old stock to move it faster.',
            'Strategy 2: Order smaller inventory batches more frequently.',
          ],
        },
      ],
    },
    {
      id: 'sec-p2-q4',
      title: 'Question 4: Sole Trader Financial Statements with Adjustments (19 Marks)',
      questions: [
        {
          id: 'acc-2023-p2-q4a',
          number: 11,
          question: '4 (a) The trial balance of \'Mamatebele (legal service business) at 31 March 2023 shows:\n- Capital: M35 000 | Drawings: M13 500\n- 8% Loan repayable 2026: M15 000\n- Consultation fees: M8 900 | Appearance in court fees: M18 500 | Other legal fees: M5 500\n- Loan interest paid: M1 200 | Electricity: M1 000 | Stationery: M3 500\n- Rent and Insurance: M2 800 | Wages & Salaries: M21 600 | Revenue stamps: M500\n- Cash at bank: M16 000 | Trade Receivables: M5 800 | Petty Cash: M2 500 | Equipment: M14 500\n\nAdditional Information:\n1. Rent M600 paid for half year ended 30 June 2023; Insurance owing M130.\n2. Appearance in court fee owing M2 000.\n3. Bad debt M200 to be written off.\n4. Depreciation of equipment at 10% per annum on cost.\n5. Provision for doubtful debts created at 2% of outstanding trade receivables.\n\nPrepare the Income Statement for the year ended 31 March 2023.',
          marks: 7,
          solution: 'Total Legal Fees Revenue = M34 900 | Total Expenses = M32 192 | Profit for the Year = M2 708',
          solutionSteps: [
            '<div class="space-y-3 font-sans overflow-x-auto">',
            '  <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-blue-100 dark:bg-blue-950/60 text-blue-950 dark:text-blue-200"><th class="border p-2 text-left" colspan="3">\'Mamatebele — Income Statement for the year ended 31 March 2023</th></tr>',
            '      <tr class="bg-gray-100 dark:bg-gray-800 font-bold"><td class="border p-1.5 text-left">Details</td><td class="border p-1.5 text-right">M</td><td class="border p-1.5 text-right">M</td></tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-1 font-bold" colspan="3">Revenue / Legal Fees Income:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Consultation fees</td><td class="border p-1 text-right">8 900</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Appearance in court fees (18,500 + 2,000 owing)</td><td class="border p-1 text-right">20 500</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Other legal fees</td><td class="border p-1 text-right">5 500</td><td class="border p-1 text-right"></td></tr>',
            '      <tr class="font-bold bg-blue-50 dark:bg-blue-950/30"><td class="border p-1">Total Income</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">34 900</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="3">Less: Expenses:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Loan interest paid</td><td class="border p-1 text-right">1 200</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Electricity</td><td class="border p-1 text-right">1 000</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Stationery</td><td class="border p-1 text-right">3 500</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Rent &amp; Insurance (2,800 − 300 prepaid rent + 130 insurance owing)</td><td class="border p-1 text-right">2 630</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Wages and Salaries</td><td class="border p-1 text-right">21 600</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Revenue stamps costs</td><td class="border p-1 text-right">500</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Bad debt written off</td><td class="border p-1 text-right">200</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Depreciation of equipment (10% × 14,500)</td><td class="border p-1 text-right">1 450</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Provision for doubtful debts (2% × [5,800 − 200])</td><td class="border p-1 text-right">112</td><td class="border p-1 text-right"></td></tr>',
            '      <tr class="font-bold bg-gray-100 dark:bg-gray-800"><td class="border p-1">Total Expenses</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">(32 192)</td></tr>',
            '      <tr class="font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200"><td class="border p-1">Profit for the Year</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">2 708</td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
        {
          id: 'acc-2023-p2-q4b',
          number: 12,
          question: '4 (b) Prepare Statement of Financial Position for \'Mamatebele as at 31 March 2023, showing clearly working capital.',
          marks: 12,
          solution: 'Non-Current Assets = M13 050 | Working Capital = M26 158 | Net Assets = M24 208 | Total Capital = M24 208',
          solutionSteps: [
            '<div class="space-y-3 font-sans overflow-x-auto">',
            '  <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-indigo-100 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200"><th class="border p-2 text-left" colspan="4">\'Mamatebele — Statement of Financial Position as at 31 March 2023</th></tr>',
            '      <tr class="bg-gray-100 dark:bg-gray-800 font-bold"><td class="border p-1.5 text-left">Details</td><td class="border p-1.5 text-right">Cost (M)</td><td class="border p-1.5 text-right">Acc. Dep (M)</td><td class="border p-1.5 text-right">NBV (M)</td></tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-1 font-bold" colspan="4">Non-Current Assets:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Equipment</td><td class="border p-1 text-right">14 500</td><td class="border p-1 text-right">(1 450)</td><td class="border p-1 text-right font-bold">13 050</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="4">Current Assets:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Trade Receivables (5,800 − 200 − 112 provision)</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">5 488</td></tr>',
            '      <tr><td class="border p-1 pl-4">Accrued Court Fees</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">2 000</td></tr>',
            '      <tr><td class="border p-1 pl-4">Prepaid Rent</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">300</td></tr>',
            '      <tr><td class="border p-1 pl-4">Cash at bank</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">16 000</td></tr>',
            '      <tr><td class="border p-1 pl-4">Petty cash</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">2 500</td></tr>',
            '      <tr class="font-bold bg-gray-50 dark:bg-gray-800/40"><td class="border p-1">Total Current Assets</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">26 288</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="4">Less: Current Liabilities:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Insurance owing (accrued)</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">(130)</td></tr>',
            '      <tr class="font-bold bg-indigo-50 dark:bg-indigo-950/40"><td class="border p-1">Working Capital (Current Assets − Current Liabilities)</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">26 158</td></tr>',
            '      <tr class="font-bold bg-blue-100 dark:bg-blue-950/60"><td class="border p-1">Total Assets Less Current Liabilities</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">39 208</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="4">Less: Non-Current Liabilities:</td></tr>',
            '      <tr><td class="border p-1 pl-4">8% Loan repayable 2026</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">(15 000)</td></tr>',
            '      <tr class="font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200"><td class="border p-1">Net Assets</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">24 208</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="4">Financed by Capital:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Capital at 1 April 2022</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">35 000</td></tr>',
            '      <tr><td class="border p-1 pl-4">Add: Profit for the year</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">2 708</td></tr>',
            '      <tr><td class="border p-1 pl-4">Less: Drawings</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">(13 500)</td></tr>',
            '      <tr class="font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200"><td class="border p-1">Total Capital at 31 March 2023</td><td class="border p-1 text-right"></td><td class="border p-1 text-right"></td><td class="border p-1 text-right">24 208</td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
      ],
    },
    {
      id: 'sec-p2-q5',
      title: 'Question 5: Manufacturing Accounts & Capital Structure (22 Marks)',
      questions: [
        {
          id: 'acc-2023-p2-q5a',
          number: 13,
          question: '5 (a) Proudly Lesotho Ltd is a manufacturing business with a retail outlet (year ends 30 April).\n\nInformation provided:\n- Inventories 1 May 2022: Raw Materials M14 080 | Work in Progress M1 620 | Finished Goods M11 560\n- Inventories 30 April 2023: Raw Materials M12 440 | Work in Progress M1 900 | Finished Goods M12 200\n- Purchases of Raw Materials: M87 640\n- Wages: Factory machine operators M80 380 | Factory supervisors M36 800 | Office & sales staff M74 000\n- General Expenses: Factory M10 680 | Office M7 200\n- Rates and insurance: M15 000\n\nAdditional Information:\n1. Factory machine cost M84 000, office machine cost M46 000 (depreciation 20% on cost).\n2. Rates and insurance apportioned into factory 4/5 and office 1/5.\n3. Accrued wages on 30 April: Factory supervisors M2 340, office staff M1 200.\n\nPrepare Manufacturing Account for Proudly Lesotho Ltd for the year ended 30 April 2023, showing cost of raw materials consumed, prime cost, and production cost.',
          marks: 13,
          solution: 'Cost of Raw Materials Consumed = M89 280 | Prime Cost = M169 660 | Production Cost = M248 000',
          solutionSteps: [
            '<div class="space-y-3 font-sans overflow-x-auto">',
            '  <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 text-xs font-mono bg-white dark:bg-gray-900">',
            '    <thead>',
            '      <tr class="bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200"><th class="border p-2 text-left" colspan="3">Proudly Lesotho Ltd — Manufacturing Account for the year ended 30 April 2023</th></tr>',
            '      <tr class="bg-gray-100 dark:bg-gray-800 font-bold"><td class="border p-1.5 text-left">Details</td><td class="border p-1.5 text-right">M</td><td class="border p-1.5 text-right">M</td></tr>',
            '    </thead>',
            '    <tbody>',
            '      <tr><td class="border p-1 font-bold" colspan="3">Direct Materials:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Opening inventory of Raw Materials (1 May 2022)</td><td class="border p-1 text-right">14 080</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Add: Purchases of Raw Materials</td><td class="border p-1 text-right">87 640</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Less: Closing inventory of Raw Materials (30 April 2023)</td><td class="border p-1 text-right">(12 440)</td><td class="border p-1 text-right"></td></tr>',
            '      <tr class="font-bold bg-amber-50 dark:bg-amber-950/30"><td class="border p-1">Cost of Raw Materials Consumed</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">89 280</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="3">Direct Expenses / Direct Labour:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Factory machine operators wages</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">80 380</td></tr>',
            '      <tr class="font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-950 dark:text-amber-200"><td class="border p-1">Prime Cost</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">169 660</td></tr>',
            '      <tr><td class="border p-1 font-bold" colspan="3">Factory Overheads:</td></tr>',
            '      <tr><td class="border p-1 pl-4">Factory supervisors wages (36,800 + 2,340 accrued)</td><td class="border p-1 text-right">39 140</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">General expenses - Factory</td><td class="border p-1 text-right">10 680</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Rates and insurance (4/5 × 15,000)</td><td class="border p-1 text-right">12 000</td><td class="border p-1 text-right"></td></tr>',
            '      <tr><td class="border p-1 pl-4">Depreciation of factory machine (20% × 84,000)</td><td class="border p-1 text-right">16 800</td><td class="border p-1 text-right"></td></tr>',
            '      <tr class="font-bold bg-gray-50 dark:bg-gray-800/40"><td class="border p-1">Total Factory Overheads</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">78 620</td></tr>',
            '      <tr class="font-bold"><td class="border p-1">Total Production Expenses</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">248 280</td></tr>',
            '      <tr><td class="border p-1 pl-4">Add: Opening Work in Progress (1 May 2022)</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">1 620</td></tr>',
            '      <tr><td class="border p-1 pl-4">Less: Closing Work in Progress (30 April 2023)</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">(1 900)</td></tr>',
            '      <tr class="font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200"><td class="border p-1">Production Cost of Finished Goods</td><td class="border p-1 text-right"></td><td class="border p-1 text-right">248 000</td></tr>',
            '    </tbody>',
            '  </table>',
            '</div>',
          ],
        },
        {
          id: 'acc-2023-p2-q5b',
          number: 14,
          question: '5 (b) Explain to Proudly Lesotho Ltd management why it is important that their inventories be valued at the lower of cost and net realisable value.',
          marks: 2,
          solution: 'To ensure that inventory and profits for the year are not overstated in accordance with accounting rules. If the net realisable value (selling price minus completion/selling costs) drops below historical cost, inventory is written down so that unrealized profits are not recognized.',
          solutionSteps: [
            'Prevents overstating current assets and profit.',
            'Reflects potential losses as soon as inventory value drops.',
          ],
        },
        {
          id: 'acc-2023-p2-q5c',
          number: 15,
          question: '5 (c) Give the accounting principle followed in 5 (b) above.',
          marks: 1,
          expectedAnswer: 'Prudence concept',
          solution: 'Prudence concept (or Conservatism).',
          solutionSteps: ['Prudence requires accounting for potential losses immediately while recognizing gains only when realized.'],
        },
        {
          id: 'acc-2023-p2-q5d1',
          number: 16,
          question: '5 (d)(i) Proudly Lesotho Ltd\'s Income Statement showed Gross Profit M170 000 and total expenses M144 000. Capital on 30 April 2023 was M130 000, and bank loan borrowed was M20 000. Calculate return on capital employed (ROCE).',
          marks: 2,
          solution: 'Net Profit = M170 000 − M144 000 = M26 000 | Capital Employed = M130 000 + M20 000 = M150 000 | ROCE = (26 000 / 150 000) × 100 = 17.33%',
          solutionSteps: [
            'Net Profit = Gross Profit (M170,000) − Operating Expenses (M144,000) = M26,000.',
            'Total Capital Employed = Capital (M130,000) + Bank Loan (M20,000) = M150,000.',
            'ROCE = (Net Profit / Total Capital Employed) × 100 = (26,000 / 150,000) × 100 = 17.33%.',
          ],
        },
        {
          id: 'acc-2023-p2-q5d2',
          number: 17,
          question: '5 (d)(ii) ROCE on 30 April 2022 was 19.50%. State whether there was an increase or decrease in ROCE and explain whether Proudly Lesotho Ltd will be satisfied.',
          marks: 2,
          solution: 'State: Decrease (fell from 19.50% to 17.33%)\nExplain: Proudly Lesotho Ltd will NOT be satisfied because the efficiency of generating return on invested capital has declined by 2.17 percentage points.',
          solutionSteps: [
            'Decrease: 19.50% in 2022 fell to 17.33% in 2023.',
            'Explanation: Management will be dissatisfied because capital invested generated less return than the previous year.',
          ],
        },
        {
          id: 'acc-2023-p2-q5e',
          number: 18,
          question: '5 (e) Suggest any two ways to Proudly Lesotho Ltd of improving the current ROCE.',
          marks: 2,
          solution: '1. Increase Net Profit by expanding sales turnover or reducing administrative and operating expenses.\n2. Improve Gross Profit margin by negotiating lower prices for raw materials or increasing selling prices.\n3. Optimize capital structure by reducing idle capital or improving efficiency of capital utilization.',
          solutionSteps: [
            'Way 1: Reduce operating overheads to boost net profit.',
            'Way 2: Increase sales prices or sales volume.',
          ],
        },
      ],
    },
  ],
};
