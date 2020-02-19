import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import UserGroupSelector from './UserGroupSelector';

const values = [
  { id: 0, value: 'Extra Privileged', selected: true },
  { id: 1, value: 'General Users', selected: true },
  { id: 2, value: 'Registered', selected: true },
  { id: 3, value: 'VIP', selected: true },
  { id: 4, value: 'Usergroup 5', selected: false },
  { id: 5, value: 'Usergroup 6', selected: false },
  { id: 6, value: 'Usergroup 7', selected: false },
  { id: 7, value: 'Usergroup 8', selected: false },
];

storiesOf('UserGroupSelector', module)
  .add('default', () => {
    const [items, setItems] = useState(values);

    return (
      <div style={{ width: '376px', height: '500px' }} >
        <UserGroupSelector
          description=''
          items={items}
          onSelect={newItems => setItems(newItems)}
        />
      </div>
    );
  });
