import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import FilterItem from './FilterItem';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { testTranslations } from '../../resources/constants/constants';

const filter: FilterProps = { property: 'Team', operatorName: 'EQUAL', value: 'Audit' };

storiesOf('FilterItem', module).add('default', () => (
  <IntlProvider locale='en' messages={testTranslations}>
    <FilterItem
      property={filter.property}
      operatorName={filter.operatorName}
      value={filter.value}
    />
  </IntlProvider>
  )
);
