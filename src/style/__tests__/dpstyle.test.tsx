import React from 'react';
import { mount } from '../../test/enzyme';
import 'jest-styled-components';

import {
  dpstyle
} from '../styled';

describe('styled components', () => {
  describe('TextString', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.nav, {
        theme: {
          staticColour: '#ff0000',
          mainFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });

  describe('dpstyle.h2', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.h2, {
        theme: {
          staticColour: '#ff0000',
          headerFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });


  describe('dpstyle.h3', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.h3, {
        theme: {
          staticColour: '#ff0000',
          headerFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });


  describe('dpstyle.h4', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.h4, {
        theme: {
          staticColour: '#ff0000',
          headerFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });

  describe('dpstyle.h5', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.h5, {
        theme: {
          staticColour: '#ff0000',
          headerFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });


  describe('dpstyle.h6', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.h6, {
        theme: {
          staticColour: '#ff0000',
          headerFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });

  describe('dpstyle.article', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.article, {
        theme: {
          staticColour: '#ff0000',
          mainFont: 'test',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('font-family', 'test');
    });
  });

  describe('dpstyle.a', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.a, {
        theme: {
          brandPrimary: '#ff0000',
          activeColour: '#ff0001',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0000');
      expect(wrapper1).toHaveStyleRule('color', '#ff0001', {
        modifier: ':hover'
      });
    });
  });

  describe('dpstyle.plaina', () => {

    test('always renders default css props', () => {

      const wrapper1 = mount(React.createElement(dpstyle.plaina, {
        theme: {
          staticColour: '#ff0002',
        }
      }));

      expect(wrapper1).toHaveStyleRule('color', '#ff0002');
      expect(wrapper1).toHaveStyleRule('color', '#ff0002', {
        modifier: ':hover'
      });
    });
  });
});