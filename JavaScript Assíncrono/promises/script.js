// const promesa = new Promise(function(resolve, reject) {
//   let condição = false
//   if(condição) {
//     setTimeout(() => {
//       resolve('Matheus')
//     }, 1000)
//   } else {
//     reject(Error('Um erro occoreu na promise'))
//   }
// })


// const retorna = promesa.then((resolução) => {
//   console.log(resolução)
//   return 'teste'
// },
// rejeitada => {
//   console.log(rejeitada)
// });

// console.log(retorna)

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 500);
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});

