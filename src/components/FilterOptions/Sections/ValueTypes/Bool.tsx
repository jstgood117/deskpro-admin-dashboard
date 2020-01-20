import React, { SFC } from 'react';

import { Props } from './types';
import { IOptions } from '../../../../types';
import SingleSelect from '../../../SelectComponents/SingleSelect';
import { selectStyles } from '../../../SelectComponents/Helpers';

const boolOptions: IOptions[] = [
  {
    value: 'yes',
    label: 'Yes'
  },
  {
    value: 'no',
    label: 'No'
  }
];

const boolSelectStyles = {
  control: (styles: React.CSSProperties) => ({
    ...selectStyles.control(styles),
    minWidth: '250px !important'
  })
};

export const Bool: SFC<Props> = ({
  filter,
  filters,
  filterValue,
  index,
  setFilterValue
}) => {
  const value =
    filter && filter.value !== undefined ? filter.value : filterValue;
  const onSelectOption = React.useCallback(
    (option: IOptions) => {
      filters[index].value = [option.value];
      setFilterValue([option.value]);
    },
    [filters, index, setFilterValue]
  );
  return (
    <SingleSelect
      options={boolOptions}
      selectOption={onSelectOption}
      selectedOption={boolOptions.find(
        option => option.value === String(value)
      )}
      styles={boolSelectStyles}
      type='primary'
    />
  );
};

export default Bool;
