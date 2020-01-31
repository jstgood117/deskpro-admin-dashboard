import React from 'react';
import { storiesOf } from '@storybook/react';

import HelpDesk from './HelpDesk';

storiesOf('HelpDesk', module).add('default', () => (
  <HelpDesk title='a' description='b'/>
));
