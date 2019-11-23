import { includes } from '../includes';

describe('Operators includes', () => {
  test('returns true when subject includes string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'this';

    const result = includes(row, 'prop1', testString);

    expect(result).toEqual(true);
  });

  test('returns true when prop in object subject includes string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'match';

    const result = includes(row, 'prop2.*.name', testString);

    expect(result).toEqual(true);
  });
});