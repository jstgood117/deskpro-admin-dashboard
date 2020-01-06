import React from 'react';
import {
  createIntlCache,
  createIntl,
  RawIntlProvider
} from 'react-intl';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'en',
  messages: {},
  onError: () => {}
}, cache);

export const MockIntlProvider = (props: any) => {

  return (
    <RawIntlProvider value={intl}>
      {props.children}
    </RawIntlProvider>
  );
};

export default MockIntlProvider;