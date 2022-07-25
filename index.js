const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const readText = fs.readFileSync(path.join( __dirname,'word.txt'));
const readTextstr = readText.toString();


const letterCount = (strData) => strData.length;
const wordsCount = (strData) => strData.split(' ').length;
const lettersArray = readTextstr.toLowerCase().replace(/[^a-zа-яё]/gi, '').split('');

const everyletterCount = (str) => {
  let col = {};
  let newString = '';
  let countletters = '';
str.forEach(s => {
  // if (s == `/[a-z]+/`) {
  col[s] = str.filter(i => i == s).length;
}
// }
); 
// newCol = JSON.stringify(col).replace('{','').replace('}','').split(',')
for (let i in col) {
  newString = `Letter ${i} counts ${col[i]} times \n`
  countletters += newString;
  // newString = newString.concat('', );
  // console.log(newString);
 
}
return countletters;
}
const newData = `Count ow symbols: ${letterCount(readTextstr)}
Count of words: ${wordsCount(readTextstr)}
Symbols \n${everyletterCount(lettersArray)}`
fs.writeFileSync(path.join( __dirname,'data.txt'), newData);

console.log(letterCount(readTextstr));
console.log('words', wordsCount(readTextstr))
everyletterCount(lettersArray)


