import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { logError } from '../../components/Error/ErrorBoundary';
import Sidebar from '../../components/Sidebar';
import { testTranslations } from '../../resources/constants/translations/en';
import { QueryService } from '../../services/query';
import { SidebarContainer, AppContainer, BodyContainer } from '../AdminInterface';
import { generatePageRoutes } from './helpers/funcs';

interface KeyValue {
  [key: string]: string;
}

// Crudely add development translations
const __mergeInDevI18Keys = (currentTranslations:object[], _testTranslations:KeyValue) => {
  return [...Object.keys(testTranslations).map((_key: string) => {
    const message = _testTranslations.hasOwnProperty(_key) ? _testTranslations[_key.toString()] : '';
    return {id: _key, message, __typename: 'AdminTranslation'};
  }), ...currentTranslations];
};

const App: SFC = () => {

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
