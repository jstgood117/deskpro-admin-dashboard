import React, { SFC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';
import { appDebug } from './logging';

import { testInitialData } from './resources/constants';
import Router from './components/Router';
// import { QUERY_INITIAL } from './resources/graphql';

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');
appDebug("API URL: " + apiUrl);

const client = new ApolloClient({
	uri: apiUrl,
});

const App: SFC = () => {
/*	const { loading, error, data } = useQuery(QUERY_INITIAL);
	if (data) console.log(data.initial) */
	// test data for now
	const loading = false;
	const error = false;
	const data = testInitialData;

  return (
		<ApolloProvider client={client}>
			{loading && <p>Loading...</p>}
			{error && <p>Error, couldn't load data</p>}
			{data && <IntlProvider locale={data.initial.user.locale} messages={data.initial.translations}>
				<Router {...data.initial} />
			</IntlProvider>}
		</ApolloProvider>
	);
}

export default App;
