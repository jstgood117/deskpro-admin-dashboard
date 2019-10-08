import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text',module)
	.add('h1', () => (
		<Text styleType='h1'>h1 text</Text>
	))
	.add('h2', () => (
		<Text styleType='h2'>h2 text</Text>
	))
	.add('h3', () => (
		<Text styleType='h3'>h3 text</Text>
	))
	.add('h4', () => (
		<Text styleType='h4'>h4 text</Text>
	))
	.add('h5', () => (
		<Text styleType='h5'>h5 text</Text>
	))
	.add('h6', () => (
		<Text styleType='h6'>h6 text</Text>
	))
	.add('p1', () => (
		<Text styleType='p1'>p1 text</Text>
	))
	.add('p2', () => (
		<Text styleType='p2'>p2 text</Text>
	))
	.add('s1', () => (
		<Text styleType='s1'>s1 text</Text>
	))
	.add('s2', () => (
		<Text styleType='s2'>s2 text</Text>
	));
