//Troca de valores
let variavelA = 10;
let variavelB = 5;

// Troca utilizando uma variável auxiliar
// let x;
// x = variavelA;
// variavelA = variavelB;
// variavelB = x;

// Troca utilizando desestruturação de array
[variavelA, variavelB] = [variavelB, variavelA];

console.log('variavelA:',variavelA);
console.log('variavelB:',variavelB);