// whats the == vs === differ?
// == is a loose comparison
// === is a strict comparison
// == will try to convert the data types to match
// === will not try to convert the data types to match

const value1 = 5 ;
const value2 = '5';

console.log(value1 == value2); // true
console.log(value1 === value2); // false