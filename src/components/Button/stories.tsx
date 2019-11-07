import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { IItemProps } from './Button';
import Icon from '../Icon';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];

interface IDropdownBtn {
  icon: string;
  label: string;
  showClearButton?: boolean;
  items: IItemProps[];
  size?: 'small' | 'medium';
  styleType: 'primary' | 'secondary' | 'tertiary';
}
const DropdownButtonComponent: React.FC<IDropdownBtn> = props => {
  const [opened, clickButton] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();

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
      dropdownValue={dropdownValue}
      onSelect={(val: any) => setDropdownValue(val)}
      onClear={() => setDropdownValue('')}
    >
      <Icon name={props.icon} />
      {dropdownValue ? dropdownValue.link : props.label}
      <Icon name='downVector' />
    </Button>
  );
};

storiesOf('Button', module)
  .add('button/small/text/primary', () => (
    <Button styleType='primary' onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('button/small/text/secondary', () => (
    <Button styleType='secondary' onClick={action('clicked')} size='small'>
      Secondary Button
    </Button>
  ))
  .add('button/small/text/tertiary', () => (
    <Button styleType='tertiary' onClick={action('clicked')} size='small'>
      Tertiary Button
    </Button>
  ))
  .add('button/medium/text/primary', () => (
    <Button styleType='primary' onClick={action('clicked')} size='medium'>
      Primary Button
    </Button>
  ))
  .add('button/medium/text/secondary', () => (
    <Button styleType='secondary' onClick={action('clicked')} size='medium'>
      Secondary Button
    </Button>
  ))

  .add('button/small/icon-text/tertiary/dropdown', () => (
    <DropdownButtonComponent
      icon='filter'
      label='Item'
      items={SortItems}
      size='small'
      styleType='tertiary'
    />
  ))
  .add('button/medium/icon-text/secondary/dropdown', () => (
    <DropdownButtonComponent
      icon='filter'
      label='Item'
      showClearButton={true}
      items={SortItems}
      size='medium'
      styleType='secondary'
    />
  ))
  .add('button/small/icon-text/primary', () => (
    <Button styleType='primary' onClick={action('clicked')} size='small'>
      <Icon name='filter' />
      Item
    </Button>
  ))
  .add('button/small/icon-text/secondary', () => (
    <Button styleType='secondary' onClick={action('clicked')} size='small'>
      <Icon name='filter' />
      Item
    </Button>
  ))
  .add('button/small/icon-text/tertiary', () => (
    <Button styleType='tertiary' onClick={action('clicked')} size='small'>
      <Icon name='filter' />
      Item
    </Button>
  ))
  .add('button/medium/icon-text/primary', () => (
    <Button styleType='primary' onClick={action('clicked')} size='medium'>
      <Icon name='plus' />
      Item
    </Button>
  ))
  .add('button/medium/icon-text/secondary', () => (
    <Button styleType='secondary' onClick={action('clicked')} size='medium'>
      <Icon name='filter' />
      Filter
    </Button>
  ))
  .add('button/small/icon/primary', () => (
    <Button
      styleType='primary'
      onClick={action('clicked')}
      size='small'
      iconOnly={true}
    >
      <Icon name='plus' />
    </Button>
  ))
  .add('button/small/icon/secondary', () => (
    <Button
      styleType='secondary'
      onClick={action('clicked')}
      size='small'
      iconOnly={true}
    >
      <Icon name='plus' />
    </Button>
  ))
  .add('button/small/icon/tertiary', () => (
    <Button
      styleType='tertiary'
      onClick={action('clicked')}
      size='small'
      iconOnly={true}
    >
      <Icon name='plus' />
    </Button>
  ))
  .add('button/medium/icon/primary', () => (
    <Button
      styleType='primary'
      onClick={action('clicked')}
      size='medium'
      iconOnly={true}
    >
      <Icon name='plus' />
    </Button>
  ))
  .add('button/medium/icon/secondary', () => (
    <Button
      styleType='secondary'
      onClick={action('clicked')}
      size='medium'
      iconOnly={true}
    >
      <Icon name='plus' />
    </Button>
  ));
