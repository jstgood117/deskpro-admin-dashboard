import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator(withA11y)
  .add('setup', () => <Icon name='setup' />)
  .add('channels', () => <Icon name='channels' />)
  .add('agent', () => <Icon name='agent' />)
  .add('viewMode.table', () => <Icon name='viewMode.table' />)
  .add('viewMode.list', () => <Icon name='viewMode.list' />)
  .add('viewMode.map', () => <Icon name='viewMode.map' />)
  .add('plus', () => <Icon name='plus' />)
  .add('question', () => <Icon name='question' />)
  .add('loginLog', () => <Icon name='loginLog' />)
  .add('settings', () => <Icon name='settings' />)
  .add('downVector', () => <Icon name='downVector' />)
  .add('rightVector', () => <Icon name='rightVector' />)
  .add('search', () => <Icon name='search' />)
  .add('filter', () => <Icon name='filter' />)
  .add('sort', () => <Icon name='sort' />)
  .add('group', () => <Icon name='group' />)
  .add('view', () => <Icon name='view' />)
  .add('help', () => <Icon name='help' />)
  .add('checkbox.indeterminate', () => <Icon name='checkbox.indeterminate' />)
  .add('checkbox.normal', () => <Icon name='checkbox.normal' />)
  .add('close', () => <Icon name='close' />)
  .add('admin', () => <Icon name='admin' />)
  .add('report', () => <Icon name='report' />)
  .add('user.check', () => <Icon name='user.check' />)
  .add('user.setting', () => <Icon name='user.setting' />)
  .add('user.alias', () => <Icon name='user.alias' />)
  .add('clock', () => <Icon name='clock' />)
  .add('menu', () => <Icon name='menu' />)
  .add('trash', () => <Icon name='trash' />)
  .add('chat', () => <Icon name='chat' />)
  .add('nav.chat', () => <Icon name='nav.chat' />)
  .add('nav.message', () => <Icon name='nav.message' />)
  .add('nav.users', () => <Icon name='nav.users' />)
  .add('nav.thumb', () => <Icon name='nav.thumb' />)
  .add('nav.notification', () => <Icon name='nav.notification' />)
  .add('nav.setting', () => <Icon name='nav.setting' />)
  .add('nav.dollar', () => <Icon name='nav.dollar' />)
  .add('nav.helpCentre', () => <Icon name='nav.helpCentre' />)
  .add('nav.data', () => <Icon name='nav.data' />)
  .add('nav.pie', () => <Icon name='nav.pie' />)
  .add('refresh', () => <Icon name='refresh' />)
  .add('check-2', () => <Icon name='check-2' />)
  .add('check', () => <Icon name='check' />)
  .add('caret-left', () => <Icon name='caret-left' />)
  .add('caret-right', () => <Icon name='caret-right' />)
  .add('error', () => <Icon name='error' />)
  .add('attachment', () => <Icon name='attachment' />)
  .add('collapse', () => <Icon name='collapse' />)
  .add('dial', () => <Icon name='dial' />)
  .add('export', () => <Icon name='export' />)
  .add('move-down', () => <Icon name='move-down' />)
  .add('move-left', () => <Icon name='move-left' />)
  .add('move-up', () => <Icon name='move-up' />)
  .add('file', () => <Icon name='file' />)
  .add('drag-and-drop', () => <Icon name='drag-and-drop' />)
  .add('drag-and-drop-file', () => <Icon name='drag-and-drop-file' />)
  .add('pencil', () => <Icon name='pencil' />)
  .add('upload', () => <Icon name='upload' />)
  .add('elephant', () => <Icon name='elephant' />)
  .add('info-text', () => <Icon name='info-text' />)
  .add('info-question-text', () => <Icon name='info-question-text' />)
  .add('down', () => <Icon name='down' />)
  .add('guide', () => <Icon name='guide' />)
  .add('ic-dollar-sign', () => <Icon name='ic-dollar-sign' />)
  .add('ic-help-center', () => <Icon name='ic-help-center' />)
  .add('ic-arrow-right', () => <Icon name='ic-arrow-right' />)
  .add('ic-grouping-up', () => <Icon name='ic-grouping-up' />)
  .add('ic-grouping-down', () => <Icon name='ic-grouping-down' />);
