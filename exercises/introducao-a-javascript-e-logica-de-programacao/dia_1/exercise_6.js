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