const myFizzBuzz = require('./myFizzBuzz');

describe('4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it ('retorna fizzbuzz se o parametro for 15', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  })

  it ('retorna fizz se o parametro for 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz')
  })

  it ('retorna buzz se o parametro for 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  })

  it ('retorna 2 se o parametro for 2', () => {
    expect(myFizzBuzz(2)).toEqual(2)
  })

  it ('retorna false se o parametro for "15"', () => {
    expect(myFizzBuzz('15')).toEqual(false)
  })
})
