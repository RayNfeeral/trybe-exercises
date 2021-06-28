const assert = require('assert');
const books = require('./books');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
  return books.reduce((acc, crr, index, array) => {
    if (array.length === index + 1) {
      return acc + `${crr.author.name}.`;
    }

    return acc + `${crr.author.name}, `;
  }, '');
}

assert.strictEqual(reduceNames(), expectedResult);