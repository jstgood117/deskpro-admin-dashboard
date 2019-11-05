import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import DropdownButton, { IProps } from './DropdownButton/DropdownButton';
import IconButton from './IconButton';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const FilterItems = [{ link: 'Filter1' }, { link: 'Filter2' }, { link: 'Filter3' }];

const DropButtonComponent: React.FC<IProps> = props => {
  const [value, setValue] = useState('');

  return (
    <DropdownButton
      {...props}
      value={value}
      label={value ? (value.link as any) : props.label}
      onSelect={val => setValue(val)}
      onClear={() => setValue('')}
    />
  );
};

storiesOf('Button', module)
  .add('button/small/icon/primary', () => (
    <IconButton
      icon='plus'
      size='small'
      styleType='primary'
      onClick={action('clicked')}
    />
  ))
  .add('button/small/text/primary', () => (
    <Button styleType='primary' onClick={action('clicked')} size='small'>
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
  .add('button/small/icon-text/primary', () => (
    <Button
      styleType='primary'
      onClick={action('clicked')}
      size='small'
      icon='filter'
    >
      Primary Button
    </Button>
  ))
  .add('button/small/icon-text/secondary', () => (
    <Button
      styleType='secondary'
      onClick={action('clicked')}
      size='small'
      icon='filter'
    >
      Secondary Button
    </Button>
  ))
  .add('button/small/icon-text/tertiary', () => (
    <Button
      styleType='tertiary'
      onClick={action('clicked')}
      size='small'
      icon='filter'
    >
      Tertiary Button
    </Button>
  ))
  .add('button/medium/icon-text/primary', () => (
    <Button
      styleType='primary'
      onClick={action('clicked')}
      size='medium'
      icon='plus'
    >
      Primary Button
    </Button>
  ))
  .add('button/medium/icon-text/secondary', () => (
    <Button
      styleType='secondary'
      onClick={action('clicked')}
      size='medium'
      icon='filter'
    >
      Secondary Button
    </Button>
  ))

  .add('button/small/icon-text/dropdown', () => (
    <DropButtonComponent
      label='Item'
      items={FilterItems}
      size='small'
      iconName='filter'
    />
  ))
  .add('button/medium/icon-text/secondary/dropdown', () => (
    <DropButtonComponent
      label='Item'
      items={SortItems}
      iconName='sort'
      showClearButton={true}
      onClear={action('onClear')}
      size='medium'
    />
  ))
  .add('button/small/icon/secondary', () => (
    <IconButton
      icon='plus'
      size='small'
      styleType='secondary'
      onClick={action('clicked')}
    />
  ))
  .add('button/medium/icon/primary', () => (
    <IconButton
      icon='plus'
      size='medium'
      styleType='primary'
      onClick={action('clicked')}
    />
  ))
  .add('button/medium/icon/secondary', () => (
    <IconButton
      icon='plus'
      size='medium'
      styleType='secondary'
      onClick={action('clicked')}
    />
  ));
