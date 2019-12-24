import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import FilterBox from './FilterBox';

import { testFilterMeta } from '../../fixtures/gql/StandardTablesPage/filterMeta';
import { FilterProps } from '../../resources/interfaces/filterMeta';

const initialFilters: FilterProps[] = [
  { property: '', operatorName: '', value: '' }
];

const FilterBoxComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);
  return (
    <FilterBox
      filters={filters}
      setFilters={setFilters}
      options={testFilterMeta}
    />
  );
};

storiesOf('FilterBox', module).add('default', () => <FilterBoxComponent />);
