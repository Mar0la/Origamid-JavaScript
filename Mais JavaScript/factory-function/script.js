// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text
//     return buttonElement
//   }
//   return {
//     text: text,
//     element,    
//   }
// }

// const btnComprar = createButton('comprar')
// const btnVender = createButton('vender')

//EXMPLO REAL

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements)

  function hide() {
    elements.forEach((element) => {
      element.style.display = 'none'
    })
    return $$(selectedElements)
  }
  
  function show() {
    elements.forEach((element) => {
      element.style.display = 'initial'
    })
    return $$(selectedElements)
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback)
    })
    return $$(selectedElements)
  }

  function toggleClass(classNome) {
    elements.forEach((element) => {
      element.classList.toggle(classNome)
    })
    return $$(selectedElements)
  }
  
  return {
    elements,
    hide,
    show,
    on,
    toggleClass,
  }
}

const btns = $$('button')

console.log(btns.hide().show())


function handleClick(event) {
  console.log(event.target)
  btns.toggleClass('active')
}
btns.on('click', handleClick)
