const sum = require('./sum');

describe ('1. A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it ('retorna 9 se passados 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  })

  it ('retorna 0 se passados 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })

  it ('lança um erro se os parametros forem 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  })
})
