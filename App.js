
// fetch API

// fetch('https://reqres.in/api/users?page=2')
//     .then((res)=>{
//     console.log(res)
//     if(res.ok){
//         return res.json()
//     } else {
//         throw new Error('loi roi')
//     }
// })
//     .then((res)=>{
//     console.log(res)

//     let html = ''
//     res.data.forEach(element => {
//         html += `<div>${element.first_name} ${element.last_name}`
//     document.getElementById('name').innerHTML = html
//     });
    
// })

// Axios

// const axios = require('axios').default;

// axios.get('https://reqres.in/api/unknown/23')
//     .then((response)=> {
//             console.log(response)
//     })
//     .catch((error)=>{
//         console.log(error.status)
//     })

// async function getuser() {
//     try {
//         const response = await axios.get('https://reqres.in/api/users?page=2')
//         console.log(response.data.data)
//     } catch(error) {
//         console.log(error)
//     }
// }
// getuser()

// post

// axios.post('https://reqres.in/api/users', {
//     name: 'Duong',
//     job: 'agribank'
// })
// .then((response)=> {
//                 console.log(response)
//         })
//         .catch((error)=>{
//             console.log(error.status)
//         })

// const instance = axios.create({
//     baseURL: 'https://reqres.in/api/',
// })

// instance.get('users?page=2')
//     .then((res)=>{
//         console.log(res.data)
//     })

    // instance.post('users?page=2', {
    //     name: 'Duong',
    // job: 'agribank'
    // })
    // .then((res)=>{
    //     console.log(res.data)
    // })