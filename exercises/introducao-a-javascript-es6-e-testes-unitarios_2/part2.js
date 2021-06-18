const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(lesson2, 'turno', 'manhã');

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  console.log(Object.keys(object).join(',\n'));
}

// 3. Crie uma função para mostrar o tamanho de um objeto.
function showSize(object) {
  console.log(Object.keys(object).length);
}

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object) {
  console.log(Object.values(object).join(',\n'));
}

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

console.log(allLessons);


// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function studentsTotal(object) {
  let total = 0;

  for (let lesson of Object.values(object)) {
    total += lesson.numeroEstudantes;
  }

  return total;
}

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function getValueByIndex(object, index) {
  return Object.values(object)[index];
}

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function includesProperty(object, key, value) {
  if (object[key] === value) {
    return true;
  }

  return false;
}
