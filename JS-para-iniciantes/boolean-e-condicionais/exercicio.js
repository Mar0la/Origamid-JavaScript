// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 21
var idadeMãe = 40


// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > idadeMãe) {
    console.log('Minha idade é maior que a da minha mãe.')
} else if (minhaIdade == idadeMãe) {
    console.log('Minha idade é igual a da minha mãe.')
} else if (minhaIdade < idadeMãe) {
    console.log('Minha idade é menor que a da minha mãe.')
}


// Qual valor é retornado na seguinte expressão? reposta = 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); 
console.log(expressao)



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';           //!!nome = true
var idade = 28;               //!!idade = true
var possuiDoutorado = false;  //!!possuiDoutorado = false
var empregoFuturo;            //!!emprego futuro = false
var dinheiroNaConta = 0;      //!!dinheiroNaConta = false


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console? resposta = false
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); 
}


// O que irá aparecer no console? resposta = Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso'); 
}