import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from './Error';

const testError = {
  graphQLErrors: [
    { message: 'graphQLError happened' },
    { message: 'second graphQLError happened' }
  ]
};

storiesOf('Error', module).add('dummy graphQL errors', () => (
  <Error apolloError={testError} />
));
