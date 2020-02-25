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

const selected = {
  agent1: true,
  agent3: true,
  agent4: true,
  agent6: true,
  agent7: true,
  agent8: true,
  agent9: true,
};
const restricted = { agent2: true };

storiesOf('Profiles', module)
  .add('Editable profiles (20)', () => (
    <Formik
      initialValues={{
        profiles,
        'agents-profiles': selected,
        restricted,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          id='agents-profiles'
          editable={true}
          onEditClick={action('edit click')}
          profiles={formikProps.values.profiles}
          selected={formikProps.values['agents-profiles']}
          restricted={formikProps.values.restricted}
          title='Agents'
          formikProps={formikProps}
        />
      )}
    </Formik>
  ))
  .add('Editable profiles (3)', () => (
    <Formik
      initialValues={{
        profiles,
        'agents-profiles': {
          agent5: true,
          agent6: true
        },
        restricted,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          id='agents-profiles'
          editable={true}
          onEditClick={action('edit click')}
          profiles={formikProps.values.profiles}
          selected={formikProps.values['agents-profiles']}
          restricted={formikProps.values.restricted}
          title='Agents'
          formikProps={formikProps}
        />
      )}
    </Formik>
  ))
  .add('Non-editable profiles (20)', () => (
    <Formik
      initialValues={{
        profiles,
        'agents-profiles': selected,
        restricted,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          id='agents-profiles'
          profiles={formikProps.values.profiles}
          selected={formikProps.values['agents-profiles']}
          restricted={formikProps.values.restricted}
          title='Agents'
          formikProps={formikProps}
        />
      )}
    </Formik>
  ))
  .add('No profiles (0)', () => (
    <Formik
      initialValues={{
        profiles,
        'agents-profiles': {},
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {formikProps => (
        <Profiles
          id='agents-profiles'
          editable={true}
          onEditClick={action('edit click')}
          profiles={formikProps.values.profiles}
          selected={formikProps.values['agents-profiles']}
          title='Agents'
          formikProps={formikProps}
        />
      )}
    </Formik>
  ));
