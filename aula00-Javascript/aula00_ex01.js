//Exemplo 01
//Usando var(escopo global/função)

var nome = "Mateus";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}
nome=18
console.log(nome);

//Usando let(escopo global/função)
let idade = 34;
console.log(idade);

if(true){
    let idade = 25;
    console.log(idade);
}
idade="Mateus"
console.log(idade);


//Usando const(escopo de bloco e valor constante)

const PI = 3.14;
console.log(PI);

if(true){
    const PI = 4.14159;
    console.log(PI);
}
PI = "Topicos Integradores I"
console.log(PI);