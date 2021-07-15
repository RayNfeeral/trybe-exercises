const { getAnimal, getAnimals } = require('./animals');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existem animais com a idade mínima pesquisada', () => {
    test('Retorne um array com os objetos dos animais', () => {
      expect.assertions(1);
      return getAnimals(2).then(animals => {
        expect(animals).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }, { name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existem animais com a idade mínima pesquisada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimals(6).catch(error =>
        expect(error).toEqual('Nenhum animal com pelo menos 6 anos de idade!')
      );
    });
  });
});
