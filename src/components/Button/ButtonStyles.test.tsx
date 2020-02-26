import React from 'react';
import { mount } from '../../test/enzyme';
import 'jest-styled-components';

import {
  DropdownContent,
  ClearButton,
  DropdownContentLink,
  ButtonWrapper,
  ButtonStyled
} from './ButtonStyles';

describe('DropdownContent', () => {

  it('should generate correct styles if theme props are set', () => {
    const wrapper = mount(<DropdownContent theme={{ white: '#ffffff' }} />);

    expect(wrapper).toHaveStyleRule(
      'background',
      '#ffffff'
    );
  });
});

describe('ClearButton', () => {
  it('should generate correct styles if theme props are set', () => {
    const wrapper = mount(
      <ClearButton
        hasClearButton={true}
        theme={{
          activeColour: '#ff0000',
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'border',
      '1px solid #ff0000'
    );

    expect(wrapper).toHaveStyleRule(
      'border-top-left-radius',
      '0px'
    );

    expect(wrapper).toHaveStyleRule(
      'border-bottom-left-radius',
      '0px'
    );
  });

  it('if hasClearButton is false set border-radius to 4px', () => {
    const wrapper = mount(
      <ClearButton
        hasClearButton={false}
        theme={{
          activeColour: '#ff0000',
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'border-top-left-radius',
      '4px'
    );

    expect(wrapper).toHaveStyleRule(
      'border-bottom-left-radius',
      '4px'
    );
  });
});


describe('ButtonStyled', () => {
  it('should generate correct styles if theme props are set', () => {
    const wrapper = mount(
      <ButtonStyled
        hasClearButton={true}
        iconOnly={false}
        styles={{
          static: {
            backgroundColor: '#ff0000',
            color: '#ff0000',
            svgColor: '#ff0000',
            size: 14,
            border: '#ff0000',
          },
          hover: {
            backgroundColor: '#ff0000',
            svgColor: '#ff0000',
            color: '#ff0000',
            size: 14,
            border: '#ff0000'
          }
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'background-color',
      '#ff0000'
    );

    expect(wrapper).toHaveStyleRule(
      'color',
      '#ff0000'
    );

    expect(wrapper).toHaveStyleRule(
      'border',
      '#ff0000'
    );
  });

  it('if hasClearButton is false set border-radius to 4px', () => {
    const wrapper = mount(
      <ClearButton
        hasClearButton={false}
        theme={{
          activeColour: '#ff0000',
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'border-top-left-radius',
      '4px'
    );

    expect(wrapper).toHaveStyleRule(
      'border-bottom-left-radius',
      '4px'
    );
  });
});

describe('DropdownContentLink', () => {

  it('should generate correct styles if theme props are set', () => {
    const wrapper = mount(
      <DropdownContentLink
        className={'selected'}
        theme={{
          textHover: '#ff0000',
          activeColour: '#0000ff',
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'background-color',
      '#ff0000', {
      modifier: ':hover'
    });

    expect(wrapper).toHaveStyleRule(
      'color',
      '#0000ff', {
      modifier: '.selected',
    });
  });
});

describe('ButtonWrapper', () => {

  it('should generate correct styles if theme props are set', () => {
    const wrapper = mount(
      <ButtonWrapper
        hasClearButton={true}
        theme={{
          hoverColour: '#ff0000',
          white: '#ffffff',
        }}
      />
    );

    expect(wrapper).toHaveStyleRule(
      'background-color',
      '#ff0000', {
      modifier: '.selected'
    });
  });
});

