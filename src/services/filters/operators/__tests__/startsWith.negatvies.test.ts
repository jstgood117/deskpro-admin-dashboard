import { doesNotStartWith } from '../negatives';

describe('Operators startsWith', () => {
  test('returns false when subject starts with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'hello';

    const result = doesNotStartWith(row, 'prop1', testString);

    expect(result).toEqual(false);
  });

  test('returns false when prop in object subject starts with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'does i';

    const result = doesNotStartWith(row, 'prop2.*.name', testString);

    expect(result).toEqual(false);
  });
});