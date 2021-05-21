// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const n = 5;
let row = '';

for(let index = 0; index < n; index += 1) {
  row += '*';
  console.log(row);
}
