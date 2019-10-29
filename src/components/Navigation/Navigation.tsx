import React, { SFC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { FlowLayout } from '../Styled';
import Icon from '../Icon';

export interface IProps {
  children?: ReactNode;
}

const NavigationStyle = styled(FlowLayout)`
  width: 45px;
  height: 100vh;
  background: #1c3e55;
  display: inline-flex;
  flex-direction: column;
`;
const ItemStyle = styled(FlowLayout)`
  width: 100%;
  height: 45px;
  display: inline-flex;
  flex-direction: column;
  &:hover {
    background-color: ${props => props.theme.lightBlue}15;
  }
  cursor: pointer;
`;

const Navigation: SFC<IProps> = props => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <NavigationStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.message" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.chat" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.users" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.thumb" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.notification" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.data" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.pie" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.setting" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.dollar" />
          </span>
        </ItemStyle>
        <ItemStyle>
          <span style={{margin: 'auto'}}>
            <Icon name="nav.helpCentre" />
          </span>
        </ItemStyle>
      </NavigationStyle>
    </ThemeProvider>
  );
};

export default Navigation;
