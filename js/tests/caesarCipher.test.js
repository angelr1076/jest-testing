import { caesarsCipher } from '../scripts/caesarCipher';

it('should return a string', () => {
  expect(typeof caesarsCipher('abc', 1)).toBe('string');
});

it('should preserve spaces', () => {
  expect(caesarsCipher('abc def', 1)).toBe('bcd efg');
});

it('should preserve punctuation', () => {
  expect(caesarsCipher('abc def!', 1)).toBe('bcd efg!');
});
