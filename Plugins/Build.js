const fs = require('fs');
const path = require('path');
const process = require('process');

try {

  const tm = require('./Config.json');
  if (!tm.Kernel) {
    throw 'Cannot find Thulium kernel.';
  }
  const KernelPath = path.join(tm.Kernel + '/Library');
  const Tokenizer = require(KernelPath + '/Token/Tokenizer');

  const input = process.argv.slice(2);
  const test = new Tokenizer(input[0], 'URL');
  test.tokenize();
  const result = `\
  Tokenize Result:

  - Title: ${test.Comment.map(line => `
    - ${line.trim()}`).join('')}

  - Section Count: ${test.Sections.length}`;
  console.log(result);

} catch (e) {
  console.log(e);
}
