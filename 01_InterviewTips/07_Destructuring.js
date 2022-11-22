// What is and why might you destructure an object or array?

// Great way to provide context.

// month, day, year
const dob = [10, 25, 1987];

// want the code to be self documenting
// good for readability
const [day, month, year] = dob;
console.log('day', day);

const user = {
  f: 'Dylan',
  l: 'Isreal',
}

// Can we redefine
// provide intent
// code readability
const {f: firstName, l: lastName} = user;