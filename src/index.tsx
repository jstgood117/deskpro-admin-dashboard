import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import { debug, appDebug } from './logging';

import generateConfig from './config';
import { ConfigType } from './config/config';

import introspectionResult from './codegen/introspection.json';

import App from './pages/App/App';
import AppError from './components/AppError';

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';

if ('production' !== process.env.NODE_ENV) {
  debug.enable('*,-sockjs-client:*');
}

const config: ConfigType = generateConfig();
const { apiUrl } = config;

const AppWrap = () => {
  if (!apiUrl) {
    return <AppError message={'API_URL missing'} />;
  }

  appDebug('API URL: ' + apiUrl);

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult
  });

  const link = createHttpLink({ uri: apiUrl });
  const client = new ApolloClient({
    cache: new InMemoryCache({
      fragmentMatcher
    }),
    link
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<AppWrap />, document.getElementById('root'));
