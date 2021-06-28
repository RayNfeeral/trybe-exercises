const assert = require('assert');
const books = require('./books');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  return books.filter(({ releaseYear }) => (2021 - releaseYear) > 60).map(({ name }) => name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);