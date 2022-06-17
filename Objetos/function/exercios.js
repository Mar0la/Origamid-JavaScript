// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
let paragrafo = document.querySelectorAll('p')

const teste = Array.prototype.reduce.call(paragrafo,(totalCaracteres, item) => {
    return totalCaracteres + item.innerText.length
}, 0)
console.log(teste)



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criaElemento(tag, classe, conteúdo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteúdo ? elemento.innerHTML = conteúdo : null
  return elemento
}
console.log(criaElemento('li', 'azul', 'esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const titulo = criaElemento.bind(null, 'h1', 'titulo')
console.log(titulo('CURSOSJS'))