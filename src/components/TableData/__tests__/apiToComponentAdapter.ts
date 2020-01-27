import { generateComponentProps } from '../apiToComponentAdapter';

describe('apiToComponentAdapater tests', () => {
  describe('generateComponentProps tests', () => {
    it('should return formatted date value', () =>
      expect(
        generateComponentProps({
          column: {
            type: {
              __typename: 'TableColumnDateTime',
              value: { dataPath: 'date_created' }
            }
          },
          row: { original: { date_created: '2019-06-25 19:24:04' } }
        })
      ).toEqual({ props: { date_time: 'Jun 25, 2019' }, type: 'date_time' }));
  });
});
