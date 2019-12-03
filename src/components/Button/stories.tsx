import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Icon from '../Icon';
import WithDropdownButton from './WithDropdownButton';
import DropdownButton, { IItemProps } from './DropdownButton';

import brand1 from '../../assets/brands/brand1.png';
import brand2 from '../../assets/brands/brand2.png';
import brand3 from '../../assets/brands/brand3.png';
import brand4 from '../../assets/brands/brand4.png';
import brand5 from '../../assets/brands/brand5.png';
import BrandButtonGroup from './BrandButtonGroup';

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
interface IImageBtn {
  size?: 'small' | 'medium';
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
const ImageButtonComponent: React.FC<IImageBtn> = props => {
  return (
    <Button
      styleType='imageButton'
      onClick={action('clicked')}
      size={props.size}
      imageBtnSelected={true}
    >
      {props.children}
    </Button>
  );
};
const BrandButtonGroupComponent: React.FC<IImageBtn> = props => {
  const [selected, selectBtn] = useState();
  return (
    <BrandButtonGroup
      size={props.size}
      selectBtn={(val: string) => {
        selectBtn(val);
      }}
      selected={selected}
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
  ))
  .add('button/medium/withImage/Brand1', () => (
    <ImageButtonComponent size='medium'>
      <img src={brand1} alt='brand1' />
      Brand 1
    </ImageButtonComponent>
  ))
  .add('button/medium/withImage/Brand2', () => (
    <ImageButtonComponent size='medium'>
      <img src={brand2} alt='brand2' />
      Brand 2
    </ImageButtonComponent>
  ))
  .add('button/medium/withImage/Brand3', () => (
    <ImageButtonComponent size='medium'>
      <img src={brand3} alt='brand3' />
      Brand 3
    </ImageButtonComponent>
  ))
  .add('button/medium/withImage/Brand4', () => (
    <ImageButtonComponent size='medium'>
      <img src={brand4} alt='brand4' />
      Brand 4
    </ImageButtonComponent>
  ))
  .add('button/medium/withImage/Brand5', () => (
    <ImageButtonComponent size='medium'>
      <img src={brand5} alt='brand5' />
      Brand 5
    </ImageButtonComponent>
  ))
  .add('button/medium/withImage/BrandButtonGroup', () => (
    <BrandButtonGroupComponent size='medium' />
  ));
