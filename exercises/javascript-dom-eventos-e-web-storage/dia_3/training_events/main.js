const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

// Adicionando a classe tech ao elemento selecionado
function toggleTechClass(event) {
  const hasTech = document.getElementsByClassName('tech');

  if (hasTech.length) {
      hasTech[0].className = hasTech[0].className.split(' ').filter(classItem => classItem !== 'tech').join(' ');
    }

  event.target.className += ' tech';
}

  divUm.addEventListener('click', toggleTechClass);
  divDois.addEventListener('click', toggleTechClass);
  divTres.addEventListener('click', toggleTechClass);

// Modificando o texto do elemento com classe tech ao modificar o texto do input
function changeText(event) {
  const selectedElement = document.getElementsByClassName('tech')[0];

  if (selectedElement) {
    selectedElement.innerHTML = event.target.value;
  }
}

input.addEventListener('keyup', changeText);
input.addEventListener('focusout', e => e.target.value = '');

// Abrindo nova página ao clicar duas vezes no meu top 3
function redirect(event) {
  window.open('https://raynfeeral.github.io/');
}

myWebpage.addEventListener('dblclick', redirect);