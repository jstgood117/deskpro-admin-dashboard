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
  SearchIconWrapper,
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
  showSearch?: boolean;
  showClear?: boolean;
  inputType: InputStyleType;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({
  containerStyle,
  containerClassName = '',
  onClear,
  hasError,
  errorMessage,
  inputType,
  placeholder,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  console.log('sh-----------', props.showSearch);
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
            placeholder={placeholder}
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
        <PrimaryInputWrapper
          error={hasError}
          search={props.showSearch}
        >
          {props.showSearch && (
            <SearchIconWrapper>
              <Icon name='search' />
            </SearchIconWrapper>
          )}
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
            placeholder={placeholder}
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
