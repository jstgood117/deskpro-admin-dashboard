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
      width: 'max-content',
      display: 'inline-flex',
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
      fontWeight: isSelected ? '500' : '400',
      fontFamily: 'Rubik',
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
  singleValue: (styles: any) => ({
    ...styles,
    color: '#4C4F50',
    position: 'unset',
    overflow: 'unset',
    textOverflow: 'unset',
    transform: 'none',
    marginRight: '20px'
  }),
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
        ...styles[':hover'],
        backgroundColor: 'transparent'
      }
    };
  }
};

export const StyledSelect = styled(dpstyle.div)`
  display: inline-flex;
  .select__menu {
    border-radius: 4px;
    width: max-content;
    min-width: 100%;
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
    min-width: 160px;
    .select__indicators {
      padding-right: 12px;
      padding-left: 12px;
      cursor: default;
    }
  }
`;

export const SecondarySelectButton = styled(dpstyle.div)`
  display: inline-flex;
  .select__menu {
    border-radius: 4px;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    overflow-y: hidden;
    width: max-content;
    margin: 0;
    min-width: 100%;
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
    .select__indicators {
      padding-right: 12px;
      cursor: default;
    }
    .select__multi-value {
      display: none;
    }
  }
`;
export const PaginationSelectButton = styled(dpstyle.div)<{
  minWidth: number;
  disabled: boolean;
}>`
  display: inline-flex;
  .select__menu {
    border-radius: 4px;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    overflow-y: hidden;
    width: max-content;
    margin: 0;
    min-width: 100%;
    .select__menu-list {
      overflow-y: hidden;
    }
    .select__option {
      .option-label {
        flex: 1;
      }
    }
  }
  .select__control--is-focused {
    border-color: #1c3e55 !important;
    svg {
      path {
        fill: #1c3e55 !important;
      }
    }
    .select__single-value {
      color: #1c3e55 !important;
    }
    background: #d2d8dd !important;
  }
  .select__control {
    min-width: ${props => props.minWidth}px;
    border-radius: 3px;
    border-color: ${props =>
      props.disabled ? props.theme.greyLighter : props.theme.greyLight};
    color: ${props => props.theme.greyDark};
    min-height: 28px;
    .select__indicators {
      padding-right: 12px;
      cursor: default;
      svg {
        path {
          fill: ${props => props.disabled && props.theme.greyLighter};
        }
      }
    }
    .select__multi-value {
      display: none;
    }
  }
`;

export const LargeSelectButton = styled(dpstyle.div)`
  display: inline-flex;
  .select__menu {
    width: max-content;
    min-width: 100%;
    border-radius: 4px;
    background: ${props => props.theme.white};
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
  .basic-single-select {
    .select__control {
      border: none;
      border-radius: 8px;
      height: 56px;
      padding: 7px 24px 7px 25px;
      font-size: 28px;
      font-weight: 600;
      min-width: 330px;
      .select__value-container {
        padding: 0px;
        .select__single-value {
          color: #4c4f50;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      &:hover,
      &:focus-within {
        background: #e8ebee;
        box-shadow: none;
        path {
          fill: #1c3e55;
        }
      }
      .select__indicators {
        cursor: default;
      }
    }
    .select__placeholder {
      color: #4c4f50;
    }
  }
`;

export const WithImageSelectButton = styled(dpstyle.div)`
  display: inline-flex;
  .select__menu {
    border-radius: 4px;
    width: max-content;
    min-width: 100%;
    background: ${props => props.theme.white};
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
  .basic-single-select {
    .select__control {
      padding-left: 11px;
      height: 34px;
      min-width: 200px;
      border: 1px solid #d3d6d7;
      border-radius: 4px;
      box-sizing: border-box;
      .select__value-container {
        padding: 0px;
        height: 100%;
        display: flex;
        align-items: center;
        .select__single-value {
          color: #4c4f50;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      &:hover {
        box-shadow: none;
        border: 1px solid #a9b0b0;
      }
      &:focus-within {
        box-shadow: none;
        background: #e8ebee;
        border: 1px solid #1c3e55;
        path {
          fill: #1c3e55;
        }
        .select__single-value {
          color: #1c3e55;
        }
        .select__placeholder {
          color: #1c3e55;
        }
      }
      .select__indicators {
        cursor: default;
        height: 100%;
      }
    }
    .select__placeholder {
      color: #4c4f50;
    }
  }
`;

export const DropdownIndicator = () => {
  return <Icon name='downVector' />;
};
export const DropdownIndicator2 = () => {
  return <Icon name='down' />;
};

const { Option } = components;

export const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.image && (
      <img
        src={require(`../../assets/brands/${props.data.image}.png`)}
        width={18}
        height={18}
        style={{ paddingRight: 8 }}
        alt='optionImage'
      />
    )}
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

export const MultiSelectValueContainer2 = ({ children, ...props }: any) => {
  return (
    <components.ValueContainer {...props}>
      {children}
      <div>Select Team</div>
    </components.ValueContainer>
  );
};
export const SingleSelectImageContainer = ({ children, ...props }: any) => {
  const value = props.getValue()[0];
  return (
    <components.ValueContainer {...props}>
      <div style={{ display: 'flex' }}>
        {value && value.image && (
          <img
            src={require(`../../assets/brands/${value.image}.png`)}
            width={18}
            height={18}
            style={{ paddingRight: 8 }}
            alt='optionImage'
          />
        )}
        {children}
      </div>
    </components.ValueContainer>
  );
};
