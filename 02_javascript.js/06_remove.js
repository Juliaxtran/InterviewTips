// Implement remove duplicates from array function using array.reduce - removeDuplicateValues

const removeDuplicateValues = (array) => {
 return array.reduce((acc, value) => {
    return acc.includes(value) ? acc : [...acc, value]
 },[])
}


console.log(
  removeDuplicateValues(["one", "two", "one", "three", "three", "two"])
); // ['one','two','three']