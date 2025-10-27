// instalado a biblio que permite a entrada de dados 
import PromptSync from "prompt-sync";

// aciona a função da biblio
let prompt = PromptSync();


// class é um modelo de algo(objeto)
class Pessoa {

    #senha;
    /** Contrutor controi masi de um objeto  para por os valores de cada objeto, colocamos via parametros */
    constructor(nome, idade, dataNasc, altura, peso, senha, perguntaSenha) {
        this.nome = nome
        this.dataNasc = new Date(dataNasc).toLocaleDateString("pt-BR")
        this.altura = altura
        this.peso = peso
        this.#senha = senha
        this.idade = idade
        this.perguntaSenha = perguntaSenha
    }

    apresentar() {
        console.log(`Olá eu me chamo ${this.nome}, tenho ${this.idade} anos`);

    }

    get senha() {
        const perguntaSenha = prompt(" Digite sua senha de segurança: ")

        if ( this.perguntaSenha == perguntaSenha) {
            return this.#senha;
        }else{
            return "ta malucao"
        }
    }
}

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = prompt("Digite o sua idade: ");
let dataNascPessoa = prompt("Digite o sua data de nacimento no formato AAAA/MM/DD: ");
let alturaPessoa = prompt("Digite o sua altura: ");
let pesoPessoa = prompt("Digite o seu peso: ");
let senhaPessoa = prompt("Digite o sua senha: ");
let perguntaSenha = prompt("Digite o sua palavra chave caso queira ver sua sneha: ");


//Criando o objeto 

const novaPessoa = new Pessoa(
    nomePessoa, idadePessoa, dataNascPessoa, alturaPessoa, pesoPessoa, senhaPessoa, perguntaSenha
);

// const novaPessoa = new Pessoa (
//     'samira', 32, new Date(1993, 2, 25), 1.64, 80, "123"
// );

// novaPessoa.apresentar();

novaPessoa.apresentar
novaPessoa.senha
