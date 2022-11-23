// Implement a isogram check function. Isogram is a string in which all letters of the string are present only once isIsogram()

// ex. console.log(isIsogram('ambidExtRously')) // true
// ex. console.log(isIsogram('patteRn'))  false

const isIsogram = (string) => {
 const newString =  string.toLowerCase();
 // wanna make an array
 const result = newString.split('').every((v,i) => newString.indexOf(v) === i)
 return result;
}

console.log(isIsogram('ambidExtrously'))