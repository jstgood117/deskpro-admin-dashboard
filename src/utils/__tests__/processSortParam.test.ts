import {
  processSortParam
} from '../sort';

describe('sort.ts', () => {
  describe('processSortParam', () => {
    test('if param `null`, return `-`', () => {
      const result = processSortParam(null);

      expect(result).toEqual('-');
    });

    test('if param "a String", return "a string"', () => {
      const result = processSortParam('a String');

      expect(result).toEqual('a string');
    });

    test('if param is object with string props.sortingvalue, return props.sortingvalue`s value as a lowercase string', () => {
      const result = processSortParam({
        props: {
          sortingvalue: 'A STRING'
        }
      });

      expect(result).toEqual('a string');
    });

    test('if param is object with numeric props.sortingvalue, return props.sortingvalue`s value as a number', () => {
      const result = processSortParam({
        props: {
          sortingvalue: 100.23
        }
      });

      expect(result).toEqual(100.23);
    });

    test('if param is object with object props.sortingvalue, return props.sortingvalue`s value as a 0', () => {
      const result = processSortParam({
        props: {
          sortingvalue: {'name':'test'}
        }
      });

      expect(result).toEqual(0);
    });

    test('if param is number, return props.sortingvalue`s value as number', () => {
      const result = processSortParam('10');

      expect(result).toEqual(10);
    });
  });
});