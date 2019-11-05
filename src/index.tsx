import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

import { debug, appDebug } from './logging';

import generateConfig from './config';
import { ConfigType } from './config/config';

import App from './pages/App/App';
import DevApiPrompt from './DevApiPrompt';
import { InMemoryCache } from 'apollo-boost';

if ('production' !== process.env.NODE_ENV) {
    debug.enable('*,-sockjs-client:*');
}

const config: ConfigType = generateConfig();
const { apiUrl } = config;

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
};

ReactDOM.render(<AppWrap />, document.getElementById('root'));
