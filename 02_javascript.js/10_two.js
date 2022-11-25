// Given a two digit interger, return the sum of its digits/

function solution(n) {
  const numbers = n.toString();
  let convertedNumber = numbers.split('');
  let sum = 0;
  for(let i = 0; i < convertedNumber.length; i++) {
      sum += parseInt(convertedNumber[i])
  }

  return sum;

  }

  console.log(solution(23))