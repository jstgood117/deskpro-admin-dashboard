import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import TabBar from './TabBar';
import { DeskproAdminTheme } from '../Theme';

const TabItems = [
  { label: 'Property1' },
  { label: 'Property2' },
  { label: 'Property3' }
];

storiesOf('TabBar', module)
  .add('Tab Bar', () => (
    <ThemeProvider theme={DeskproAdminTheme}>
      <TabBar tabItems={TabItems} />
    </ThemeProvider>
  ));
