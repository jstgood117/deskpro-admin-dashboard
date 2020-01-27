import { yesNo } from '../yesNo';

describe('Operators yes/no', () => {
  test('returns true when subject is non empty', () => {
    const row = {
      prop1: 'hello this is a string'
    };

    const result = yesNo(row, 'prop1', []);

    expect(result).toEqual(true);
  });

  test('returns false when prop is empty', () => {
    const row = {
      prop1: ''
    };

    const result = yesNo(row, 'prop1', []);

    expect(result).toEqual(false);
  });

  test('returns true when prop is `true` and value is `[yes]`', () => {
    const row = {
      prop1: true
    };

    const result = yesNo(row, 'prop1', ['yes']);

    expect(result).toEqual(true);
  });
});
