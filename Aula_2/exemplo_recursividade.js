/*
  1! = 1

  2! = 2 * 1  = 2
  2! = 2 * 1! = 2

  3! = 3 * 2 * 1  = 6
  3! = 3 * 2!     = 6

  4! = 4 * 3 * 2 * 1  = 24
  4! = 4 * 3!         = 24

  5! = 5 * 4 * 3 * 2 * 1  = 120
  5! = 5 * 4!             = 120
*/

function fatorial(n) {
  //caso base
  if (n == 1) { 
    return 1; //<- ponto de parada
  }

  return n * fatorial(n - 1); //função que chama ela própria e alterando o valor da sua entrada
}

console.log('O fatorial de 1 é:', fatorial(1));
console.log('O fatorial de 2 é:', fatorial(2));
console.log('O fatorial de 3 é:', fatorial(3));
console.log('O fatorial de 5 é:', fatorial(5));


