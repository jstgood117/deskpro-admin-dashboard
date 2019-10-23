import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './Label';

storiesOf('Label', module)
  .add('Administrator', () => (
    <Label
      label="Administrator"
      styleType="Pink"
      styles={{ height: '24px', width: '94px' }}
    />
  ))
  .add('AllPermissions', () => (
    <Label
      label="All Permissions"
      styleType="OutlineGray"
      styles={{ height: '22px', width: '105px' }}
    />
  ))
  .add('Tertiary', () => (
    <Label
      label="Tertiary"
      styleType="Tertiary"
      styles={{ height: '22px', width: '105px' }}
    />
  ));
