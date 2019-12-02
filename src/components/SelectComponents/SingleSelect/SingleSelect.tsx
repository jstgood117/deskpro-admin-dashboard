import React, { SFC } from 'react';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import {
  StyledSelectButton,
  selectStyles,
  IconOption,
  DropdownIndicator
} from '../Helpers';
import { IOptions } from '../interfaces';

export interface IProps {
  options: IOptions[];
  selectOption: (value: IOptions) => void;
  selectedOption?: IOptions;
  placeholder?: string;
}

const SingleSelect: SFC<IProps> = ({ options, selectOption, placeholder }) => {
  const onChange = (selectedOption: IOptions) => {
    selectOption(selectedOption);
  };
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledSelectButton>
        <Select
          isSearchable={false}
          closeMenuOnSelect={false}
          isMulti={false}
          name='colors'
          options={options}
          classNamePrefix='select'
          className='basic-single-select'
          placeholder={placeholder ? placeholder : 'Select Item'}
          styles={selectStyles}
          hideSelectedOptions={false}
          onChange={onChange}
          components={{
            ClearIndicator: false,
            DropdownIndicator,
            IndicatorSeparator: null,
            Option: IconOption
          }}
        />
      </StyledSelectButton>
    </ThemeProvider>
  );
};

export default SingleSelect;
