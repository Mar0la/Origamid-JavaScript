// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const cep = document.querySelector('#cep')
const buscar = document.querySelector('#buscar')
const form = document.querySelector('#formId')
const resultadoCep = document.querySelector('.resultadoCep')


function click(event) {
  buscarCep( cep.value.replace('-',''))
}

buscar.addEventListener('click', click)

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(r => r.text())
  .then(body => {
    resultadoCep.innerText = body
  }) 
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// function attPrice() {
//   fetch('https://blockchain.info/ticker')
//   .then(reposta => reposta.json())
//   .then(price => {
//     const cotaçãoUsd = document.querySelector('.preçoUsd')
//     const cotaçãoReal = document.querySelector('.preçoReal')
//     console.log(price.USD.buy)
//     cotaçãoUsd.innerText = new Intl.NumberFormat('EN', {style: 'currency', currency: 'USD'}).format( price.USD.buy)
//     cotaçãoReal.innerText = new Intl.NumberFormat('BRL', {style: 'currency', currency: 'BRL'}).format( price.USD.buy * 5,19) 
//   }) 
// }

// attPrice()

// setInterval(() => attPrice(), 30000)

  







// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
// function piadas() {
//   fetch('https://api.chucknorris.io/jokes/random')
//   .then(resposta => resposta.json())
//   .then(a => {
//     const span = document.querySelector('span')
//     span.innerHTML=  a.value
//   })
// }
// const button = document.querySelector('input')
//  button.addEventListener('click', piadas)