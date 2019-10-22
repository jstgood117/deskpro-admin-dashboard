import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Card, { IProps } from './Card';

describe('Card', () => {
  let props: IProps;
  let mountedCard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCard) {
      mountedCard = bShallow
        ? shallow(<Card {...props} />)
        : mount(<Card {...props} />);
    }
    return mountedCard;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
