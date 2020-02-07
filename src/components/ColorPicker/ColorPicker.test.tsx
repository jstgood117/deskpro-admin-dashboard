import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import ColorPicker, { IProps } from './ColorPicker';

configure({ adapter: new Adapter() });

describe('ColorPicker', () => {
  let props: IProps;
  let mountedCheckbox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCheckbox) {
      mountedCheckbox = bShallow
        ? shallow(<ColorPicker {...props} />)
        : mount(<ColorPicker {...props} />);
    }
    return mountedCheckbox;
  };

  beforeEach(() => {
    props = {
      value: '#C4C4C4',
      onChange: () => null
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
