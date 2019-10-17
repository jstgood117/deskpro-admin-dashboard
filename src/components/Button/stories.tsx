import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import Icon from '../Icon';

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
  .add('tertiary', () => (
    <Button styleType="tertiary" onClick={action('clicked')}>
      Tertiary Button
    </Button>
  ))
  .add('Filter', () => (
    <Button styleType="optional" onClick={action('clicked')}>
      <span style={{ paddingRight: 10, display: 'flex' }}>
        <Icon name="filter" />
      </span>
      Filter
    </Button>
  ));
