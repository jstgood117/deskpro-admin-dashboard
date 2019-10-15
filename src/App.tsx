import React, { SFC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';

import { testInitialData } from './resources/constants';
import Router from './components/Router';
import Loading from './components/Loading';
import Error from './components/Error';
import { logError } from './components/Error/ErrorBoundary';
// import { QUERY_INITIAL } from './resources/graphql';

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');
console.log("API URL: " + apiUrl);

const client = new ApolloClient({
	uri: apiUrl,
});

const App: SFC = () => {
/*	const { loading, error, data } = useQuery(QUERY_INITIAL, { errorPolicy: 'all' });
	if (data) console.log(data.initial) */
	// test data for now
	const loading = false;
	const error = false;
	const data = testInitialData;

  return (
		<ApolloProvider client={client}>
			{loading && <Loading />}
			{error && <Error apolloError={error} />}
			{data && <IntlProvider locale={data.initial.user.locale} messages={data.initial.translations} onError={(err) => {logError(err)}} >
				<Router {...data.initial} />
			</IntlProvider>}
		</ApolloProvider>
	);
}

export default App;
