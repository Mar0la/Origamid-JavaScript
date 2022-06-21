// const cep = fetch('style.css')


// cep.then(resolução => {
//  return resolução.text()
// }).then(body => {
//   const conteudo = document.querySelector('.conteudo')
//   const style = document.createElement('style')
//   style.innerHTML = body
//   conteudo.innerText = body
//   conteudo.appendChild(style)
//   console.log(style)
// })


// const sobre = fetch("./sobre.html")

// const div = document.createElement('div')

// sobre.then(r => r.text())
// .then(body => {
//   div.innerHTML = body
//   const titulo = div.querySelector('h1')
//   document.querySelector('h1').innerText = titulo.innerText
//   console.log(titulo)

// })


// const imagem = fetch('./imagem.jpg')

// imagem.then(imagem => imagem.blob())
// .then(body => {
//   const blobUrl = URL.createObjectURL(body)
//   const imagemDom =  document.querySelector('img')
//   imagemDom.src = blobUrl
// })
  
const imagem = fetch('https://viacep.com.br/ws/01001000/json/')

// imagem.then(r => {
//   const r2 = r.clone()
//   r.text().then((text) => {
//     console.log(text)
//   })
//   r2.json().then((json) => {
//     console.log(json)
//   })
// })

imagem.then(response => {
  if(response.status === 404)
  console.log('Pagina não encontrada')
})









