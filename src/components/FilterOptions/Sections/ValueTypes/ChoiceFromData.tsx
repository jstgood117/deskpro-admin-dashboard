import React, { SFC } from 'react';
import MultiSelect from '../../../SelectComponents/MultiSelect';
import { IOptions } from '../../../SelectComponents/interfaces';

import { Props } from './types';

const formatToIOptionsFormat = (uniqueValues: string[]): IOptions[] => {

  if(!uniqueValues) {
    return [] as IOptions[];
  }

  return uniqueValues.map((value: string) => ({
    value,
    label:value
  }));

};

const formatFlatArrayFormat = (values: IOptions[]): string[] => {
  return values.map(_val => _val.value);
};

export const ChoiceFromData: SFC<Props> = ({
  filter,
  filters,
  index,
  filterValue,
  setFilterValue,
  uniqueValues
}) => {
  return (
    <MultiSelect
      type='autocomplete'
      options={formatToIOptionsFormat(uniqueValues)}
      selectOptions={(values: IOptions[]) => {
        const flatVals = formatFlatArrayFormat(values);
        filters[index].value = flatVals;
        setFilterValue(flatVals);
      }}
      selectedOptions={
        formatToIOptionsFormat(
          filter && filter.value !== undefined
            ? filter.value
            : filterValue
          )
      }
    />
  );
};

export default ChoiceFromData;