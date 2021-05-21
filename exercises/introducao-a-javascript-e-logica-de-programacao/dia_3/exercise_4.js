/* Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** */

const n = 5;
const numberOfRows = Math.ceil(n/2);

for(let currentRow = numberOfRows; currentRow > 0; currentRow -= 1) {
  let row = '';
  const numberOfSideSpaces = currentRow - 1;
  const lastAsterisk = n - numberOfSideSpaces;
  for(let characterPosition = 0; characterPosition < lastAsterisk; characterPosition += 1) {
    if (characterPosition < numberOfSideSpaces) {
      row += ' ';
    }
    else {
      row += '*';
    }
  }
  console.log(row);
}
