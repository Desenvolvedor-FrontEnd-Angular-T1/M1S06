let animais = ['cachorro', 'gato', 'rato', 'passaro', 'pato'];

//Exemplo includes
console.log('O array animais possui o valor gato?', animais.includes('gato'));
console.log('O array animais possui o valor borboleta?', animais.includes('borboleta'));

//Exemplo indexOf
console.log('Em qual posição do array animais está o valor gato?', animais.indexOf('gato'));
console.log('Em qual posição do array animais está o valor borboleta?', animais.indexOf('borboleta'));

//Exemplo slice
console.log('Recorte do array animais a partir da posicao 3', animais.slice(3));
console.log('Recorte do array animais da posicao 1 até 4', animais.slice(1, 4));

//Exemplo splice
// console.log('Exclusao do 1 elemento a partir da posição 0', animais.splice(0,1));
// console.log('Exclusao dos 2 elementos a partir da posição 2', animais.splice(2,2));
// console.log('Substituição do 1 elemento a partir da posição 0', animais.splice(0,1, 'Borboleta'));
// console.log('Substituição dos 2 elementos a partir da posição 2', animais.splice(2, 2, 'Elefante', 'Vaca'));

console.log('Array animais', animais);
