import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { uniqueId } from 'lodash';

import { testFilterMeta } from '../../fixtures/gql/StandardTablesPage/filterMeta';
import FilterOptions from './FilterOptions';
import { FilterProps } from '../../resources/interfaces/filterMeta';

const initialFilters: FilterProps[] = [
  { property: '', operatorName: '', value: '' }
];
const FilterOptionsComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', paddingBottom: 14 }}
      key={uniqueId()}
    >
      <FilterOptions
        placeholder='Select Property'
        setFilters={setFilters}
        filters={filters}
        index={0}
        filter={filters[0]}
        options={testFilterMeta}
      />
    </div>
  );
};

storiesOf('FilterOptions', module).add('Menu with dummy data and icon', () => (
  <FilterOptionsComponent />
));
