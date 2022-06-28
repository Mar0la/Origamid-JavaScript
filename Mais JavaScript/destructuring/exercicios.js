// // Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {color, margin, backgroundColor} = btnStyles
console.log(color, margin, backgroundColor)


// Troque os valores das variáveis abaixo

let cursoAtivo = 'JavaScript'
let cursoInativo = 'HTML'

// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
// console.log(cursoAtivo)

// Corrija o erro abaixo
let cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

// const {nome, cor} = cachorro;
// console.log(nome, cor)
let {nome: mm} = cachorro
console.log(mm)