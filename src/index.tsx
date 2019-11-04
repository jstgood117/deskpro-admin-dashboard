import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import { debug, appDebug } from './logging';
import App from './App';
import DevApiPrompt from './DevApiPrompt';
import * as serviceWorker from './serviceWorker';
import { InMemoryCache } from 'apollo-boost';

if ('production' !== process.env.NODE_ENV) {
    debug.enable('*,-sockjs-client:*');
}

const apiUrl = (window as any).DP_GRAPHQL_ENDPOINT || window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');

const AppWrap = () => {
	if (apiUrl) {
		appDebug('API URL: ' + apiUrl);
		const link = createHttpLink({ uri: apiUrl });
		const client = new ApolloClient({
			cache: new InMemoryCache(),
			link,
		});

		return (
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		);
	} else {
		return <DevApiPrompt />;
	}
}

ReactDOM.render(<AppWrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
