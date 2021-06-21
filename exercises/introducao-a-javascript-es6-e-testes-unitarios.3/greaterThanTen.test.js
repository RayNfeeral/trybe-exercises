// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greaterThanTen = (array) => {
  const results = array.filter(number => number > 10);
  
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const assert = require('assert');

assert.deepStrictEqual(greaterThanTen(parameter), result);