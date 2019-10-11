import React, { SFC } from 'react';
import { Grid } from 'deskpro-component-library';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Sidebar from "./components/Sidebar";
import Router from "./components/Router";

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');
console.log("API URL: " + apiUrl);

const client = new ApolloClient({
  uri: apiUrl,
});

const App: SFC = () => (
	<ApolloProvider client={client}>
		<Grid>
			<Sidebar />
			<Router />
		</Grid>
	</ApolloProvider>
)

export default App;
