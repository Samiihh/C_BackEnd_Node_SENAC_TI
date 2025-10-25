//Objeto 

let pessoa = {
    nome : 'Samira',
    dataNasc: new Date(1993, 2, 25, 16, 20).toLocaleDateString("pt-BR"),
    altura: 1.64,
    peso: 80,
    senha: "123",
    idade : 32,
    // maiorDeIdade: function (){},
    maiorDeIdade (){
        return this.idade >= 18;
    },

    apresentar () {
        return `Olá eu me chamo ${this.nome} tenho ${this.idade} anos`
    }

};

console.log(pessoa.maiorDeIdade());
console.log(pessoa.apresentar());
