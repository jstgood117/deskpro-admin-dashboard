import React from 'react';
import { storiesOf } from '@storybook/react';

import StringListBuilder from './StringListBuilder';

storiesOf('String List Builder', module)
  .add('List builder uncapped', () => (
    <StringListBuilder
      addTitle='Add IP'
      showTitle={true}
      title='Whitelisted IPs'
      values={['test']}
    />
  ))
  .add('List builder capped', () => (
    <StringListBuilder
      addTitle='Add Usergroup'
      max={8}
      showTitle={true}
      title='Usergroups'
      values={[
        'test 1',
        'test 1',
        'test 1',
        'test 1',
        'test 1',
        'test 1',
        'test 1'
      ]}
    />
  ));
