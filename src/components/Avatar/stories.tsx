import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, color, text } from '@storybook/addon-knobs';
import Avatar from './Avatar';
import ActiveAvatar from './ActiveAvatar';
import NameAndAvatar from './NameAndAvatar';

const imageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
const svgId = 'admin.sidebar.setup';
const content = {
  'image': imageUrl,
  'svg': svgId,
  'text': 'B'
};
const textColorLabel = 'Text Color';
const textColorDefaultValue = '#77b0e8';

const textBackgroundColorLabel = 'Background Color';
const textBackgroundColorDefaultValue = '#dfedfb';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('image static', () => (
    <Avatar
      type={select('Type', ['image', 'svg', 'text'], 'image')}
      content={select('Content', content, imageUrl)}
      selected={boolean('Selected', false)}
      textColor={color(textColorLabel, textColorDefaultValue)}
      textBackgroundColor={color(textBackgroundColorLabel, textBackgroundColorDefaultValue)}
    />
  ))
  .add('active avatar', () => (
    <ActiveAvatar
      active={boolean('Active', false)}
      avatarProps={{
        type: select('Type', ['image', 'svg', 'text'], 'image'),
        content: select('Content', content, imageUrl),
        selected: boolean('Selected', false),
        textColor: color(textColorLabel, textColorDefaultValue),
        textBackgroundColor: color(textBackgroundColorLabel, textBackgroundColorDefaultValue)
      }}
      name={text('Name', 'A')}
    />
  ))
  .add('name and avatar', () => (
    <NameAndAvatar
      avatar={text('Avatar Url', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')}
      name={text('Name', 'John Doe')}
    />
  ));