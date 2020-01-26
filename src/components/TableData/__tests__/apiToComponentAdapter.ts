import { generateComponentProps } from '../apiToComponentAdapter';

describe('apiToComponentAdapater tests', () => {
  describe('generateComponentProps tests', () => {
    it('should return formatted date value', () =>
      expect(
        generateComponentProps({
          column: {
            type: {
              __typename: 'TableColumnTicketDepartmentList',
              valuesArray: { dataPath: 'departaments' }
            }
          },
          row: {
            original: {
              departaments: [{ title: 'test 1' }, { title: 'test 2' }]
            }
          }
        })
      ).toEqual({
        props: { max: 1, values: ['test 1', 'test 2'] },
        type: 'string'
      }));
  });
});
