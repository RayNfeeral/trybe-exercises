// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar

const n = 7;
const numberOfRows = Math.ceil(n/2);

for(let currentRow = numberOfRows; currentRow > 0; currentRow -= 1) {
  let row = '';
  const numberOfSideSpaces = currentRow - 1;
  const lastAsterisk = n - numberOfSideSpaces;
  for(let characterPosition = 1; characterPosition <= lastAsterisk; characterPosition += 1) {
    if(currentRow === 1) {
      row += '*';
    }
    else {
      if (characterPosition === (numberOfSideSpaces + 1)||characterPosition === lastAsterisk) {
        row += '*';
      }
      else {
        row += ' ';
      }
    }
  }
  console.log(row);
}
