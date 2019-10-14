import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { testPageData } from '../../resources/constants';

import Main from '../Main';
import Header from '../Header';
import Table from '../Table';
import Grid from '../Grid';
import Sidebar from '../Sidebar';

const QUERY_PEOPLE = gql`{
  agents_getAgents {
    id
    name
    primary_email
  }
}`

export interface IProps {
  location: {
    pathname: string
  }
}

const Agent: SFC<IProps> = ({location}) => {
  const { loading, error, data } = useQuery(QUERY_PEOPLE);
    
  if (data) console.log(data.agents_getAgents)
  
  return (
    <Grid>
      <Sidebar path={location.pathname} data={testPageData.sidebarData} />
      <Main>
        <Header>
          <h1>Agents</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Header>
        {loading && <p>Loading...</p>}
        {error && <p>Error, couldn't load data</p>}
        {data && <Table tableData={data.agents_getAgents} columns={testPageData.tableData.columns} />}
      </Main>
    </Grid>
  );
}

export default Agent;
