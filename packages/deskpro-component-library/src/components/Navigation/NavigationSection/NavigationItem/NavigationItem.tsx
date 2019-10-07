import React, { SFC } from 'react';
import styled from 'styled-components';

import { INavItemData } from '../../../../resources/interfaces';

const NavigationItemStyled = styled.li`
	padding: 10px;
	list-style: none;
`

interface IProps {
	key: number;
	navData: INavItemData;
}

const NavigationItem: SFC<IProps> = (props) => (
	<NavigationItemStyled>{props.navData.navItemName}</NavigationItemStyled>
);

NavigationItem.defaultProps = {
  key: 0,
	navData: {
		navItemName: '',
		url: '',
	},
};

export default NavigationItem;
