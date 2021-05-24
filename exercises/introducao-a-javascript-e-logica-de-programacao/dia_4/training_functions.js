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
      return peca + ': 1 square an direction';
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

//Exercício 7
const porcentagem = 38;
function qualOConceito(porcentagem) {
  if (porcentagem < 0 || porcentagem > 100) {
    throw new Error('Nota inválida!');
  }
  else if (porcentagem >= 90) {
    return 'A';
  }
  else if (porcentagem >= 80) {
    return 'B';
  }
  else if (porcentagem >= 70) {
    return 'C';
  }
  else if (porcentagem >= 60) {
    return 'D';
  }
  else if (porcentagem >= 50) {
    return 'E';
  }
  else {
    return 'F';
  }
}

//Exercício 8
function anyIsEven(a, b, c) {
  const condicao = ((a % 2) * (b % 2) * (c % 2)) === 0
  
  if (condicao) {
    return true;
  }
  else {
    return false;
  }
}

//Exercício 9
function anyIsOdd(a, b, c) {
  const condicao = ((a % 2) + (b % 2) + (c % 2)) > 0;
  
  if (condicao) {
    return true;
  }
  else {
    return false;
  }
}

//Exercício 10
function lucroEmMilVendas(custo, venda) {
  if (custo < 0 || venda < 0) {
    throw new Error('Valores inválidos!');
  }
  else {
    const custoTotal = 1.2 * custo;
    const lucro = venda - custoTotal;
    return lucro;
  }
}

//Exercício 11
function salarioLiquido(salarioBruto) {
  let INSS = 0;
  let IR = 0;
  
  if (salarioBruto <= 1556.94) {
    INSS = 0.08 * salarioBruto;
  }
  else if (salarioBruto <= 2594.92) {
    INSS = 0.09 * salarioBruto;
    const salarioBase = salarioBruto - INSS;
    if (salarioBase >= 1903.99) {
      IR = (0.075 * salarioBase) - 142.8;
    }
  }
  else if (salarioBruto <= 5189.82) {
    INSS = 0.11 * salarioBruto;
    const salarioBase = salarioBruto - INSS;
    if (salarioBase <= 2826.65) {
      IR = (0.075 * salarioBase) - 142.8;
    }
    else if (salarioBase <= 3751.05) {
      IR = (0.15 * salarioBase) - 354.8;
    }
    else if (salarioBase <= 4664.68) {
      IR = (0.225 * salarioBase) - 636.13;
    }
    else {
      IR = (0.275 * salarioBase) - 869.36;
    }
  }
  else {
    INSS = 570.88;
    const salarioBase = salarioBruto - INSS;
    IR = (0.275 * salarioBase) - 869.36;
  }
  
  const salarioLiquido = salarioBruto - INSS - IR;
  
  return salarioLiquido;
}