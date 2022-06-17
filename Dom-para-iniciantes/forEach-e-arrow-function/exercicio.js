// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafo = document.querySelectorAll('p')

const paragrafoArray = Array.from(paragrafo)

console.log(paragrafoArray)

paragrafoArray.forEach((item) => {
    console.log(item.innerText)
})


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

const imgsArray = Array.from(imgs)

imgsArray.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgsArray.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

