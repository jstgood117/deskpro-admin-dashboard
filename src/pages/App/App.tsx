import React, { SFC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import { flatMap } from 'lodash';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { logError } from '../../components/Error/ErrorBoundary';
import Sidebar from '../../components/Sidebar';
import { ISidebarSection } from '../../resources/interfaces';
import { testTranslations } from '../../resources/constants/translations/en';
import PageType from '../../components/Page/PageType';
import { QueryService } from '../../services/query';

import { SidebarContainer, AppContainer, BodyContainer } from '../AdminInterface';

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

  const onRouteRender = () => <Redirect to='/agent-teams' />;

  const renderSidebar = flatMap(
    (data.sidebar as ISidebarSection[]).map(section => section.navItems),
    sectionItem => flatMap(sectionItem, ss => ss.navItems || []).concat(sectionItem)
  )
    .filter(_section => _section.path)
    .map(_section => <Route key={_section.path} exact={true} path={_section.path} render={() => <PageType {..._section} />} />);

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
