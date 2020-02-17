import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import { appDebug } from './logging';

import { generateConfig } from './config';
import { ConfigType } from './config/config';

import introspectionResult from './codegen/introspection.json';

import App from './pages/App/App';
import AppError from './components/AppError';

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost';
const config: ConfigType = generateConfig();
const { apiUrl } = config;

export const AppWrap = () => {
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
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  });

  return (
    <div id='app-wrap'>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </div>
  );
};