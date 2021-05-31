function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];

function createDaysOfTheMonth(monthDays, fridays, holidays) {
  const monthDaysList = document.getElementById('days');

  for (let day of monthDays) {
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    dayItem.className = 'day';

    if (fridays.includes(day)) {
      dayItem.className += ' friday';
    }

    if (holidays.includes(day)) {
      dayItem.className += ' holiday';
    }

    monthDaysList.appendChild(dayItem);
  }
}

createDaysOfTheMonth(dezDaysList, dezFridays, dezHolidays);

/* 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function createHolidayBtn(btnName) {
  const holidayBtn = document.createElement('button');
  const btnsContainer = document.querySelector('.buttons-container');

  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerHTML = btnName;

  btnsContainer.appendChild(holidayBtn);
}

createHolidayBtn('Feriados');

/* 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" */

function addHolidaysBehavior() {
  const holidayBtn = document.getElementById('btn-holiday');

  holidayBtn.addEventListener('click', function() {
    const holidayDaysList = document.getElementsByClassName('holiday');
    
    for (let index = 0; index < holidayDaysList.length; index += 1) {
      if (holidayDaysList[index].style.backgroundColor) {
        holidayDaysList[index].style.backgroundColor = '';
        holidayDaysList[index].style.color = '';
      } else {
        holidayDaysList[index].style.backgroundColor = 'green';
        holidayDaysList[index].style.color = 'white';
      }
    }
  })
}

addHolidaysBehavior();

/* 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

function createFridayBtn(btnName) {
  const fridayBtn = document.createElement('button');
  const btnsContainer = document.querySelector('.buttons-container');

  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = btnName;

  btnsContainer.appendChild(fridayBtn);
}

createFridayBtn('Sexta-feira');

/* 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function addFridaysBehavior() {
  const fridayBtn = document.getElementById('btn-friday');

  fridayBtn.addEventListener('click', function() {
    const fridayDaysList = document.getElementsByClassName('friday');
    
    for (let index = 0; index < fridayDaysList.length; index += 1) {
      if (fridayDaysList[index].classList.contains('sextou')) {
        fridayDaysList[index].innerHTML = parseInt(fridayDaysList[index].previousElementSibling.innerHTML) + 1;
        fridayDaysList[index].classList.remove('sextou');
      } else {
        fridayDaysList[index].innerHTML = 'SEXTOOU!!!';
        fridayDaysList[index].classList.add('sextou');
      }
    }
  })
}

addFridaysBehavior();

/* 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target */

function zoomIn(event) {
  const fontSize = window.getComputedStyle(event.target).getPropertyValue('font-size');

  event.target.style.fontSize = parseInt(fontSize) * 1.5 + 'px';
}

function zoomOut(event) {
  const fontSize = window.getComputedStyle(event.target).getPropertyValue('font-size');

  event.target.style.fontSize = parseInt(fontSize) / 1.5 + 'px';
}

const firstMonthDay = document.querySelector('.day');

for (let day = firstMonthDay; day !== null; day = day.nextElementSibling) {
  day.addEventListener('mouseenter', zoomIn);
  day.addEventListener('mouseleave', zoomOut);
};

/* 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" */
function createTask(taskName) {
  const task = document.createElement('span');
  const tasksContainer = document.querySelector('.my-tasks');

  task.innerHTML = taskName;

  tasksContainer.appendChild(task);
}

createTask('Projeto');

/* 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" */
function createTaskTag(tagColor) {
  const tag = document.createElement('div');

  tag.className = 'task';
  tag.style.backgroundColor = tagColor;

  document.querySelector('.my-tasks').appendChild(tag);
}

createTaskTag('green');

/* 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */
function taskTagBehavior(event) {
  const tag = event.target;
  
  if(tag.classList.contains('selected')) {
    tag.classList.remove('selected');
  } else {
    document.querySelectorAll('.task').forEach(tag => tag.classList.contains('selected') && tag.classList.remove('selected'));
    tag.classList.add('selected');
  }
}

const allTaskTags = document.getElementsByClassName('task');

for (let index = 0; index < allTaskTags.length; index += 1) {
  allTaskTags[index].addEventListener('click', taskTagBehavior);
}