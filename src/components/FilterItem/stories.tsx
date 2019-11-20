import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import FilterItem from './FilterItem';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import { testTranslations } from '../../resources/constants/constants';

const filter: IFilterProps = { property: 'Team', option: 'EQUAL', filterKey: 'Audit' };

storiesOf('FilterItem', module).add('default', () => (
  <IntlProvider locale='en' messages={testTranslations}>
    <FilterItem
      property={filter.property}
      option={filter.option}
      filterKey={filter.filterKey}
    />
  </IntlProvider>
  )
);
