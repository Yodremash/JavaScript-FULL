import { getAdults } from './getAdults.js';

it('should get obj with 18+ aged people', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty obj', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
