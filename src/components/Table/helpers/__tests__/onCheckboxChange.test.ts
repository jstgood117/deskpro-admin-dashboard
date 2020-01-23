import { onCheckboxChange } from '../functions';

const setChecked = jest.fn();

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

    onCheckboxChange('6', {}, setChecked, subRows);
    expect(setChecked).toHaveBeenCalledWith({'6': true, '7': true, '8': true});
  });
  test('check when row doesnt have SubRows', () => {
    onCheckboxChange('6', {}, setChecked, []);
    expect(setChecked).toHaveBeenCalledWith({'6': true});
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
    onCheckboxChange('6', {6: true, 7: true, 8: true}, setChecked, subRows);
    expect(setChecked).toHaveBeenCalledWith({'6': true, '7': true, '8': true});
  });
  test('uncheck general row', () => {
    onCheckboxChange('5', {5: true}, setChecked, []);
    expect(setChecked).toHaveBeenCalledWith({'6': true, '7': true, '8': true});
  });
});
