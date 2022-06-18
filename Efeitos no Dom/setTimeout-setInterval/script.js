// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse(){
//   setTimeout(function(){
//     document.body.classList.toggle('active')
//     console.log('a')
//   }, 2000)
// }
// mudarClasse()
// function mudarClasse() {
//   document.body.classList.toggle('active')
// }

// setInterval(mudarClasse, 2000)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')


iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0
let timer
function iniciarTempo(){
  timer = setInterval(() => {
    tempo.innerText = i++
  }, 100)
  iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
  clearInterval(timer)
  iniciar.removeAttribute('disabled')
}

function resetarTempo(){
  i = 0
  tempo.innerText = 0

}
