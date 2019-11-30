import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';
import {
  testTableColumns,
  testTableData
} from '../../resources/constants/constants';

storiesOf('Table', module).add('with dummy data', () => (
  <Table
    path='/agents'
    data={testTableData}
    columns={testTableColumns}
    fetchData={() => false}
    pageCount={100}
    tableType='sync'
  />
));
