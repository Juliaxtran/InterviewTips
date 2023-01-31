// Count the scrimba students
// Summing an array
// Alex from Scrimba wants to know how many new students have attended
// Scrimba's weekly Town Hall event this year.

// He has an array of first-time attendees for each month of the year.
// Help him find the total number of attendees! Your function should
// take in an array and return a number representing the total number
// of new attendees.

// Example input: [1,2,3]
// Example output: 6

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

// Reduce method
// const sumArray = (array) => {
//   const result = array.reduce((acc , sum) => acc + sum , 0)
//   return result;
// }

// Loop method
const sumArray = (array) => {
  // Initialize a new variable to hold the sum of the arr
  // loop through the studentCount arr, add each value to the sum
  let sum = 0
  for ( let i = 0; i < array.length; i++) {
    // after looping return sum
     sum += array[i];
  }
  return sum
}

console.log(sumArray(studentCount));