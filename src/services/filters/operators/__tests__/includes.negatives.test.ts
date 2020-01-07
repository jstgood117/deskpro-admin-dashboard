import { doesNotInclude } from '../negatives';

describe('Operators includes', () => {
  test('returns false when subject includes string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'this';

    const result = doesNotInclude(row, 'prop1', [testString]);

    expect(result).toEqual(false);
  });

  test('returns false when prop in object subject includes string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'match';

    const result = doesNotInclude(row, 'prop2.*.name', [testString]);

    expect(result).toEqual(false);
  });
});