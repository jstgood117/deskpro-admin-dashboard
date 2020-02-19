import React, { useState } from 'react';
import styled from 'styled-components';
import { IOptions } from '../../types';

import Input from '../Input';
import SingleSelect from '../SelectComponents/SingleSelect';



const UnitsContainer = styled.div`
  display: flex;
  .textbox {
    width: 120px;
    min-width: 120px;
  }
  .selectbox {
    min-width: 104px;
    margin-left: 8px;
  }
`;

export interface IProps {
  inputValue?: string;
  options: IOptions[];
  option?: string;
  onChange: (value: UnitsValuesType) => void;
}

export type UnitsValuesType = {
  inputValue: string;
  selectValue: IOptions;
};

const Units: React.FC<IProps> = ({
  inputValue,
  options,
  option,
  onChange
}) => {
  const [value, setValue] = useState(inputValue);
  const defaultOption = options.find(item => item.value === option);
  const [selectedOption, setSelectOptions] = useState(defaultOption);

  function handleInputChange(event: any) {
    setValue(event.target.value);
    onChange({
      inputValue: event.target.value,
      selectValue: selectedOption
    });
  }

  function handleSelectChange(opt: IOptions) {
    setSelectOptions(opt);
    onChange({
      inputValue: value,
      selectValue: opt
    });
  }

  return (
    <UnitsContainer>
      <div className='textbox'>
        <Input
          value={value}
          inputType='primary'
          onChange={handleInputChange}
        />
      </div>
      <div className='selectbox'>
        <SingleSelect
          options={options}
          selectOption={handleSelectChange}
          selectedOption={selectedOption}
          placeholder='Select Item'
          type='primary'
        />
      </div>
    </UnitsContainer>
  );
};

export default Units;
