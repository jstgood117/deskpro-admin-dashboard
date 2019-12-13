import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Markdown from './Markdown';

describe('Markdown', () => {
  let mountedMarkdown: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedMarkdown) {
      mountedMarkdown = bShallow ? shallow(<Markdown />) : mount(<Markdown />);
    }
    return mountedMarkdown;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
