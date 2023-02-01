/* Pizza Night?
It's the weekend and you and your friends can't agree on
what to order for dinner, so you put it to a vote.

Write a function to find the food with the highest number of votes.

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with
how many votes it received.

Example input: {"🐈 cats": 19, "🐕 dogs": 17}
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5
}

function findTheWinner(obj){
  // initiate highest value
  //keep track of the current highest vote
  // keep track of winning item
  // loop over object
  // if the object is the hights value replace with the value of high value object
  // for each food option in the food object
  // is the current value higher than the value of highest value

  let highestVotes = 0;
  let winningItem = "";
  for(let food in obj) {
    if(obj[food] > highestVotes) {
      highestVotes = obj[food];
      winningItem = food;
    }
    console.log(highestVotes, winningItem)
  }
  return `The  winner is ${winningItem} with ${highestVotes} `
}

console.log(findTheWinner(gameNightFood));