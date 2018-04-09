const fs = require('fs');
const path = require('path');
const process = require('process');
const tm = require('./Config.json');

if (!tm.Kernel) {
    console.log('Cannot find Thulium kernel.');
    throw 'Cannot find Thulium kernel.';
}

const KernelPath = path.join(tm.Kernel + '/Library');
const Tokenizer = require(KernelPath + '/Token/Tokenizer');

const input = process.argv.slice(2);

if (input[0]) {
    const test = new Tokenizer(input[0], 'URL');
    console.log(test.tokenize());
}

