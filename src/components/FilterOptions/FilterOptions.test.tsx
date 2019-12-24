import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterOptions, { IProps } from './FilterOptions';
import { testFilterMeta } from '../../fixtures/gql/StandardTablesPage/filterMeta';
import { FilterProps } from '../../resources/interfaces/filterMeta';

describe('FilterOptions', () => {
  let props: IProps;
  let mountedFilterOptions: any;

  const initialFilters: FilterProps[] = [
    { property: '', operatorName: '', value: '' }
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
      options: testFilterMeta,
      placeholder: 'Select Property',
      index: 0
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
