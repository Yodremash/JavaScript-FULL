import { calc } from './calculator.js';

it('should sum numbers', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
});

it('should minus numbers', () => {
  const result = calc('2 - 2');
  expect(result).toEqual('2 - 2 = 0');
});

it('should multiply numbers', () => {
  const result = calc('2 * 2');
  expect(result).toEqual('2 * 2 = 4');
});

it('should divide numbers', () => {
  const result = calc('2 / 2');
  expect(result).toEqual('2 / 2 = 1');
});

it('when given empty array', () => {
  const result = calc(2 / 2);
  expect(result).toEqual(null);
});
