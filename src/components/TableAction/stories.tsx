import React from 'react';
import { storiesOf } from '@storybook/react';
import TableActions from './TableActions';

const handleSearch = () => {};

storiesOf('Table Action', module).add('Default', () => {
  return (
    <TableActions
      showSearch={true}
      onSearchChange={handleSearch}
      filterMenu={true}
      sortMenu={true}
      groupMenu={true}
      viewMenu={true}
    />
  );
});
