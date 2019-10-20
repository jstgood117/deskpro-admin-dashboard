import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Checkbox, { IProps } from './Checkbox';

configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  let props: IProps;
  let mountedCheckbox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCheckbox) {
      mountedCheckbox = bShallow
        ? shallow(<Checkbox {...props} />)
        : mount(<Checkbox {...props} />);
    }
    return mountedCheckbox;
  };

  beforeEach(() => {
    props = {
      checked: false,
      onChange: () => null
    };
  });

  it('always renders a <label>', () => {
    const elts = wrapper(false).find('label');
    expect(elts.length).toBeGreaterThan(0);
  });
});