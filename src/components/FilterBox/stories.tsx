import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import FilterBox, { IFilterProps } from './FilterBox';
import { convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';

const initialFilters: IFilterProps[] = [{ property: '', option: '', filterKey: '' }];

const FilterBoxComponent: React.FC = () => {
  const [filters, setFilters] = useState(initialFilters);
  return (
    <FilterBox
      filters={filters}
      setFilters={setFilters}
      schema={convertRuleSchema(
        'admin_tickets.some_group_title',
        testFilterMeta
      )}
    />
  );
};

storiesOf('FilterBox', module).add('default', () => <FilterBoxComponent />);
