import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Input, { Props } from './Input';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('Input', () => {
  let props: Props;
  let mountedInput: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedInput) {
      mountedInput = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Input {...props} />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Input {...props} />
            </ThemeProvider>
          );
    }
    return mountedInput;
  };

  beforeEach(() => {
    props = {
      inputType: 'secondary'
    };
    mountedInput = undefined;
  });

  it('always renders a <div>, <input>', () => {
    expect(wrapper(false).find('div').length).toBe(2);
    expect(wrapper(false).find('input').length).toBe(1);
  });
});
