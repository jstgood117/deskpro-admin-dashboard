import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tab from './Tab';
import AdditonalTab from '../MoreTab';

const TabItems = [
  { label: 'Property1' },
  { label: 'Property2' },
  { label: 'Property3' }
];

storiesOf('Tab', module)
  .add('Tab_Default', () => (
    <Tab label='Property' onClick={action('clicked')} index={0} value={1} />
  ))
  .add('Tab_Active', () => (
    <Tab label='Property' onClick={action('clicked')} index={0} value={0} />
  ))
  .add('More_Tab', () => (
    <div style={{height:34}}>
      <AdditonalTab label='More' tabItems={TabItems}/>
    </div>
  ));
