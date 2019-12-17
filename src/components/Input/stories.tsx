import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputComponent: React.FC<{
  hasError?: boolean;
  showClear?: boolean;
  errorMessage?: string;
  inputType: 'primary' | 'secondary';
}> = ({ hasError, errorMessage, showClear, inputType }) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      placeholder='Placeholder'
      errorMessage={errorMessage}
      hasError={hasError}
      onClear={() => setValue('')}
      showClear={showClear}
      inputType={inputType}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Input', module)
  .add('input-primary', () => <InputComponent inputType='primary' />)
  .add('input-secondary', () => <InputComponent inputType='secondary' />)
  .add('input with clear button', () => (
    <InputComponent inputType='secondary' showClear={true} />
  ))
  .add('input error', () => (
    <InputComponent
      hasError={true}
      inputType='secondary'
      errorMessage='Please enter an email in the format of example@mail only'
    />
  ));
