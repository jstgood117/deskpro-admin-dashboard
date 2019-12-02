import { IMenuItemProps } from '../../interfaces';
import { IOptions } from '../../../components/SelectComponents/interfaces';

export const testDropdownItemsWithIcon: IMenuItemProps[] = [
  { name: 'Delete Agents', icon: 'trash' },
  {},
  {
    name: 'Change Team',
    subItems: [
      { name: 'Add Team' },
      { name: 'Remove Team' },
      { name: 'Remove All & Add Team' }
    ],
    icon: 'user.check'
  },
  {
    name: 'Change Permission Group',
    subItems: [
      { name: 'Add Permission Group' },
      { name: 'Remove Permission Group' },
      { name: 'Remove All & Add Permission Group' }
    ],
    icon: 'chat'
  },
  {
    name: 'Change Access',
    subItems: [
      { name: 'Add Admin Access' },
      { name: 'Add Reports Admin Access' },
      { name: 'Remove Admin Access' },
      { name: 'Remove All & Add Admin Access' }
    ],
    icon: 'user.setting'
  },
  {
    name: 'Change Alias',
    subItems: [
      { name: 'Add Alias' },
      { name: 'Remove Alias' },
      { name: 'Remove All & Add Alias' }
    ],
    icon: 'user.alias'
  },
  {},
  {
    name: 'Set Timezone'
  },
  {
    name: 'Set Language'
  }
];

export const testHandlingTeamList: IOptions[] = [
  { value: 'accounting', label: 'Accounting' },
  { value: 'business', label: 'Business' },
  { value: 'design', label: 'Design' },
  { value: 'hr', label: 'HR' },
  { value: 'sales', label: 'Sales' },
  { value: 'finance', label: 'Finance' }
];