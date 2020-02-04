import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColumnOrder } from '../../types';
import { SortType } from '../Table/types';
import TableActions from './TableActions';

storiesOf('Table Action', module).add('Default', () => {
  const onOrderChange = (order: ColumnOrder[]) => {
    order.sort();
    return;
  };

  const onSortChange = (sortItem: SortType[]) => {
    return;
  };

  const onGroupByChange = () => {
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
        onGroupByChange={onGroupByChange}
      />
    </div>
  );
});
