import React, {
  SFC,
  useState,
  InputHTMLAttributes,
  useEffect,
  CSSProperties
} from 'react';
import styled from 'styled-components';
import { dpstyle } from '../Styled';

const InputStyled = styled(dpstyle.input)`
  background-color: transparent;
  height: 35px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  border: none;
  outline: none;
  color: ${props => props.theme.staticColour};
  padding: 0;
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

const InputWrapper = styled(dpstyle.div)`
  background: ${props => props.theme.greyLightest};
  border-radius: 4px;
  padding: 0 15px;
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

export type IProps = {
  containerStyle?: CSSProperties;
  containerClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: SFC<IProps> = ({
  containerStyle,
  containerClassName = '',
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setHasValue((props.value || '').toString().length > 0);
  }, [props.value]);

  const className = `${containerClassName} ${hasValue ? 'selected' : ''} ${
    hasFocus ? 'focus' : ''
  }`;
  return (
    <InputWrapper style={containerStyle} className={className}>
      <InputStyled
        onFocus={event => {
          setHasFocus(true);
          props.onFocus && props.onFocus(event);
        }}
        onBlur={event => {
          setHasFocus(false);
          props.onFocus && props.onBlur(event);
        }}
        {...props}
      ></InputStyled>
    </InputWrapper>
  );
};

export default Input;