const makeFlat = (array) => {
  return array.reduce((acc, value) => {
    return Array.isArray(value) ? [...acc, ...makeFlat(value)] : [...acc, value];
  }, [])
}

console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); 