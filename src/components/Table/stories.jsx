import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './TableSync';
import { testTableColumns, testTableData } from '../../resources/constants/constants'

storiesOf('Table',module)
	.add('with dummy data', () => (
    <Table
		data={testTableData}
        columns={testTableColumns}
        fetchData={() => false}
        pageCount={100}
    />
));
