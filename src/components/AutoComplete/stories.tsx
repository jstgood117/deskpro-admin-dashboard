import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplete from './AutoComplete';

const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }];

storiesOf('AutoComplete', module).add('default', () => (
  <div style={{ width: 160 }}>
    <AutoComplete menuItems={items} placeholder='Select Property' />
  </div>
));
