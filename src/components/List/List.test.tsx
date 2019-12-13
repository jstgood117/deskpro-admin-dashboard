import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import List, { IProps } from './List';

describe('List', () => {
  const ipList = [
    '217.138.85.2122',
    '217.138.85.2123',
    '217.138.85.2124',
    '217.138.85.2125'
  ];
  const props: IProps = { list: ipList, type: 'IP' };
  let mountedList: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedList) {
      mountedList = bShallow
        ? shallow(<List {...props} />)
        : mount(<List {...props} />);
    }
    return mountedList;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
