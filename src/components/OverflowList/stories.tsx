import React from 'react';
import { storiesOf } from '@storybook/react';

import OverflowList from './OverflowList';
import { testTableData } from '../../resources/constants/constants';
import TeamOverflow from './TeamOverflow';

storiesOf('Overflow List', module)
  .add('string', () => (
    <OverflowList
      max={3}
      items={testTableData}
      renderItem={item => <span>{item.name}</span>}
    />
  ))
  .add('teams - avatar', () => (
    <TeamOverflow
      max={3}
      items={testTableData.map(team => ({
        ...team,
        textColor: '#f9e6e1',
        textBackgroundColor: '#ec6c4e'
      }))}
      styleType='avatar'
    />
  ))
  .add('teams - label', () => (
    <TeamOverflow
      max={3}
      items={testTableData.map(team => ({
        ...team,
        textColor: '#f9e6e1',
        textBackgroundColor: '#ec6c4e'
      }))}
      styleType='label'
    />
  ))
  .add('teams - name-avatar', () => (
    <TeamOverflow
      max={3}
      items={testTableData.map(team => ({
        ...team,
        textColor: '#f9e6e1',
        textBackgroundColor: '#ec6c4e'
      }))}
      styleType='name-avatar'
    />
  ));