"use strict"

const user = {
    name: 'Adit',
    age: 19
}

// the new empty object
const clonedUser = {}

// copy all user properties into it
for (let key in user) {
    clonedUser[key] = user[key]
}

// now clonedUser is a fully independent clone from the user
clonedUser.name = 'Ilham' // changed the data in it

console.log(user.name) // still Adit in the original object
console.log(clonedUser.name) // change to Ilham in the cloned object

console.log(clonedUser); // showing cloned user

// changed all to string
const json = JSON.stringify(user)
const jsonTwo = JSON.stringify(clonedUser)
console.log(json, jsonTwo);

//changed back to object
const newUser = JSON.parse(json)
const newClonedUser = JSON.parse(jsonTwo)

console.log(newUser, newClonedUser);