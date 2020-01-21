import { IMenuItemProps } from '../resources/interfaces';

export const testOrderableMenuItems: IMenuItemProps[] = [
  { key: 0, name: 'Name', sortable: true },
  {
    key: 1,
    name: 'Email',
    subItems: [
      { key: 2, name: 'Text' },
      { key: 3, name: 'Avatar with text' },
      { key: 4, name: 'Avatar' },
      { key: 5, name: 'Label' }
    ],
    sortable: true
  },
  { key: 6, name: 'Phone number', sortable: true },
  { key: 7, name: 'Access', sortable: true },
  { key: 8, name: 'Team', sortable: true },
  { key: 9, name: 'Permissioin group', sortable: true },
  { key: 10, name: 'Assigned tickets', sortable: true },
  { key: 11, name: 'Language', sortable: true },
  { key: 12, name: 'Timezone', sortable: true }
];
