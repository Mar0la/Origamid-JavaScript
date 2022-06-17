// //DATASET
// <div data-cor="azul" data-width="500">Uma Div</div>
// <span data-anime="left" data-tempo="2000">Um Span</span>
// // Ambos os valores selecionam a mesma div acima.
// let div = document.querySelector('div');
// div = document.querySelector('[data-cor]');
// div = document.querySelector('[data-cor="azul"]');

// div.dataset;
// // DOMStringMap {cor: "azul", width: "500"}
// div.dataset.cor; // 'azul'
// div.dataset.width; // '500'
// div.dataset.tempo = 1000;
// // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}


// //DATA ATRIBUTES
// <div data-anima="left" data-tempo="1000">Div 1</div>
// <div data-anima="right" data-tempo="2000">Div 2</div>
// const divs = document.querySelectorAll('[data-anima]');
// divs.forEach((div) => {
//   div.classList.add(div.dataset.anima);
// });

// // adiciona em cada div
// // uma classe com o mesmo nome
// // que o valor de data


// //DATA VS CLASS
// <div data-anima="left" data-tempo="1000">Div 1</div>
// <div class="anima-left tempo-1000">Div 2</div>


// //NOMENCLATURA
// const div = document.querySelector('[data-anima-scroll]');
// div.dataset;
// // {animaScroll: 'left'}
// div.dataset.animaScroll; // left
// div.dataset.tempoTotal = 1000;
// // Na div vira data-tempo-total="1000"

// delete div.dataset.animaScroll; // remove o atributo
