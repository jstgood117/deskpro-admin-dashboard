import React, {
  SFC,
  useState,
  InputHTMLAttributes,
  useEffect,
  CSSProperties
} from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const SearchBoxStyled = styled.input`
  background-color: transparent;
  height: 34.12px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  border: none;
  outline: none;
  color: ${props => props.theme.staticColour};
  width: 100%;
  margin: 0 10px;
  ::placeholder {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.greyDark};
  }
`;

const SearchBoxWrapper = styled.div`
  background: ${props => props.theme.greyLightest};
  border-radius: 4px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  .ic-search {
    margin-top: 4px;
  }
  &.focus {
    .ic-search {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
    background-color: ${props => props.theme.secondaryColour};
    box-shadow: 0px 0px 8px ${props => props.theme.hoverColour};
  }
  /* If has value */
  &.selected {
    .ic-search {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
    background-color: ${props => props.theme.secondaryColour};
  }
  &:hover {
    .ic-search {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
    background-color: ${props => props.theme.hoverColour};
    > input {
      ::placeholder {
        color: ${props => props.theme.activeColour};
      }
    }
  }
`;

const ButtonClear = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-right: 0;
`;

export type IProps = {
  containerStyle?: CSSProperties;
  containerClassName?: string;
  onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBox: SFC<IProps> = ({
  containerStyle,
  containerClassName = '',
  onClear,
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
    <SearchBoxWrapper style={containerStyle} className={className}>
      <span className="ic-search">
        <Icon name="search" />
      </span>

      <SearchBoxStyled
        onFocus={event => {
          setHasFocus(true);
          props.onFocus && props.onFocus(event);
        }}
        onBlur={event => {
          setHasFocus(false);
          props.onFocus && props.onBlur(event);
        }}
        {...props}
      />

      {(hasValue || hasFocus) && (
        <ButtonClear onClick={onClear}>
          <Icon name="close" />
        </ButtonClear>
      )}
    </SearchBoxWrapper>
  );
};

export default SearchBox;