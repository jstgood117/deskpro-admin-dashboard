import React from 'react';
import { storiesOf } from '@storybook/react';

import FilterItem from './FilterItem';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

const filter: IFilterProps = { property: 'Team', option: 'EQUAL', filterKey: 'Audit' };

storiesOf('FilterItem', module).add('default', () => <FilterItem filter={filter} />);
