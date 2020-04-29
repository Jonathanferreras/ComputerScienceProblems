const multipleSum = require('./index');

test('Is a function', () => {
  expect(typeof multipleSum).toEqual('function');
});

describe('Should return sum of multiples of 3 and 5 up to a given number', () => {
  test('Returns the sum 23', () => {
    const result = multipleSum(10);

    expect(result).toEqual(23);
  });

  test('Returns the sum 233168', () => {
    const result = multipleSum(1000);

    expect(result).toEqual(233168);
  })
});