function contagemRegressiva(n) {
  console.log(n);

  //caso base
  if (n == 0) {
    return; //<= parada
  }

  contagemRegressiva(n-1);
}

contagemRegressiva(10);