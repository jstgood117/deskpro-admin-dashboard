import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import OrderableMenu, { IProps } from './OrderableMenu';

export const MenuItems: any[] = [
  { name: 'Name' },
  {
    name: 'Email',
    subItems: [
      { name: 'Add Team' },
      { name: 'Remove Team' },
      { name: 'Remove All & Add Team' }
    ]
  },
  { name: 'Phone number' },
  { name: 'Access' },
  { name: 'Team' },
  { name: 'Permissioin group' },
  { name: 'Assigned tickets' },
  { name: 'Language' },
  { name: 'Timezone' }
];

const MenuComponent: React.FC<IProps> = props => {
  const [value, setValue] = useState('');
  const [SortList, SetList] = useState(MenuItems);
  return (
    <OrderableMenu
      iconName={props.iconName}
      value={value}
      label={value ? value : props.label}
      onSelect={val => setValue(val)}
      order={val => SetList(val)}
      SortList={SortList}
    />
  );
};

storiesOf('OrderableMenu', module).add(
  'OrderableMenu with dummy data and icon',
  () => <MenuComponent label="View" iconName="view" />
);
