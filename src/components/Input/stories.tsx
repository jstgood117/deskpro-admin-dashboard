import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

const InputComponent: React.SFC = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      placeholder="Placeholder"
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Input', module).add('input', () => <InputComponent />);