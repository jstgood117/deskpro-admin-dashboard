import React, { SFC } from 'react';

import Select from 'react-select';
import styled, { ThemeProvider } from 'styled-components';

import { dpstyle } from '../Styled';
import Icon from '../Icon';
import { DeskproAdminTheme } from '../Theme';

export interface IProps {}

const colourOptions = [
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' }
];

const colourStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#FFFFFF',
      boxSizing: 'border-box',
      borderRadius: 4,
      minHeight: 'unset',
      boxShadow: 'none',
      ':focus-within': {
        ...styles[':focus-within'],
        border: 'border: 1px solid',
        borderColor: '#9FCCF3',
        boxShadow: '0px 0px 8px #D2D8DD',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
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
      lineHeight: '150%'
    };
  },
  multiValue: (styles: any, { data }: any) => ({
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
  multiValueRemove: (styles: any, { data }: any) => {
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

const StyledMultiSelect = styled(dpstyle.div)`
  .select__menu {
    border-radius: 4px;
    background: ${props => props.theme.white};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    margin: 0;
  }
  .select__control {
    min-height: 34px;
    .select__value-container {
      padding: 0px 9px;
    }
    .select__indicators {
      padding-right: 12px;
      cursor: default;
    }
  }
`;

const DropdownIndicator = () => {
  return <Icon name='downVector' />;
};
const MultiSelect: SFC<IProps> = () => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledMultiSelect>
        <Select
          isMulti={true}
          name='colors'
          options={colourOptions}
          className='basic-multi-select'
          classNamePrefix='select'
          placeholder='Select value'
          styles={colourStyles}
          hideSelectedOptions={false}
          components={{
            ClearIndicator: false,
            DropdownIndicator,
            IndicatorSeparator: null
          }}
        />
      </StyledMultiSelect>
    </ThemeProvider>
  );
};

export default MultiSelect;
