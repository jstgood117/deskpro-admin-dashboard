import React from 'react';
import { storiesOf } from '@storybook/react';

import TabBar from './TabBar';

const TabItems = [
  { label: 'Property1' },
  { label: 'Property2' },
  { label: 'Property3' }
];

storiesOf('TabBar', module)
  .add('Tab Bar', () => <TabBar tabItems={TabItems} />);
