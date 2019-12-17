import React from 'react';
import { storiesOf } from '@storybook/react';

import InlineEdit from './InlineEdit';

storiesOf('InlineEdit', module).add('default', () => {
  const [inputValues, setValues] = React.useState([0, 0, 0]);
  return <InlineEdit error={false} inputValues={inputValues} setValues={(vals: number[])=>setValues(vals)}/>;
});
