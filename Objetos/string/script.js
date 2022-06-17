
//STRING
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);


//STR.LENGTH
const frase = 'A melhor comida';

frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a


//STR.CHARAT(N)
const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t


//STR.CONCAT(STR2, STR3, ...)
const frasee = 'A melhor linguagem é ';
const escolha = 'JavaScript';

const fraseCompleta = frasee.concat(escolha, '!!');


//STR.INCLUDES(SEARCH, POSITION)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false


//STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
const frutaa = 'Banana';

frutaa.endsWith('nana'); // true
frutaa.startsWith('Ba'); // true
frutaa.startsWith('na'); // false


//STR.SLICE(START, END)
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi


//STR.SUBSTRING(START, END)
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript


//STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....


//STR.REPEAT(N)
const repetir = 'Ta';

repetir.repeat(5); // TaTaTaTaTa


//STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'


//STR.SPLIT(PADRAO)
const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens1.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');


//STR.TOLOWERCASE() E STR.TOUPPERCASE()
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


//STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
