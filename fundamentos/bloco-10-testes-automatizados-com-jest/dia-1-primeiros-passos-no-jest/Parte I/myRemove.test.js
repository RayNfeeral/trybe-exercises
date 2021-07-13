const myRemove = require('./myRemove');

describe('2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it ('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3)
    expect(arr).toEqual([1, 2, 3, 4])
  })

  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})
