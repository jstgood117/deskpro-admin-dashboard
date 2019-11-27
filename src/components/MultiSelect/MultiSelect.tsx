import React, { SFC } from 'react';

import Select from 'react-select';
import styled from 'styled-components';

import { dpstyle } from '../Styled';

export interface IProps {}

const colourOptions = [
  {
    value: 'itemCategory',
    label: 'Item Category',
    color: '#4C4F50',
    isFixed: true,
    isDisabled: true
  },
  { value: 'blue', label: 'Blue', color: '#4C4F50' },
  { value: 'purple', label: 'Purple', color: '#4C4F50' },
  { value: 'red', label: 'Red', color: '#4C4F50' },
  { value: 'orange', label: 'Orange', color: '#4C4F50' },
  { value: 'yellow', label: 'Yellow', color: '#4C4F50' },
  { value: 'green', label: 'Green', color: '#4C4F50' },
  { value: 'forest', label: 'Forest', color: '#4C4F50' },
  { value: 'slate', label: 'Slate', color: '#4C4F50' },
  { value: 'silver', label: 'Silver', color: '#4C4F50' },
  {
    value: 'itemCategory2',
    label: 'Item Category2',
    color: '#4C4F50',
    isFixed: true,
    isDisabled: true
  }
];

const colourStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#FFFFFF',
      boxSizing: 'border-box',
      borderRadius: 4,
      height: 34,
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
  option: (styles: any, { data, isFocused }: any) => {
    return {
      ...styles,
      backgroundColor: !data.isDisabled && isFocused ? '#E8EBEE' : '#FFFFFF',
      color: data.color,
      fontWeight: data.isFixed ? '600' : '400',
      fontSize: 14,
      paddingLeft: 15,
      lineHeight: '150%'
    };
  },
  multiValueLabel: (styles: any, { data }: any) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles: any, { data }: any) => {
    return {
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: 'transparent'
      }
    };
  }
};

const StyledMultiSelect = styled(dpstyle.div)`
  .select__menu {
    margin: 0;
    border-radius: 0;
    background: #ffffff;
    box-shadow: none;
    border: 1px solid #d3d6d7;
    border-top: 0px;
    box-sizing: border-box;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .select__indicators {
    height: 32px;
  }
`;

const MultiSelect: SFC<IProps> = () => {
  return (
    <StyledMultiSelect>
      <Select
        isMulti={true}
        name='colors'
        options={colourOptions}
        className='basic-multi-select'
        classNamePrefix='select'
        styles={colourStyles}
        components={{
          DropdownIndicator: null,
          IndicatorSeparator: null
        }}
      />
    </StyledMultiSelect>
  );
};

export default MultiSelect;
