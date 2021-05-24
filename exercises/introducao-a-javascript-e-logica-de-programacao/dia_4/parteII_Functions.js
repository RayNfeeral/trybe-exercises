// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(word) {
  const inverseWord = word.split('').reverse().join('');

  if(word === inverseWord) {
    return true;
  }

  return false;
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));
