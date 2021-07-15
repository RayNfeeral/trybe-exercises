// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
let random = require('./random');

random = jest.fn().mockReturnValue(10);

describe('When called random', () => {
  it('should return a number between 0 and 100', () => {
    random();
    expect(random).toHaveBeenCalled();
    expect(random()).toBe(10);
    expect(random).toHaveBeenCalledTimes(2);
  });
});
