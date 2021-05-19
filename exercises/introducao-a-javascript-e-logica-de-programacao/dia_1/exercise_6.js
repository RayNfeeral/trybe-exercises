/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

const peca = 'pawn';

switch(peca.toLowerCase()) {
  case 'bishop':
    console.log(peca + ': diagonals');
    break;
  case 'king':
    console.log(peca + ': 1 square any direction');
    break;
  case 'knight':
    console.log(peca + ': L shaped');
    break;
  case 'pawn':
    console.log('1 square foward');
    break;
  case 'queen':
    console.log(peca + ': any direction');
    break;
  case 'rook':
    console.log(peca + ': foward, backward, left and right');
    break;
  default: 
  console.log("It isn't a chess piece");
}