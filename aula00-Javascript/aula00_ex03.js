//Exemplo 03: Classes

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}

const viado = new Animal("Delijhoson", "viado");
const gato = new Animal("Bibiuzinho" , "gato");

console.log(viado.exibirInformacoes());
console.log(gato.exibirInformacoes());

//Minha Classes
class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    exibirInformacoes(){
        return `Este é um ${this.nome} com o valor de R$ ${this.preco}`;
    }
}

const mouse = new Produto("Mouse", 89);
const teclado = new Produto("Teclado" , 77);

console.log(mouse.exibirInformacoes());
console.log(teclado.exibirInformacoes());
