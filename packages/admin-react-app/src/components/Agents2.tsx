import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Main, Header, Table } from 'deskpro-component-library';

const dataCols = [
  { key: 'select', label: ' ', cell: function(item: any) {
    return <input type='checkbox' id={item.id}></input>  
  }},
  {key: 'name', label: 'Name'},
  {key: 'birthYear', label: 'Birth'},
];

const QUERY_PEOPLE = gql`
  {
    allPeople {
      people {
        id,
        name,
        birthYear,
      }
    }
  }
`;

const Agent2: SFC = () => {
  const { loading, error, data } = useQuery(QUERY_PEOPLE);
    
  return (
    <Main>
      <Header>
        <h1>Agents</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Header>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && <Table tableData={data.allPeople.people} columns={dataCols} />}
    </Main>
  );
}

export default Agent2;
