import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterOptions, { IProps } from './FilterOptions';
import { convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

describe('FilterOptions', () => {
  let props: IProps;
  let mountedFilterOptions: any;

  const initialFilters: IFilterProps[] = [
    { property: '', option: '', filterKey: '' }
  ];
  const FilterOptionsComponent: React.FC<IProps> = _props => {
    const [filters, setFilters] = useState(initialFilters);

    return (
      <FilterOptions
        {..._props}
        setFilters={setFilters}
        filters={filters}
        filter={filters[0]}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedFilterOptions) {
      mountedFilterOptions = bShallow
        ? shallow(<FilterOptionsComponent {...props} />)
        : mount(<FilterOptionsComponent {...props} />);
    }
    return mountedFilterOptions;
  };

  beforeEach(() => {
    props = {
      schema: convertRuleSchema(
        'admin_tickets.some_group_title',
        testFilterMeta
      ),
      placeholder: 'Select Property',
      index: 0
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
