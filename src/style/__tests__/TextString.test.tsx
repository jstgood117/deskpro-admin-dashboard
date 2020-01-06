import React from 'react';
import { mount } from '../../test/enzyme';
import 'jest-styled-components';

import {
  TextString
} from '../styled';

describe('styled components', () => {
  describe('TextLinkLabel', () => {

    test('always renders default css props', () => {

      const wrapper = mount(<TextString messageId={'test.id.123'} />);

      expect(wrapper.text()).toContain('test.id.123');
    });

  });
});