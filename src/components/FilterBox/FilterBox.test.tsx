import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterBox from './FilterBox';
import { testFilterMeta } from '../../fixtures/gql/StandardTablesPage/filterMeta';
import { FilterProps } from '../../resources/interfaces/filterMeta';

describe('FilterBox', () => {
  let mountedFilterBox: any;

  const initialFilters: FilterProps[] = [
    { property: '', operatorName: '', value: [''] }
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
