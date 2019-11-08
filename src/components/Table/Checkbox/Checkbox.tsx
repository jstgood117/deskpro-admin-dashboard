import React, { SFC, SyntheticEvent } from 'react';

type CheckboxProps = {
  value?:number | string,
  checked:boolean,
  onChange: (event:SyntheticEvent<HTMLInputElement>) => void
};

export const Checkbox:SFC<CheckboxProps> = ({value, checked, onChange}) => (
  <input
    value={value || undefined}
    type='checkbox'
    checked={checked}
    onChange={(event:SyntheticEvent<HTMLInputElement>) => onChange(event)}
  />
);

export default Checkbox;