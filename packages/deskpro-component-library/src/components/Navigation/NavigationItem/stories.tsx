import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import NavigationItem from './NavigationItem';

storiesOf('NavigationItem',module)
	.addDecorator(checkA11y)
	.add('with text', () => (
		<NavigationItem>Hello NavigationItem</NavigationItem>
	));