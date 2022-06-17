// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const menuClone = menu.cloneNode(true)
copy.appendChild(menuClone)


// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista')
const firstDT = faqLista.children[0]
console.log(firstDT)


// Selecione o DD referente ao primeiro DT
const firstDD = faqLista.children[0].nextElementSibling
console.log(firstDD)


// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')
const body = document.querySelector('body')

faq.innerHTML = animais.innerHTML

