import React, { FC } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { ITableSetup } from '../../resources/interfaces';
import { KeyValue, ColumnOrder } from '../../types';
import Table from './Table';
import Card from './Card';
import { SortType } from './types';
import { transformColumnData } from './helpers/tableFn';

interface IProps {
  view: 'table' | 'list' | 'card';
  path: string;
  dataType: 'sync' | 'async';
  fetchData: () => void;
  totalPageCount: number;
  data: KeyValue[];
  dataQuery: string;
  loading: boolean;
  tableDef: ITableSetup;
  columnOrder: ColumnOrder[];
  sortBy?: SortType[];
  onSortChange?: (sortBy: SortType[]) => void;
  groupBy?: string[];
  onGroupByChange?: (columnNames: string[]) => void;
}

const TableWrapper: FC<ITableSetup & IProps & WrappedComponentProps> = ({
  intl,
  path,
  data,
  loading,
  fetchData,
  totalPageCount,
  tableDef,
  dataType,
  columnOrder,
  onSortChange,
  sortBy,
  groupBy,
  onGroupByChange,
  view
}) => {
  return (
    <>
      {view === 'table' && (
        <Table
          path={path}
          data={data}
          columns={transformColumnData(
            [...tableDef.columns],
            columnOrder,
            intl
          )}
          fetchData={fetchData}
          loading={loading}
          pageCount={totalPageCount}
          tableType={dataType}
          onSortChange={onSortChange}
          sortBy={sortBy}
          groupBy={groupBy}
          onGroupByChange={onGroupByChange}
        />
      )}
      {view === 'card' && (
        <Card
          path={path}
          data={data}
          columns={transformColumnData(
            [...tableDef.columns],
            columnOrder,
            intl
          )}
          fetchData={fetchData}
          loading={loading}
          pageCount={totalPageCount}
          tableType={dataType}
          sortBy={sortBy}
        />
      )}
    </>
  );
};

export default injectIntl(TableWrapper);
