import React from 'react';

import { storiesOf } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../Button';

storiesOf('Tooltip', module)
  .add('simple', () => (
    <React.Fragment>
      <Tooltip content='Tooltip' styleType='dark' className='mt-10'>
        <span style={{ marginRight: 20 }}>
          <Button styleType='primary'>Tooltip</Button>
        </span>
      </Tooltip>

      <Tooltip content='Tooltip' styleType='light'>
        <span>Tooltip</span>
      </Tooltip>
    </React.Fragment>
  ))
  .add('custom content', () => (
    <Tooltip
      content={
        <span style={{ fontSize: 20, backgroundColor: 'red' }}>Custom</span>
      }
      styleType='dark'
      className='mt-10'
    >
      <span style={{ marginRight: 20 }}>
        <Button styleType='primary'>Tooltip</Button>
      </span>
    </Tooltip>
  ))
  .add('positioned', () => (
    <div style={{ marginTop: 50 }}>
      <Tooltip content='Tooltip' styleType='dark' placement='top'>
        <span style={{ marginRight: 20 }}>Top</span>
      </Tooltip>
      <Tooltip content='Tooltip' styleType='dark' placement='right'>
        <span style={{ marginRight: 20 }}>Right</span>
      </Tooltip>
      <Tooltip content='Tooltip' styleType='dark' placement='bottom'>
        <span style={{ marginRight: 20 }}>Bottom</span>
      </Tooltip>
      <Tooltip content='Tooltip' styleType='dark' placement='left'>
        <span>Left</span>
      </Tooltip>
    </div>
  ));