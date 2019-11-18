import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterBox from './FilterBox';
import { convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

describe('FilterBox', () => {
  let mountedFilterBox: any;

  const initialFilters: IFilterProps[] = [
    { property: '', option: '', filterKey: '' }
  ];
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

  const wrapper = (bShallow: boolean) => {
    if (!mountedFilterBox) {
      mountedFilterBox = bShallow
        ? shallow(<FilterBoxComponent />)
        : mount(<FilterBoxComponent />);
    }
    return mountedFilterBox;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
