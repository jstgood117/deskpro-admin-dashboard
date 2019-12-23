import React, {
  FC,
  useState,
  InputHTMLAttributes,
  useEffect,
  CSSProperties
} from 'react';
import Icon from '../Icon';
import {
  InputWrapper,
  InputStyled,
  ButtonClear,
  IconErrorWrapper,
  ErrorWrapper,
  ErrorText,
  PrimaryInputWrapper
} from './Helpers';

export type InputStyleType = 'primary' | 'secondary';

export type Props = {
  containerStyle?: CSSProperties;
  containerClassName?: string;
  hasError?: boolean;
  onClear?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  errorMessage?: string;
  showClear?: boolean;
  inputType: InputStyleType;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({
  containerStyle,
  containerClassName = '',
  onClear,
  hasError,
  errorMessage,
  inputType,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    setHasValue((props.value || '').toString().length > 0);
  }, [props.value]);

  const className = `input-wrapper ${containerClassName} ${
    hasValue ? 'selected' : ''
  } ${hasFocus ? 'focus' : ''}`;
  return (
    <div>
      {inputType === 'secondary' && (
        <InputWrapper
          error={hasError}
          style={containerStyle}
          className={className}
        >
          <InputStyled
            onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
              setHasFocus(true);
              if (props.onFocus) {
                props.onFocus(event);
              }
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setHasFocus(false);
              if (props.onFocus) {
                props.onBlur(event);
              }
            }}
            {...props}
            inputType={inputType}
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
      )}
      {inputType === 'primary' && (
        <PrimaryInputWrapper error={hasError}>
          <InputStyled
            className={className}
            onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
              setHasFocus(true);
              if (props.onFocus) {
                props.onFocus(event);
              }
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
              setHasFocus(false);
              if (props.onFocus) {
                props.onBlur(event);
              }
            }}
            {...props}
            inputType={inputType}
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
        </PrimaryInputWrapper>
      )}
      {hasError && errorMessage && (
        <ErrorWrapper>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorWrapper>
      )}
    </div>
  );
};

export default Input;
