const {readFileSync, writeFileSync} = require('fs');
console.log("Start");

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log("I am done with this task");

//console.log(first, second);

writeFileSync('./content/result-sync.txt',
 `Here is the result: ${first}, ${second}`,
 {flag: 'a'}
 );
 console.log("Starting the next one...");