// Adicione a classe ativo a todos os itens do menu
const itemsMenu  = document.querySelectorAll('.menu a')
itemsMenu.forEach((item) => {
  item.classList.add('ativo')
})
console.log(itemsMenu)


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach((item) => {
  item.classList.remove('ativo')
})
console.log(itemsMenu)


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
  const possui = img.hasAttribute('alt')
  console.log(img, possui)
})


// Modifique o href do link externo no menu
const linkEterno = document.querySelector('a[href^="http"]')

linkEterno.setAttribute('href', 'https://www.google.com')
console.log(linkEterno)


