import React from 'react';
import { storiesOf } from '@storybook/react';

import Profiles from './Profiles';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

const avatarUrn =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
const names = ['Bruce Wayne', 'Clark Kent', 'Arthur Curry'];

const AGENTS_COUNT = 20;

const profiles = Array.from(Array(AGENTS_COUNT), (never, index) => ({
  id: `agent${index}`,
  avatar: !(index % 2) ? avatarUrn : '',
  name: names[index % 3]
}));

const selected = { agent1: true };
const restricted = { agent2: true };

storiesOf('Profiles', module)
  .add('Editable profiles (20)', () => (
    <Formik
      initialValues={{
        profiles,
        selected,
        restricted,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          editable={true}
          max={200}
          onEditClick={action('edit click')}
          profiles={formikProps.values.profiles}
          selected={formikProps.values['selected']}
          restricted={formikProps.values.restricted}
          title='Agents'
        />
      )}
    </Formik>
  ))
  .add('Editable profiles uncaped (20)', () => (
    <Formik
      initialValues={{
        profiles,
        selected,
        restricted,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          editable={true}
          onEditClick={action('edit click')}
          profiles={formikProps.values.profiles}
          selected={formikProps.values['selected']}
          restricted={formikProps.values.restricted}
          title='Agents'
        />
      )}
    </Formik>
  ))
  .add('Editable profiles (4)', () => (
    <Profiles
      editable={true}
      max={200}
      onEditClick={action('edit click')}
      profiles={profiles.slice(0, 4)}
      selected={selected}
      title='Agents'
    />
  ))
  .add('Non-editable profiles (20)', () => (
    <Profiles max={200} profiles={profiles} selected={selected} title='Agents' />
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
