import React, { FC } from 'react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import {
  StyledSelect,
  SecondarySelectButton,
  selectStyles,
  IconOption,
  DropdownIndicator,
  MultiSelectValueContainer,
  MultiSelectValueContainer2
} from '../Helpers';
import { IOptions } from '../../../types';

export interface IProps {
  options: IOptions[];
  type: 'fixed' | 'autocomplete';
  selectOptions: (value: IOptions[]) => void;
  selectedOptions?: IOptions[];
  defaultValue?: IOptions[];
}

const MultiSelect: FC<IProps> = ({
  options,
  type,
  selectOptions,
  defaultValue
}) => {
  const onChange = (selectedOptions: IOptions[]) => {
    selectOptions(selectedOptions);
  };

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      {type === 'autocomplete' && (
        <StyledSelect>
          <Select
            isMulti={true}
            options={options}
            className='basic-multi-select'
            classNamePrefix='select'
            placeholder='Select value'
            styles={selectStyles}
            hideSelectedOptions={false}
            onChange={onChange}
            defaultValue={
              defaultValue && defaultValue.length > 0 ? defaultValue : undefined
            }
            components={{
              ClearIndicator: false,
              DropdownIndicator,
              IndicatorSeparator: null,
              Option: IconOption,
              ValueContainer: MultiSelectValueContainer
            }}
          />
        </StyledSelect>
      )}
      {type === 'fixed' && (
        <SecondarySelectButton>
          <Select
            isSearchable={false}
            closeMenuOnSelect={false}
            isMulti={true}
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
