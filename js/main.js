// Destructuring

// const user = {
//     name: 'duong',
//     age: 25,
//     sex: 'male'
// }

// let name = user.name
// let age = user.age
// let sex = user.sex

// let { age: userAge,name, sex} = user
// console.log(name, userAge, sex)

// const list = [
//     1,
//     function(a, b) {
//         return a + b
//     }
// ]

// const [value, sum] = list

// console.log(value, sum(4,6))

// const chuoi = [1, 2, 3 ,4, 5, 6]
// const [a, b, ...c] = chuoi
// console.log(c)
 
// const listNumber = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// }

// const {a, b, ...c} = listNumber
// console.log(c)

// Spread Syntax

// const user = {
//     name: 'duong',
//     age: 25,
//     ability: ['engineer']
// }

// const cloneUser = {...user}

// console.log(cloneUser)
// console.log(user)
// console.log(cloneUser === user)
// console.log(cloneUser.age === user.age)

// Rest parametter

// const handle = ({a, b, ...c}) => {
//     return c
// }

// var value = handle({a: 1, b: 2, c: 3, d: 4, 5: 'e'})

// console.log(value)


let message = "Hello!"
let phrase = message
message = "hi"

console.log(message)
console.log(phrase)
