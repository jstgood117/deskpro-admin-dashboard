import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table';
import { testTableColumns, testTableData } from '../../resources/constants'

storiesOf('Table',module)
	.add('with dummy data', () => (
    <Table
				data={testTableData}
        columns={testTableColumns}
        fetchData={() => {}}
        pageCount={100}
    />
	));
