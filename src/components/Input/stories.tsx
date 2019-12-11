import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputComponent: React.FC<{
  hasError?: boolean;
  showClear?: boolean;
  errorMessage?: string;
}> = ({ hasError, errorMessage, showClear }) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      placeholder='Placeholder'
      errorMessage={errorMessage}
      hasError={hasError}
      onClear={() => setValue('')}
      showClear={showClear}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Input', module)
  .add('input', () => <InputComponent />)
  .add('input with clear button', () => <InputComponent showClear={true}/>)
  .add('input error', () => (
    <InputComponent
      hasError={true}
      errorMessage='Please enter an email in the format of example@mail only'
    />
  ));