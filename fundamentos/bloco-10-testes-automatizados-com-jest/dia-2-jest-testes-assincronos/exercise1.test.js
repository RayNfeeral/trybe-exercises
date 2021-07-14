// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = require('./uppercase');

describe ('Testa a função uppercase', () => {
  it ('deveria chamar uma callback com a string passada transformada para uppercase', () => {
    uppercase('teste', (upTeste) => {
      expect(upTeste).toBe('TESTE');
    });
  });
});
