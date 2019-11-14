import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { uniqueId } from 'lodash';

import {
  filterProperties,
  filterOptions
} from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../FilterBox/FilterBox';
import FilterOptions from './FilterOptions';

const initialFilters: IFilterProps[] = [
  { property: '', option: '', filterKey: '' }
];
const FilterOptionsComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', paddingBottom: 14 }}
      key={uniqueId()}
    >
      <FilterOptions
        properties={filterProperties}
        options={filterOptions}
        placeholder='Select Property'
        setFilters={setFilters}
        filters={filters}
        index={0}
        filter={filters[0]}
      />
    </div>
  );
};

storiesOf('FilterOptions', module).add('Menu with dummy data and icon', () => (
  <FilterOptionsComponent />
));
