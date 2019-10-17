import React, { SFC, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';

// import { testInitialData } from './resources/constants';
import Router from './components/Router';
//import Loading from './components/Loading';
//import Error from './components/Error';
import { logError } from './components/Error/ErrorBoundary';
import { QUERY_INITIAL } from './resources/graphql';

const arrayToObject = (array: Array<any>) =>
	array.reduce((obj, item) => {
		obj[item.id] = item.message;
		return obj
}, {})

const App: SFC = () => {
	const locale = navigator.language;
	console.log(`locale: ${locale}`)
	const { loading, error, data } = useQuery(QUERY_INITIAL, { errorPolicy: 'all', variables: { locale: locale }});
	let translations;

	// Need to convert incoming translations from array of objects to single object
	if (data) translations = arrayToObject(data.adminInterface_getTranslations);
	 
/*	// test data for now
	const loading = false;
	const error = false;
	const data = testInitialData; */

	// TODO create a default IntlProvider so that loading/error components can be used
	
  return (
		<Fragment>
			{loading && <div>Loading...</div>}
			{error && <div>apolloError={error}</div>}
			{data && <IntlProvider locale={data.adminInterface_getAdminInterfaceData.user.locale} messages={translations} onError={(err) => {logError(err)}} >
				<Router {...data.adminInterface_getAdminInterfaceData} />
			</IntlProvider>}
		</Fragment>
	);
}

export default App;
