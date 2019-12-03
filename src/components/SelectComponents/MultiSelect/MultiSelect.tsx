import React, { SFC } from 'react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import {
  StyledMultiSelect,
  SecondarySelectButton,
  selectStyles,
  IconOption,
  DropdownIndicator,
  MultiSelectValueContainer,
  MultiSelectValueContainer2
} from '../Helpers';
import { IOptions } from '../interfaces';

export interface IProps {
  options: IOptions[];
  type: 'fixed' | 'autocomplete';
  selectOptions: (value: IOptions[]) => void;
  selectedOptions?: IOptions[];
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
        <SecondarySelectButton>
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
              ValueContainer: MultiSelectValueContainer2
            }}
          />
        </SecondarySelectButton>
      )}
    </ThemeProvider>
  );
};

export default MultiSelect;
