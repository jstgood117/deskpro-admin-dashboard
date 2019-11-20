import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

const CheckboxComponent: React.FC<{
  indeterminate?: boolean;
  showArrow?: boolean;
}> = ({ indeterminate, showArrow }) => {
  const [checked, setChecked] = useState(false);
  const [opened, clickButton] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
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