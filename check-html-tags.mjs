import fs from 'fs';

const file = process.argv[2];
const s = fs.readFileSync(file, 'utf8');
const tags = ['table', 'thead', 'tbody', 'tr', 'td', 'th', 'div', 'span', 'p', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
let issues = 0;
for (const t of tags) {
  const open = (s.match(new RegExp('<' + t + '(\\s|>)', 'g')) || []).length;
  const close = (s.match(new RegExp('</' + t + '>', 'g')) || []).length;
  if (open !== close) {
    console.log('MISMATCH', t, 'open=' + open, 'close=' + close);
    issues++;
  }
}
console.log(issues === 0 ? 'All tags balanced' : issues + ' mismatches');
