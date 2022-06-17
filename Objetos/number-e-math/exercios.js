// Retorne um número aleatório
// entre 1050 e 2000
const result = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(result)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(', ')
let numeroMaximo = Math.max(...numerosArray)
console.log(numeroMaximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPreços = ['R$ 59,99', ' R$ 100,222','R$ 230', 'r$  200'];



function limparPreço(preço) {
  preço = +preço.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preço = +preço.toFixed(2)
  return preço
}


let soma= 0
listaPreços.forEach((preço) => {
  soma += limparPreço(preço)
})


console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))

limparPreço(listaPreços[1])
