import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import Error from './Error';
import { testTranslations } from '../../resources/constants';

const testError = {
  graphQLErrors: [
    { message: 'graphQLError happened'},
    { message: 'second graphQLError happened'},
  ]
};

storiesOf('Error',module)
	.add('dummy graphQL errors', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<Error apolloError={testError} />
		</IntlProvider>
	));
