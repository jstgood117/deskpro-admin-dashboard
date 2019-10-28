import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from './SearchBox';

const SearchComponent: React.SFC = () => {
  const [value, setValue] = useState('');

  return (
    <SearchBox
      value={value}
      placeholder="Search"
      onClear={() => setValue('')}
      onChange={event => setValue(event.target.value)}
    />
  );
};

storiesOf('Search Box', module).add('Search input', () => (
  <SearchComponent />
));