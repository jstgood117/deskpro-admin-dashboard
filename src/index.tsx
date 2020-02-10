import React from 'react';
import ReactDOM from 'react-dom';
import{ AppWrap } from './AppWrap';
import { debug } from './logging';
if ('production' !== process.env.NODE_ENV) {
  debug.enable('*,-sockjs-client:*');
}

ReactDOM.render(<AppWrap />, document.getElementById('app-root'));