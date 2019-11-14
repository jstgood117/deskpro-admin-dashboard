import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import FilterBox, { IFilterProps } from './FilterBox';
import {
  filterProperties,
  filterOptions
} from '../../resources/constants/mock/testFilterMeta';

const initialFilters: IFilterProps[] = [{ property: '', option: '', filterKey: '' },{ property: '', option: '', filterKey: '' }];

const FilterBoxComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);
  return (
    <FilterBox
      properties={filterProperties}
      options={filterOptions}
      filters={filters}
      setFilters={setFilters}
    />
  );
};

storiesOf('FilterBox', module).add('default', () => <FilterBoxComponent />);
