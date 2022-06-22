// async function puxaDados() {
//   try {
//     const responseDados = await fetch('https://blockchain.info/ticker')
//     const teste = await responseDados.json()
//     console.log(teste)
//   } catch (erro) {
//     console.log(erro)
//   }
// }
// puxaDados()

// PUXAR AO MESMO TEMPO
async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log(dadosJSON)
  console.log(clientesJSON)
}
iniciarAsync();
