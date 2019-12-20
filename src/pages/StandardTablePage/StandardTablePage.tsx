import React, { FC, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';

import { IViewData, ColumnOrder, ITableColumn } from '../../resources/interfaces';
import { setupFilters } from '../../services/filters';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { addFilter } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { QueryService } from '../../services/query';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Header from '../../components/Header';
import Table from '../../components/Table/TableWrapper';
import TabBar from '../../components/TabBar';
import { dpstyle } from '../../style/styled';
import { StandardTableProvider, StandardTableContextValues } from '../../contexts/StandardTableContext';
import TableActions from '../../components/TableAction';
import { SortType } from '../../components/Table/types';

//import { getColumnUniqueValues } from './helpers';

export interface IProps {
  path: string;
}

const TableActionStyled = styled(dpstyle.div)`
  margin-top:-30px;
  margin-bottom:24px;
`;

const BodyMargin = styled(dpstyle.div)`
  margin:0 34px 34px 34px;
`;

const StandardTablePage: FC<IProps> = ({ path }) => {

  const [tabIndex, setTabState] = useState(0);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrder[]>([]);
  const [sortItems, setSortItems] = useState<SortType[]>([]);

  useEffect(() => {
    setFilters(setupFilters('*'));
  }, [path]);

  const queryService = QueryService();
  const query = queryService.getQuery('standardTablePage');

  const response = useQuery(query, { errorPolicy: 'all', variables: { path } });

  if (response.loading) {
    return <Loading />;
  }

  if (response.error) {
    return <Error apolloError={response.error} />;
  }

  const tableData = response.data;

  const {
    title,
    description,
    headerLinks,
    views,
    dataType,
    illustration
  } = (response.data as any)['standardDataPage'];
  const tableDef = views[tabIndex].tableDef;
  const filterDef = views[tabIndex].filterDef;

  const initialColumnOrder: ColumnOrder[] = tableDef.columns.map((_column: ITableColumn) => ({
    column:_column.title,
    show: true
  }));

  const processFiltersToFilterTypes = (
    internalFilters: FilterProps[]
  ): FilterType[] => {
    let serviceFilters: FilterType[] = [];
    internalFilters.forEach((internalFilter: FilterProps) => {
      const { value, property, operatorName } = internalFilter;
      if (property !== '' && operatorName !== '') {
        serviceFilters = addFilter(
          serviceFilters,
          property,
          operatorName,
          value
        );
      }
    });

    return serviceFilters;
  };

  const onFilterChange = (internalFilters: FilterProps[]) => {

    const serviceFilters = processFiltersToFilterTypes(internalFilters);
    const searchFilter = filters.find(_filter => _filter.id === '*-CONTAINS-1');

    setFilters([searchFilter, ...serviceFilters]);
  };

  const onSearchChange = (_value: string, internalFilters: FilterProps[]) => {
    const searchFilter = processFiltersToFilterTypes([{
      property: '*',
      operatorName: 'CONTAINS',
      value:_value
    }, ...internalFilters]);
    setFilters(searchFilter);
  };

  const onOrderChange = (
    _columnOrder: ColumnOrder[]
  ) => {
    setColumnOrder(_columnOrder);
  };

  const onSortChange = (
    _sortItems: SortType[]
  ) => {
    setSortItems(_sortItems);
  };

  const getUniqueValues = (columnName: string): string[] => {
    return [];//getColumnUniqueValues(tableData, columnName);
  };


  const contextValue:StandardTableContextValues = {
    path,
    filters,
    onFilterChange,
    onSearchChange,
    tableDef,
    filterDef,
    initialColumnOrder
  };

  return (
    tableData && (
      <StandardTableProvider value={contextValue}>
        <>
          {views && views[tabIndex] && (
            <Header
              title={title}
              description={description}
              links={headerLinks}
              illustration={illustration}
              defaulViewMode='table'
              showViewModeSwitcher={true}
              showNewButton={true}
              showHelpButton={true}
              onNewClick={() => null}
              onChangeView={val => {
                console.log(val);
              }}
            />
          )}
          <BodyMargin>
            <TableActionStyled>
              <TableActions
                showSearch={true}
                filterMenu={filterDef.length > 0}
                sortMenu={true}
                groupMenu={true}
                viewMenu={true}
                onOrderChange={onOrderChange}
                onSortChange={onSortChange}
                getUniqueValues={getUniqueValues}
              />
            </TableActionStyled>
            {views && views.length > 1 && (
              <TabBar
                // Backend payload phrases are missing admin_common -
                // should this be hard-coded like this?
                tabItems={views.map((view: IViewData) => {
                  return { messageId: view.title };
                })}
                handleClick={index => {
                  setTabState(index);
                }}
              />
            )}
            {views && views[tabIndex] && (
              <Table
                {...views[tabIndex]}
                path={path} // TODO: When hooked up to live db, not required
                filters={filters}
                dataType={dataType || 'sync'}
                columnOrder={columnOrder}
                sortBy={sortItems}
              />
            )}
          </BodyMargin>
        </>
      </StandardTableProvider>
    )
  );
};

export default StandardTablePage;
