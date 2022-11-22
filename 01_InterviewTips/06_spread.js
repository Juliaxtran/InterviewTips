// What do the spread and rest operators do?

// Spread operator
// The spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 0 arguments expected. It is also used to make copies of arrays and objects.

const users = ['Dylan', 'Coding God 101', 'Isabella'];
const allUsers = [...users, 'D-Money', 'Dylan'];

console.log(allUsers, 'allUsers');


const user = {
  firstName: 'Dylan',
  lastName: 'tIBBETTS',
}

const fullProfile = {
  channel :'scrimba',
  ...user };

  console.log(fullProfile, 'fullProfile');

  const {channel, ...remainder} = fullProfile;
  console.log(remainder, 'remainder');





// Rest operator
// The rest operator is used to represent an indefinite number of arguments as an array. It is used in the function parameter list. It is used to represent an indefinite number of arguments as an array. It is used in the function parameter list.

  function addNums(...nums){
    return nums.reduce((total, current) => { return total + current; }, 0)
}

console.log(addNums(1,2,3))
console.log(addNums(1,2))
