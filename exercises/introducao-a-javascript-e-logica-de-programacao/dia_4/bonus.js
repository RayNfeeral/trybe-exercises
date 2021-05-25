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

// A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...


const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function countBasket(basket) {
  const countedBasket = {};

  for(let item of basket) {
    if(countedBasket[item]) {
      countedBasket[item] += 1;
    }
    else {
      countedBasket[item] = 1;
    }
  }

  return countedBasket;
}

console.log(countBasket(basket));
