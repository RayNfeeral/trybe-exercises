/* Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if */

const a = 3;
const b = 6;
const c = 2;

const condicao = ((a % 2) + (b % 2) + (c % 2)) > 0;

if (condicao) {
  console.log(true);
}
else {
  console.log(false);
}