fetch('./dados.json')
.then(r => r.text())
.then(json => {
  const jsonFinal = JSON.parse(json)
  console.log(jsonFinal)
}) 


const configurações = {
  player: "Google",
  tempo: 25.2,
  aula: "2.1 JavaScript"
}

console.log(JSON.stringify(configurações))

//Exemplo REAL

const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
