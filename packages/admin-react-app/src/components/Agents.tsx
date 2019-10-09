import React, { Component } from 'react';

import { Main, Header, Text, Table } from 'deskpro-component-library';

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
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then((res) => {
        this.setState({ results: res.results });
      });
  }

  render() {
    console.log(this.state.results);
    return (
      <Main>
        <Header>
          <Text styleType='h1'>Agents</Text>
          <Text styleType='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
        </Header>
        <Table data={this.state.results} />
      </Main>
    );
  }
}

export default AgentPage;
