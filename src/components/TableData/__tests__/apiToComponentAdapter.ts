import { generateComponentProps } from '../apiToComponentAdapter';

describe('apiToComponentAdapater tests', () => {
  describe('generateComponentProps tests', () => {
    it('should return correct departaments list', () =>
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
        props: {
          max: 10,
          agents: [
            {
              avatar: undefined,
              avatarProps: {
                textBackgroundColor: '#FAE8F0',
                textColor: '#DF5E9C'
              },
              name: 'test 1'
            },
            {
              avatar: undefined,
              avatarProps: {
                textBackgroundColor: '#FAE8F0',
                textColor: '#DF5E9C'
              },
              name: 'test 2'
            }
          ],
          viewModel: 'label'
        },
        type: 'multiple_agents'
      }));

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
