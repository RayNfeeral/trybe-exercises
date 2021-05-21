/* Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
***** */

const n = 5;
const numberOfRows = Math.ceil(n/2);

for(let index = numberOfRows; index > 0; index -= 1) {
  let row = '';
  for(let position = 0; position < n; position += 1) {
    const intervalWithSpaces = index - 1;
    if(position < intervalWithSpaces) {
      row += ' ';
    }
    else if (position < (n - intervalWithSpaces)) {
      row += '*';
    }
    else {
      row += ' ';
    }
  }
  console.log(row);
}
