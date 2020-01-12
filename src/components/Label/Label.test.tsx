import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Label, { IProps, IStyleProps } from './Label';

describe('Label', () => {

  let props: IProps;
  const styleProps: IStyleProps = { styleType: 'lined' };
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<Label {...props} {...styleProps} />)
        : mount(<Label {...props} {...styleProps} />);
    }
    return mountedLabel;
  };

  beforeEach(() => {
    props = {
      label: 'test'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when icon is defined', () => {
    beforeEach(() => {
      props.label = 6;
      props.icon = 'clock';
      mountedLabel = undefined;
    });

    it('always renders a <svg>', () => {
      expect(wrapper(false).find('.icon-label').length).toBeGreaterThan(0);
    });
  });
});
