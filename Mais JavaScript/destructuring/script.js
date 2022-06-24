// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }


// const {livros, videos} = cliente.compras.digitais;

// console.log(cliente.compras.digitais.livros);

// const frutas = ['banana', 'morgan', 'abacate']

// const [primeira, segunda, terceira] = frutas

// console.log(primeira)

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']
// console.log(primeiro)

function handleKeyboard({key}) {
  console.log(key)
}




document.addEventListener('keyup', handleKeyboard)
