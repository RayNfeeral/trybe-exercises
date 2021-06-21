// 3. Escreva a função removeMiddle para passar nos testes já implementados.
const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (words) => {
  const position = Math.floor(words.length / 2);

  return words.splice(position, 1);
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);