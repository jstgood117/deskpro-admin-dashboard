import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';

import TableActions from './TableActions';
import { testTranslations } from '../../resources/constants/constants';

const handleSearch = () => false;

storiesOf('Table Action', module).add('Default', () => {
  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <div style={{ padding: 10, position: 'relative' }}>
        <TableActions
          showSearch={true}
          onSearchChange={handleSearch}
          filterMenu={true}
          sortMenu={true}
          groupMenu={true}
          viewMenu={true}
          tableDef={{
            columns: []
          }}
        />
      </div>
    </IntlProvider>
  );
});
