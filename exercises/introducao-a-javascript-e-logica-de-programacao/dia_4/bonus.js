// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanParser(romanString) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0;

  for(let index in romanString) {
    const currentIndex = romanString[parseInt(index)];
    const nextIndex = romanString[parseInt(index) + 1];

    const current = romanNumbers[currentIndex];
    const next = romanNumbers[nextIndex];

    if(next && current < next) {
      sum -= current;
    }
    else {
      sum += current;
    }
  }

  return sum;
}

console.log(romanParser('MXLIII'));
