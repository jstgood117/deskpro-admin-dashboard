import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiSelect, { IOptions } from './MultiSelect';

const options: IOptions[] = [
  { value: 'accounting', label: 'Accounting' },
  { value: 'filter1', label: 'Filter1' },
  { value: 'filter2', label: 'Filter2' },
  { value: 'filter3', label: 'Filter3' },
  { value: 'item', label: 'Item' }
];

storiesOf('MultiSelect', module).add('default', () => <MultiSelect options={options}/>);
