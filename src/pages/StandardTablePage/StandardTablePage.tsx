import React, { FC, useState, useEffect, useCallback } from 'react';
import { useQuery, withApollo } from 'react-apollo';
import { gql, ApolloClient, ApolloError } from 'apollo-boost';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { KeyValue, ColumnOrder } from '../../types';
import { IViewData, ITableColumn } from '../../resources/interfaces';
import { setupFilters } from '../../services/filters';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { runFilters } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { QueryService } from '../../services/query';
import { logError } from '../../components/Error/ErrorBoundary';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Header from '../../components/Header';
import TableWrapper from '../../components/Table/TableWrapper';
import TabBar from '../../components/TabBar';
import { dpstyle } from '../../style/styled';
import {
  StandardTableProvider,
  StandardTableContextValues
} from '../../contexts/StandardTableContext';
import TableActions from '../../components/TableAction';
import { SortType } from '../../components/Table/types';

import { ResponseData } from './types';

import { getColumnUniqueValues } from './helpers/getColumnUniqueValues';
import { treeify } from './helpers/treeify';
import { processFiltersToFilterTypes } from './helpers/processFiltersToFilterTypes';

export interface IProps {
  path: string;
  paths: string[];
  client: ApolloClient<any>;
}

export  type ViewDataType = {
  view: any;
  index: number;
};

type CombinedProps = IProps & RouteComponentProps<any>;

const TableActionStyled = styled(dpstyle.div)`
  margin-top:-30px;
  margin-bottom:24px;
`;

const BodyMargin = styled(dpstyle.div)`
  margin:0 34px 34px 34px;
`;

const StandardTablePage: FC<CombinedProps> = ({
  path,
  paths,
  client,
  history
}) => {

  const [gqlError, setGqlError] = useState<boolean>(false);
  const [tabIndex, setTabState] = useState<number>(0);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrder[]>([]);
  const [sortItems, setSortItems] = useState<SortType[]>([]);
  const [pageResponse, setPageResponse] = useState<any>();
  const [tableData, setTableData] = useState<KeyValue[]>();
  const [filteredData, setFilteredData] = useState<KeyValue[]>([]);
  const [totalPageCount, setTotalPageCount] = useState<number>(1);
  const [view, setView] = useState<'table' | 'list' | 'card'>('table');
  const [currentView, setCurrentView] = useState<any>();
  const [pageSize] = useState<number>(10);

  const queryService = QueryService();
  const query = queryService.getQuery('standardTablePage');

  // If paths is array, assumes first
  // path at index 0 is primary path
  const primaryPath = Array.isArray(paths) ? paths[0] : path;

  const getCurrentView = (_views: any, _path: string) => {

    const results = {
      view: undefined,
      index: undefined
    } as ViewDataType;

    _views.forEach((_view: any, index: number) => {
      // If path matches current path OR if path is
      // null, assume 1 view in _views and set it to
      // the return value.
      if(_view.path === _path || _view.path === null) {
        results.view = _view;
        results.index = index;
      }
    });

    return results;
  };

  useQuery(query, { errorPolicy: 'all', variables: { path: primaryPath },
    onCompleted: (_response: ResponseData) => {

      setPageResponse(_response);
      // If the response isn't formatted in a way that
      // expected, just return
      if(!_response || !_response.hasOwnProperty('standardDataPage')) {
        return false;
      }

      const viewData: ViewDataType = getCurrentView(_response['standardDataPage'].views, primaryPath);

      setCurrentView(viewData.view);
      setTabState(viewData.index);
    },
    onError: (error: ApolloError) => {
      setGqlError(true);
    }
  });

  const getTableData = useCallback(async (_response: ResponseData) => {

    if(!currentView || !currentView.dataQuery) {
      return undefined;
    }

    const unchangedDataQuery = currentView.dataQuery;

    // FIX: removes ticket_department from gql
    const dataQuery = unchangedDataQuery.replace('ticket_departments', 'departments');

    try {

      const dataResponse = await client.query({
        query: gql`${dataQuery}`,
        errorPolicy: 'all'
      });

      const { results }: { results: KeyValue[]} = dataResponse.data;
      const treedResults = treeify(results);
      setTableData(treedResults);
      setFilteredData(treedResults);
      setTotalPageCount(Math.ceil(results.length / pageSize));

    } catch(err) {
      console.debug('sError for query: ' + dataQuery);
      console.error(err);
      logError(err);
    }
  }, [client, pageSize, currentView]);

  useEffect(() => {
    setFilters(setupFilters('*'));
  }, [path]);

  const fetchData = useCallback(() => {

    if (pageResponse) {
      getTableData(pageResponse);
    }
  }, [pageResponse, getTableData]);

  useEffect(() => {

    if (pageResponse) {
      getTableData(pageResponse);
    }

  }, [pageResponse, getTableData]);

  useEffect(() => {
    if(tableData) {
      setFilteredData(runFilters(tableData, filters));
    }
  }, [filters, tableData]);

  if (!tableData || !currentView || !pageResponse) {
    return <Loading />;
  }

  if (gqlError) {
    return <Error />;
  }

  const {
    title,
    description,
    headerLinks,
    views,
    dataType,
    illustration
  } = (pageResponse as any)['standardDataPage'];

  const tableDef = currentView.tableDef;
  const filterDef = currentView.filterDef;

  const initialColumnOrder: ColumnOrder[] = tableDef.columns.map((_column: ITableColumn) => ({
    column:_column.title,
    show: true
  }));

  const onFilterChange = (internalFilters: FilterProps[]) => {

    const serviceFilters = processFiltersToFilterTypes(internalFilters);
    const searchFilter = filters.find(_filter => _filter.id === '*-CONTAINS-1');

    setFilters([searchFilter, ...serviceFilters]);
  };

  const onSearchChange = (_value: string, internalFilters: FilterProps[]) => {
    const searchFilter = processFiltersToFilterTypes([{
      property: '*',
      operatorName: 'CONTAINS',
      value:[_value]
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
    return getColumnUniqueValues(tableData, columnName);
  };

  const onNewClick = (_primaryPath: string) => {

    history.push(`${_primaryPath}/new`);

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
          {views && currentView && (
            <Header
              title={title}
              description={description}
              links={headerLinks}
              illustration={illustration}
              defaulViewMode={view}
              showViewModeSwitcher={true}
              showNewButton={true}
              showHelpButton={true}
              onNewClick={() => onNewClick(primaryPath)}
              onChangeView={val => setView(val)}
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
                sortBy={sortItems}
                getUniqueValues={getUniqueValues}
              />
            </TableActionStyled>
            {views && views.length > 1 && (
              <TabBar
                focusedIndex={tabIndex}
                tabItems={views.map((_view: IViewData) => {
                  return { messageId: _view.title };
                })}
                handleClick={index => {
                  const _view = views[index];
                  setCurrentView(_view);
                  history.push(`${_view.path}`);
                }}
              />
            )}
            {views && currentView && (
              <TableWrapper
                {...currentView}
                view={view}
                path={path}
                data={filteredData}
                fetchData={fetchData}
                totalPageCount={totalPageCount}
                dataType={dataType || 'sync'}
                columnOrder={columnOrder}
                sortBy={sortItems}
                onSortChange={onSortChange}
              />
            )}
          </BodyMargin>
        </>
      </StandardTableProvider>
    )
  );
};

const WithRouter = withRouter(StandardTablePage);
export default withApollo<IProps>(WithRouter);
