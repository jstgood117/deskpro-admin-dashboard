import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';

storiesOf('Header', module).add('with text', () => (
  <Header
    illustration='agents-header'
    title='admin_agents.agents.title'
    description='admin_agents.agents.description'
    defaulViewMode='table'
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
  />
));
