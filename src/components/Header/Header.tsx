import React, { SFC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { dpstyle, HeadingText, TextLinkLabel } from '../Styled';
import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';

const HeaderStyled = styled(dpstyle.div)<IHeader>`
  background-color: ${props => props.theme.pageHeader};
  padding: 39px 30px 60px 30px;
  display: flex;
  background-image: url("${props =>
    props.illustration
      ? require(`../../assets/svg/${props.illustration}.svg`)
      : require(`../../assets/svg/agents-header.svg`)}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
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
  background: ${props => props.theme.white};
`;

const ViewModeButton = styled(dpstyle.button)<{ active: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  width: 44px;
  path {
    fill: ${props =>
      props.active ? props.theme.activeColour : props.theme.static2Colour};
  }
  background-color: ${props => props.active && props.theme.hoverColour};
`;

const NewButton = styled(dpstyle.button)`
  background-color: ${props => props.theme.activeColour};
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.white};
  margin-left: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  & span {
    margin-left: 8px;
    font-size: 15px;
  }
  &:hover {
    background-color: ${props => props.theme.brandPrimary};
  }
`;

const HelpButton = styled.button`
  background: ${props => props.theme.brandPrimary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: absolute;
  right: 27px;
  right: ${props => props.theme.pagePadding};
  top: 31px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  outline: none;
  cursor: pointer;
`;

const HeaderOptions = styled(dpstyle.div)`
  display: inline-flex;
  height: 34px;
  width: 100%;
  align-items: center;
`;
const ActionContainer = styled(dpstyle.div)`
  display: flex;
`;

const Link = styled(dpstyle.a)`
  margin-right: 20px;
  font-size: 15px;
  svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${props => (props.color ? props.color : props.theme.brandPrimary)};
  }
`;

export interface IHeader {
  illustration?: string;
}

export interface ILink {
  icon?: string;
  title: string;
  path: string;
}

export interface IProps {
  title: string;
  description: string;
  illustration?: string;
  links?: ILink[];
  showHelpButton?: boolean;
  showViewModeSwitcher?: boolean;
  defaulViewMode?: 'table' | 'list' | 'map';
  showNewButton?: boolean;
  tableActions?: boolean;
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
  onNewClick,
  tableActions
}) => {
  const [state, setState] = useState(defaulViewMode);

  function changeView(viewMode: 'table' | 'list' | 'map') {
    setState(viewMode);
    onChangeView(viewMode);
  }

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <HeaderStyled illustration={illustration}>
        <div style={{ width: '100%' }}>
          <HeadingText size={1} messageId={title} />
          {description && (
            <HeaderDescription>
              <FormattedMessage id={description} />
            </HeaderDescription>
          )}
          {links.length && (
            <HeaderOptions>
              <div style={{ flex: 1 }}>
                {links.map((link, key) => (
                  <Link href={link.path} key={key}>
                    {link.icon && <Icon name={link.icon} />}
                    <TextLinkLabel messageId={link.title} />
                  </Link>
                ))}
              </div>
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
            </HeaderOptions>
          )}
        </div>

        {showHelpButton && (
          <HelpButton>
            <Icon name='question' />
          </HelpButton>
        )}
      </HeaderStyled>
    </ThemeProvider>
  );
};

export default Header;
