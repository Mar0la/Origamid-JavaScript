// // Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {color, padding, backgroundColor} = btnStyles
console.log(color, padding, backgroundColor)


// Troque os valores das variáveis abaixo
let cursos = {
cursoAtivo: 'JavaScript',
cursoInativo: 'HTML'
}
// console.log({cursos.cursoAtivo: cursoInativo, cursos.cursoInativo:cursoAtivo})

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {nome, cor} = cachorro;
console.log(nome, cor)