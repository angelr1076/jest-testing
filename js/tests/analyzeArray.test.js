import { analyzeArray } from '../scripts/analyzeArray';

it('returns an object', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

it('returns an average of the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4);
});

it('returns a min in the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1);
});

it('returns a max in the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8);
});

it('returns the length of the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6);
});
