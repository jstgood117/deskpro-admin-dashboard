import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';
import { flatMap } from 'lodash';

// import { testInitialData } from './resources/constants';
//import Loading from './components/Loading';
//import Error from './components/Error';
import { logError } from './components/Error/ErrorBoundary';
import { QUERY_INITIAL } from './resources/graphql';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SidebarContainer, AppContainer, BodyContainer } from './components/PageLayout';
import Sidebar from './components/PageLayout/Sidebar';
import { ISidebarItem } from './resources/interfaces';
import PageType from './components/Page/PageType';

const arrayToObject = (array: Array<any>) =>
	array.reduce((obj, item) => {
		obj[item.id] = item.message;
		return obj
}, {})

const collectNavItems = (is: any): ISidebarItem[] => {
	const navItems = is.map((i: any) => i.navItems || []);
	const x = flatMap(navItems, (i: any) => (i.navItems || []).concat(i));
	console.log(x);
	return x;
};

const Debug = ({ p }: { p: any }) => {
	if (p.path === "/agents") {
		const metadataQuery = "query { page: agents_getAgentsPage { __typename, title, description, headerLinks { title, path }}}";
		return (<PageType query={metadataQuery} />);
	} else {
		return (<div>
			<textarea value={JSON.stringify(p)} style={{width: "50%", height: "500px", fontFamily: "Monospace"}} readOnly />
		</div>);
	}
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
						{collectNavItems(data.adminInterface_getAdminInterfaceData.sidebar).map((i, idx) =>
							i.path && <Route key={idx} exact path={i.path} render={() => <Debug p={i} />} />
						)}
					</Switch>
				</BodyContainer>
			</AppContainer>
			</IntlProvider>}
		</HashRouter>
	);
}

export default App;
