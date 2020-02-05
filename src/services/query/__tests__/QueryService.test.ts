import { QueryService } from '../QueryService';

jest.mock('../../../schema/queries', () => ({
  QUERY_INITIAL: 'QUERY_INITIAL',
  STANDARD_TABLES_PAGE: 'STANDARD_TABLES_PAGE'
}));

describe('QueryService', () => {

  const query = QueryService();

  describe('getQuery', () => {

    test('returns prop on QUERY_INITIAL if `initial` type', () => {
      const result = query.getQuery('initial');
      expect(result).toBe('QUERY_INITIAL');
    });

    test('returns prop on STANDARD_TABLES_PAGE if `standardTablePage` type', () => {
      const result = query.getQuery('standardTablePage');
      expect(result).toBe('STANDARD_TABLES_PAGE');
    });

    test('default returns empty object', () => {
      const result = query.getQuery('not-real');
      expect(result).toEqual({});
    });
  });
});