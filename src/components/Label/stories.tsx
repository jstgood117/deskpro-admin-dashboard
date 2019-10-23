import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './Label';

storiesOf('Label', module)
  .add('Administrator', () => (
    <Label
      label="Administrator"
      styleType="filled"
      styles={{ height: '24px', width: '94px', backgroundColor: '#f9e6e1', color: '#ec6c4e' }}
    />
  ))
  .add('AllPermissions', () => (
    <Label
      label="All Permissions"
      styleType="lined"
      styles={{ height: '22px', width: '105px', borderColor: '#a9b0b0', color: '#A9B0B0' }}
    />
  ));
