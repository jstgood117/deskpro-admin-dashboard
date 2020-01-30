import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { logError } from '../../components/Error/ErrorBoundary';
import { testTranslations } from '../../resources/constants/translations/en';
import { QueryService } from '../../services/query';
import Sidebar from '../../components/Sidebar';

import { SidebarContainer, AppContainer, BodyContainer } from '../AdminInterface';

import { generatePageRoute } from './helpers/generatePageRoute';
import { generateDrawerRoute } from './helpers/generateDrawerRoute';
import { generatePageRoutes } from './helpers/generatePageRoutes';
import { generateDrawerRoutes } from './helpers/generateDrawerRoutes';

import {
  __mergeInDevI18Keys,
} from './helpers/funcs';

const App: FC = () => {

  const locale = navigator.language;

  const queryService = QueryService();
  const query = queryService.getQuery('initial');

  const { loading, error, data } = useQuery(query, { errorPolicy: 'all', variables: { locale } });
  if (loading) {
    return <p id='app-loading'>Loading</p>;
  }

  if (error) {
    return <p id='app-error'>Error</p>;
  }

  const translations = __mergeInDevI18Keys((data.translations || []), testTranslations);

  const renderMessage = (translations as any[]).reduce((obj, item) => {
    obj[item.id] = item.message;
    return obj;
  }, {});

  const onError = (err:string) => { logError(err); };

  // TODO: Remove this, should be going directly to
  const onRouteRender = () => <Redirect to='/agents' />;
  const routes = generatePageRoutes(data.sidebar || [], generatePageRoute);
  const drawerRoutes = generateDrawerRoutes(data.sidebar || [], generateDrawerRoute);

  return (
    <div id='app-container'>
      <HashRouter>
        <IntlProvider
          locale={data?.user?.locale || 'en'}
          messages={renderMessage}
          onError={onError}
        >
          <AppContainer>
            <SidebarContainer>
              <Sidebar data={data.sidebar || []} />
            </SidebarContainer>
            <BodyContainer>
              <Switch>
                <Route exact={true} path='/' render={onRouteRender} />
                {routes}
              </Switch>
              <Switch>
                {drawerRoutes}
              </Switch>
            </BodyContainer>
          </AppContainer>
        </IntlProvider>
      </HashRouter>
    </div>
  );
};

export default App;
