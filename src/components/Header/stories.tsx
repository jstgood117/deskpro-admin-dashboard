import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './Header';

const test = {
	title: 'Agents',
	description: 'Test Description test test test test test tse ttest tes tte st tes testeste stste e',
	illustration: 'illustration.svg',
	defaultViewMode: 'table'
};

storiesOf('Header',module)
	.add('Standard', () =>(
		<Header
			title={test.title}
			description={test.description}
			illustration={test.illustration}
			showHelpButton={true}
			showViewModeSwitcher={true}
			showLinks={true}
			defaultViewMode={test.defaultViewMode}
			onChangeView={action('changeView')}
			showNewButton={true}
			onNewClick={action('newClick')}
		>
		</Header>
	)
);
