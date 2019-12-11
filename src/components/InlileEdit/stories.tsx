import React from 'react';
import { storiesOf } from '@storybook/react';

import InlileEdit from './InlileEdit';

storiesOf('InlileEdit', module).add('default', () => {
  const [inputValues, setValues] = React.useState([0, 0, 0]);
  return <InlileEdit error={false} inputValues={inputValues} setValues={(vals: number[])=>setValues(vals)}/>;
});
