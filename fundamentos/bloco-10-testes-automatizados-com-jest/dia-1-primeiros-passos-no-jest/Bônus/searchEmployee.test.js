const { searchEmployee } = require('./searchEmployee');

describe ('testando função searchEmployee', () => {
  it ('deveria ser definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it ('deveria ser uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  describe ('Se a execução for bem sucedida', () => {
    it ('deveria retornar a informação pesquisada', () => {
      expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
      expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
      expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    });
  });

  describe ('Se a execução falhar', () => {
    it ('deveria retornar a mensagem "ID não identificada", caso não exista employee com o id passado', () => {
      expect(() => searchEmployee('idInvalido', 'firstName')).toThrow(/ID não identificada/);
    });

    it ('deveria retornar a mensagem "Informação indisponível", caso não exista o informação pesquisada no employee encontrado', () => {
      expect(() => searchEmployee('5569-4', 'detailInvalido')).toThrow(/Informação indisponível/);
    });
  });
});
