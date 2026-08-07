let pessoa = {
  nome: 'Eduardo',
  idade: 30,
  altura: 182,
  endereco: 'Rua ABC'
};

// Inicilização das variáveis com os valores do objeto pessoa
// let nome = pessoa.nome;
// let idade = pessoa.idade;
// let altura = pessoa.altura;
// let endereco = pessoa.endereco;

// Desestruturação do objeto pessoa
//let { nome, idade, altura, endereco } = pessoa;

// Desestruturação do objeto pessoa com renomeação das variáveis
let { nome: novoNome, idade: novaIdade, altura: novaAltura, endereco: novoEndereco } = pessoa;

console.log('obj pessoa:', pessoa);
console.log('nome:', novoNome);
console.log('idade:', novaIdade);
console.log('altura:', novaAltura);
console.log('endereco:', novoEndereco);