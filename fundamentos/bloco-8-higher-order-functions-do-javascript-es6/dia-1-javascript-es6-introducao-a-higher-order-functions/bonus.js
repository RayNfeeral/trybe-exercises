// PARTE I
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 60,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 700,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonsDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 14)) + 15;

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = (warrior) => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDamage = (mage) => ({
  damage: mage.mana >= 15 ? Math.floor(Math.random() * (mage.intelligence + 1)) + mage.intelligence : 'Não possui mana suficiente',
  manaSpent: mage.mana >= 15 ? 15 : 0,
});

// PARTE II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:
const gameActions = {
  // Crie as HOFs neste objeto.
  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
  warriorTurn: (warriorDamage) => {
    const { warrior, dragon } = battleMembers;

    warrior.damage = warriorDamage(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  mageTurn: (mageDamage) => {
    const { mage, dragon } = battleMembers;
    const { damage, manaSpent } = mageDamage(mage);

    mage.damage = damage;
    mage.mana -= manaSpent;

    if (typeof mage.damage === 'string') {
      dragon.healthPoints -= mage.damage;
    }
  },
  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
  dragonTurn: (dragonsDamage) => {
    const { mage, warrior, dragon } = battleMembers;

    dragon.damage = dragonsDamage(dragon);
    mage.healthPoints && (mage.healthPoints -= dragon.damage);
    warrior.healthPoints && (warrior.healthPoints -= dragon.damage);
  },
  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
  showTurn: () => {
    console.log(battleMembers);
    return battleMembers;
  }
};

gameActions.showTurn();

for (let round = 1; round <= 100; round += 1) {
  const { mage, warrior, dragon } = battleMembers;
  
  mage.healthPoints > 0 && (gameActions.mageTurn(mageDamage), gameActions.showTurn())
  if (dragon.healthPoints <= 0) {
    console.log(`Você venceu na ${round}ª rodada! 😄`);
    break;
  }
  warrior.healthPoints > 0 && (gameActions.warriorTurn(warriorDamage), gameActions.showTurn())
  if (dragon.healthPoints <= 0) {
    console.log(`Você venceu na ${round}ª rodada! 😄`);
    break;
  }
  gameActions.dragonTurn(dragonsDamage);
  gameActions.showTurn();
  if (warrior.healthPoints <= 0 && mage.healthPoints <= 0) {
    console.log(`Você perdeu na ${round}ª rodada! 😭`);
    break;
  }
}