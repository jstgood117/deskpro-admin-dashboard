import React from 'react';
import { storiesOf } from '@storybook/react';

import Navigation from './Navigation';
import { testNavData } from '../../resources/constants';

storiesOf('Navigation', module).add('Navigation with dummy data', () => (
  <div style={{height: '95vh', border: 'solid 2px #000', position: 'relative'}}>
    <Navigation itemList={testNavData} />
  </div>
));
