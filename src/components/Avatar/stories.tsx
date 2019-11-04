import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';
import ActiveAvatar from './ActiveAvatar';
import NameAndAvatar from './NameAndAvatar';

storiesOf('Avatar', module)
  .add('image static', () => (
    <Avatar
      type='image'
      content='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    />
  ))
  .add('image selected', () => (
    <Avatar
      type='image'
      selected={true}
      content='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    />
  ))
  .add('svg static', () => <Avatar type='svg' content='admin.sidebar.setup' />)
  .add('svg selected', () => (
    <Avatar type='svg' selected={true} content='admin.sidebar.setup' />
  ))
  .add('text', () => (
    <Avatar
      type='text'
      content='A'
      textColor='#77b0e8'
      textBackgroundColor='#dfedfb'
    />
  ))
  .add('active avatar', () => (
    <ActiveAvatar
      active={true}
      avatarProps={{
        type: 'image',
        content:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
      }}
      name='A'
    />
  ))
  .add('name and avatar', () => (
    <NameAndAvatar
      avatar='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
      name='A'
    />
  ));