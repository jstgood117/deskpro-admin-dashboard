import styled, { css } from 'styled-components';
import { dpstyle } from '../Styled';
import { P1 } from '../Typography';
import { InputStyleType } from './Input';

export const InputStyled = styled(dpstyle.input) <{ inputType: InputStyleType }>`
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  position: relative;
  background: transparent;
  height: 34px;
  border: ${props =>
    props.inputType === 'primary'
      ? `1px solid ${props.theme.greyLight}`
      : 'none'};
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  color: ${props => props.theme.staticColour};
  padding: ${props => props.inputType === 'secondary' && 0};
  width: 100%;
  ::placeholder {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.greyDark};
  }
`;

export const InputWrapper = styled(dpstyle.div) <{ error: boolean }>`
  display: inline-flex;
  align-items: center;
  background: ${props => props.theme.greyLightest};
  border-radius: 4px;
  padding: 0 15px;
  position: relative;
  ${props =>
    props.error &&
    css`
      border: 1px solid ${_props => _props.theme.warningColour};
      padding-right: 35px;
    `}
  &.focus {
    background-color: ${props => props.theme.secondaryColour};
    box-shadow: 0px 0px 8px ${props => props.theme.hoverColour};
  }
  /* If has value */
  &.selected {
    background-color: ${props => props.theme.secondaryColour};
  }
  &:hover {
    background-color: ${props => props.theme.hoverColour};
    > input {
      ::placeholder {
        color: ${props => props.theme.activeColour};
      }
    }
  }
`;
export const PrimaryInputWrapper =
  styled(dpstyle.div) < { error: boolean, search: boolean } > `

  display: flex;
  align-items: center;
  position: relative;
  input {
    &.focus {
      box-shadow: 0px 0px 8px ${props => props.theme.hoverColour};
      border-color: #9fccf3;
    }
  }
  ${props =>
      props.error &&
      css`
      input {
        border: 1px solid ${_props => _props.theme.warningColour};
        padding-right: 35px;
      }
    `}
  ${props =>
      props.search &&
      css`input { padding-left: 34px; }
  `}

  :focus-within {
    & > div > svg > path {
      fill: ${props => props.theme.brandPrimary};
    }
  }
`;

export const ErrorWrapper = styled.div`
  background: #fff;
  box-shadow: 5px 5px 8px ${props => props.theme.greyLight};
  border-radius: 3px;
  padding: 5px 10px;
`;

export const ErrorText = styled(P1)`
  color: ${props => props.theme.warningColour};
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 11px;
  top: 10px;
  & svg {
    width: 14px;
    height: 14px;
  }
`;

export const IconErrorWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ButtonClear = styled.div`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-right: 0;
  position: absolute;
  right: 11.75px;
`;
