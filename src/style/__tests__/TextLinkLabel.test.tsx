import React from 'react';
import { mount } from '../../test/enzyme';
import 'jest-styled-components';

import {
  TextLinkLabel
} from '../styled';

describe('styled components', () => {
  describe('TextLinkLabel', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(
        <TextLinkLabel>test</TextLinkLabel>
      );

      expect(wrapper1).toHaveStyleRule('color', '#3A8DDE');
      expect(wrapper1).toHaveStyleRule('text-decoration', 'none');
      expect(wrapper1).toHaveStyleRule('font-size', '15px');
      expect(wrapper1).toHaveStyleRule('font-weight', 'normal');
    });

    test('receives props and renders them out as styles', () => {

      const color = '#ff00ff';
      const wrapper2 = mount(
        <TextLinkLabel
          color={color}
          underline={'underline'}
          small={'small'}
          bold={'bold'}
        >
          test
        </TextLinkLabel>
      );
      expect(wrapper2.text()).toContain('test');
      expect(wrapper2).toHaveStyleRule('color', color);
      expect(wrapper2).toHaveStyleRule('text-decoration', 'underline');
      expect(wrapper2).toHaveStyleRule('font-size', '12px');
      expect(wrapper2).toHaveStyleRule('font-weight', 'bold');
    });
  });
});