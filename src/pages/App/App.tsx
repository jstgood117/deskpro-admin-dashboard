import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { logError } from '../../components/Error/ErrorBoundary';
import { testTranslations } from '../../resources/constants/translations/en';
import { QueryService } from '../../services/query';
import Sidebar from '../../components/Sidebar';

import { SidebarContainer, AppContainer, BodyContainer } from '../AdminInterface';

import { generatePageRoutes, __mergeInDevI18Keys } from './helpers/funcs';

const App: FC = () => {

  const locale = navigator.language;

  const queryService = QueryService();
  const query = queryService.getQueryBasedOnRoute('/');

  const { loading, error, data } = useQuery(query, { errorPolicy: 'all', variables: { locale } });
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const translations = __mergeInDevI18Keys(data.translations, testTranslations);

  const renderMessage = (translations as any[]).reduce((obj, item) => {
    // turns [{id, msg}] array into {id: msg} map
    obj[item.id] = item.message;
    return obj;
  }, {});

  const onError = (err:string) => { logError(err); };

  // TODO: Remove this, should be going directly to
  const onRouteRender = () => <Redirect to='/agents' />;
  const routes = generatePageRoutes(data.sidebar);

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
              {routes}
            </Switch>
          </BodyContainer>
        </AppContainer>
      </IntlProvider>
    </HashRouter>
  );
};

export default App;
