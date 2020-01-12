import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import TabBar from './TabBar';
import { DeskproAdminTheme } from '../Theme';
import { action } from '@storybook/addon-actions';

const TabItems = [
  { label: 'Property 1' },
  { label: 'Property 2' },
  { label: 'Property 3' },
  { label: 'Property 4' },
  { label: 'Property 5' },
  { label: 'Property 6' },
  { label: 'Property 7' },
  { label: 'Property 8' },
];

storiesOf('TabBar', module).add('Tab Bar', () => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <TabBar tabItems={TabItems} handleClick={action('clicked Tab Option')} />
  </ThemeProvider>
));
