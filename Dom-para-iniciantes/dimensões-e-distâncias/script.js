//HEIGHT E WIDTH
const sectionnn = document.querySelector('.animais');

sectionnn.clientHeight; // height + padding
sectionnn.offsetHeight; // height + padding + border
sectionnn.scrollHeight; // height total, mesmo dentro de scroll


//OFFSETTOP E OFFSETLEFT
const sectionn = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
sectionn.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
sectionn.offsetLeft;


//GETBOUNDINGCLIENTRECT()
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


//MATCHMEDIA();
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}


