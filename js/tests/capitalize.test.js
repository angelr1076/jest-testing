import { capitalize } from '../scripts/capitalize';

it('should capitalize first letter', () => {
  expect(capitalize('foo')).toBe('Foo');
});

it('should capitalize first letter', () => {
  expect(capitalize('egg')).toBe('Egg');
});
