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


//Exercício 5
function seriaTriangulo(a, b, c) {
  const soma = a + b + c;
  
  if (a < 0 || b < 0 || c < 0) {
    throw new Error('Erro! Ângulos inválidos!');
  }
  else if (soma == 180) {
    return true;
  }
  else {
    return false;
  }
}

//Exercício 6
function qualOMovimento(peca) {
  switch(peca.toLowerCase()) {
    case 'bishop':
      return peca + ': diagonals';
      break;
    case 'king':
      return peca + ': 1 square an direction');
      break;
    case 'knight':
      return peca + ': L shaped';
      break;
    case 'pawn':
      return '1 square foward';
      break;
    case 'queen':
      return peca + ': any direction';
      break;
    case 'rook':
      return peca + ': foward, backward, left and right';
      break;
    default: 
    console.log("It isn't a chess piece");
  }
}