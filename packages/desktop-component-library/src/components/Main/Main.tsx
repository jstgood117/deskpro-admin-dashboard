import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
	background-color: #fff;
	color: #000;
	padding: 20px;
	border: 1px solid green;
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
