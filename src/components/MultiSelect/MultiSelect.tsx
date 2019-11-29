import React, { SFC } from 'react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import {
  StyledMultiSelect,
  StyledMultiSelectButton,
  selectStyles,
  IconOption,
  DropdownIndicator,
  MultiSelectValueContainer,
  SingleSelectValueContainer
} from './Helpers';

export interface IProps {
  options: IOptions[];
  type: 'fixed' | 'autocomplete';
  selectOptions: (value: IOptions[]) => void;
  selectedOptions?: IOptions[];
}

export interface IOptions {
  value: string;
  label: string;
}

const MultiSelect: SFC<IProps> = ({ options, type, selectOptions }) => {
  const onChange = (selectedOptions: IOptions[]) => {
    selectOptions(selectedOptions);
  };
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      {type === 'autocomplete' && (
        <StyledMultiSelect>
          <Select
            isMulti={true}
            name='colors'
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder='Select value'
            styles={selectStyles}
            hideSelectedOptions={false}
            components={{
              ClearIndicator: false,
              DropdownIndicator,
              IndicatorSeparator: null,
              Option: IconOption,
              ValueContainer: MultiSelectValueContainer
            }}
          />
        </StyledMultiSelect>
      )}
      {type === 'fixed' && (
        <StyledMultiSelectButton>
          <Select
            isSearchable={false}
            closeMenuOnSelect={false}
            isMulti={true}
            name='colors'
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder={null}
            styles={selectStyles}
            hideSelectedOptions={false}
            onChange={onChange}
            components={{
              ClearIndicator: false,
              DropdownIndicator,
              IndicatorSeparator: null,
              Option: IconOption,
              ValueContainer: SingleSelectValueContainer
            }}
          />
        </StyledMultiSelectButton>
      )}
    </ThemeProvider>
  );
};

export default MultiSelect;
