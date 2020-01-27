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
  });
});
