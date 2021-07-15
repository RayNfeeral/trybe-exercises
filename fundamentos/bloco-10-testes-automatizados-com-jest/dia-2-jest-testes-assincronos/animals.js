const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.name === name);
      if (animalFound) {
        return resolve(animalFound);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age >= age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject(`Nenhum animal com pelo menos ${age} anos de idade!`);
    }, 100);
  })
);

const getAnimal = async (name) => {
  return findAnimalByName(name);
};

const getAnimals = async (age) => {
  return findAnimalsByAge(age);
};

module.exports = { getAnimal, getAnimals };
