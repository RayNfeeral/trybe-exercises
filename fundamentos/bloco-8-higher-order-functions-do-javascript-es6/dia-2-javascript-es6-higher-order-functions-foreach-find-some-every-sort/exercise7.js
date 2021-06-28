const assert = require('assert');
const books = require('./books');

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  const bornYears = [];
  let isUnique = true;

  books.forEach(({ author }) => {
    if (!bornYears.includes(author.birthYear)) {
      bornYears.push(author.birthYear);
    } else {
      isUnique = false;
    }
  });

  return isUnique;
}

assert.strictEqual(authorUnique(), expectedResult);