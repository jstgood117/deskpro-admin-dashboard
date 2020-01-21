import React from 'react';
import { mount, shallow } from '../../../../test/enzyme';
import { WrapperType } from '../../../../test/types';

import Modal, { ModalPropsType } from './Modal';

jest.mock('../../../Dialog/ConfirmDialog', () => () => (
  <div id='modal'>Modal</div>)
);

describe('Modal', () => {

  const wrapper = (bShallow: boolean, props: ModalPropsType): WrapperType => {
    return bShallow
      ? shallow(<Modal {...props} />)
      : mount(<Modal {...props} />);
  };

  test('renders a modal element', () => {

    const props: ModalPropsType = {
      type: 'CONFIRM_MODAL',
      icon: 'trash',
      title: 'Test title',
      variant: 'danger',
      message: 'Test message',
      leftButtonText: 'left button',
      rightButtonText: 'right button',
      ids:[] as string[],
      confirm: jest.fn(),
      cancel: jest.fn(),
      messageParams: [] as string[]
    };

    const root = wrapper(false, props);
    const modal = root.find('#modal');
    expect(modal.length).toEqual(1);
  });
});
