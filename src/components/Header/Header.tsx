import React, { SFC, ReactElement, useState } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';
import { renderToStaticMarkup } from 'react-dom/server';

const HeaderStyled = styled.div<IHeader>`
  background-color: ${props => props.theme.pageHeader};
  padding: ${props => props.theme.pagePadding};
  margin-top: ${props => `-${props.theme.pagePadding}`};
  margin-left: ${props => `-${props.theme.pagePadding}`};
  margin-right: ${props => `-${props.theme.pagePadding}`};
  position: relative;
  display: flex;
  background-image: url("data:image/svg+xml,${props => encodeURIComponent(renderToStaticMarkup(props.illustration))}");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  & h1 {
    color: ${props => props.theme.activeColour};
    font-size: 40px;
    margin-top: 0;
  }
  & p {
    color: ${props => props.theme.greyDark};
    font-size: 14px;
    width: 35%;
  }
  & button {
    outline: none;
    cursor: pointer;
    border: none;
  }
`;

const ViewModeContainer = styled.div`
  height: 34px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  width: max-content;
`;

const ViewModeButton = styled.button<{ active: boolean }>`
  border-radius: 4px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  path {
    fill: ${props => (props.active ? '#1c3e55' : '#A9B0B0')};
  }
  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.hoverColour};
    `}
`;

export const NewButton = styled.button`
  background: ${props => props.theme.activeColour};
  border-radius: 4px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  color: #fff;
  margin-left: 20px;
  & span {
    margin-left: 10px;
  }
`;

export const HelpButton = styled.button`
  background: ${props => props.theme.brandPrimary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: absolute;
  right: ${props => props.theme.pagePadding};
  top: ${props => props.theme.pagePadding};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ActionContainer = styled.div`
  display: flex;
  position: absolute;
  right: ${props => props.theme.pagePadding};
  bottom: ${props => props.theme.pagePadding};
`;

const Link = styled.a`
  color: ${props => props.theme.brandPrimary};
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;
  svg {
    margin-right: 10px;
  }
`;

export interface IHeader {
  illustration?: ReactElement;
}

export interface ILink {
  icon?: string;
  label: string;
  href: string;
}

export interface IProps {
  title: string;
  description: string;
  illustration?: ReactElement;
  links?: ILink[];
  showHelpButton?: boolean;
  showViewModeSwitcher?: boolean;
  defaulViewMode?: 'table' | 'list' | 'map';
  showNewButton?: boolean;
  onChangeView?: (viewMode: string) => void;
  onNewClick?: () => void;
}

const Header: SFC<IProps> = ({
  title,
  description,
  illustration,
  links = [],
  showHelpButton,
  showViewModeSwitcher,
  defaulViewMode = 'table',
  showNewButton,
  onChangeView,
  onNewClick
}) => {
  const [state, setState] = useState(defaulViewMode);
  
  function changeView(viewMode: 'table' | 'list' | 'map') {
    setState(viewMode);
    onChangeView(viewMode);
  }

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <HeaderStyled illustration={illustration}>
        <div>
          <h1>
            <FormattedMessage id={title} />
          </h1>
          {description && (
            <p>
              <FormattedMessage id={description} />
            </p>
          )}
          {links.length && (
            <div>
              {links.map((link, key) => (
                <Link href={link.href} key={key}>
                  {link.icon && <Icon name={link.icon} />}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {showHelpButton && (
          <HelpButton>
            <Icon name="question" />
          </HelpButton>
        )}

        <ActionContainer>
          {showViewModeSwitcher && onChangeView && (
            <ViewModeContainer>
              <ViewModeButton
                onClick={() => changeView('table')}
                active={state === 'table'}
              >
                <Icon name="viewMode.table" />
              </ViewModeButton>
              <ViewModeButton
                onClick={() => changeView('list')}
                active={state === 'list'}
              >
                <Icon name="viewMode.list" />
              </ViewModeButton>
              <ViewModeButton
                onClick={() => changeView('map')}
                active={state === 'map'}
              >
                <Icon name="viewMode.map" />
              </ViewModeButton>
            </ViewModeContainer>
          )}

          {showNewButton && onNewClick && (
            <NewButton onClick={onNewClick}>
              <Icon name="plus" />
              <span>
                <FormattedMessage id="admin.page.new" />
              </span>
            </NewButton>
          )}
        </ActionContainer>
      </HeaderStyled>
    </ThemeProvider>
  )
};

export default Header;