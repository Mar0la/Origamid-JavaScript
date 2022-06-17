//OUTERHTML, INNERHTML E INNERTEXT
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


//TRASVERSING
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


//ELEMENT VS NODE
const lista1 = document.querySelector('.animais-lista');

lista1.previousElementSibling; // elemento acima
lista1.previousSibling; // node acima

lista1.firstChild; // primeiro node child
lista1.childNodes; // todos os node child


//MANIPULANDO ELEMENTOS
const lista2 = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista2); // move lista para o final de contato
contato.insertBefore(lista2, titulo); // insere a lista2 antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista2


//NOVOS ELEMENTOS
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);


//CLONAR ELEMENTOS
const titulo2 = document.querySelector('h1');
const titulo3 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato2 = document.querySelector('.contato');
contato2.appendChild(cloneTitulo);


