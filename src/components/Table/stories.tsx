import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

import generateConfig, { ConfigType } from '../../config/config';
import testColumnData2 from '../../resources/constants/mock/testTableColumns2';
import Table from './TableWrapper';
import { testTranslations } from '../../resources/constants/constants';
import { FilterType } from '../../services/filters/types';
import {
  StandardTableProvider,
  StandardTableContextValues
} from '../../contexts/StandardTableContext';

const tableData = testColumnData2;
const { views } = (tableData as any)['agents_getAgentsPage'];
const columnOrder = [
  { column: 'agents.col.name', show: true },
  { column: 'agents.col.email', show: true },
  { column: 'agents.col.phone', show: true },
  { column: 'agents.col.access', show: true },
  { column: 'agents.col.teams', show: true },
  { column: 'agents.col.groups', show: true }
];
const initialColumnOrder = columnOrder;
const filters: FilterType[] = [];
const tableDef = views[0].tableDef;
const filterDef = views[0].filterDef;
const path = '/agents';
const contextValue: StandardTableContextValues = {
  path,
  filters,
  onFilterChange: () => {},
  onSearchChange: () => {},
  tableDef,
  filterDef,
  initialColumnOrder
};

const config: ConfigType = generateConfig();
const { apiUrl } = config;
const link = createHttpLink({ uri: apiUrl });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
storiesOf('Table', module).add('with dummy data', () => (
  <ApolloProvider client={client}>
    <IntlProvider locale='en' messages={testTranslations}>
      <StandardTableProvider value={contextValue}>
        {views && views[0] && (
          <Table
            {...views[0]}
            path='/agents' // TODO: When hooked up to live db, not required
            filters={filters}
            dataType='async'
            columnOrder={columnOrder}
          />
        )}
      </StandardTableProvider>
    </IntlProvider>
  </ApolloProvider>
));
