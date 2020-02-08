import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import ProgressBar from './ProgressBar';

const percentage = 10;


storiesOf('ProgressBar', module).addDecorator(withKnobs).add('default', () => (
  <ProgressBar percentage={number('percentage', percentage)}/>
));
