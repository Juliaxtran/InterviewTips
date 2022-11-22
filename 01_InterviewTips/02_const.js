// What are the difference between const, let and var?
// const is a constant variable. It cannot be reassigned.
// let is a variable that can be reassigned.
// var is a variable that can be reassigned.
// const and let uses block scoping. var does not.


// Var example
// hoisiting varaiable here.
// creating var firstNameVar // undefined
if(false) {
  var firstNameVar= 'John';
}

console.log(firstNameVar);

// You get undefined.
// var has lexical scoping common refered to at variable hoisting.
// var is deprecated. Both for reassignment however you don't want your code to be rendered outside of its our defined.

//Let example
// only defined within the block of the scope.
if(false) {
  let firstNameLet = 'Dylan';
}


console.log(firstNameLet, 'outside of block');

// const example
// const is a constant variable. It cannot be reassigned.
// We can modify the object, but we cannot reassign the variable to a whole new object.


const PI = 3.14;
const user = {
    firstName: 'D-Money'
};
// PI = 3.145;
console.log(PI);
user.firstName = 'Dylan';