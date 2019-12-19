import React from 'react';
import { storiesOf } from '@storybook/react';
import TableActions from './TableActions';
import { ColumnOrder } from '../../resources/interfaces';
import { SortType } from '../Table/types';
storiesOf('Table Action', module).add('Default', () => {
  const onOrderChange = (order: ColumnOrder[]) => {
    order.sort();
    return;
  };

  const onSortChange = (sortItem: SortType[]) => {
    return;
  };

  return (
    <div style={{ padding: 10, position: 'relative' }}>
      <TableActions
        showSearch={true}
        filterMenu={true}
        sortMenu={true}
        groupMenu={true}
        viewMenu={true}
        onOrderChange={onOrderChange}
        onSortChange={onSortChange}
      />
    </div>
  );
});
