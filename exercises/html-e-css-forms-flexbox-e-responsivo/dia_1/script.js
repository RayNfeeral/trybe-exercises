// Funções de criação dinâmica de conteudo
function createStateOptions() {
  const states = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espirito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MS: 'Mato Grosso do Sul',
    MT: 'Mato Grosso',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins',
  }

  const stateSelect = document.querySelector('#estado');
  const firstOption = document.createElement('option');

  firstOption.innerHTML = 'Escolha uma opção';
  firstOption.value = '';

  stateSelect.appendChild(firstOption);

  for (let key of Object.keys(states)) {
    const option = document.createElement('option');

    option.value = key;
    option.innerHTML = states[key];

    stateSelect.appendChild(option);
  }
}

function validateTextInput(input, log) {
  if (input.value && input.maxLength >= input.value.length) {
    const entry = document.createElement('p');
    entry.innerHTML = `${input.name}: ${input.value}`;
    log.appendChild(entry);
  } else {
    throw new Error(`${input.name}: o campo é obrigátorio com tamanho máximo de ${input.maxLength} caracteres`);
  }
}

function validateSelect(select, log) {
  if (select.value) {
    const entry = document.createElement('p');
    entry.innerHTML = `${select.name}: ${select.value}`;
    log.appendChild(entry);
  } else {
    throw new Error(`${select.name}: o campo é obrigátorio`);
  }
}

function validateRadioInput(radios, log) {
  for (let radio of radios) {
    if (radio.checked) {
      const entry = document.createElement('p');
      entry.innerHTML = `${radio.name}: ${radio.value}`;
      log.appendChild(entry);
      return;
    }
  }

  throw new Error(`${radios[0].name}: o campo é obrigátorio`);
}

function validateDate(date, log) {
  if (date.value) {
    const [day, month, year] = date.value.split('/').map(item => parseInt(item));
    if (!day || day <= 0 || day > 31) {
      throw new Error(`${date.name}: o dia deve ser um número entre 1 e 31`);
    }
    if (!month || month <= 0 || month > 12) {
      throw new Error(`${date.name}: o mês deve ser um número entre 1 e 12`);
    }
    if (!year || year < 0) {
      throw new Error(`${date.name}: o ano deve ser um número positivo`);
    }
    const entry = document.createElement('p');
    entry.innerHTML = `${date.name}: ${date.value}`;
    log.appendChild(entry);
  } else {
    throw new Error(`${date.name}: o campo é obrigatório`);
  }
}

// Carregou a página
window.onload = () => {
  createStateOptions();

  document.querySelector('button[type=submit]').addEventListener('click', (event) => {
    event.preventDefault();
    const log = document.querySelector('#log');
    log.innerHTML = '';

    const name = document.querySelector('input[name=nome]');
    const email = document.querySelector('input[name=email]');
    const cpf = document.querySelector('input[name=cpf]');
    const endereco = document.querySelector('input[name=endereço]');
    const cidade = document.querySelector('input[name=cidade]');
    const estado = document.querySelector('select[name=estado]');
    const types = document.querySelectorAll('input[name=tipo]');
    const resume = document.querySelector('textarea[name=resumo]');
    const role = document.querySelector('input[name=cargo]');
    const roleDescription = document.querySelector('input[name=descrição]');
    const startDate = document.querySelector('input[name=data]');

   try { 
    validateTextInput(name, log);
    validateTextInput(email, log);
    validateTextInput(cpf, log);
    validateTextInput(endereco, log);
    validateTextInput(cidade, log);

    validateSelect(estado, log);

    validateRadioInput(types, log);

    validateTextInput(resume, log);
    validateTextInput(role, log);
    validateTextInput(roleDescription, log);

    validateDate(startDate, log);
    } catch (err) {
      log.innerHTML = err.message;
      return;
    }
  });
}