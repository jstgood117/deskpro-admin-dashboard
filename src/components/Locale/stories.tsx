import React from 'react';
import { storiesOf } from '@storybook/react';

import Locale from './Locale';

storiesOf('Locale', module).add('locale', () => <Locale code="GB" />);