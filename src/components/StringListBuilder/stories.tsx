import React from 'react';
import { storiesOf } from '@storybook/react';

import StringListBuilder from './StringListBuilder';
import { Formik } from 'formik';
import { action } from '@storybook/addon-actions';

storiesOf('String List Builder', module)
  .add('List builder uncapped', () => (
    <Formik
      initialValues={{ test: ['test'] }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {props => (
        <StringListBuilder
          addTitle='Add IP'
          id='test'
          showTitle={true}
          title='Whitelisted IPs'
          values={props.values.test}
        />
      )}
    </Formik>
  ))
  .add('List builder capped', () => (
    <Formik
      initialValues={{
        test: [
          'test 1',
          'test 2',
          'test 3',
          'test 4',
          'test 5',
          'test 6',
          'test 7'
        ]
      }}
      validate={action('validate')}
      onSubmit={action('submit')}
    >
      {props => (
        <StringListBuilder
          addTitle='Add Usergroup'
          id='test'
          max={8}
          showTitle={true}
          title='Usergroups'
          values={props.values.test}
        />
      )}
    </Formik>
  ));
