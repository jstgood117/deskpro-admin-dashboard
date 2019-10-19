import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import TabBar from './TabBar';
import { DeskproAdminTheme } from '../Theme';
import { action } from '@storybook/addon-actions';

const TabItems = [
  { label: 'Property1' },
  { label: 'Property2' },
  { label: 'Property3' }
];

storiesOf('TabBar', module).add('Tab Bar', () => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <TabBar tabItems={TabItems} handleClick={action('clicked Tab Option')} />
  </ThemeProvider>
));
