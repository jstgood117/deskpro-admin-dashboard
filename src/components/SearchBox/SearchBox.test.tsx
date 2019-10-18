import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import SearchBox, { IProps } from './SearchBox';

configure({adapter: new Adapter()});

describe("SearchBox", () => {
  let props: IProps;
  let mountedSearchBox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSearchBox) {
      mountedSearchBox = bShallow ? shallow(<SearchBox {...props} />) : mount(<SearchBox {...props} />);
    }
    return mountedSearchBox;
  }

  beforeEach(() => {
    props = {
      placeholder: 'Searchbox'
    };
    mountedSearchBox = undefined;
  });

  it("always renders a <div>, <svg>, <input>", () => {
    expect(wrapper(false).find('div').length).toBe(1);
    expect(wrapper(false).find('input').length).toBe(1);
    expect(wrapper(false).find('svg').length).toBe(1);
  });

})