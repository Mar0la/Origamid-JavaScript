//PROTOTYPE

function Pessoa(nome, idade) {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
      }
      const andre = new Pessoa('André', 28);
      
      console.log(Pessoa.prototype); // retorna o objeto
      console.log(andre.prototype); // undefined
}

//FUNCAO.PROTOTYPE
Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
  }
  Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';

}
console.log(Pessoa.prototype); // retorna o objeto
  

//É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);


//MÉTODO DO OBJETO VS PROTÓTIPO
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);
