import React from 'react';
import { storiesOf } from '@storybook/react';

import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
import { IOptions } from './interfaces';

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

const SingleSelectComponent: React.FC<{
  options: IOptions[];
}> = props => {
  const [selectedOption, selectOptions] = React.useState();

  return (
    <SingleSelect
      {...props}
      selectOption={selectOptions}
      selectedOption={selectedOption}
      placeholder='Select Item'
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

storiesOf('SelectComponents', module)
  .add('SingleSelect', () => <SingleSelectComponent options={options} />)
  .add('MultiSelect - searchable type', () => (
    <MultiSelectComponent options={options} type='autocomplete' />
  ))
  .add('MultiSelect - button type', () => (
    <MultiSelectComponent options={options} type='fixed' />
  ));
