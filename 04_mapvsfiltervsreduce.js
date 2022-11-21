// What do map(), filter(), and reduce() do?

// Map
// Map is a method that creates a new array with the results of calling a provided function on every element in the calling array.

const names = ['Dylan', 'Coding God 101', 'Isabella'];

const nameLengths = names.map( name => {
  return name.length
});

console.log(nameLengths, 'nameLengths ')

// Filter
// Filter is a method that creates a new array with all elements that pass the test implemented by the provided function.


const nums = [1, 2, 3, 4 ,5 , 6, 7, 8, 9, 10]

const numbersOverFive = nums.filter(num => num >= 5);
console.log(numbersOverFive, 'numbers over 5');

// Reduce
// Reduce is a method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const sum = nums.reduce((total, currentVal) => {
  return total + currentVal
  }, 0);

  console.log(sum, 'sum');

// Map, Filter, and Reduce are all methods that can be used on arrays. They are all higher order functions. They are all methods that take in a callback function. They are all methods that return a new array. They are all methods that can be chained together.

const numsAddOneEvens = nums.reduce((acc, current) => {
  current = current + 1;
  if(current % 2 === 0) {
    acc.push(current);
  }
  return acc;
},[])

console.log(numsAddOneEvens, 'numsAddOneEvens');