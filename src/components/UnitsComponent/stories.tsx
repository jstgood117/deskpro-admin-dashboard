import React from 'react';
import { storiesOf } from '@storybook/react';
import { IOptions } from '../SelectComponents/interfaces';

import UnitsComponent from './UnitsComponent';

const options: IOptions[] = [
  { value: 'minutes', label: 'minutes' },
  { value: 'hours', label: 'hours' },
  { value: 'seconds', label: 'seconds' },
];

storiesOf('UnitsComponent', module)
  .add('default', () => {
    const handleChange = (value: object) => {
      console.log(value);
    };

    return (
      <UnitsComponent
        inputValue={10}
        options={options}
        selectedIndex={1}
        onChange={(value: object) => {
          handleChange(value);
        }}
      />
    );
  });
