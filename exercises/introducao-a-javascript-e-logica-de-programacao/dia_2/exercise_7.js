// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber;

for(let index = 0; index < numbers.length; index += 1) {
  if(index === 0) {
    lowestNumber = numbers[index];
  }
  else if(lowestNumber > numbers[index]) {
    lowestNumber = numbers[index];
  }
}

console.log(lowestNumber);

