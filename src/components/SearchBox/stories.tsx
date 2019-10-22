import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from './SearchBox';
import { actions } from '@storybook/addon-actions';

const SearchComponent: React.SFC = () => {
  const [value, setValue] = useState('');

  return (
    <SearchBox
      value={value}
      placeholder="Search"
      onClear={() => actions('onClear')}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Search Box', module).add('Search input', () => (
  <SearchComponent />
));