import React from 'react';
import { storiesOf } from '@storybook/react';

import Relationship from './Relationship';
import { P1 } from '../Typography';

storiesOf('Relationship', module).add('relationship', () => (
  <Relationship
    backgroundColor='#F7F7F7'
    color='#8B9293'
    icon='admin'
    title='Numbers'
    renderItem={item => <P1 key={item}>{item}</P1>}
    items={[
      '+18883375776',
      '+33987679431',
      '+46101388661',
      '+552120420990',
      '+34518900655',
      '+351935556129',
      '+85258037211'
    ]}
  />
)).add('relationship with text', () => (
  <Relationship
    backgroundColor='#F7F7F7'
    color='#8B9293'
    icon='admin'
    title='Numbers'
    text='Relationship'
    renderItem={item => <P1 key={item}>{item}</P1>}
    items={[
      '+18883375776',
      '+33987679431',
      '+46101388661',
      '+552120420990',
      '+34518900655',
      '+351935556129',
      '+85258037211'
    ]}
  />
));