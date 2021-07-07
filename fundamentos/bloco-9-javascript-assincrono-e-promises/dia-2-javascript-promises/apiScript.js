// 1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!
// Primeiro, veja o manual da API do site icanhazdadjoke.com . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :
// Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com , e perceba que ele devolve uma página HTML com uma piada aleatória.
// Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/" . Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
// Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/" . Veja que agora recebemos apenas a piada aleatória em formato texto.
// Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/" . Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.
// // Utilize o HTML e o js a seguir como base:
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const requestOptions = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, requestOptions)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

// Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers
// A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then (em caso de sucesso) e .catch (em caso de falha). A requisição fetch retorna um objeto Response . Utilizando .then , verifique a estrutura da resposta usando um console.log na response retornada pelo fetch
// A partir do fetch , troque o console.log() anterior pelo método .json() e imprima os dados da requisição.
// Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
