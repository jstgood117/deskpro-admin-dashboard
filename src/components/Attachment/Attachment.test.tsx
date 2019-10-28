import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Attachment, { IProps } from './Attachment';

describe('Label', () => {
  let props: IProps;
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<Attachment {...props} />)
        : mount(<Attachment {...props} />);
    }
    return mountedLabel;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});