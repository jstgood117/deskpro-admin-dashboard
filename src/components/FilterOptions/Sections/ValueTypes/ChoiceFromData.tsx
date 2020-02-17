import React, { SFC } from 'react';
import styled from 'styled-components';

import MultiSelect from '../../../SelectComponents/MultiSelect';
import { IOptions } from '../../../../types';

import { Props } from './types';

export const formatToIOptionsFormat = (uniqueValues: string[]): IOptions[] => {
  if (!uniqueValues) {
    return [] as IOptions[];
  }

  return uniqueValues
    .filter(_val => _val !== '')
    .map((value: string) => {
      return {
        value,
        label: value
      };
    });
};

export const formatFlatArrayFormat = (values: IOptions[]): string[] => {
  if (!values) return [];

  return values.map(_val => _val.value);
};

const StyledChoice = styled.div`
  .select__value-container {
    min-width: 218px;
  }
`;

export const ChoiceFromData: SFC<Props> = ({
  filter,
  filters,
  index,
  filterValue,
  setFilterValue,
  uniqueValues
}) => {
  const values = formatToIOptionsFormat(
    filter && filter.value !== undefined ? filter.value : filterValue
  );

  return (
    <StyledChoice>
      <MultiSelect
        type='autocomplete'
        options={formatToIOptionsFormat(uniqueValues)}
        selectOptions={(_vals: IOptions[]) => {
          const flatVals = formatFlatArrayFormat(_vals);
          filters[index].value = flatVals;
          setFilterValue(flatVals);
        }}
        defaultValue={values}
        selectedOptions={values}
      />
    </StyledChoice>
  );
};

export default ChoiceFromData;
