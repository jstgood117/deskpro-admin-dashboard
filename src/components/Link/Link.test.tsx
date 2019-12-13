import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Link, { IProps } from './Link';

describe('Link', () => {
  const props: IProps = {href: '/'};
  let mountedLink: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLink) {
      mountedLink = bShallow
        ? shallow(<Link {...props} />)
        : mount(<Link {...props} />);
    }
    return mountedLink;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
