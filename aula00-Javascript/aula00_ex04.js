// Função que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return`Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade.`;
}

//

const produto1 = {
   nome: "Gabigol", 
   preco: 69.00,
   estoque: 2
}

const produto2 = {
    nome: "Faelzin", 
    preco: 69.5000,
    estoque: 5
 }

console.log(exibirInfoProdutos(produto1));
console.log(exibirInfoProdutos(produto2));