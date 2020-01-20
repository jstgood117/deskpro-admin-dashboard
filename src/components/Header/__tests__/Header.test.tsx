import React from 'react';
import { mount } from '../../../test/enzyme';
import 'jest-styled-components';

import { NewButton, ViewModeButton } from '../Header';

describe('Header styled components', () => {
  describe('New Button', () => {
    it('should generate correct box-shadow color', () => {
      const wrapper = mount(<NewButton theme={{ black: '000' }} />);

      expect(wrapper).toHaveStyleRule(
        'box-shadow',
        '0px 2px 5px rgba(0,0,0,0.1)'
      );
      expect(wrapper).toHaveStyleRule('margin-left', '16px');
    });
  });

  describe('ViewModeButton', () => {
    const theme = { white: 'testWhite', hoverColour: 'testHover' };
    it('should use `hoverColour` background color while active', () => {
      const wrapper = mount(<ViewModeButton theme={theme} active={true} />);
      expect(wrapper).toHaveStyleRule('background-color', 'testHover');
    });

    it('should use `white` background color while inactive', () => {
      const wrapper = mount(<ViewModeButton theme={theme} active={false} />);
      expect(wrapper).toHaveStyleRule('background-color', 'testWhite');
    });
  });
});
