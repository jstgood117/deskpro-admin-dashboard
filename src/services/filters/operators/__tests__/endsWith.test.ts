import { endsWith } from '../endsWith';

describe('Operators endsWith', () => {
  test('returns true when subject ends with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'ring';

    const result = endsWith(row, 'prop1', testString);

    expect(result).toEqual(true);
  });

  test('returns true when prop in object subject ends with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'tch?';

    const result = endsWith(row, 'prop2.*.name', testString);

    expect(result).toEqual(true);
  });
});