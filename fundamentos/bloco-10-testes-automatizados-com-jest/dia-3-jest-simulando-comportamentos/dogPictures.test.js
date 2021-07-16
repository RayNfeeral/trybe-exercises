// 6. Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
const dogPictures = require("./dogPictures");

describe("testando a requisição", () => {
  const picturesApi = jest.spyOn( dogPictures, "dogPictures");
  afterEach(picturesApi.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    picturesApi.mockResolvedValue('request sucess');

    picturesApi();
    expect(picturesApi).toHaveBeenCalled();
    expect(picturesApi).toHaveBeenCalledTimes(1);
    expect(picturesApi()).resolves.toBe('request sucess');
    expect(picturesApi).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    picturesApi.mockRejectedValue('request failed');

    expect(picturesApi).toHaveBeenCalledTimes(0);
    expect(picturesApi()).rejects.toMatch('request failed');
    expect(picturesApi).toHaveBeenCalledTimes(1);
  });
});
