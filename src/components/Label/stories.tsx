import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from './Label';

storiesOf('Label', module)
  .add('Filled', () => (
    <Label
      label='Sales'
      styleType='filled'
      styles={{
        backgroundColor: '#EEFFDD',
        color: '#54B162',
        textAlign: 'left'
      }}
    />
  ))
  .add('Administrator', () => (
    <Label
      label='Administrator'
      styleType='filled'
      styles={{
        height: '24px',
        width: '94px',
        backgroundColor: '#f9e6e1',
        color: '#ec6c4e'
      }}
    />
  ))
  .add('AllPermissions', () => (
    <Label
      label='All Permissions'
      styleType='lined'
      styles={{
        height: '22px',
        width: '105px',
        borderColor: '#a9b0b0',
        color: '#A9B0B0'
      }}
    />
  ))
  .add('Icon-Text-Outline', () => (
    <Label
      label='6'
      styleType='lined'
      styles={{
        color: '#8B9293',
        backgroundColor: '#F7F7F7',
        borderColor: '#a9b0b0'
      }}
      icon='dial'
    />
  ))
  .add('Icon-Text-Filled', () => (
    <Label
      label='6'
      styleType='filled'
      styles={{
        color: '#9384BD',
        backgroundColor: '#EBE4F2',
        borderColor: '#a9b0b0'
      }}
      icon='clock'
      iconColor='#9384BD'
    />
  ));
