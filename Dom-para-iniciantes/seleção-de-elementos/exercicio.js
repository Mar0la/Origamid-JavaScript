// Retorne no console todas as imagens do site
let imagesSite = document.querySelectorAll('img')
console.log(imagesSite)


// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagePalavra = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagePalavra)


// Selecione todos os links internos (onde o href começa com #)
let linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)


// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroH2 = document.querySelectorAll('.animais-descricao h2')
console.log(primeiroH2[0])


// Selecione o último p do site
let ultimoP = document.querySelectorAll('footer p')
console.log(ultimoP[--ultimoP.length])

