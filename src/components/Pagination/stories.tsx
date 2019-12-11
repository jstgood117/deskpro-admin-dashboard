import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Pagination, { IPageChange } from './Pagination';

const PaginationComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeCurrentPage = (data: IPageChange) => {
    setCurrentPage(data.currentPage);
  };

  const handleChangRowsPerPage = (data: number) => {
    setRowsPerPage(data);
    setCurrentPage(1);
  };

  return (
    <div style={{ paddingLeft: 100 }}>
      <Pagination
        totalRecords={1734}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onChangePage={handleChangeCurrentPage}
        onChangeRowsPerPage={handleChangRowsPerPage}
      />
    </div>
  );
};

storiesOf('Pagination', module).add('pagination', () => (
  <PaginationComponent />
));