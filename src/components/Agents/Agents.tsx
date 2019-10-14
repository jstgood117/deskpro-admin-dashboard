import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Main from '../Main';
import Header from '../Header';
import Table from '../Table';

const dataCols = [
  { title: 'Name', field: 'name', render: (rowData: any) => <div id={rowData.id}><img src={rowData.avatar} alt="ava" />{rowData.name}</div> },
  { title: 'Email', field: 'primary_email' },
];

const QUERY_PEOPLE = gql`{
  agents_getAgents {
    id
    name
    primary_email
  }
}`

const Agent: SFC = () => {
  const { loading, error, data } = useQuery(QUERY_PEOPLE);
    
  if (data) console.log(data.agents_getAgents)
  
  return (
    <Main>
      <Header>
        <h1>Agents</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Header>
      {loading && <p>Loading...</p>}
      {error && <p>Error, couldn't load data</p>}
      {data && <Table tableData={data.agents_getAgents} columns={dataCols} />}
    </Main>
  );
}

export default Agent;
