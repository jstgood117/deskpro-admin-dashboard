import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
	background-color: #fff;
	font-size: 14px;
	font-family: ${props => props.theme.mainFont};
`;

export interface IProps {
	children?: ReactNode,
}

const Main: SFC<IProps> = (props) => (
	<MainStyled>{props.children}</MainStyled>
);

Main.defaultProps = {
  children: null,
};

export default Main;
