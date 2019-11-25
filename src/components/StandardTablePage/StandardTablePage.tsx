import React, { SFC, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

import { IViewData } from '../../resources/interfaces';
import { setupFilters } from '../../services/filters';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { addFilter } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Table from '../Table/TableWrapper';
import TabBar from '../TabBar';
import styled from 'styled-components';
import { dpstyle } from '../../style/styled';
import { StandardTableProvider, StandardTableContextValues } from '../../contexts/StandardTableContext';
import TableActions from '../TableAction';
// test data
import testColumnData2 from '../../resources/constants/mock/testTableColumns2';
import testColumnData3 from '../../resources/constants/mock/testTableColumns3';
import testColumnData4 from '../../resources/constants/mock/testTableColumns4';

export interface IProps {
  path: string;
  query: DocumentNode;
  queryName: string;
}

const TableActionStyled = styled(dpstyle.div)`
  margin-top:-30px;
  margin-bottom:24px;
`;

const BodyMargin = styled(dpstyle.div)`
  margin:0 34px 34px 34px;
`;

const StandardTablePage: SFC<IProps> = ({ path, query, queryName }) => {

  const [tabIndex, setTabState] = useState(0);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const { loading, error } = useQuery(query, { errorPolicy: 'all' });

  useEffect(() => {
    setFilters(setupFilters('*'));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error apolloError={error} />;
  }

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

  const onSearchChange = (_value: string) => {
    if (onFilterChange) {
      onFilterChange([
        {
          property: '*',
          operatorName: 'CONTAINS',
          value:_value
        }
      ]);
    }
  };
console.log(path);
  /// TODO: Remove & link to table data
  let tableData: any = [];
  if(path === '/agents') {
    tableData = testColumnData2;
  } else if(path === '/agents/teams') {
    tableData = testColumnData3;
  } else if(path === '/agents/groups') {
    tableData = testColumnData4;
  }

  const {
    title,
    description,
    headerLinks,
    views,
    dataType,
    illustration
  } = (tableData as any)[queryName.toString()];

  const contextValue:StandardTableContextValues = {
    filters,
    onFilterChange,
    onSearchChange,
    tableDef:views[tabIndex].tableDef,
    filterDef:views[tabIndex].filterDef
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
                filterMenu={true}
                sortMenu={true}
                groupMenu={true}
                viewMenu={true}
              />
            </TableActionStyled>
            {views && views.length > 1 && (
              <TabBar
                // Backend payload phrases are missing admin_common -
                // should this be hard-coded like this?
                tabItems={views.map((view: IViewData) => {
                  return { messageId: `admin_common.${view.title}` };
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
                dataType={dataType}
              />
            )}
          </BodyMargin>
        </>
      </StandardTableProvider>
    )
  );
};

export default StandardTablePage;
