import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Sort } from './Sort';
import { ISortItem } from '../../resources/interfaces';
import { Table, TableHead, TableRow, TableCell } from '../TableDesign';

const SortItems = [
  {
    label: 'Name',
    field: 'name',
    sort: 'asc' as const
  },
  {
    label: 'Email',
    field: 'email',
    sort: 'asc' as const
  },
  {
    label: 'Permission groups',
    field: 'permission_groups',
    sort: 'asc' as const
  },
  {
    label: 'Departments',
    field: 'epartments',
    sort: 'asc' as const
  },
  {
    label: 'Access',
    field: 'access',
    sort: 'asc' as const
  }
];

const SortMenuComponent: React.FC = () => {
  const [sort, setSort] = useState<ISortItem>(null);
  const onSelectSort = (data: ISortItem) => setSort(data);

  return (
    <Sort items={SortItems} sortSelected={sort} onSelectSort={onSelectSort} />
  );
};

const SortHeaderComponent: React.FC = () => {
  const [sort, setSort] = useState<ISortItem>(null);
  const onSelectSort = (data: ISortItem) => setSort(data);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {SortItems.map(item => (
            <TableCell
              key={item.field}
              container='head'
              sortProps={{
                sortItem: item,
                sortSelected: sort,
                onSelectSort
              }}
            />
          ))}
        </TableRow>
      </TableHead>
    </Table>
  );
};

storiesOf('Sort', module)
  .add('sort menu', () => <SortMenuComponent />)
  .add('sort header', () => <SortHeaderComponent />);