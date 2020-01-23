import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorSwatch from './ColorSwatch';

storiesOf('Color Swatch', module).add('default', () => (
  <ColorSwatch color={'#DF5E9C'}>Magenta</ColorSwatch>
));
