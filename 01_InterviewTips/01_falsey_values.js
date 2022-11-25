// What are the falsey values in JavaScript?
// Falsey values are values that evaluate to false when evaluated in a boolean context.
// There are 6 falsey values in JavaScript: false, 0, "", null, undefined, and NaN.
// It helps our code a more compact, because usually we want to check if a value is truthy. We don't want to do anything on an empty string, or empty array, or null, or undefined, or NaN.


if(null) {
  console.log('null')
}

if(undefined) {
  console.log('undefined')
}

const arr = [];

if(arr.length > 0) {
  console.log('0')
}

const word = '';

if(word.length > 0) {
  console.log('empty')
}

if(false) {
  console.log('false')
}

// What is the difference between == and ===?