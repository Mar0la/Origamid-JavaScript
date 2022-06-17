// Crie uma função que verifique
// corretamente o tipo de dado
const frutas = ['banana','maça']
function verificarDado(item) {
  return Object.prototype.toString.call(item)
}
console.log(verificarDado(frutas))


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true
  }
})
console.log(quadrado)


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);
Object.seal(configuracao);
Object.preventExtensions(configuracao);


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const listaString = Object.getOwnPropertyNames(String.prototype);
console.log(listaString)

const listaArray = Object.getOwnPropertyNames(Array.prototype);
console.log(listaArray)

