import { equals } from '../equals';

describe('Operators equals', () => {
  test('returns true when subject equals string', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'not this one',
    };
    const testString = 'hello this is a string';

    const result = equals(row, 'prop1', [testString]);

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

    const result = equals(row, 'prop2.*.name', [testString]);

    expect(result).toEqual(true);
  });

  test('returns true when subject is true (boolean) equals `yes` string', () =>{

    const row = {
      prop1:true,
      prop2:[{
        name:'does it match?',
        note:'will this match'
      }],
    };
    const testString = 'yes';

    const result = equals(row, 'prop1', [testString]);

    expect(result).toEqual(true);
  });
  test('returns false when subject is true (boolean) equals not `yes` string', () =>{

    const row = {
      prop:true ,
    };
    const testString = 'any another value';

    const result = equals(row, 'prop', [testString]);

    expect(result).toEqual(false);
  });
});