import React from 'react';
import { mount, shallow } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

import Actions, { Props } from './Actions';

jest.mock('../Button', () => () => (
  <button>Button</button>)
);

jest.mock('../Menu', () => () => (
  <div id='menu'>Menu</div>)
);

jest.mock('../SelectComponents/MultiSelect', () => () => (
  <div id='multiselect'>MultiSelect</div>)
);

const props: Props = {
  path: '/test',
  menuValue: {
    key: 0,
    name: 'name'
  },
  onChange: jest.fn(),
  selectOptions: jest.fn(),
  selectedOptions: [{
    value: '1', label: 'Option'
  }],
  handlePreAction: jest.fn(),
  ids: ['0']
};

describe('Actions', () => {

  const wrapper = (bShallow: boolean, _props: Props): WrapperType => {
    return bShallow
      ? shallow(<Actions {..._props} />)
      : mount(<Actions {..._props} />);
  };

  test('renders a menu element in initial state', () => {

    const root = wrapper(false, props);
    const menu = root.find('div');
    expect(menu.length).toBeGreaterThan(0);
  });
});
