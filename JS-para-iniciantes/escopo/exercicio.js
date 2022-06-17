// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas) // esta const/let n vazam do bloco, por esse motivo n consigo acessar do lado de fora
}
//console.log(cor, marca, portas) 
  

// Como corrigir o erro abaixo?
let dois = 2;
function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(2));
console.log(dividirDois(2));
  
// // O que fazer para total retornar 500?
const numero = 50;
  
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}
  
const total = 10 * numero;
console.log(total);
