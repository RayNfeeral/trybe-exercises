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