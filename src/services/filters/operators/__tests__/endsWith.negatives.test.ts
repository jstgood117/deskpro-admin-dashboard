import { doesNotEndWith } from '../negatives';

describe('Operators endsWith', () => {
  test('returns false when subject ends with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'ring';

    const result = doesNotEndWith(row, 'prop1', [testString]);

    expect(result).toEqual(false);
  });

  test('returns false when prop in object subject ends with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'tch?';

    const result = doesNotEndWith(row, 'prop2.*.name', [testString]);

    expect(result).toEqual(false);
  });
});