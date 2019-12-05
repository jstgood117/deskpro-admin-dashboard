import React, { SFC } from 'react';
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
  SingleSelectImageContainer
} from '../Helpers';
import { IOptions } from '../interfaces';



export interface IProps {
  options: IOptions[];
  selectOption: (value: IOptions) => void;
  selectedOption?: IOptions;
  placeholder?: string;
  type: 'withImage' | 'medium' | 'large';
  closeMenuOnSelect?: boolean;
}



const SingleSelect: SFC<IProps> = ({
  options,
  selectOption,
  placeholder,
  type,
  closeMenuOnSelect,
  selectedOption
}) => {
  const onChange = (value: IOptions) => {
    selectOption(value);
  };
  const generateSelect = (overrides:object = {}) => {
    return (
      <Select
        isSearchable={false}
        closeMenuOnSelect={closeMenuOnSelect ? closeMenuOnSelect : true}
        isMulti={false}
        name='colors'
        options={options}
        classNamePrefix='select'
        className='basic-single-select'
        placeholder={placeholder ? placeholder : 'Select Item'}
        styles={selectStyles}
        hideSelectedOptions={false}
        onChange={onChange}
        defaultValue={selectedOption}
        components={{
          ClearIndicator: false,
          DropdownIndicator2,
          IndicatorSeparator: null,
          Option: IconOption
        }}
        {...options}
      />
    );
  };
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      {type === 'medium' && (
        <SecondarySelectButton>
          {generateSelect()}
        </SecondarySelectButton>
      )}
      {type === 'large' && (
        <LargeSelectButton>
          {generateSelect()}
        </LargeSelectButton>
      )}
      {type === 'withImage' && (
        <WithImageSelectButton>
          {generateSelect({
            components: {
              ClearIndicator: false,
              DropdownIndicator2,
              IndicatorSeparator: null,
              Option: IconOption,
              ValueContainer: SingleSelectImageContainer
            }
          })}
        </WithImageSelectButton>
      )}
    </ThemeProvider>
  );
};

export default SingleSelect;
