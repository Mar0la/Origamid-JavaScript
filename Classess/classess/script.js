// function Button(text, background) {
//   this.text = text
//   this.background = background
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button')
//   buttonElement.innerText = this.text
//   buttonElement.style.background = this.background
//   return buttonElement
// }

class Button {
  constructor(text, background) {
    this.text = text
    this.background = background
  } 
  element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.background = this.background
    return buttonElement
  }
  appendto(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
    return targetElement
  }
  static blueButton(text, background) {
    return new Button(text, 'blue', 'white')
  }
}
const botaoo = Button.blueButton('comprar')





// console.log(blueButton.appendto('body'))

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createAnimal(text, background) {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text
//     buttonElement.style.background = background
//     buttonElement.style.color = color
//     return buttonElement
//   }
// }


// const optionsBlue = new Button({
//   backgroundColor: "blue",
//   text: 'comprar',
//   color: 'white'
// })

// const blueButton = new Button(optionsBlue)