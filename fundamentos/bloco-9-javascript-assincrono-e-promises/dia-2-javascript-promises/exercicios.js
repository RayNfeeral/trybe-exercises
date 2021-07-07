// 2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

// 4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
new Promise((resolve, reject) => {
  const array = [];
  for (let n = 0; n < 10; n += 1) {
    array.push(Math.pow(Math.round(Math.random() * 50 + 1), 2));
  }
  const total = array.reduce((acc, number) => acc + number, 0);
  if (total < 8000) {
    resolve(total);
  } else {
    reject();
  }
})
.then(response => [response/2, response/3, response/5, response/10])
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));