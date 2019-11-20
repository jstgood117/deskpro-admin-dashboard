import React from 'react';
import { storiesOf } from '@storybook/react';
import TableActions from './TableActions';

const handleSearch = () => false;

storiesOf('Table Action', module).add('Default', () => {
  return (
    <div style={{padding:10, position:'relative'}}>
      <TableActions
        showSearch={true}
        onSearchChange={handleSearch}
        filterMenu={true}
        sortMenu={true}
        groupMenu={true}
        viewMenu={true}
      />
    </div>
  );
});
