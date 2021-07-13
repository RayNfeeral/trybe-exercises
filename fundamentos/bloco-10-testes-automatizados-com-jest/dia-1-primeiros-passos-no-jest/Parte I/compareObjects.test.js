const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe ('Compare dois objetos para verificar se são idênticos ou não', () => {
  it ('obj1 igual ao obj2', () => {
    expect(obj1).toEqual(obj2)
  })

  it ('obj1 diferente do obj3', () => {
    expect(obj1).not.toEqual(obj3)
  })

  it ('obj2 diferente do obj3', () => {
    expect(obj2).not.toEqual(obj3)
  })
})