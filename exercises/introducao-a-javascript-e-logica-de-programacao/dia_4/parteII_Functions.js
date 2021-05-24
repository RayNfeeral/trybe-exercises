/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function isPalindrome(word) {
  const inverseWord = word.split('').reverse().join('');

  if(word === inverseWord) {
    return true;
  }

  return false;
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1] 
Valor esperado no retorno da função: 4 */

function indexOfBiggest(numbersArray) {
  let resultIndex = 0;

  for(let index in numbersArray) {
    if(numbersArray[resultIndex] < numbersArray[index] ) {
      resultIndex = index;
    }
  }

  return resultIndex;
}

console.log(indexOfBiggest([2, 3, 6, 7, 10, 1]));

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function indexOfLowest(numbersArray) {
  let resultIndex = 0;

  for(let index in numbersArray) {
    if(numbersArray[resultIndex] > numbersArray[index] ) {
      resultIndex = index;
    }
  }

  return resultIndex;
}

console.log(indexOfLowest([2, 4, 6, 7, 10, 0, -3]));

