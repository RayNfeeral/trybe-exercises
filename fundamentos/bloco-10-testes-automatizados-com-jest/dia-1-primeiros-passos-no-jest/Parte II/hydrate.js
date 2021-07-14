function hydrate(bebidas) {
  const quantity = bebidas.split('').reduce((agua, char) => {
    const quant = parseInt(char);
    if (quant) {
      return agua + quant;
    }
    return agua;
  }, 0);
  return quantity === 1 ?  `${quantity} copo de água` : `${quantity} copos de água`;
}

module.exports = hydrate;
