import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Icon from './Icon';

storiesOf('Icon',module)
	.addDecorator(checkA11y)
	.add('Setup', () => (
		<Icon name='admin.sidebar.setup' />
	))
	.add('Channels', () => (
		<Icon name='admin.sidebar.channels' />
	))
	.add('Agents', () => (
		<Icon name="admin.sidebar.agents" />
	))
	.add('View Mode Table', () => (
		<Icon name='viewMode.table' />
	))
	.add('View Mode List', () => (
		<Icon name='viewMode.list' />
	))
	.add('View Mode Map', () => (
		<Icon name='viewMode.map' />
	))
	.add('Plus', () => (
		<Icon name='plus' />
	))
	.add('Question', () => (
		<Icon name='question' />
	))
	.add('LoginLog', () => (
		<Icon name='loginLog' />
	))
	.add('Settings', () => (
		<Icon name='settings' />
	))
	.add('Down Vector', () => (
		<Icon name='downVector' />
	))
	.add('Search Icon', () => (
		<Icon name='search' />
	))
	.add('Filter Icon', () => (
		<Icon name='filter' />
	))
	.add('Sort Icon', () => (
		<Icon name='sort' />
	))
	.add('Group Icon', () => (
		<Icon name='group' />
	))
	.add('View Icon', () => (
		<Icon name='view' />
	))
	.add('Help', () => (
		<Icon name='admin.sidebar.help.helpCentre' />
	))
	.add('Indeterminate CheckBox', () => (
		<Icon name='checkbox.indeterminate' />
	))
	.add('Close Icon', () => (
		<Icon name='close' />
	));
