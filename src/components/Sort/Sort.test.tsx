import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { Sort, IProps } from './Sort';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('Sort', () => {
  let props: IProps;
  let mountedSort: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSort) {
      mountedSort = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Sort {...props} />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Sort {...props} />
            </ThemeProvider>
          );
    }
    return mountedSort;
  };

  beforeEach(() => {
    props = {
      items: [],
      sortSelected: null,
      onSelectSort: () => null
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});