import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';
import { IButtonItemProps } from '../../resources/interfaces';

const CheckboxComponent: React.FC<{
  indeterminate?: boolean;
  showArrow?: boolean;
}> = ({ indeterminate, showArrow }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [opened, clickButton] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<IButtonItemProps>();
  const items = [{ link: 'All on the page' }, { link: 'All' }];

  return (
    <Checkbox
      checked={checked}
      opened={opened}
      clickButton={clickButton}
      setDropdownValue={setDropdownValue}
      dropdownValue={dropdownValue}
      items={items}
      value='checked'
      indeterminate={indeterminate}
      showArrow={showArrow}
      onChange={event => setChecked(event.target.checked)}
    />
  );
};

storiesOf('Checkbox', module)
  .add('checkbox', () => <CheckboxComponent />)
  .add('checkbox/mass-select', () => <CheckboxComponent indeterminate={true} />)
  .add('checkbox/mass-select with icon', () => (
    <CheckboxComponent indeterminate={true} showArrow={true} />
  ));
