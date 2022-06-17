//OBJETOS
var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
}

    pessoa.nome; // 'André'
    pessoa.possuiFaculdade; // true
  

//MÉTODOS
var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado;
    },
  }
  
  quadrado.lados; // 4
  quadrado.area(5); // 25
  quadrado.perimetro(5); // 20
  