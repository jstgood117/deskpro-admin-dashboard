import React, { SFC, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

import { IViewData } from '../../resources/interfaces';
import { setupFilters } from '../../services/filters';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import { addFilter } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Table from '../Table/TableWrapper';
import TabBar from '../TabBar';
import styled from 'styled-components';
import { dpstyle } from '../../style/styled';
import { StandardTableProvider, StandardTablePageContextValuesType } from '../../contexts/StandardTableContext';
// test data
import testColumnData2 from '../../resources/constants/mock/testTableColumns2';

export interface IProps {
  path: string;
  query: DocumentNode;
  queryName: string;
}

const BodyMargin = styled(dpstyle.div)`
  margin: 34px;
  padding-top: 40px;
`;

const StandardTablePage: SFC<IProps> = ({ query, queryName }) => {
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
    internalFilters: IFilterProps[]
  ): FilterType[] => {
    let serviceFilters: FilterType[] = [];
    internalFilters.forEach((internalFilter: IFilterProps) => {
      const { value, columnName, operatorName } = internalFilter;
      if (columnName !== '' && operatorName !== '') {
        serviceFilters = addFilter(
          serviceFilters,
          columnName,
          operatorName,
          value
        );
      }
    });

    return serviceFilters;
  };

  const onFilterChange = (internalFilters: IFilterProps[]) => {
    const serviceFilters = processFiltersToFilterTypes(internalFilters);
    const searchFilter = filters.find(_filter => _filter.id === '*-CONTAINS-1');
    setFilters([searchFilter, ...serviceFilters]);
  };

  const onSearchChange = (_value: string) => {
    if (onFilterChange) {
      onFilterChange([
        {
          columnName: '*',
          operatorName: 'CONTAINS',
          value:_value
        }
      ]);
    }
  };

  const {
    title,
    description,
    headerLinks,
    views,
    dataType,
    illustration
  } = (testColumnData2 as any)[queryName.toString()];

  const contextValue:StandardTablePageContextValuesType = {
    filters,
    onFilterChange,
    onSearchChange,
    tableDef:views[tabIndex].tableDef
  };

  return (
    testColumnData2 && (
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
              tableActions={true}
              onChangeView={val => {
                console.log(val);
              }}
            />
          )}
          <BodyMargin>
            {views && views.length > 1 && (
              <TabBar
                // Backend payload phrases are missing admin_common - should this be hard-coded like this?
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
