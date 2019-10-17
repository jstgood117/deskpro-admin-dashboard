import React, { ReactNode, SFC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import Button from '../Button/index';

const HeaderStyled = styled.div<IHeaderProps>`
	background-color: ${props => props.theme.pageHeader};
	padding: ${props => props.theme.pagePadding};
	margin-top: ${props => `-${props.theme.pagePadding}`};
	margin-left: ${props => `-${props.theme.pagePadding}`};
	margin-right: ${props => `-${props.theme.pagePadding}`};
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-image: url(assets/${props => props.background});
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: contain;

	& h2 {
		color: ${props => props.theme.activeColour};
		font-size: 40px;
		margin-top: 0;
		margin-bottom: 20px;
	}
	& p {
		color: ${props => props.theme.greyDark};
		font-size: 14px;
		max-width: 30vw;
	}
	& .btn-help {
		background-color: ${props => props.theme.brandPrimary};
		width: 48px;
		height: 48px;
	}
`;

const HeaderRightSectionStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	height: 150px;
`;

const HelpButtonStyled = styled.button`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background-color: ${props => props.theme.brandPrimary};
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
	color: ${props => props.theme.secondaryColour};
	font-size: 20px;
	outline: none;
`;

const FlexBoxStyled = styled.div`
	display: flex;
`;

const ViewButtonGroupBoxStyled = styled.div`
	border-radius: 4px;
	background-color: ${props => props.theme.secondaryColour};
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	display: flex;
`;

const ViewButtonStyled = styled.button<IViewButtonProps>`
	background-color: ${props => props.selected ? props.theme.hoverColour : props.theme.secondaryColour};
	opacity: ${props => props.selected ? 1 : 0.3};
	border-radius: 4px;
	width: 44px;
	height: 34px;
	border: 0;
	outline: none;
	padding: 0;
`;

const NewButtonWrapperStyled = styled.div`
	margin-left: 20px;

	& button {
		height: 100%;
	}
`;

const HeaderLinkButtonStyled = styled.a`
	color: ${props => props.theme.brandPrimary};
	font-size: 15px;
	text-decoration: underline;
	margin-right: 30px;

	& img {
		margin-right: 5px;
	}
`;

interface IViewButtonProps {
	selected?: boolean,
}

interface IHeaderProps {
	background?: string,
}

export interface IProps {
	children?: ReactNode,
	title?: string,
	description?: string,
	illustration?: string,
	showHelpButton?: boolean,
	showViewModeSwitcher?: boolean,
	showLinks?: boolean,
	defaultViewMode?: string,
	showNewButton?: boolean,
	onChangeView?: (e:any) => void,
	onNewClick?: (e:any) => void
}

const Header: SFC<IProps> = (props) => {
	const { onChangeView } = props;
	const [state, setState] = useState(props.defaultViewMode);

	function changeView(viewMode: string) {
		setState(viewMode);
		onChangeView(viewMode);
	};
	
	return (
		<ThemeProvider theme={DeskproAdminTheme}>
			<HeaderStyled background={props.illustration}>
				<div>
					<h2>{props.title}</h2>
					<p>{props.description}</p>
					{props.showLinks && <div>
						<HeaderLinkButtonStyled>
							<img src="assets/ic-login-log.svg" /> Login Log
						</HeaderLinkButtonStyled>
						<HeaderLinkButtonStyled>
							<img src="assets/ic-settings.svg" /> Settings
						</HeaderLinkButtonStyled>
					</div>}
				</div>
				<HeaderRightSectionStyled>
					{props.showHelpButton && <HelpButtonStyled>?</HelpButtonStyled>}
					{props.showViewModeSwitcher && <FlexBoxStyled>
						<ViewButtonGroupBoxStyled>
							<ViewButtonStyled selected={state === 'table'} onClick={() => changeView('table')}>
								<img src="assets/ic-table.svg" />
							</ViewButtonStyled>
							<ViewButtonStyled selected={state === 'list'} onClick={() => changeView('list')}>
								<img src="assets/ic-list.svg" />
							</ViewButtonStyled>
							<ViewButtonStyled selected={state === 'grid'} onClick={() => changeView('grid')}>
								<img src="assets/ic-grid.svg" />
							</ViewButtonStyled>
						</ViewButtonGroupBoxStyled>
						{props.showNewButton && 
							<NewButtonWrapperStyled>
								<Button styleType="primary">+ New</Button>
						</NewButtonWrapperStyled>}
					</FlexBoxStyled>}
				</HeaderRightSectionStyled>
			</HeaderStyled>
		</ThemeProvider>
	)
};

export default Header;
