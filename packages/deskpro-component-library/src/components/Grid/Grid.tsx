import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const GridStyled = styled.div`
	display: grid;
	grid-template-columns: 200px auto;
`

export interface IProps {
	children?: ReactNode,
}

const Grid: SFC<IProps> = (props) => (
	<GridStyled>{props.children}</GridStyled>
);

export default Grid;
