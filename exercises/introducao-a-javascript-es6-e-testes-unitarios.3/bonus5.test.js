// 5. Kata ou Code Kata são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.
// Kata 'Verificador de senhas': Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário. Não é necessário fazer os itens extras (2, 3 e 4) do repositório.
const Verify = (password) => {
  if (password.length < 8) {
    return false;
  }
  if (!password) {
    return false;
  }
  if (!password.match(/[A-Z]/g)) {
    return false;
  }
  if (!password.match(/[a-z]/g)) {
    return false;
  }
  if (!password.match(/[0-9]/g)) {
    return false;
  }

  return true;
}

const assert = require('assert');

let password = 'Pas5wor';
let expected = Verify(password);
let result = false;
assert.strictEqual(expected, result, 'Não pode permitir uma senha com menos de 8 caracteres');

password = '';
expected = Verify(password);
result = false;
assert.strictEqual(expected, result, 'Não pode permitir uma senha nula');

password = 'pas5word';
expected = Verify(password);
result = false;
assert.strictEqual(expected, result, 'Não pode permitir uma sem pelo menos uma uppercase letter');

password = 'PAS5WORD';
expected = Verify(password);
result = false;
assert.strictEqual(expected, result, 'Não pode permitir uma sem pelo menos uma lowercase letter');

password = 'PaSsWoRd';
expected = Verify(password);
result = false;
assert.strictEqual(expected, result, 'Não pode permitir uma sem pelo menos um número');

password = 'Pa5sWoRd';
expected = Verify(password);
result = true;
assert.strictEqual(expected, result, 'A senha deve obedecer todas as condições de verificação');