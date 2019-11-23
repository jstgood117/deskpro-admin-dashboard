import { doesNotEqual } from '../negatives';

describe('Negative operators', () => {
  describe('doesNotEqual', () => {
    test('returns false when prop in object subject equals string', () => {

      const row = {
        prop1:'hello this is a string',
        prop2:[{
          name:'does it match?',
          note:'will this match'
        }],
      };
      const testString = 'does it match?';

      const result = doesNotEqual(row, 'prop2.*.name', testString);

      expect(result).toEqual(false);
    });
  });

  test('returns false when prop in object subject equals string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'does it match?';

    const result = doesNotEqual(row, 'prop2.*.name', testString);

    expect(result).toEqual(false);
  });
});