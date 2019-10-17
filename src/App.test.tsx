import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from '@apollo/react-testing';

import App from './App';
import { testInitialData } from './resources/constants';
import { QUERY_INITIAL } from './resources/graphql';

const mocks = [
  {
    request: {
      query: QUERY_INITIAL,
      variables: {
        locale: "en",
      },
    },
    result: {
      data: testInitialData,
    }
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
