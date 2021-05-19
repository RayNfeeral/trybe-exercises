const a = 30;
const b = 60;
const c = 90;

const soma = a + b + c;

if (a < 0 || b < 0 || c < 0) {
  console.log('Erro! Ângulos inválidos!');
}
else if (soma == 180) {
  console.log(true);
}
else {
  console.log(false);
}