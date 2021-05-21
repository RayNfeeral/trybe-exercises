/* Agora inverta o lado do triângulo
n = 5

    *
   **
  ***
 ****
***** */

const n = 5;

for(let index = 1; index <= n; index += 1) {
  let row = '';
  for(let position = 0; position < n; position += 1) {
    if((n - position) > index) {
      row += ' ';
    }
    else {
      row += '*';
    }
  }
  console.log(row);
}
