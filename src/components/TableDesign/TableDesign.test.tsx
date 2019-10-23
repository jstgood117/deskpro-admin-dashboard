import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import {Table } from './TableDesign';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('TableDesign', () => {
  let mountedTableDesign: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTableDesign) {
      mountedTableDesign = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Table />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <Table />
            </ThemeProvider>
          );
    }
    return mountedTableDesign;
  };

  beforeEach(() => {
    mountedTableDesign = undefined;
  });

  it('always renders a <table>', () => {
    expect(wrapper(false).find('table').length).toBe(1);
  });
});