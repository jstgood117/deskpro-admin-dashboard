import { IMenuItemProps } from '../../interfaces';

export const testOrderableMenuItems: IMenuItemProps[] = [
  { key: 0, name: 'Name' },
  {
    key: 1,
    name: 'Email',
    subItems: [
      { key: 2, name: 'Text' },
      { key: 3, name: 'Avatar with text' },
      { key: 4, name: 'Avatar' },
      { key: 5, name: 'Label' }
    ]
  },
  { key: 6, name: 'Phone number' },
  { key: 7, name: 'Access' },
  { key: 8, name: 'Team' },
  { key: 9, name: 'Permissioin group' },
  { key: 10, name: 'Assigned tickets' },
  { key: 11, name: 'Language' },
  { key: 12, name: 'Timezone' }
];
