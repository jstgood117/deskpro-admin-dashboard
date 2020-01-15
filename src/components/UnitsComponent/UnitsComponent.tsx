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

interface IProps {
  inputValue?: number;
  options: IOptions[];
  selectedIndex?: number;
  onChange: (value: object) => void;
}

const UnitsComponent: React.FC<IProps> = ({
  inputValue,
  options,
  selectedIndex,
  onChange
}) => {
  const [value, setValue] = useState(inputValue);
  const [selectedOption, setSelectOptions] = useState(options[selectedIndex]);

  function handleInputChange(event: any) {
    setValue(event.target.value);
    onChange({
      inputValue: event.target.value,
      selectValue: selectedOption
    });
  }

  function handleSelectChange(option: IOptions) {
    setSelectOptions(option);
    onChange({
      inputValue: value,
      selectValue: option
    });
  }

  return (
    <UnitsContainer>
      <div className='textbox'>
        <Input
          value={value}
          inputType={'primary'}
          onChange={handleInputChange}
        />
      </div>
      <div className='selectbox'>
        <SingleSelect
          options={options}
          selectOption={handleSelectChange}
          selectedOption={selectedOption}
          placeholder='Select Item'
          type={'primary'}
        />
      </div>
    </UnitsContainer>
  );
};

export default UnitsComponent;
