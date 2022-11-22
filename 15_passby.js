/**
 * Front End Interview Questions: Pass by Value vs Pass by Reference
 *
 * Q: What is pass by reference and how does it differ from pass by value?
 */


// Pass by value
// Primitive types are passed by value
// Primitive types are immutable
// Primitive types are copied by value

// Pass by reference
// Objects are passed by reference
// Objects are mutable
// Objects are copied by reference


// Primitive types
const primitive = 5;

const add = (num) => {
  return num + 1;
}

console.log(add(primitive), primitive); // 6 5

// passing the value of primitive to the function

// Objects

const ref = {count:5};

const add2(value) {
  value.count++
  return value.count + 1;
}

console.log(add2(ref), ref.count); // 7 6

// passing the reference of ref to the function
