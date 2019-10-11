import React, { Component } from 'react';

import { Main, Header, Table } from 'deskpro-component-library';

const dataCols = [
  { key: 'select', label: ' ', cell: function(item: any) {
    return <input type='checkbox' id={item.id}></input>
  }},
  { key: 'name', label: 'Name', cell: function(item: any) {
    return <div id={item.name.first}><img src={item.picture.thumbnail} alt="ava" />{item.name.first} {item.name.last}</div>
  }},
  {key: 'email', label: 'Email'},
  {key: 'phone', label: 'Phone'},
];

interface IProps {}
interface IState {
  results: []
}

class AgentPage extends Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
      .then(res => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({ results: res.results });
      });
  }

  render() {
    return (
      <Main>
        <Header>
          <h1>Agents</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Header>
        <Table tableData={this.state.results} columns={dataCols} />
      </Main>
    );
  }
}

export default AgentPage;
