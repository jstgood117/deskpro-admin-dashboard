import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { uniqueId } from 'lodash';

import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import FilterOptions from './FilterOptions';
import { convertRuleSchema } from '../RuleBuilder/utils';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

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
        placeholder='Select Property'
        setFilters={setFilters}
        filters={filters}
        index={0}
        filter={filters[0]}
        schema={convertRuleSchema(
          'admin_tickets.some_group_title',
          testFilterMeta
        )}
      />
    </div>
  );
};

storiesOf('FilterOptions', module).add('Menu with dummy data and icon', () => (
  <FilterOptionsComponent />
));
