const fs = require('fs');
const path = require('path');
const process = require('process');
try {
	const tm = require('../index');
} catch (err) {
	console.log(err);
}
// const Tokenizer = require('../Library/Token/Tokenizer');

const input = process.argv.slice(2);

if (input[0] && input[0] != '-h') {
    // const test = new Tokenizer(input[0], 'URL');
    // console.log(test.tokenize());
    console.log(input[0]);
} else {
    console.log(`
    usage
    `);
}

