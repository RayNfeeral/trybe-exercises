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
    if(numbersArray[resultIndex] < numbersArray[index] || !numbersArray[resultIndex]) {
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
    if(numbersArray[resultIndex] > numbersArray[index] || !numbersArray[resultIndex]) {
      resultIndex = index;
    }
  }

  return resultIndex;
}

console.log(indexOfLowest([2, 4, 6, 7, 10, 0, -3]));

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

function longestName(namesArray) {
  let resultName = '';

  for(let name of namesArray) {
    if(resultName.length < name.length ) {
      resultName = name;
    }
  }

  return resultName;
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function mostRepeatedInteger(integersArray) {
  const countArray = [];

  for(let number of integersArray) {
    if(countArray[number]){
      countArray[number] += 1
    }
    else {
      countArray[number] = 1;
    }
  }

  const mostRepeated = indexOfBiggest(countArray);

  return mostRepeated;
}

console.log(mostRepeatedInteger([2, 3, 2, 5, 8, 2, 3]));

/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */

function aritmeticSomatory(N) {
  return ((N + 1) * N) / 2;
}

console.log(aritmeticSomatory(5));