import React from 'react';
import {
  mountWithIntl,
  shallowWithIntl
} from '../../test/mock-intl';

import Header, { IProps } from './Header';

describe('Header', () => {
  let props: IProps;
  let mountedHeader: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedHeader) {
      mountedHeader = bShallow
        ? shallowWithIntl(
            <Header {...props} />
          )
        : mountWithIntl(
            <Header {...props} />
          );
    }
    return mountedHeader;
  };

  beforeEach(() => {
    props = {
      title: 'admin_agents.agents.title',
      description: 'admin_agents.agents.description',
      illustration: null
    };
    mountedHeader = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
