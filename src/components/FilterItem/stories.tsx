import React from 'react';
import { storiesOf } from '@storybook/react';

import FilterItem from './FilterItem';
import { FilterProps } from '../../resources/interfaces/filterMeta';

const filter: FilterProps = {
  property: 'Team',
  operatorName: 'EQUAL',
  value: ['Audit']
};

storiesOf('FilterItem', module).add('default', () => (
  <FilterItem
    property={filter.property}
    operatorName={filter.operatorName}
    value={filter.value}
  />
));
