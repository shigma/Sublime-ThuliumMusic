const fs = require('fs');
const path = require('path');
const process = require('process');

try {

  const tm = require('./Config.json');
  if (!tm.Kernel) throw 'Cannot find Thulium kernel.';
  
  const KernelPath = path.join(tm.Kernel + '/Library');
  const Tokenizer = require(KernelPath + '/Token/Tokenizer');

  const input = process.argv.slice(2);
  const test = new Tokenizer(input[0], 'URL');
  test.tokenize();

  // -d debug
  // -p play

  const result = `\
  Tokenize Result:

  - Title: ${test.Comment.map(line => `
    - ${line.trim()}`).join('')}

  - Section Count: ${test.Sections.length}
  
  - Warnings: ${test.Warnings.map(tok => tok.Err)}`;
  console.log(result);

} catch (err) {
  console.log(err);
}
