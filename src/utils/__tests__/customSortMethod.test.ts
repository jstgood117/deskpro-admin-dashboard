import {
  customSortMethod
} from '../sort';

type ValsType = {
  values: {
    col?:any;
  }
};

describe('sort.ts', () => {
  describe('customSortMethod', () => {
    test('if a.values["col"]=1 and b.values["col"]=1, return -1', () => {
      const a = {values:{col:1}};
      const b = {values:{col:1}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

    test('if a.values["col"]=1 and b.values["col"]=2, return -1', () => {
      const a = {values:{col:1}};
      const b = {values:{col:2}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

    test('if a.values["col"]=3 and b.values["col"]=2, return 1', () => {
      const a = {values:{col:3}};
      const b = {values:{col:2}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(1);
    });

    test('if a.values["col"]="same" and b.values["col"]="same", return 0', () => {
      const a = {values:{col:'same'}};
      const b = {values:{col:'same'}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

    test('if a.values["col"]=null, return 1', () => {

      const a: ValsType = {values:{col:null}};
      const b: ValsType = {values:{col:1}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(1);
    });

    test('if b.values["col"]=null, return -1', () => {

      const a: ValsType = {values:{col:1}};
      const b: ValsType = {values:{col:null}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

    test('if a.values["col"]="10" and b.values["col"]="2", return 1', () => {
      const a = {values:{col:'10'}};
      const b = {values:{col:'2'}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(1);
    });

    test('if a.values["col"]="2" and b.values["col"]="10", return 1', () => {
      const a = {values:{col:'2'}};
      const b = {values:{col:'10'}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

    test('if a.values["col"]="10" and b.values["col"]="10", return 1', () => {
      const a = {values:{col:'10'}};
      const b = {values:{col:'10'}};

      const result = customSortMethod(a, b, 'col');

      expect(result).toEqual(-1);
    });

  });
});