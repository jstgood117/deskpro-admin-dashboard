import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import SingleSelect from '../SelectComponents/SingleSelect';

import { IOptions } from '../SelectComponents/interfaces';

const UnitsContainer = styled.div`
  display: flex;
  .textbox {
    width: 88px;
  }
  .selectbox {
    min-width: 104px;
    margin-left: 8px;
  }
`;

export interface IProps {
  inputValue?: number;
  options: IOptions[];
  option?: IOptions;
  onChange: (value: object) => void;
}

const UnitsComponent: React.FC<IProps> = ({
  inputValue,
  options,
  option,
  onChange
}) => {
  const [value, setValue] = useState(inputValue);
  const [selectedOption, setSelectOptions] = useState(option);

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

export default UnitsComponent;
