// Implement isLeapYear function isLeapYear(). Leap year occurs every four years(those divisible by four) except for century years, but not when the year is divisible by 400/

const isLeapYear = (year) => {
 const numberYear = Number(year)
 return  numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
 // if this statement true
 // 1st statement
 // if false , 2nd statement 
}

console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); // false
console.log(isLeapYear("1700")); // false
console.log(isLeapYear("1600")); // true