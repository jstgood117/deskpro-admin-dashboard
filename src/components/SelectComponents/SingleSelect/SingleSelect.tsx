import React, { FC } from 'react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import {
  SecondarySelectButton,
  LargeSelectButton,
  WithImageSelectButton,
  selectStyles,
  IconOption,
  DropdownIndicator2,
  SingleSelectImageContainer,
  StyledSelect,
  DropdownIndicator
} from '../Helpers';
import { IOptions } from '../../../types';

export interface IProps {
  options: IOptions[];
  selectOption: (value: IOptions) => void;
  selectedOption?: IOptions;
  placeholder?: string;
  type: 'withImage' | 'medium' | 'large' | 'primary';
  closeMenuOnSelect?: boolean;
  isSearchable?: boolean;
  styles?: {
    [style: string]: (styles: React.CSSProperties) => React.CSSProperties;
  };
  visibleIcon?: boolean;
}

const SingleSelect: FC<IProps> = ({
  options,
  selectOption,
  placeholder,
  type,
  closeMenuOnSelect,
  selectedOption,
  isSearchable,
  styles,
  visibleIcon
}) => {
  const onChange = (value: IOptions) => {
    selectOption(value);
  };
  // This line forces rerender.
  const appliedStyles = styles ? { ...selectStyles, ...styles } : selectStyles;
  const generateSelect = () => {
    return (
      <Select
        isSearchable={isSearchable}
        closeMenuOnSelect={closeMenuOnSelect ? closeMenuOnSelect : true}
        isMulti={false}
        options={options}
        classNamePrefix='select'
        className='basic-single-select'
        placeholder={placeholder ? placeholder : 'Select Item'}
        styles={appliedStyles}
        hideSelectedOptions={false}
        onChange={onChange}
        defaultValue={selectedOption}
        components={{
          ClearIndicator: false,
          DropdownIndicator2,
          IndicatorSeparator: null,
          Option: IconOption
        }}
      />
    );
  };
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      {type === 'medium' && (
        <SecondarySelectButton>{generateSelect()}</SecondarySelectButton>
      )}
      {type === 'large' && (
        <LargeSelectButton>{generateSelect()}</LargeSelectButton>
      )}
      {type === 'withImage' && (
        <WithImageSelectButton>
          <Select
            isSearchable={isSearchable}
            closeMenuOnSelect={closeMenuOnSelect ? closeMenuOnSelect : true}
            isMulti={false}
            options={options}
            classNamePrefix='select'
            className='basic-single-select'
            placeholder={placeholder ? placeholder : 'Select Item'}
            styles={appliedStyles}
            hideSelectedOptions={false}
            onChange={onChange}
            components={{
              ClearIndicator: false,
              DropdownIndicator2,
              IndicatorSeparator: null,
              Option: IconOption,
              ValueContainer: SingleSelectImageContainer
            }}
          />
        </WithImageSelectButton>
      )}
      {type === 'primary' && (
        <StyledSelect>
          <Select
            isSearchable={isSearchable}
            isMulti={false}
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder={placeholder !==undefined ? placeholder : 'Select Item'}
            styles={appliedStyles}
            hideSelectedOptions={false}
            defaultValue={selectedOption}
            onChange={onChange}
            components={{
              ClearIndicator: false,
              DropdownIndicator,
              IndicatorSeparator: null,
              Option: IconOption
            }}
          />
        </StyledSelect>
      )}
    </ThemeProvider>
  );
};
SingleSelect.defaultProps = {
  isSearchable: false,
  visibleIcon: true
};
export default SingleSelect;
