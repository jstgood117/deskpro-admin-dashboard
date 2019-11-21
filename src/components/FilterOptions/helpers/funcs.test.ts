import { OperatorType } from '../../../resources/constants/mock/testFilterMeta';

import {
  getIntlOperatorTitle,
  getOptionPropertyByPath,
  getPathByOptionProperty,
  getOperatorByTitle,
  getCurrentOperators
} from './funcs';

const operators: OperatorType[] = ['CONTAINS', 'NOT_CONTAINS'];

describe('FilterOptions',() => {
  describe('getIntlOperatorTitle',() => {
    test('returns i18n key with operatorName', () => {

      const operatorName = 'CONTAINS';
      const opertorKeys = {
        'CONTAINS': 'contains.*.key'
      };

      const result = getIntlOperatorTitle(operatorName, opertorKeys);
      expect(result).toEqual('contains.*.key');
    });

    test('return empty from if operatorName not found', () => {

      const operatorName = 'WRONG';
      const opertorKeys = {
        'CONTAINS': 'contains.*.key'
      };

      const result = getIntlOperatorTitle(operatorName, opertorKeys);
      expect(result).toEqual('');
    });
  });

  describe('getOptionPropertyByPath',() => {
    test('returns title from matched property by using path', () => {

      const path = 'db.col.name';
      const properties = [{
        path: 'db.col.name',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getOptionPropertyByPath(path, properties);
      expect(result).toEqual('This is the title');
    });

    test('returns empty string if path not found', () => {

      const path = 'db.col.doesnt_exist';
      const properties = [{
        path: 'db.col.name',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getOptionPropertyByPath(path, properties);
      expect(result).toEqual('');
    });

  });

  describe('getPathByOptionProperty',() => {
    test('returns path from matched property by using title', () => {

      const title = 'This is the title';
      const properties = [{
        path: 'db.col.name',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getPathByOptionProperty(title, properties);
      expect(result).toEqual('db.col.name');
    });

    test('returns empty string if title not found', () => {

      const title = 'Title doesnt exist';
      const properties = [{
        path: 'db.col.name',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getPathByOptionProperty(title, properties);
      expect(result).toEqual('');
    });

  });

  describe('getCurrentOperators',() => {
    test('returns operator array if currentPath matches', () => {

      const path = 'db.col.pathname';
      const filter =  {
        columnName: 'db.col.doesntmatch',
        operatorName: 'CONTAINS',
        value: 'test'
      };

      const properties = [{
        path: 'db.col.pathname',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getCurrentOperators(path, filter, properties);
      expect(result).toEqual(['CONTAINS', 'NOT_CONTAINS']);
    });

    test('returns operator array if filter path matches', () => {

      const path = 'db.col.doesntmatch';
      const filter =  {
        columnName: 'db.col.pathname',
        operatorName: 'CONTAINS',
        value: 'test'
      };

      const properties = [{
        path: 'db.col.pathname',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getCurrentOperators(path, filter, properties);
      expect(result).toEqual(['CONTAINS', 'NOT_CONTAINS']);
    });

    test('returns empty array if path doesnt match', () => {

      const path = 'db.col.unmatching';
      const filter =  {
        columnName: 'db.col.unmatching',
        operatorName: 'CONTAINS',
        value: 'test'
      };

      const properties = [{
        path: 'db.col.pathname',
        title: 'This is the title',
        operators,
        dataPath:'db',
        type:'atype'
      }];

      const result = getCurrentOperators(path, filter, properties);
      expect(result).toEqual([]);
    });
  });
});