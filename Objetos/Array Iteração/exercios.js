// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let cursos = document.querySelectorAll('.curso')
let cursosArray = Array.from(cursos)
let objetoCurso = cursosArray.map((curso) => {
  return {
    titulo: curso.querySelector('h1').innerText,
    descrição: curso.querySelector('p').innerText,
    aulas: curso.querySelector('.aulas').innerText,
    horas: curso.querySelector('.horas').innerText
  }
})
console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const números = [3, 44, 333, 23, 122, 322, 33];
let númerosMaiores = números.filter(x => x > 100)
console.log(númerosMaiores)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.includes('Baixo'))


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let soma = compras.reduce((acumulador, preço) => {
  let preçoLimpo = +preço.preco.replace('R$','').replace(',','.')

  return  acumulador + preçoLimpo
}, 0)
console.log(soma)

