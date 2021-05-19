const custo = 100;
const venda = 150;

if (custo < 0 || venda < 0) {
  console.log('Valores inválidos!')
}
else {
  const custoTotal = 1.2 * custo;
  const lucro = venda - custoTotal;
  console.log(lucro);
}
