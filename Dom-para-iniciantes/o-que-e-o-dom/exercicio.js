// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url)


// Seleciona o primeiro elemento da página que
// possua a classe ativo
let h1 = document.querySelector('.ativo')
let classe = h1.classList.value
console.log(classe)


// Retorne a linguagem do navegador
let linguagem = window.navigator.language
console.log(linguagem)


// Retorne a largura da janela 
var body = document.querySelector('body')
var largura = body.offsetWidth
var width = window.innerWidth
console.log(largura, width)