import { onCheckboxChange } from '../functions';

const setChecked = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (init: any) => [init, setChecked]
}));
describe('onCheckboxChange', () => {

  test('check when row has SubRows', () => {
    const subRows = [
      {
        id: 7,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 4
      },
      {
        id: 8,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 5
      }
    ];

    const result = onCheckboxChange('6', {}, setChecked, subRows);
    expect(result).toEqual(true);
  });
  test('check when row doesnt have SubRows', () => {
    const result = onCheckboxChange('6', {}, setChecked, []);
    expect(result).toEqual(true);
  });
  test('uncheck subRows', () => {
    const subRows = [
      {
        id: 7,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 4
      },
      {
        id: 8,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 5
      }
    ];
    const result = onCheckboxChange('6', {6: true, 7: true, 8: true}, setChecked, subRows);
    expect(result).toEqual(true);
  });
  test('uncheck general row', () => {
    const result = onCheckboxChange('5', {5: true}, setChecked, []);
    expect(result).toEqual(true);
  });
});
