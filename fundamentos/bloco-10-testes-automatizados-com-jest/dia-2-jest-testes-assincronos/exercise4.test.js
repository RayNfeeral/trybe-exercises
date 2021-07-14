// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
const { expect } = require('@jest/globals');
const getRepos = require('./getRepos');

describe('Testando a função getRepos', () => {
  it ('deveria retornar um array que contem "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator"', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
