import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiSelect, { IOptions, IProps } from './MultiSelect';

const MultiSelectComponent: React.FC<{
  options: IOptions[];
  type: 'fixed' | 'autocomplete';
}> = props => {
  const [selectedOptions, selectOptions] = React.useState([]);

  return (
    <MultiSelect
      {...props}
      selectOptions={selectOptions}
      selectedOptions={selectedOptions}
    />
  );
};

const options: IOptions[] = [
  { value: 'accounting', label: 'Accounting' },
  { value: 'filter1', label: 'Filter1' },
  { value: 'filter2', label: 'Filter2' },
  { value: 'filter3', label: 'Filter3' },
  { value: 'item', label: 'Item' }
];

storiesOf('MultiSelect', module)
  .add('searchable type', () => (
    <MultiSelectComponent options={options} type='autocomplete' />
  ))
  .add('button type', () => (
    <MultiSelectComponent options={options} type='fixed' />
  ));
