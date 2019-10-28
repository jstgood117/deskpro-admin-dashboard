import React, { useState, useEffect } from 'react';

import Button from '../Button';
import SearchBox from '../SearchBox';
import Checkbox from '../Checkbox';

const CheckboxComponent: React.FC<{
  indeterminate?: boolean;
  showArrow?: boolean;
}> = ({ indeterminate, showArrow }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      value="checked"
      indeterminate={indeterminate}
      showArrow={showArrow}
      onChange={(event: any) => setChecked(event.target.checked)}
    />
  );
};

export interface ICustomProps {
  value: string | number | string[];
  required: boolean;
  onChange: (arg0: string) => void;
}

export const SearchComponent: React.SFC<ICustomProps> = ({ onChange }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);
  return (
    <SearchBox
      value={value}
      placeholder="Search"
      onClear={e => {
        e.preventDefault();
        setValue('');
      }}
      onChange={event => {
        setValue(event.target.value);
      }}
    />
  );
};

export const ButtonComponent: React.SFC<ICustomProps> = props => {
  return <Button styleType="primary">{props.value}</Button>;
};

export const CheckboxWidget: React.SFC<ICustomProps> = props => {
  return <CheckboxComponent indeterminate={true} />;
};
