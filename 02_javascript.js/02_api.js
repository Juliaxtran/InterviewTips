// Call an JSONPlaceholder api, get 10 users. Implement a function getUsers() that return only names and emails of the users whose name contain letters


import fetch from 'node-fetch'

// first npm init
// install npm i node-fetch
// import fetch
// in package.json add:
// "type": "module"
// fetch api
// json response
// result, filter,  to lowerclase, includes
// then may and destructure so only name and email show


const getUsers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(api)
  const json = await response.json()

  const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(({name,email})=>({name,email}))

  return result

}

(async function() {
  try{
   console.log(await getUsers())

  }catch(err){
      console.log(err)
  }
})();

