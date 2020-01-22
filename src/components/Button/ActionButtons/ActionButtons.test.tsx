import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import ActionButtons from './ActionButtons';

describe('ActionButtons', () => {
  const props = {
    onPencilClick: () => {},
    onDuplicateClick: () => {},
    onTrashClick: () => {},
  };
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<ActionButtons {...props} />)
        : mount(<ActionButtons {...props} />);
    }
    return mountedLabel;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
