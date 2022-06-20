const {readFileSync, writeFileSync } = require('fs');
console.log("start");

//  Reading the content of the file
const first = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/subFolder/second.txt', 'utf8');

console.log(first, second);

//  writing content to  existing file (if exist) otherwise Node will create the file and then write the content 

//  {flag : 'a'} is used to append the new text to existing text in file
writeFileSync(
'./content/result.txt', 
`Here is the result of first and second file : ${first} , ${second}`, {flag: 'a'}
);

console.log("done with this task");
console.log("starting the next one");