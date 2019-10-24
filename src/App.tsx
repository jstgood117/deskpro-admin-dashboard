import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';

// import { testInitialData } from './resources/constants';
//import Loading from './components/Loading';
//import Error from './components/Error';
import { logError } from './components/Error/ErrorBoundary';
import { QUERY_INITIAL } from './resources/graphql';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SidebarContainer, AppContainer, BodyContainer } from './pages/AdminInterface';
import Sidebar from './components/Sidebar';
import { ISidebarItem, ISidebarSection } from './resources/interfaces';
import PageType from './components/Page/PageType';

const arrayToObject = (array: Array<any>) =>
	array.reduce((obj, item) => {
		obj[item.id] = item.message;
		return obj
}, {})

const collectNavItems = (sects: ISidebarSection[]): ISidebarItem[] => {
	const all: ISidebarItem[] = [];

	sects.forEach(section => {
		if (section.navItems) {
			section.navItems.forEach(i => {
				all.push(i);
				if (i.navItems) {
					i.navItems.forEach(ii => {
						all.push(ii);
					});
				}
			});
		}
	});

	return all;
};

const App: SFC = () => {
	const locale = navigator.language;
	console.log(`locale: ${locale}`)
	const { loading, error, data } = useQuery(QUERY_INITIAL, { errorPolicy: 'all', variables: { locale: locale }});
	let translations;

	// Need to convert incoming translations from array of objects to single object
	if (data) {
		translations = arrayToObject(data.adminInterface_getTranslations);
	}

/*	// test data for now
	const loading = false;
	const error = false;
	const data = testInitialData; */

	// TODO create a default IntlProvider so that loading/error components can be used

  return (
		<HashRouter>
			{loading && <div>Loading...</div>}
			{error && <div>apolloError={error}</div>}
			{data && <IntlProvider locale={data.adminInterface_getAdminInterfaceData.user.locale} messages={translations} onError={(err) => {logError(err)}} >
			<AppContainer>
				<SidebarContainer>
					<Sidebar data={data.adminInterface_getAdminInterfaceData.sidebar} />
				</SidebarContainer>
				<BodyContainer>
					<Switch>
						{collectNavItems(data.adminInterface_getAdminInterfaceData.sidebar).map((sbObj, idx) =>
							sbObj.path && <Route key={idx} exact path={sbObj.path} render={() => <PageType {...sbObj} />} />
						)}
					</Switch>
				</BodyContainer>
			</AppContainer>
			</IntlProvider>}
		</HashRouter>
	);
}

export default App;
