// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transações = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let taxaTotal = 0
let recebimentoTotal = 0
transações.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$', '')
    
    if(item.descricao.includes('Taxa')) {
        taxaTotal += numeroLimpo
    } else if (item.descricao.includes('Recebimento')) {
        recebimentoTotal += numeroLimpo
    }
})
console.log(taxaTotal, recebimentoTotal)


// Retorne uma array com a lista abaixo
let transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

let transportesArray = transportes.split(';')
console.log(transportesArray)


// Substitua todos os span's por a's
let html = ` <ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

let htmlSplit = html.split('span')
let substituto = htmlSplit.join('a')

console.log(substituto)
  
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const caracter = frase[13]
console.log(frase.charAt(13), caracter)
  
// Retorne o total de taxas
let transações1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];




let totalTaxas = 0
transações1.forEach((item) => {
    if(item.toUpperCase().trim().includes('TAXA')) {
        totalTaxas ++
        
    }
})

console.log(totalTaxas)


