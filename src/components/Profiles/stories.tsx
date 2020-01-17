import React from 'react';
import { storiesOf } from '@storybook/react';

import Profiles from './Profiles';
import { action } from '@storybook/addon-actions';

const avatarUrn =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
const names = ['Bruce Wayne', 'Clark Kent', 'Arthur Curry'];

const profiles = Array.from(Array(20), (never, index) => ({
  avatarUrn: !(index % 2) ? avatarUrn : '',
  name: names[index % 3]
}));

storiesOf('Profiles', module)
  .add('Editable profiles (20)', () => (
    <Profiles
      editable={true}
      max={200}
      onEditClick={action('edit click')}
      profiles={profiles}
      title='Agents'
    />
  ))
  .add('Editable profiles uncaped (20)', () => (
    <Profiles
      editable={true}
      onEditClick={action('edit click')}
      profiles={profiles}
      title='Agents'
    />
  ))
  .add('Editable profiles (4)', () => (
    <Profiles
      editable={true}
      max={200}
      onEditClick={action('edit click')}
      profiles={profiles.slice(0, 4)}
      title='Agents'
    />
  ))
  .add('Non-editable profiles (20)', () => (
    <Profiles max={200} profiles={profiles} title='Agents' />
  ))
  .add('No profiles (0)', () => (
    <Profiles
      editable={true}
      onEditClick={action('edit click')}
      max={200}
      profiles={[]}
      title='Agents'
    />
  ));
