import * as fs from 'fs';

function parseChat(file) {
  console.log(file);
  const csv = fs.readFileSync(file, { encoding: 'utf8' });
  return csv;
}

export default parseChat;
