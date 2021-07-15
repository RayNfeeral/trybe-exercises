// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
// const { expect, jest } = require('@jest/globals');
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

  // 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
  it('should return the multiplication of its 3 parameters', () => {
    random.mockImplementation((a, b, c) => a * b *c);
    
    expect(random(4, 5, 6)).toBe(120);
  });
  
  it('should duplicate its parameter', () => {
    random.mockReset();
    
    expect(random()).toBe(undefined);
    
    random.mockImplementation((a) => 2 * a);

    expect(random(3)).toBe(6);
  })
});
