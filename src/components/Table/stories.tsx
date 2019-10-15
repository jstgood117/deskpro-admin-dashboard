import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';

const testCols = [
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' },
  { title: 'Phone', field: 'phone' },
  { title: 'Access', field: 'access' },
  { title: 'Team', field: 'team' },
  { title: 'Permission Group', field: 'group' },
];
const testData = [
  {"id": 75950,"name": "Louella Wallace","age": 24,"phone": "+44 (0)203 437 7302","avatar": "https://randomuser.me/api/portraits/men/49.jpg"},
  {"id": 80616,"name": "Hanson Perry","age": 36,"phone": "+44 (0)203 279 3708","color": "brown"},
  {"id": 77621,"name": "Brandi Long","age": 20,"phone": "+44 (0)203 319 4880","color": "gray"},
  {"id": 81299,"name": "Tonia Sykes","age": 38,"phone": "+44 (0)208 328 3671","color": "blue"},
  {"id": 14225,"name": "Leach Durham","age": 23,"phone": "+44 (0)208 280 9572","color": "green"}
];

storiesOf('Table',module)
	.add('with dummy data', () => (
    <Table data={testData} columns={testCols} />
	));
