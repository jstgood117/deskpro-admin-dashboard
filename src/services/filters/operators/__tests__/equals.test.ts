import { equals } from '../equals';

describe('Operators equals', () => {
  test('returns true when subject equals string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'hello this is a string';

    const result = equals(row, 'prop1', testString);

    expect(result).toEqual(true);
  });

  test('returns true when prop in object subject equals string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'does it match?';

    const result = equals(row, 'prop2.*.name', testString);

    expect(result).toEqual(true);
  });
});