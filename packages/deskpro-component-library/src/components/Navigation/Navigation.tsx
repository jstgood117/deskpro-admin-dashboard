import React, { SFC } from 'react';
import styled from 'styled-components';

import NavigationSection from './NavigationSection';
import { INavSectionData } from '../../resources/interfaces';

const NavigationStyled = styled.nav`
	background: #e5e5e5;
	width: 200px;
`

interface IProps {
	navData: INavSectionData[];
}

const Navigation: SFC<IProps> = (props) => (
	<NavigationStyled>{props.navData.map( (navSection, index) => <NavigationSection key={index} navData={navSection}></NavigationSection>)}</NavigationStyled>
);

Navigation.defaultProps = {
	navData: [],
};

export default Navigation;
