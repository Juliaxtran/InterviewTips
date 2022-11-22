// What are promises and why you use them?
// Front end you work a lot with API's
// API's are asynchronous
// Promises are a way to handle asynchronous code

// Promises has 3 states
// Pending
// Resolved
// Rejected

const fetch = require("node-fetch");


async function getPost() {
  console.log(1);

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const json = await response.json();

  console.log(json);

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((data) => data.json())
  // .then((json) => console.log(2))
  // .catch((error) =>  console.log(e));

  console.log(3);
}

getPost();