import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Toggle, { IProps } from './Toggle';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('Toggle', () => {
  let props: IProps;
  let mountedCheckbox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCheckbox) {
      mountedCheckbox = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Toggle {...props} />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Toggle {...props} />
            </ThemeProvider>
          );
    }
    return mountedCheckbox;
  };

  beforeEach(() => {
    props = {
      checked: false,
      onChange: () => null,
      size: 'small'
    };
  });

  it('always renders a <label>', () => {
    const elts = wrapper(false).find('label');
    expect(elts.length).toBeGreaterThan(0);
  });
});