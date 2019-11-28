import React, { useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';

export interface IItemProps {
  label?: string | number;
  link: string;
}

interface IProps {
  icon?: string;
  label?: string;
  className?: string;
  showClearButton?: boolean;
  items: IItemProps[];
  size?: 'small' | 'medium';
  styleType: 'primary' | 'secondary' | 'tertiary';
  iconOnly?: boolean;
  setValue?: (val: any) => void;
  value?: IItemProps;
}

const DropdownButton: React.FC<IProps> = ({ setValue, value, ...props }) => {
  const [opened, clickButton] = useState(false);

  return (
    <Button
      styleType={props.styleType}
      onClick={() => {
        clickButton(!opened);
      }}
      size={props.size}
      opened={opened}
      items={props.items}
      showClearButton={props.showClearButton}
      dropdownValue={value}
      onSelect={(val: any) => setValue(val)}
      onClear={() => setValue('')}
      iconOnly={props.iconOnly}
      className={props.className}
    >
      {!props.iconOnly && <Icon name={props.icon} />}
      {!props.iconOnly && (value ? value.link : props.children)}
      <Icon name='downVector' />
    </Button>
  );
};
export default DropdownButton;
