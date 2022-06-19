const contato = document.querySelector('#contato')
const texto = document.querySelector('.texto')
const dados = {}
function handleKeyUp(event) {
  dados[event.target.name] = event.target.value
  console.log(dados)
}


contato.addEventListener('change', handleKeyUp)