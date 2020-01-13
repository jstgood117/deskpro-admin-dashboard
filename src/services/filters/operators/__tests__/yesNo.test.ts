import { yesNo } from '../yesNo';

describe('Operators yes/no', () => {
  test('returns true when subject is non empty', () => {

    const row = {
      prop1:'hello this is a string',
      prop2:'',
    };

    const result = yesNo(row, 'prop1', []);

    expect(result).toEqual(true);
  });

  test('returns false when prop is empty', () => {

    const row = {
      prop1: '',
      prop2: 'any value',
    };

    const result = yesNo(row, 'prop1', []);

    expect(result).toEqual(false);
  });

});