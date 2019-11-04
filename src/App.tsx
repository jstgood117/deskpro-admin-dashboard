import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { flatMap } from 'lodash';

import { logError } from './components/Error/ErrorBoundary';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { SidebarContainer, AppContainer, BodyContainer } from './pages/AdminInterface';
import Sidebar from './components/Sidebar';
import { ISidebarSection } from './resources/interfaces';
import PageType from './components/Page/PageType';

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
	const { loading, error, data } = useQuery(QUERY_INITIAL, { errorPolicy: 'all', variables: { locale } });

	if (loading) {
		return <p>Loading</p>;
	}
	if (error) {
		return <p>Error</p>;
	}

	const renderMessage = (data.translations as any[]).reduce((obj, item) => {
		// turns [{id, msg}] array into {id: msg} map
		obj[item.id] = item.message;
		return obj;
	}, {});

	const onError = (err:string) => { logError(err); };

	const onRouteRender = () => <Redirect to='/agents' />;

	const renderSidebar = flatMap(
		(data.sidebar as ISidebarSection[]).map(section => section.navItems),
		sectionItem => flatMap(sectionItem, ss => ss.navItems || []).concat(sectionItem)
	)
		.filter(s => s.path)
		/* tslint:disable:jsx-no-lambda */
		.map(s => <Route key={s.path} exact={true} path={s.path} render={() => <PageType {...s} />} />);

	return (
		<HashRouter>
			<IntlProvider
				locale={data.user.locale}
				messages={renderMessage}
				onError={onError}
			>
				<AppContainer>
					<SidebarContainer>
						<Sidebar data={data.sidebar} />
					</SidebarContainer>
					<BodyContainer>
						<Switch>
							<Route exact={true} path='/' render={onRouteRender} />
							{renderSidebar}
						</Switch>
					</BodyContainer>
				</AppContainer>
			</IntlProvider>
		</HashRouter>
	);
};

export default App;
