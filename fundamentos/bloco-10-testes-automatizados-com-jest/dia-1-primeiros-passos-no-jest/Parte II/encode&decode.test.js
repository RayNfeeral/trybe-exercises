const { encode, decode } = require('./encode&decode');

describe ('testando encode', () => {
  it ('deveria estar definida', () => {
    expect(typeof encode).toBe('function');
  });

  it ('deveria substituir as vogais a, e, i, o, u por 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it ('não deveria substituir outras letras', () => {
    expect(encode('bcdfghjklmnpqrstvxyz')).toBe('bcdfghjklmnpqrstvxyz');
  });

  it ('deveria retornar uma string com o mesmo tamanho da original', () => {
    expect(encode('testando').length).toBe(8)
  });
});

describe ('testando decode', () => {
  it ('deveria estar definida', () => {
    expect(typeof decode).toBe('function');
  });
  
  it ('deveria substituir os números 1, 2, 3, 4, 5 por a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it ('não deveria substituir outros números', () => {
    expect(encode('06789')).toBe('06789');
  });

  it ('deveria retornar uma string com o mesmo tamanho da original', () => {
    expect(decode('t2st1nd4').length).toBe(8)
  });
});
