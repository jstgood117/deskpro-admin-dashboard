import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import ConfirmDialog, { IProps } from './ConfirmDialog';

configure({ adapter: new Adapter() });

describe('ConfirmDialog', () => {
  let props: IProps;
  let mountedConfirmDialog: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedConfirmDialog) {
      mountedConfirmDialog = bShallow
        ? shallow(<ConfirmDialog {...props} />)
        : mount(<ConfirmDialog {...props} />);
    }
    return mountedConfirmDialog;
  };

  beforeEach(() => {
    props = {
      title: 'ConfirmDialog',
      isOpen: true,
      leftButtonText: 'text',
      rightButtonText: 'text'
    };
    mountedConfirmDialog = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});