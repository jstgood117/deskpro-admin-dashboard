import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tab from './Tab';


storiesOf('Tab', module)
  .add('Tab_Default', () => (
    <Tab label='Property' onClick={action('clicked')} index={0} value={1} />
  ))
  .add('Tab_Active', () => (
    <Tab label='Property' onClick={action('clicked')} index={0} value={0} />
  ));