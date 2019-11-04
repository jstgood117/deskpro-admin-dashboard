import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import Loading from './Loading';
import { testTranslations } from '../../resources/constants';

storiesOf('Loading',module)
  .add('simple', () => (
    <IntlProvider locale='en' messages={testTranslations}>
      <Loading />
    </IntlProvider>
  ));
