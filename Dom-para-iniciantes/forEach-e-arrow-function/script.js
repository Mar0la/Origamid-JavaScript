//FOREACH
const imgsss = document.querySelectorAll('img');

imgsss.forEach(function(item){
  console.log(item);
});


//PARÂMETROS DO FOREACH
const imgss = document.querySelectorAll('img');

imgss.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});


//FOREACH E ARRAY
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


//ARROW FUNCTION
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});


