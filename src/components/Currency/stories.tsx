import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import Currency from './Currency';
import { testTranslations } from '../../resources/constants';

const Container: React.SFC = props => (
  <IntlProvider locale="en" messages={testTranslations}>
    {props.children}
  </IntlProvider>
);

storiesOf('Currency', module)
  .add('currency', () => (
    <Container>
      <Currency value={1000} />
    </Container>
  ))
  .add('currency with label', () => (
    <Container>
      <Currency currency="GBP" value={1000} />
    </Container>
  ));