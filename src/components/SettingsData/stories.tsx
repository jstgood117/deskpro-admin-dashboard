import React from 'react';
import { storiesOf } from '@storybook/react';

import SettingsData from './SettingsData';

storiesOf('Settings Data', module)
  .add('header-card', () => <SettingsData type='header-card' />)
  .add('header-medium-card', () => <SettingsData type='header-medium-card' />)
  .add('setting-info', () => (
    <SettingsData
      type='setting-info'
      props={{
        text: 'setting-info'
      }}
    />
  ))
  .add('setting-info-inUse', () => <SettingsData type='setting-info-inUse' />)
  .add('feature-billing', () => <SettingsData type='feature-billing' />)
  .add('reference-code-panel', () => (
    <SettingsData type='reference-code-panel' />
  ));
