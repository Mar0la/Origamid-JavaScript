// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });


// POST
// fetch('https://jsonplaceholder.typicode.com/posts/', {
//   method: 'get',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '{"titulo": "JavaScript"}'
// })

// .then(r => r.json())
// .then(a => console.log(a));

// PUT
// const url = 'https://jsonplaceholder.typicode.com/posts/';
// const options = {
//   method: 'put',
//   body: '{"title": "OI"}',
//   headers: { "Content-Type": "application/json; charset=utf-8"}
// }

// .then(r => r.json())
// .then(a => console.log(a));


// POST
// fetch('https://jsonplaceholder.typicode.com/posts/', {
//   method: 'get'
// })


// .then(r => r.json())
// .then(a => console.log(a));

// HEAD
//  fetch('https://jsonplaceholder.typicode.com/posts/', {
//   method: 'HEAD'
//  })
//   .then(r => {console.log(r.headers.forEach(console.log));})

fetch('https://www.google.com/')
.then(r => r.text())
.then(text => console.log(text));