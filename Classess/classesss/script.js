// Constructor

// function Button(text, background) {
//   this.text = text
//   this.background = background
// }


// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button')
//   buttonElement.innerHTML = this.text
//   buttonElement.style.background = this.background
//   return buttonElement
// }

// const blueButton = new Button('coprar', 'blue')

// console.log(blueButton.element())

// Classes

class Button {
  constructor(text, background, color){
    this.text = text
    this.background = background
    this.color = color
  }
  element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerHTML = this.text
    buttonElement.style.background = this.background
    buttonElement.style.color = this.color
    return buttonElement
  }
  appendTo(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
    return targetElement
  }
}
const blueButton = new Button('coprar', 'blue', 'white')

console.log(blueButton.appendTo('body'))

// class Button {
//   constructor(options) {
//     this.options = options
//   }
//   element() {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerHTML = this.options.text
//     buttonElement.style.background = this.options.background
//     buttonElement.style.color = this.options.color
//     return buttonElement
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target)
//     targetElement.appendChild(this.element())
//     return targetElement
//   }
// }

// const blueButton = new Button({
//   background: 'blue',
//   text: 'comprar',
//   color: 'red'
// })

// console.log(blueButton)