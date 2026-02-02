let URL1 = "https://jsonplaceholder.typicode.com/users/1";
let URL2 = "https://jsonplaceholder.typicode.com/posts/1";
let URL3 = "https://jsonplaceholder.typicode.com/comments/1";

let userRes = fetch(URL1);
let postRes = fetch(URL2);
let commentRes = fetch(URL3);

Promise.all([userRes, postRes, commentRes])
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

// userRes.then((data) => {
//     data.json().then((data) => {
//         console.log(data);
//     })
// }).catch((e) => {
//     console.log(e);
// });

// postRes.then((data) => {
//     data.json().then((data) => {
//         console.log(data);
//     })
// }).catch((e) => {
//     console.log(e);
// });

// commentRes.then((data) => {
//     data.json().then((data) => {
//         console.log(data);
//     })
// }).catch((e) => {
//     console.log(e);
// });

// const fetchUsers = async () => {
//     const res = await fetch(URL1);
//     console.log(await res.json());
// }

// fetchUsers();