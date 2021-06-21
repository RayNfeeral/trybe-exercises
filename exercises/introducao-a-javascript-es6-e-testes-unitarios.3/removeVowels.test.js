// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = (word) => {
  const characters = word.split('');
  const vowels = 'aeiouAEIOU';
  let count = 0;
  const results = characters.map(char => {
    if (vowels.includes(char)) {
      count += 1;
      return count;
    }

    return char;
  });

  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const assert = require('assert');

assert.strictEqual(removeVowels(parameter), result);