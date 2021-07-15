// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
// const { jest, expect } = require('@jest/globals');
let random = require('./random');

random = jest.fn().mockReturnValue(10);

describe('When called random', () => {
  it('should return a number between 0 and 100', () => {
    random();
    expect(random).toHaveBeenCalled();
    expect(random()).toBe(10);
    expect(random).toHaveBeenCalledTimes(2);
  });

  // 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
  it('should return the result of the division of its first parameter by its second once', () => {
    random.mockImplementationOnce((a, b) => a / b);

    expect(random(10, 2)).toBe(5);
    expect(random(10, 2)).toBe(10);
  });
});
