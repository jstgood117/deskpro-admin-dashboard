import React from 'react';
import { MenuItem, SubMenuItem } from 'react-menu-list';
import styled from 'styled-components';
import { dpstyle } from '../Styled';

export const MenuWrapper = styled(dpstyle.div)<{ size?: string }>`
  display: inline-flex;
  .menu-btn {
    width: max-content;
    color: ${props => props.theme.greyDark};
    padding: 0px 13px 0px 14px;
    height: ${props => (props.size === 'medium' ? '34px' : '28px')};
    display: flex;
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.greyLight};
    outline: none;
    box-sizing: border-box;
    border-radius: ${props => props.theme.btnBorderRadius};
    cursor: pointer;
  }
  &:hover {
    .menu-btn {
      border: 1px solid ${props => props.theme.activeColour};
      color: ${props => props.theme.activeColour};
      background: ${props => props.theme.hoverColour};
      .ic-down,
      .ic-menu {
        path {
          fill: ${props => props.theme.activeColour};
        }
      }
    }
  }
  .selected {
    border: 1px solid ${props => props.theme.activeColour};
    color: ${props => props.theme.activeColour};
    .ic-down,
    .ic-menu {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

export const StyledSubMenuItem = styled(props => <SubMenuItem {...props} />)`
  cursor: pointer;
  padding: 6.2px 30px 7.09px 15px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    .ic-settings {
      display: block;
    }
  }
`;

export const MenuListWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${props => props.theme.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: ${props => props.theme.btnBorderRadius};
  min-width: 231px;
`;
export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
`;
export const StyledMenuItem = styled(props => <MenuItem {...props} />)`
  cursor: pointer;
  padding: 6.2px 30px 7.09px
    ${props => (props.name === 'group' && !props.selected ? 10 : 15)}px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => (props.selected ? props.theme.activeColour : null)};
`;

export const HR = styled.div`
  border: 1px solid #eff0f0;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding-right: 13px;
`;

export const FixedItemWrapper = styled.div`
  padding: 6.2px 30px 7.09px 38px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;

  .orderable-menu-toggle {
    position: absolute;
    display: flex;
    right: 15px;
  }
`;

export const ResetWrapper = styled.div`
  cursor: pointer;
  padding: 6.2px 30px 7.09px 15px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.textHover};
  }
`;
export const SettingIcon = styled.div`
  border-radius: 4px;
  width: 25px;
  height: 25px;
  display: flex;
  position: absolute;
  right: 43px;
  .ic-settings {
    path {
      fill: ${props => props.theme.greyDark};
    }
  }
  &:hover {
    background: ${props => props.theme.hoverColour};
    .ic-settings {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
  .ic-settings {
    display: none;
    margin: auto;
  }
`;
export const GrouppingWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 6px;
  span {
    padding-right: 6px;
    cursor: default;
    display: flex;
    &:hover {
      svg {
        path {
          fill: ${props => props.theme.activeColour};
        }
        rect {
          stroke: ${props => props.theme.activeColour};
          fill: ${props => props.theme.hoverColour};
        }
      }
    }
  }
`;
