import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from './Badge';

storiesOf('Badge', module).add('badge', () => (
  <Badge color="#ec6c4e" backgroundColor="#f9e6e1">Badge</Badge>
));