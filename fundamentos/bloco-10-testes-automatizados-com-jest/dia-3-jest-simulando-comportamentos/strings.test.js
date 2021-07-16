// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
const strings = require('./strings');

strings.uppercase = jest.spyOn(strings, 'uppercase').mockImplementation((string) => string.toLowerCase());

strings.firstLetter = jest.spyOn(strings, 'firstLetter').mockImplementation((string) => string[string.length - 1]);

strings.concat = jest.spyOn(strings, 'concat').mockImplementation((string1, string2, string3) => string1 + string2 + string3);

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
describe('nada faz sentido', () => {
  it ('mockando coisas aleatorias', () => {
    strings.uppercase = jest.spyOn(strings, 'uppercase').mockImplementation((string) => string.toLowerCase());

    expect(strings.uppercase('AAAAA')).toBe('aaaaa');
    
    strings.uppercase.mockRestore();
    expect(strings.uppercase('aaaaaa')).toBe('AAAAAA');
  });
})
