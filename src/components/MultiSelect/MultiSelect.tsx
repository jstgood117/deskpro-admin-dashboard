import React, { SFC } from 'react';

import Select from 'react-select';
import styled from 'styled-components';
import chroma from 'chroma-js';

import { dpstyle } from '../Styled';

export interface IProps {}

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: 'blue', isFixed: true },
  { value: 'blue', label: 'Blue', color: 'red', isDisabled: true },
  { value: 'purple', label: 'Purple', color: 'red' },
  { value: 'red', label: 'Red', color: '#fff', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#fff' },
  { value: 'yellow', label: 'Yellow', color: '#fff' },
  { value: 'green', label: 'Green', color: '#fff' },
  { value: 'forest', label: 'Forest', color: '#fff' },
  { value: 'slate', label: 'Slate', color: '#fff' },
  { value: 'silver', label: 'Silver', color: '#fff' }
];

const colourStyles = {
  control: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#FFFFFF',
      boxSizing: 'border-box',
      borderRadius: 4,
      boxShadow: 'none',
      ':focus-within': {
        ...styles[':focus-within'],
        border: 'border: 1px solid',
        borderColor: '#9FCCF3',
        boxShadow: '0px 0px 8px #D2D8DD'
      }
    };
  },
  option: (
    styles: { [x: string]: any },
    { data, isDisabled, isFocused, isSelected }: any
  ) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      top: 0,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      }
    };
  },
  multiValue: (styles: any, { data }: any) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
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
        backgroundColor: data.color,
        color: 'white'
      }
    };
  }
};

const StyledMultiSelect = styled(dpstyle.div)``;
const MultiSelect: SFC<IProps> = () => {
  return (
    <StyledMultiSelect>
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti={true}
        name='colors'
        options={colourOptions}
        className='basic-multi-select'
        classNamePrefix='select'
        styles={colourStyles}
      />
    </StyledMultiSelect>
  );
};

export default MultiSelect;
