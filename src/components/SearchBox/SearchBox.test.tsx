import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import SearchBox, { Props } from './SearchBox';
import { DeskproAdminTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('SearchBox', () => {
  let props: Props;
  let mountedSearchBox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSearchBox) {
      mountedSearchBox = bShallow
        ? shallow(
            <ThemeProvider theme={DeskproAdminTheme}>
              <SearchBox {...props} />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={DeskproAdminTheme}>
              <SearchBox {...props} />
            </ThemeProvider>
          );
    }
    return mountedSearchBox;
  };

  beforeEach(() => {
    props = {
      placeholder: 'Searchbox'
    };
    mountedSearchBox = undefined;
  });

  it('always renders a <div>, <input>', () => {
    expect(wrapper(false).find('div').length).toBe(1);
    expect(wrapper(false).find('input').length).toBe(1);
  });
});