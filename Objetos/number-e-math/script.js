//NUMBER
const ano = 2018;
const preco = new Number(99);

//NUMBER.ISNAN() E NUMBER.ISINTEGER();
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false


//NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100


//N.TOFIXED(DECIMAIS)
const preco1 = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499


//N.TOSTRING(RADIX)
const preco3 = 2.99;
preco.toString(10); // '2.99'


//N.TOLOCALESTRING(LANG, OPTIONS);
const preco4 = 59.49;
preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49


//MATH
Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303


//MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4


//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

