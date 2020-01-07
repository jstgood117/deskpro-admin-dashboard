import { startsWith } from '../startsWith';

describe('Operators startsWith', () => {
  test('returns true when subject starts with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'hello';

    const result = startsWith(row, 'prop1', [testString]);

    expect(result).toEqual(true);
  });

  test('returns true when prop in object subject starts with string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'does i';

    const result = startsWith(row, 'prop2.*.name', [testString]);

    expect(result).toEqual(true);
  });
});