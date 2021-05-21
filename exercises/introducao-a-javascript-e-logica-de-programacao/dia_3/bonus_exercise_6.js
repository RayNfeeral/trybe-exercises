/* Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

const number = 17;
let isPrime = true;

for(let index = 0; index < number; index += 1) {
  const mod = number % index;
  if(mod === 0 && index != 1) {
    isPrime = false;
    break;
  }
}

console.log(number + ' é primo? ' + isPrime);
