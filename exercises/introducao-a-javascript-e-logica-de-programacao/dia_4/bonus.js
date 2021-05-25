// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanParser(romanString) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0;

  for(let index in romanString) {
    const currentIndex = romanString[parseInt(index)];
    const nextIndex = romanString[parseInt(index) + 1];

    const current = romanNumbers[currentIndex];
    const next = romanNumbers[nextIndex];

    if(next && current < next) {
      sum -= current;
    }
    else {
      sum += current;
    }
  }

  return sum;
}

console.log(romanParser('MXLIII'));

// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumber(vector) {
  const result = [];

  for(let array of vector) {
    for(let number of array) {
      if(number % 2 === 0) {
        result.push(number);
      }
    }
  }

  return result;
}

console.log(arrayOfNumber(vector));
