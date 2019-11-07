import React, { SFC, ReactElement, useState } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { renderToStaticMarkup } from 'react-dom/server';

import { FilterType } from '../../services/filters/types';

import { DeskproAdminTheme } from '../Theme';
import TableActions from '../TableAction';
import Icon from '../Icon';
import { dpstyle, HeadingText, TextLinkLabel } from '../Styled';


const HeaderStyled = styled(dpstyle.div)<IHeader>`
  background-color: ${props => props.theme.pageHeader};
  padding: ${props => props.theme.pagePadding};
  padding-bottom: 68px;
  position: relative;
  display: flex;
  background-image: url("data:image/svg+xml,${props =>
    encodeURIComponent(renderToStaticMarkup(props.illustration))}");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  & button {
    outline: none;
    cursor: pointer;
  }
`;

const HeaderDescription = styled(dpstyle.p)`
  color: ${props => props.theme.greyDark};
  font-size: 14px;
  width: 35%;
  line-height: 150%;
`;

const ViewModeContainer = styled(dpstyle.div)`
  height: 34px;
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
      background-color: ${_props => props.theme.hoverColour};
    `}
`;

export const NewButton = styled.button`
  background-color: ${props => props.theme.activeColour};
  border-radius: 4px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  color: #fff;
  margin-left: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  & span {
    margin-left: 10px;
    font-size: 16px;
  }
  &:hover {
    background-color: ${props => props.theme.brandPrimary};
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
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
`;

export const ActionContainer = styled(dpstyle.div)`
  display: flex;
  position: absolute;
  right: ${props => props.theme.pagePadding};
  bottom: ${props => props.theme.pagePadding};
`;

const Link = styled(dpstyle.a)`
  margin-right: 20px;
  font-size: 15px;
  svg {
    margin-right: 10px;
  }
`;
const TableActionStyled = styled(dpstyle.div)`
  position: absolute;
  left: 33px;
  right: 27px;
  bottom: -27px;
`;

export interface IHeader {
  illustration?: ReactElement;
}

export interface ILink {
  icon?: string;
  title: string;
  path: string;
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
  tableActions?: boolean;
  onChangeView?: (viewMode: string) => void;
  onNewClick?: () => void;
  filters?:FilterType[];
  onFilterChange?:(id:string, operatorName:string, value:string) => void;
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
  onNewClick,
  tableActions,
  filters,
  onFilterChange
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
          <HeadingText size={1} messageId={title} />
          {description && (
            <HeaderDescription>
              <FormattedMessage id={description} />
            </HeaderDescription>
          )}
          {links.length && (
            <div>
              {links.map((link, key) => (
                <Link href={link.path} key={key}>
                  {link.icon && <Icon name={link.icon} />}
                  <TextLinkLabel messageId={link.title} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {showHelpButton && (
          <HelpButton>
            <Icon name='question' />
          </HelpButton>
        )}

        <ActionContainer>
          {showViewModeSwitcher && onChangeView && (
            <ViewModeContainer>
              <ViewModeButton
                onClick={() => changeView('table')}
                active={state === 'table'}
              >
                <Icon name='viewMode.table' />
              </ViewModeButton>
              <ViewModeButton
                onClick={() => changeView('list')}
                active={state === 'list'}
              >
                <Icon name='viewMode.list' />
              </ViewModeButton>
              <ViewModeButton
                onClick={() => changeView('map')}
                active={state === 'map'}
              >
                <Icon name='viewMode.map' />
              </ViewModeButton>
            </ViewModeContainer>
          )}

          {showNewButton && onNewClick && (
            <NewButton onClick={onNewClick}>
              <Icon name='plus' />
              <span>
                <FormattedMessage id='admin.page.new' />
              </span>
            </NewButton>
          )}
        </ActionContainer>
        {tableActions && (
          <TableActionStyled>
            <TableActions
              showSearch={true}
              filterMenu={true}
              sortMenu={true}
              groupMenu={true}
              viewMenu={true}
              filters={filters}
              onFilterChange={onFilterChange}
            />
          </TableActionStyled>
        )}
      </HeaderStyled>
    </ThemeProvider>
  );
};

export default Header;
