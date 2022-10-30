import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('if empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('if string', () => {
  const result = getMinSquaredNumber('jaegbfjse');

  expect(result).toEqual(null);
});

it('get min squared number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
