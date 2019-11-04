import { IMenuItemProps } from '../../interfaces';

export const testDropdownItemsWithoutIcon: IMenuItemProps[] = [
  { name: 'Delete Agents' },
  {},
  {
    name: 'Change Team',
    subItems: [
      { name: 'Add Team' },
      { name: 'Remove Team' },
      { name: 'Remove All & Add Team' }
    ]
  },
  {
    name: 'Change Permission Group',
    subItems: [
      { name: 'Add Permission Group' },
      { name: 'Remove Permission Group' },
      { name: 'Remove All & Add Permission Group' }
    ]
  },
  {
    name: 'Change Access',
    subItems: [
      { name: 'Add Admin Access' },
      { name: 'Add Reports Admin Access' },
      { name: 'Remove Admin Access' },
      { name: 'Remove All & Add Admin Access' }
    ]
  },
  {
    name: 'Change Alias',
    subItems: [
      { name: 'Add Alias' },
      { name: 'Remove Alias' },
      { name: 'Remove All & Add Alias' }
    ]
  },
  {},
  {
    name: 'Set Timezone'
  },
  {
    name: 'Set Language'
  }
];