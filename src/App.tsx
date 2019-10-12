import React, { SFC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//import { dataSource } from './resources/constants';
import Router from './components/Router';

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');
console.log("API URL: " + apiUrl);

const client = new ApolloClient({
//  uri: dataSource,
uri: apiUrl,
});


const App: SFC = () => (
	<ApolloProvider client={client}>
		<Router />
	</ApolloProvider>
)

export default App;
