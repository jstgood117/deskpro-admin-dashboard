import React, { SFC, Fragment, useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

import { IViewData } from '../../resources/interfaces';
import { setupFilters, updateFilter } from '../../services/filters';
import { FilterType } from '../../services/filters/types';

import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Table from '../Table/TableWrapper';
import TabBar from '../TabBar';
import Icon from '../Icon';
import styled from 'styled-components';
import { dpstyle } from '../../style/styled';

export interface IProps {
  query: DocumentNode;
  queryName: string;
}

const BodyMargin = styled(dpstyle.div)`
  margin: 34px;
`;

const StandardTablePage: SFC<IProps> = ({query, queryName}) => {
  const [tabIndex, setTabState] = useState(0);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const { loading, error, data } = useQuery(query, { errorPolicy: 'all' });

  useEffect(() => {
    setFilters(setupFilters('*'));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error apolloError={error} />;
  }

  const onFilterChange = (id:string, operatorName: string, compareValue:string) => {

    console.log(compareValue);

    setFilters(updateFilter(filters, id, operatorName, compareValue));
  };

  if (data && data[queryName]) {
    const {title, description, headerLinks, views} = data[queryName];
    return (
      <Fragment>
        <Header
          title={title}
          description={description}
          links={headerLinks}
          illustration={<Icon name='illustration' />}
          defaulViewMode='table'
          showViewModeSwitcher={true}
          showNewButton={true}
          showHelpButton={true}
          onNewClick={() => null}
          tableActions={true}
          filters={filters}
          onFilterChange={onFilterChange}
        />
        <BodyMargin>
          {views && views.length > 1 && (
            <TabBar
              // Backend payload phrases are missing admin_common - should this be hard-coded like this?
              tabItems={views.map((view: IViewData) => { return { messageId: `admin_common.${view.title}` };} )}
              handleClick={index => { setTabState(index); }}
            />
          )}
          {views && views[tabIndex] && <Table {...views[tabIndex]} filters={filters} />}
        </BodyMargin>
      </Fragment>
    );
  }
  return null;
};

export default StandardTablePage;