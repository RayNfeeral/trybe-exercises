// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
const getUserName = require('./getUserName');

describe ('Testando a função getUserName', () => {
  describe ('Se o usuário foi encontrado', () => {
    it ('deveria retornar o nome do usuário', async () => {
      const name = await getUserName(4);

      expect(name).toBe('Mark');
    });
  });

  describe ('Se o usuário não foi encontrado', () => {
    it ('deveria retornar um objeto com o error', async () => {
      try {
        await getUserName(3);
      } catch (err) {
        expect(err).toEqual({ error: 'User with 3 not found.' });
      }
    });
  });
});
