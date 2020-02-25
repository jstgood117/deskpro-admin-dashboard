import styled from 'styled-components';
import { dpstyle } from '../Styled';

import { IButtonStyleProp, IHasButtonType } from './types';

export const ButtonStyled = styled(dpstyle.button) <IButtonStyleProp>`
  background-color: ${props => props.styles.static.backgroundColor};
  color: ${props => props.styles.static.color};
  border: ${props => props.styles.static.border};
  height: ${props => props.styles.static.size}px;
  width: ${props => props.iconOnly && props.styles.static.size}px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-top-right-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  border-bottom-right-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  padding: ${props => props.iconOnly && 0};
  path {
    fill: ${props => props.styles.static.svgColor};
  }
  svg:nth-child(1) {
    padding-right: ${props => !props.iconOnly && 8}px;
    margin: auto;
  }
  svg:nth-child(2) {
    padding-left: ${props => !props.iconOnly && 8}px;
  }
  &:hover {
    background-color: ${props => props.styles.hover.backgroundColor};
    color: ${props => props.styles.hover.color};
    border: ${props => props.styles.hover.border};
    path {
      fill: ${props => props.styles.hover.svgColor};
    }
  }
`;

export const DropdownContent = styled(dpstyle.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${props => props.theme.white};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: -1px;
  left: -1px;
  width: 100%;
`;

export const ClearButton = styled(dpstyle.button) <IHasButtonType>`
  outline: none;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid ${props => props.theme.activeColour};
  margin-left: -1px;
  border-top-left-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  border-bottom-left-radius: ${props => (props.hasClearButton ? 0 : 4)}px;
  path {
    fill: ${props => props.theme.activeColour};
  }
`;

export const DropdownContentPanel = styled(dpstyle.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

export const DropdownContentLink = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  float: none;
  padding: 7px 15px;
  height: 31px;
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.textHover};
  }
  z-index: 1;
  .sort-icon {
    display: flex;
    position: absolute;
    right: 14px;
    svg {
      margin: auto;
      .active {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
  .selected {
    color: ${props => props.theme.activeColour};
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled(dpstyle.div) <IHasButtonType>`
  display: inline-flex;
  position: relative;
  .selected {
    &:hover {
      background-color: ${props => props.theme.hoverColour};
    }
    color: ${props => props.theme.activeColour};
    border-color: ${props => props.theme.activeColour};
    background-color: ${props =>
    props.hasClearButton ? props.theme.hoverColour : props.theme.white};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
  .selected-image-btn {
    font-weight: 500;
  }
  img {
    padding-right: 8px;
    width: 18px;
    height: 18px;
  }
`;
