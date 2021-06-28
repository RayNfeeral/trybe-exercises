const assert = require('assert');
const books = require('./books');

// 4 - Encontre o livro com o maior nome.
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, crr) => {
    return acc.name.length < crr.name.length ? crr : acc;
  });
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
