import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterItem, { IProps } from './FilterItem';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

describe('FilterOptions', () => {
  let props: IProps;
  let mountedFilterItem: any;

  const filterData: IFilterProps = {
    property: 'Team',
    option: 'EQUAL',
    filterKey: 'Audit'
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedFilterItem) {
      mountedFilterItem = bShallow
        ? shallow(<FilterItem {...props} />)
        : mount(<FilterItem {...props} />);
    }
    return mountedFilterItem;
  };

  beforeEach(() => {
    props = {
      property: filterData.property,
      filterKey: filterData.filterKey,
      option: filterData.option
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
