import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import StringListBuilder from './StringListBuilder';

const options = [
  'Extra Privileged',
  'General Users',
  'Registered',
  'VIP',
  'Usergroup 5',
  'Usergroup 6',
  'Usergroup 7',
  'Usergroup 8',
];

const selectedOptions = [
  'Extra Privileged',
  'General Users',
  'Registered',
  'VIP',
];

storiesOf('String List Builder New', module)
  .add('List builder usergroups', () => (
    <Formik
      initialValues={{
        options,
        selectedOptions,
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {props => (
        <StringListBuilder
          id='selectedOptions'
          title='Usergroups'
          buttonTitle='Add Usergroup'
          options={props.values.options}
          selectedOptions={props.values['selectedOptions']}
          tooltip='All usergroups have been added.'
          formikProps={props}
        />
      )}
    </Formik>
  ));
