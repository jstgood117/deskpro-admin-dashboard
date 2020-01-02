import React from 'react';
import { mount } from '../../test/enzyme';
import 'jest-styled-components';

import {
  HeadingText
} from '../styled';

describe('styled components', () => {
  describe('TextLinkLabel', () => {

    test('always renders default css props', () => {

      const h1 = mount(<HeadingText size={1}>h1</HeadingText>);
      const h2 = mount(<HeadingText size={2}>h2</HeadingText>);
      const h3 = mount(<HeadingText size={3}>h3</HeadingText>);
      const h4 = mount(<HeadingText size={4}>h4</HeadingText>);
      const h5 = mount(<HeadingText size={5}>h5</HeadingText>);
      const h6 = mount(<HeadingText size={6}>h6</HeadingText>);

      expect(h1).toHaveStyleRule('font-size', '40px');
      expect(h2).toHaveStyleRule('font-size', '18pt');
      expect(h3).toHaveStyleRule('font-size', '16pt');
      expect(h4).toHaveStyleRule('font-size', '16pt');
      expect(h5).toHaveStyleRule('font-size', '15pt');
      expect(h6).toHaveStyleRule('font-size', '15pt');
    });

  });
});