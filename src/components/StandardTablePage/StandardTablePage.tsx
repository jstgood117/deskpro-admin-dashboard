import React, { SFC, Fragment, useState } from 'react';
import { useQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

import { IViewData } from '../../resources/interfaces';

import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Table from '../Table/TableWrapper';
import TabBar from '../TabBar';
import SearchBox from '../SearchBox';

export interface IProps {
  query: DocumentNode,
  queryName: string,
}

const StandardTablePage: SFC<IProps> = ({query, queryName}) => {
  const [tabIndex, setTabState] = useState(0);
  const [searchText, setSearchState] = useState('');
  const { loading, error, data } = useQuery(query, { errorPolicy: 'all' });
  // test data for now
//  const loading = false;
//  const error = false;
//  const data = testPageData;

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error apolloError={error} />
  }
  if (data && data[queryName]) {
    console.log('Standard table page data loaded:');
    console.log(data[queryName])

    const {title, description, headerLinks, views} = data[queryName];
    return (
      <Fragment>
        <Header title={title} description={description} links={headerLinks} />
        {views && <SearchBox placeholder="Search for agents" handleSearch={(e) => { setSearchState(e.target.value) }} />}
        {views && views.length > 1 &&
          <TabBar
			      // Backend payload phrases are missing admin_common - should this be hard-coded like this?
            tabItems={views.map((view: IViewData) => { return { label: `admin_common.${view.title}` }} )}
            handleClick={ index => { setTabState(index) }} 
          />
        }
        {views && views[tabIndex] && <Table {...views[tabIndex]} search={searchText} />}
      </Fragment>
    );    
  }
  return null;
}

export default StandardTablePage;
