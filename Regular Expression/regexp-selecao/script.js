// const regexpCEP = /\d{5}[-\s]?\d{3}/g;

// const ceps = [
//   '00000-000',
//   '00000 000',
//   '00000000'
// ];

// for(cep of ceps) {
//   console.log(cep, cep.match(regexpCEP));
// }

// const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

// const cpfs = [
//   '000.000.000-00',
//   '000-000-000-00',
//   '000.000.000.00',
//   '000000000-00',
//   '00000000000'
// ];

// for(cpf of cpfs) {
//   console.log(cpf, cpf.match(regexpCPF));
// }

// const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

// const cnpjs = [
//   '00.000.000/0000-00',
//   '00000000000000',
//   '00-000-000-0000-00',
//   '00.000.000/000000',
//   '00.000.000.000000',
//   '00.000.000.0000.00',
// ];

// for(cnpj of cnpjs) {
//   console.log(cnpj, cnpj.match(regexpCNPJ));
// }

// const regexp = /\w+/gi
// const regexp1 = new RegExp('\\w+', 'gi')
// const rage = /[a]/gi

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 222'
// const regexp = /[A-Za-z]+/g


// const resultado = frase.split(regexp)
// console.log(resultado)



// const frase = 'JavaScript, TypeScript, CoffeeScript';

// frase.split(', ');
// // ["JavaScript", "TypeScript", "CoffeeScript"]
// frase.split(/Script/g);
// // ["Java", ", Type", ", Coffee", ""]

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regexp = /<li/g

// const resultado = tags.replace(regexp, '$& class="ativa"')
// console.log(resultado)

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `;

// emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// // empresa@gmail.com
// // contato@gmail.com
// // suporte@gmail.com


const regexp = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
