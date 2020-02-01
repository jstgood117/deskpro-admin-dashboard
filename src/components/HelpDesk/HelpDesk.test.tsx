import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import HelpDesk, { IProps } from './HelpDesk';
import Kayako from '../../assets/svg/helpdesk/kayako.svg';

describe('HelpDesk', () => {
  let props: IProps;
  let mountedCode: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCode) {
      mountedCode = bShallow
        ? shallow(<HelpDesk {...props} />)
        : mount(<HelpDesk {...props} />);
    }
    return mountedCode;
  };

  beforeEach(() => {
    props = {
      logo: Kayako,
      title: 'title'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
