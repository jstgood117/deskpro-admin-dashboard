import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {IntlProvider} from 'react-intl';

// import { testInitialData } from './resources/constants';
//import Loading from './components/Loading';
//import Error from './components/Error';
import { logError } from './components/Error/ErrorBoundary';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
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

export const QUERY_INITIAL = gql`
  query  {
    translations: adminInterface_getTranslations(locale: "en") {
      id
      message
    }

	user: adminInterface_getAdminUser {
		locale
	}

	sidebar: adminInterface_getAdminSidebar {
		sectionName
        icon
        navItems {
          itemName
          path
          pageType
          metadataQuery
          navItems {
            itemName
            path
            pageType
            metadataQuery
          }
        }
	}
  }
`;

const App: SFC = () => {
	const locale = navigator.language;
	console.log(`locale: ${locale}`)
	const { loading, error, data } = useQuery(QUERY_INITIAL, { errorPolicy: 'all', variables: { locale: locale }});
	let translations;

	// Need to convert incoming translations from array of objects to single object
	if (data) {
		translations = arrayToObject(data.translations);
	}

  return (
		<HashRouter>
			{loading && <div>Loading...</div>}
			{error && <div>apolloError={error}</div>}
			{data && <IntlProvider locale={data.user.locale} messages={translations} onError={(err) => {logError(err)}} >
			<AppContainer>
				<SidebarContainer>
					<Sidebar data={data.sidebar} />
				</SidebarContainer>
				<BodyContainer>
					<Switch>
						{collectNavItems(data.sidebar).map((sbObj, idx) =>
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
