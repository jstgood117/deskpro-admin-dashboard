import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox from './SearchBox';

storiesOf('Search Box', module).add('Search input', () => (
  <SearchBox placeholder="Search" />
));
