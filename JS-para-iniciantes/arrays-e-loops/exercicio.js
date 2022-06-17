// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}
for(var i = 0; i < brasilCopa.length; i++) {
    var ano = brasilCopa[i]
    console.log(`O Brasil ganho a copa nos anos: ${ano}`)
}



// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var ultimaFruta = frutas[frutas.length - 1]
for(var i = 0; i < frutas.length; i++) {
    if('Pera' === frutas[i]) {
        console.log(`A pera esta na posição ${i}, e a ultima fruta da lista é ${ultimaFruta}`)
        break
    }
}



