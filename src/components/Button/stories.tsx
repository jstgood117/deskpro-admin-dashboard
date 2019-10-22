import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import FilterButton from './FilterButton/FilterButton';
import DropdownButton from './DropdownButton/DropdownButton';

const DropdownItems = [
  { link: 'Link1' },
  { link: 'Link2' },
  { link: 'Link3' },
  { link: 'Link4' }
];
const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const GroupItems = [{ link: 'Group1' }, { link: 'Group2' }, { link: 'Group3' }];
const ViewItems = [{ link: 'View1' }, { link: 'View2' }];

storiesOf('Button', module)
  .add('primary', () => (
    <Button styleType="primary" onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('secondary', () => (
    <Button styleType="secondary" onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('pink', () => (
    <Button styleType="pink" onClick={action('clicked')}>
      Pink Button
    </Button>
  ))
  .add('outlineGray', () => (
    <Button styleType="outlineGray" onClick={action('clicked')}>
      Gray Button
    </Button>
  ))
  .add('tertiary', () => (
    <Button styleType="tertiary" onClick={action('clicked')}>
      Tertiary Button
    </Button>
  ))
  .add('Dropdown', () => (
    <DropdownButton
      label="Dropdown"
      items={DropdownItems}
      onChangeOption={action('clicked onChangeOption')}
    />
  ))
  .add('Sort', () => (
    <DropdownButton
      label="Sort"
      items={SortItems}
      iconName="sort"
      onChangeOption={action('clicked onChangeOption')}
    />
  ))
  .add('Group', () => (
    <DropdownButton
      label="Group"
      items={GroupItems}
      iconName="group"
      onChangeOption={action('clicked onChangeOption')}
    />
  ))
  .add('View', () => (
    <DropdownButton
      label="View"
      items={ViewItems}
      iconName="view"
      onChangeOption={action('clicked onChangeOption')}
    />
  ))
  .add('Filter', () => (
    <FilterButton onClick={action('clicked')}>Filter</FilterButton>
  ));
