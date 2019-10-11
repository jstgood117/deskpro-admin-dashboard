import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DevApiPrompt from './DevApiPrompt';
import * as serviceWorker from './serviceWorker';

const apiUrl = window.sessionStorage.getItem('DESKPRO_ADMIN_API_URL');

const AppWrap = () => {
	if (apiUrl) {
		return <App />;
	} else {
		return <DevApiPrompt />;
	}
}

ReactDOM.render(<AppWrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
