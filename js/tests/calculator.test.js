import { calculator } from '../scripts/calculator';

it('adds', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it('adds', () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

it('adds', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

it('adds', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});
