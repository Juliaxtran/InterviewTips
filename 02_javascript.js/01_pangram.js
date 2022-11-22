// Task. Implement pangram check function. Pangram is a string or a sentence which contains all letters of english alphabet. isPangram().// function isPangram(str) { // your code here } isPangram('The quick brown fox jumps over the lazy dog.'); // true isPangram('This is not a pangram.'); // false

const abc = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = (string) => {
  // 1. remove all lowercase letters from string
   //2.remove all spaces.
   //3. remove all duplicates
   //4.Sort
  const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('');
  return abc === processedString;

}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))
console.log(isPangram('abcdefghpqrstuvwxyz'))