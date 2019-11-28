import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Icon from '../Icon';
import WithDropdownButton from './WithDropdownButton';
import DropdownButton, { IItemProps } from './DropdownButton';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];

interface IDropdownBtn {
  icon?: string;
  label?: string;
  showClearButton?: boolean;
  items: IItemProps[];
  size?: 'small' | 'medium';
  styleType: 'primary' | 'secondary' | 'tertiary';
  iconOnly?: boolean;
}
const DropdownButtonComponent: React.FC<IDropdownBtn> = props => {
  const [value, setValue] = useState();

  return (
    <DropdownButton
      {...props}
      setValue={val => {
        setValue(val);
      }}
      value={value}
    />
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
      items={SortItems}
      size='small'
      styleType='tertiary'
    >
      Item
    </DropdownButtonComponent>
  ))
  .add('button/medium/icon-text/secondary/dropdown', () => (
    <DropdownButtonComponent
      icon='filter'
      showClearButton={true}
      items={SortItems}
      size='medium'
      styleType='secondary'
    >
      Item
    </DropdownButtonComponent>
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
  ))
  .add('button/medium/icon/primary/dropdownOnly', () => (
    <DropdownButtonComponent
      icon='filter'
      items={SortItems}
      size='medium'
      styleType='primary'
      iconOnly={true}
    >
      Item
    </DropdownButtonComponent>
  ))
  .add('button/medium/icon/secondary/dropdownOnly', () => (
    <DropdownButtonComponent
      items={SortItems}
      size='medium'
      styleType='secondary'
      iconOnly={true}
    >
      Item
    </DropdownButtonComponent>
  ))
  .add('button/medium/primary/withDropdownButton', () => (
    <div style={{ position: 'absolute', right: 10 }}>
      <WithDropdownButton
        icon='plus'
        styleType='primary'
        handleSelect={action('clicked')}
        size='medium'
      >
        Add
      </WithDropdownButton>
    </div>
  ))
  .add('button/medium/secondary/withDropdownButton', () => (
    <WithDropdownButton
      icon='trash'
      styleType='secondary'
      handleSelect={action('clicked')}
      contentPosistion='left'
      size='small'
    />
  ));
