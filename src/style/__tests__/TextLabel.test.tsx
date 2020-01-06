import React from 'react';
import 'jest-styled-components';
import { mount } from '../../test/enzyme';

import {
  TextLabel
} from '../styled';

describe('styled components', () => {
  describe('TextLabel', () => {

    test('always renders default css props', () => {

      const color = '#fefefe';
      const wrapper = mount(
        <TextLabel
          color={color}
          bold='bold'
          small='small'
        >
          label
        </TextLabel>
      );

      expect(wrapper).toHaveStyleRule('color', color);
      expect(wrapper).toHaveStyleRule('font-size', '12px');
      expect(wrapper).toHaveStyleRule('font-weight', 'bold');
    });

    test('always renders default css props', () => {

      const wrapper = mount(<TextLabel>label</TextLabel>);

      expect(wrapper).toHaveStyleRule('color', 'inherit');
      expect(wrapper).toHaveStyleRule('font-size', '14px');
      expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    });

  });
});