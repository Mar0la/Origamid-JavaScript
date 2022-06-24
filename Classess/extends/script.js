class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }
  acelerar() {
    console.log("acelerar")
  }
 }

 class Moto extends Veiculo {
  constructor(rodas, capa) {
    super(rodas)
    this.capa = capa
  }
  acelerar() {
    super.acelerar()
    console.log("acelerar rapido")
  }
  empinar() {
    console.log('moto empinou com ' + this.rodas + 'rodas')
  }
 }

 const honda = new Moto(2, true)
 const civic = new Veiculo(4)