import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';
import ListItem from './ListItem';

const ipList = [
  '217.138.85.2122',
  '217.138.85.2123',
  '217.138.85.2124',
  '217.138.85.2125'
];
storiesOf('List', module)
  .add('List Item', () => <ListItem content='217.138.85.2122' type='IP' />)
  .add('IP List', () => <List list={ipList} type='IP' />)
  .add('Group List', () => <List list={ipList} type='Group' />);
