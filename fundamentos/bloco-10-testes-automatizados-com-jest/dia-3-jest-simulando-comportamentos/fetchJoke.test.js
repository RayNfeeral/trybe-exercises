// Bonus. O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os seguintes dados:
// {
//   'id': '7h3oGtrOfxc',
//   'joke': 'Whiteboards ... are remarkable.',
//   'status': 200
// }
// const { jest } = require('@jest/globals');
const fetch = require('node-fetch');
const { fetchJoke } = require("./fetchJoke");

jest.mock('node-fetch');

describe("testando a requisição", () => {
  test("testando requisição caso a promise resolva", async () => {
    fetch.mockImplementation(async (url) => ({
        json: async () => ({
          joke: {
            id: '7h3oGtrOfxc',
            joke: 'Whiteboards ... are remarkable.',
            status: 200,
          },
        }),
      })
    );

    const joke = await fetchJoke();

    expect(joke).toEqual({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200
      });
  })
});
