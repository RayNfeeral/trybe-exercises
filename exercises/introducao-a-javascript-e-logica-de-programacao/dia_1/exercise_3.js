const a = 10;
const b = 5;
const c = 17;

if (a > b & a > c) {
  console.log('o maior é ' + a);
}
else if (b > a & b > c) {
  console.log('o maior é ' + b);
}
else if (c > a & c > b) {
  console.log('o maior é ' + c);
}
else {
  console.log('São iguais');
}