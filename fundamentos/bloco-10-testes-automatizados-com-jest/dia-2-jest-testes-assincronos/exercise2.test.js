// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
const getUserName = require('./getUserName');

describe ('Testando a função getUserName', () => {
  describe ('Se o usuário foi encontrado', () => {
    it ('deveria retornar o nome do usuário', () => {
      expect.assertions(1);

      return getUserName(4).then((name) => {
        expect(name).toBe('Mark');
      });
    });
  });

  describe ('Se o usuário não foi encontrado', () => {
    it ('deveria retornar um objeto com o error', () => {
      expect.assertions(1);

      return getUserName(3).catch((err) => {
        expect(err).toEqual({ error: 'User with 3 not found.' });
      });
    });
  });
});
