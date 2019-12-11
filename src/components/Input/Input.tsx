import React, {
  FC,
  useState,
  InputHTMLAttributes,
  useEffect,
  CSSProperties
} from 'react';
import styled, { css } from 'styled-components';
import { dpstyle } from '../Styled';
import { P1 } from '../Typography';
import Icon from '../Icon';

const InputStyled = styled(dpstyle.input)`
  position: relative;
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

const InputWrapper = styled(dpstyle.div)<{ error: boolean }>`
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

const ErrorWrapper = styled.div`
  background: #fff;
  box-shadow: 5px 5px 8px ${props => props.theme.greyLight};
  border-radius: 3px;
  padding: 5px 10px;
`;

const ErrorText = styled(P1)`
  color: ${props => props.theme.warningColour};
`;

const IconErrorWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ButtonClear = styled.div`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-right: 0;
  position: absolute;
  right: 11.75px;
`;

export type IProps = {
  containerStyle?: CSSProperties;
  containerClassName?: string;
  hasError?: boolean;
  onClear?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  errorMessage?: string;
  showClear?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<IProps> = ({
  containerStyle,
  containerClassName = '',
  onClear,
  hasError,
  errorMessage,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setHasValue((props.value || '').toString().length > 0);
  }, [props.value]);

  const className = `input-wrapper ${containerClassName} ${hasValue ? 'selected' : ''} ${
    hasFocus ? 'focus' : ''
  }`;
  return (
    <div>
      <InputWrapper
        error={hasError}
        style={containerStyle}
        className={className}
      >
        <InputStyled
          onFocus={event => {
            setHasFocus(true);
            if (props.onFocus) {
              props.onFocus(event);
            }
          }}
          onBlur={event => {
            setHasFocus(false);
            if (props.onFocus) {
              props.onBlur(event);
            }
          }}
          {...props}
        />
        {props.showClear && (hasValue || hasFocus) && (
          <ButtonClear onClick={onClear} className='close-icon'>
            <Icon name='close' />
          </ButtonClear>
        )}
        {hasError && (
          <IconErrorWrapper className='error-icon'>
            <Icon name='error' />
          </IconErrorWrapper>
        )}
      </InputWrapper>
      {hasError && errorMessage && (
        <ErrorWrapper>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorWrapper>
      )}
    </div>
  );
};

export default Input;
