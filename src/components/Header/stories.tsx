import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import { testTranslations } from '../../resources/constants';
import Icon from '../Icon';

storiesOf('Header', module).add('with text', () => (
  <IntlProvider locale="en" messages={testTranslations}>
    <Header
      illustration={<Icon name='illustration' />}
      title="admin_agents.agents.title"
      description="admin_agents.agents.description"
      defaulViewMode="table"
      showViewModeSwitcher={true}
      showNewButton={true}
      showHelpButton={true}
      links={[
        {
          title: 'LoginLog',
          icon: 'loginLog',
          path: '/login'
        },
        {
          title: 'Settings',
          icon: 'settings',
          path: '/settings'
        }
      ]}
      onChangeView={action('clicked onChangeView')}
      onNewClick={action('clicked onNewClick')}
    ></Header>
  </IntlProvider>
));