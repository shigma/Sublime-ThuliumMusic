const fs = require('fs');
const path = require('path');
const process = require('process');

try {

  const tm = require('./Config.json');
  if (!tm.Kernel) throw 'Cannot find Thulium kernel.';
  
  const StartTime = Date.now();
  const KernelPath = path.join(tm.Kernel + '/Library');
  const Tokenizer = require(KernelPath + '/Token/Tokenizer');

  const input = process.argv.slice(2);
  const test = new Tokenizer(input[0], 'URL');
  test.tokenize();
  const EndTime = Date.now();
  // -d debug
  // -p play

  const result = `\
  [ Finished in ${EndTime - StartTime}ms. ]
  [ ${test.Errors.length} error(s), ${test.Warnings.length} warning(s). ]

  - Title: ${test.Comment.map(line => `
    - ${line.trim()}`).join('')}

  - Sections: ${test.Sections.length}

  - Warnings: ${test.Warnings.map(tok => tok.Err)}`;
  console.log(result);

} catch (err) {
  console.log(err);
}
