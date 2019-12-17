import React, { FC, ReactNode } from 'react';
import Input from '../Input';
import SingleSelect from '../SelectComponents/SingleSelect';
import { IOptions } from '../SelectComponents/interfaces';
import styled from 'styled-components';

export interface IProps {
  children?: ReactNode;
}

const options: IOptions[] = [
  { value: 'gb', label: 'GB' },
  { value: 'mb', label: 'MB' },
  { value: 'kb', label: 'KB' }
];

const StyledFormAndDropdown = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  display: flex;
`;
const StyledSizeDropdown = styled.div`
  padding-left: 8px;
  .select__control {
    min-width: 80px;
    .select__indicators {
      padding-left: 0px;
    }
    .select__single-value {
      margin-right: 0px;
    }
  }
`;

const FormAndDropdown: FC<IProps> = props => {
  const [selectedOption, selectOptions] = React.useState();

  return (
    <StyledFormAndDropdown>
      <Input inputType='primary' style={{ maxWidth: 88 }} type='number' />
      <StyledSizeDropdown>
        <SingleSelect
          options={options}
          type='primary'
          selectOption={selectOptions}
          selectedOption={selectedOption}
          placeholder='Size'
        />
      </StyledSizeDropdown>
    </StyledFormAndDropdown>
  );
};

export default FormAndDropdown;
