import React from 'react';
import { storiesOf } from '@storybook/react';
import { IOptions } from '../../types';

import Units, { UnitsValuesType } from './Units';

const options: IOptions[] = [
  { value: 'minutes', label: 'minutes' },
  { value: 'hours', label: 'hours' },
  { value: 'seconds', label: 'seconds' },
];

storiesOf('Units', module)
  .add('default', () => {
    const handleChange = (value: UnitsValuesType) => {
      console.log(value);
    };

    return (
      <Units
        inputValue='10'
        options={options}
        option={options[1]}
        onChange={(value: UnitsValuesType) => {
          handleChange(value);
        }}
      />
    );
  });
