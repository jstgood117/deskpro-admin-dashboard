import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import FilterItem from './FilterItem';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import { testTranslations } from '../../resources/constants/constants';

const filter: IFilterProps = { columnName: 'Team', operatorName: 'EQUAL', value: 'Audit' };

storiesOf('FilterItem', module).add('default', () => (
  <IntlProvider locale='en' messages={testTranslations}>
    <FilterItem
      columnName={filter.columnName}
      operatorName={filter.operatorName}
      value={filter.value}
    />
  </IntlProvider>
  )
);
