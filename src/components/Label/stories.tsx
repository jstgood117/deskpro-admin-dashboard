import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Label from './Label';

storiesOf('Label', module)
  .addDecorator(withKnobs)
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
  ))
  .add('Label with avatar', () => {
    const label = text('Label', 'Marketing');
    const avatar = text(
      'Avatar Url',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    );

    return (
      <Label
        label={label}
        avatar={avatar}
        styleType='filled'
        styles={{ color: '#1C3E55', backgroundColor: '#E8EBEE' }}
      />
    );
  });
