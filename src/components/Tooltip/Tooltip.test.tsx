import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Tooltip, { IProps } from './Tooltip';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('Tooltip', () => {
  let props: IProps;
  let mountedCheckbox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCheckbox) {
      mountedCheckbox = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Tooltip {...props}>
                <span>Tooltip</span>
              </Tooltip>
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Tooltip {...props}>
                <span>Tooltip</span>
              </Tooltip>
            </ThemeProvider>
          );
    }
    return mountedCheckbox;
  };

  beforeEach(() => {
    props = {
      content: '',
    } as IProps;
  });

  it('always renders a <span>', () => {
    const elts = wrapper(false).find('span');
    expect(elts.length).toBeGreaterThan(0);
  });
});