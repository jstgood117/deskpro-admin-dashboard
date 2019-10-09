import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button',module)
	.add('primary', () => (
		<Button styleType='primary' onClick={action('clicked')}>Primary Button</Button>
	))
	.add('secondary', () => (
		<Button styleType='secondary' onClick={action('clicked')}>Secondary Button</Button>
	))
	.add('tertiary', () => (
		<Button styleType='tertiary' onClick={action('clicked')}>Tertiary Button</Button>
	));
