const assert = require('assert');
const books = require('./books');

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica').map(({ author }) => author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);