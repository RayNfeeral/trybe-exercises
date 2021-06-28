const assert = require('assert');
const books = require('./books');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  return books.reduce((acc, { author, releaseYear }) => {
    return acc + (releaseYear - author.birthYear);
  }, 0) / books.length;
}

assert.strictEqual(averageAge(), expectedResult);
