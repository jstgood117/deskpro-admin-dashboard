import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator(checkA11y)
  .add('admin.sidebar.setup', () => <Icon name="admin.sidebar.setup" />)
  .add('admin.sidebar.channels', () => <Icon name="admin.sidebar.channels" />)
  .add('admin.sidebar.agents', () => <Icon name="admin.sidebar.agents" />)
  .add('viewMode.table', () => <Icon name="viewMode.table" />)
  .add('viewMode.list', () => <Icon name="viewMode.list" />)
  .add('viewMode.map', () => <Icon name="viewMode.map" />)
  .add('plus', () => <Icon name="plus" />)
  .add('plus', () => <Icon name="question" />)
  .add('loginLog', () => <Icon name="loginLog" />)
  .add('settings', () => <Icon name="settings" />)
  .add('downVector', () => <Icon name="downVector" />)
  .add('search', () => <Icon name="search" />)
  .add('filter', () => <Icon name="filter" />)
  .add('sort', () => <Icon name="sort" />)
  .add('group', () => <Icon name="group" />)
  .add('view', () => <Icon name="view" />)
  .add('admin.sidebar.help.helpCentre', () => <Icon name="admin.sidebar.help.helpCentre" />)
  .add('checkbox.indeterminate', () => <Icon name="checkbox.indeterminate" />)
  .add('close', () => <Icon name="close" />)
  .add('admin', () => <Icon name="admin" />)
  .add('report', () => <Icon name="report" />)
  .add('user.check', () => <Icon name="user.check" />)
  .add('clock', () => <Icon name="clock" />)
;