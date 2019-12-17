import React, { FC, ReactNode } from 'react';
import Input from '../Input';

export interface IProps {
  children?: ReactNode;
}

const FormAndDropdown: FC<IProps> = props => {
  return (
    <div>
      <Input
        placeholder='Placeholder'
        inputType='primary'
        style={{
          width: 30,
          height: 30,
          textAlign: 'center'
        }}
        type='number'
      />
    </div>
  );
};

export default FormAndDropdown;
