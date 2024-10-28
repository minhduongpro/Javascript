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


// Callback function

// const nums = [1,2,3,4,5]

// function callback(index, value) {
//     console.log(`Số ${value} ở vị trí ${index}`)
// }

// nums.forEach((index, value) => (console.log(`Số ${value} ở vị trí ${index}`)))

// Promiss

const pFunc = () => (
    new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(a)
            }, 1000)
            setTimeout(()=>{
                reject('loi')
            }, 1000)
        })
    
)



// const value = pFunc()
//     .then((value)=>{
//         console.log(value)
//     })  
//     // .then((a) => (

//     //     // console.log(a)
//     // ))
    
//     .catch((error)=> {
//         console.log(error)
//         return 100
// })  
//     .finally(() => {
//         console.log('xong')
//     })

// value.catch((value)=> {
//     console.log(value) 
// })

// Async / Await

const handle = async() => {
    try {
        const value = await pFunc()
        console.log(value)
    } catch (error) {
        console.log(error)
    } finally{
        console.log('xong')
    }
}

handle()