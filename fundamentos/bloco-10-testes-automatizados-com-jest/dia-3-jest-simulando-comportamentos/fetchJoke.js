const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

module.exports = {
  fetchJoke: () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
}};
