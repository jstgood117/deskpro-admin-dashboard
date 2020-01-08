import React, { SFC } from 'react';

import Input from '../../../Input';

import { Props } from './types';

export const Text: SFC<Props> = ({
  filter,
  filters,
  filterValue,
  index,
  setFilterValue
}) => {
  return (
    <Input
      inputType='secondary'
      style={{ minWidth: 218 }}
      value={
        filter && filter.value !== undefined ? filter.value : filterValue
      }
      onClear={() => {
        filters[index].value = [''];
        setFilterValue(['']);
      }}
      showClear={true}
      onChange={event => {
        filters[index].value = [event.target.value];
        setFilterValue([event.target.value]);
      }}
    />
  );
};

export default Text;