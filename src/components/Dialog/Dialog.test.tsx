import React from 'react';
import { mount, shallow } from '../../test/enzyme';
import Dialog, { Props } from './Dialog';

describe('Dialog', () => {
  let props: Props;
  let mountedDialog: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedDialog) {
      mountedDialog = bShallow
        ? shallow(
              <Dialog {...props} />
          )
        : mount(
              <Dialog {...props} />
          );
    }
    return mountedDialog;
  };

  beforeEach(() => {
    props = {
      isOpen: true,
      children: undefined
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});