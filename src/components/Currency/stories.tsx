import React from 'react';
import { storiesOf } from '@storybook/react';

import Currency from './Currency';

storiesOf('Currency', module)
  .add('currency', () => <Currency value={1000} />)
  .add('currency with label', () => <Currency currency='GBP' value={1000} />);
