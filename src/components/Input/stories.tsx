import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputComponent: React.SFC<{
  hasError?: boolean;
  errorMessage?: string;
}> = ({ hasError, errorMessage }) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      placeholder="Placeholder"
      errorMessage={errorMessage}
      hasError={hasError}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Input', module)
  .add('input', () => <InputComponent />)
  .add('input error', () => (
    <InputComponent
      hasError={true}
      errorMessage="Please enter an email in the format of example@mail only"
    />
  ));