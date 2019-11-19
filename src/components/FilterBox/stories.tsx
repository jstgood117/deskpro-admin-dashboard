import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import FilterBox from './FilterBox';
import { IntlProvider } from 'react-intl';

import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { testTranslations } from '../../resources/constants/constants';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

const initialFilters: IFilterProps[] = [
  { property: '', option: '', filterKey: '' }
];

const FilterBoxComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);
  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <FilterBox
        filters={filters}
        setFilters={setFilters}
        options={testFilterMeta}
      />
    </IntlProvider>
  );
};

storiesOf('FilterBox', module).add('default', () => <FilterBoxComponent />);
