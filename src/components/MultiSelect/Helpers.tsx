import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import { dpstyle } from '../Styled';
import Icon from '../Icon';

export const selectStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#FFFFFF',
      boxSizing: 'border-box',
      borderRadius: 4,
      minHeight: 'unset',
      boxShadow: 'none',
      borderColor: '#D3D6D7',
      ':focus-within': {
        ...styles[':focus-within'],
        border: 'border: 1px solid',
        borderColor: '#9FCCF3',
        boxShadow: '0px 0px 8px #D2D8DD'
      },
      ':hover': {
        ...styles[':hover'],
        borderColor: '#D3D6D7'
      }
    };
  },
  option: (styles: any, { data, isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: !data.isDisabled && isFocused ? '#E8EBEE' : '#FFFFFF',
      color: isSelected ? '#1C3E55' : '#4C4F50',
      fontWeight: isSelected ? '600' : '400',
      fontSize: 14,
      paddingLeft: 15,
      lineHeight: '150%',
      display: 'flex',
      alignItems: 'center',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#E8EBEE'
      }
    };
  },
  multiValue: (styles: any) => ({
    ...styles,
    borderRadius: 40,
    paddingLeft: 6,
    paddingRight: 8,
    marginRight: 4,
    background: '#E8EBEE'
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    color: '#1C3E55'
  }),
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 13,
      color: '#1C3E55',
      ':hover': {
        backgroundColor: 'transparent'
      }
    };
  }
};

export const StyledMultiSelect = styled(dpstyle.div)`
  .select__menu {
    border-radius: 4px;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    overflow-y: hidden;
    margin: 0;
    .select__menu-list {
      overflow-y: hidden;
    }
    .select__option {
      .option-label {
        flex: 1;
      }
    }
  }
  .select__control {
    min-height: 34px;
    .select__indicators {
      padding-right: 12px;
      cursor: default;
    }
  }
`;

export const StyledMultiSelectButton = styled(dpstyle.div)`
  .select__menu {
    border-radius: 4px;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    overflow-y: hidden;
    margin: 0;
    .select__menu-list {
      overflow-y: hidden;
    }
    .select__option {
      .option-label {
        flex: 1;
      }
    }
  }
  .select__control {
    border-color: #1c3e55;
    color: #1c3e55;
    path {
      fill: #1c3e55;
    }
    &:hover,
    &:focus-within {
      background: #d2d8dd;
      border-color: #1c3e55;
    }
    min-height: 28px;
    width: max-content;
    .select__indicators {
      padding-right: 12px;
      cursor: default;
    }
    .select__multi-value {
      display: none;
    }
  }
`;

export const DropdownIndicator = () => {
  return <Icon name='downVector' />;
};

const { Option } = components;

export const IconOption = (props: any) => (
  <Option {...props}>
    <div className='option-label'>{props.data.label}</div>
    {props.isSelected && (
      <span className='option-icon'>
        <Icon name='check-2' />
      </span>
    )}
  </Option>
);

export const MultiSelectValueContainer = ({ children, ...props }: any) => {
  const { getValue } = props;
  const nbValues = getValue().length;
  if (nbValues < 3) {
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  }
  return (
    <components.ValueContainer {...props}>
      {children[0][0]}
      {children[0][1]}
      <span
        style={{
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 12,
          lineHeight: '150%',
          color: '#8B9293'
        }}
      >
        +{nbValues - 2}
      </span>
    </components.ValueContainer>
  );
};

export const SingleSelectValueContainer = ({ children, ...props }: any) => {
  return (
    <components.ValueContainer {...props}>
      {children}
      <div>Select Team</div>
    </components.ValueContainer>
  );
};
