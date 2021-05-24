// Transforme em funções os exercício do dia 1 desse bloco

//Exercício 1
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

//Exercício 2
function maior(a, b) {
  if (a > b) {
    return a;
  }
  else if (a != b) {
    return b;
  }
  else {
    console.log('São iguais');
    return a;
  }
}

//Exercício 3
function maiorDeTres(a, b, c) {
  if (a > b & a > c) {
    return a;
  }
  else if (b > a & b > c) {
    return b;
  }
  else if (c > a & c > b) {
    return c;
  }
  else {
    console.log('São iguais');
    return a;
  }
}

//Exercício 4
function polaridade(a) {
  if (a > 0) {
    return 'positive';
  }
  else if (a != 0) {
    return 'negative';
  }
  else {
    return 'zero';
  }
}
