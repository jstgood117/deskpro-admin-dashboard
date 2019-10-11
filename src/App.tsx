import React, { SFC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { dataSource } from './resources/constants';
import Router from './components/Router';

const client = new ApolloClient({
  uri: dataSource,
});

const App: SFC = () => (
	<ApolloProvider client={client}>
		<Router />
	</ApolloProvider>
)

export default App;
