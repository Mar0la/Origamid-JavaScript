//ESCOPO DE FUNÇÃO
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}
  
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined


//VARIÁVEL GLOBAL (ERRO)
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
  }
  
mostrarCarro(); // Fusca
console.log(carro); // Fusca


//ESCOPO DE FUNÇÃO (PAI)
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


  
  
