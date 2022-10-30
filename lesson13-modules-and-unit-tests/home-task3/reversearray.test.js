import { reverseArray } from './reversearray.js';

it('should reverse array', () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it('if given empty array', () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it('if given not array', () => {
  const result = reverseArray(123);
  expect(result).toEqual(null);
});
