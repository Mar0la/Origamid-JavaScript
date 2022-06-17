// Crie uma função para verificar se um valor é Truthy
function verdadeiro(valor) {
    if (valor === true) {
    return 'valor é truthy'
    } else {
        return 'valor não é truthy'
    }
}
console.log(verdadeiro(0))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perímetroQuadro(valor) {
    return valor * 4
}
console.log(perímetroQuadro(4))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu primeiro nome é ${nome} e meu sobrenome é ${sobrenome}`  
}
console.log(nomeCompleto('matheus', 'marins'))


// Crie uma função que verifica se um número é par
function numeroPar (valor) {
    if (valor % 2 === 0) {
        return `O número: ${valor} é par` 
    } else {
        return `O número: ${valor} é impar`
    }
}
console.log(numeroPar(2))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado (valor) {
    return typeof valor
}
console.log(tipoDeDado('1'))


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// addEventListener('scroll', function(){
//     console.log('matheus')
// })


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20))
  console.log(jaVisitei(20))
  
  