import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import { testTranslations } from './resources/constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale='en' messages={testTranslations}>
      <App />
    </IntlProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
