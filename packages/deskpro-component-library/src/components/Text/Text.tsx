import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

interface IStyleProps {
  styleType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 's1' | 's2',
}

const TextStyled = styled.p<IStyleProps>`
	font-family:  ${props => {
		switch (props.styleType) {
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h4':
			case 'h5':
			case 'h6':
				return 'Rubik, sans-serif';
			case 'p1':
			case 'p2':
			case 's1':
			case 's2':
				return 'Lato, sans-serif';
		}
	}};

	font-size: ${props => {
		switch (props.styleType) {
			case 'h1':
				return '28px';
			case 'h2':
				return '18px';
			case 'h3':
			case 'h4':
				return '16px';
			case 'h5':
			case 'h6':
				return '15px';
			case 'p1':
			case 'p2':
				return '14px';
			case 's1':
			case 's2':
				return '12px';
		}
	}};

	font-weight: ${props => {
		switch (props.styleType) {
			case 'h1':
			case 'h2':
			case 'h3':
			case 'h5':
			case 'p1':
			case 's2':
				return 'normal';
			case 'h4':
			case 'h6':
			case 'p2':
			case 's1':
				return 'bold';
		}
	}};
`

export interface IProps {
	children?: ReactNode,
	onClick?: (e:any) => void,
}

const Text: SFC<IProps & IStyleProps> = (props) => (
  <ThemeProvider theme={DeskproAdminTheme}>
		<TextStyled onClick={props.onClick} styleType={props.styleType}>{props.children}</TextStyled>
	</ThemeProvider>
);

export default Text;
