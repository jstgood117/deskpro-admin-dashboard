import React from 'react';
import { storiesOf } from '@storybook/react';
import TableActions from './TableActions';
import { IntlProvider } from 'react-intl';
import { testTranslations } from '../../resources/constants/constants';

storiesOf('Table Action', module).add('Default', () => {
  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <div style={{ padding: 10, position: 'relative' }}>
        <TableActions
          showSearch={true}
          filterMenu={true}
          sortMenu={true}
          groupMenu={true}
          viewMenu={true}
        />
      </div>
    </IntlProvider>
  );
});
