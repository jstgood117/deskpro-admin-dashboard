import React from 'react';
import { storiesOf } from '@storybook/react';

import Settings from './Settings';

storiesOf('Settings', module).add('with text', () => (
  <Settings
    path='/agents/settings'
  />
));
