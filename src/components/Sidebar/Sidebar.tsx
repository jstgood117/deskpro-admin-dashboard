import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import { ISidebarSection } from '../../resources/interfaces';
import { DeskproAdminTheme } from '../Theme';
import SidebarSection from './SidebarSection';

const SidebarStyled = styled.nav`
  background-color: #e8ebee;
  color: #000;
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  overflow-y: scroll;
  height: 100%;
`;

export interface IProps {
  path: string;
  data: ISidebarSection[];
}

const Sidebar: SFC<IProps> = props => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Scrollbars
        style={{
          width: 215,
          position: 'absolute',
          height: '100%'
        }}
      >
        <SidebarStyled>
          {props.data &&
            props.data.map((navSection, index) => (
              <SidebarSection key={index} path={props.path} {...navSection} />
            ))}
        </SidebarStyled>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default Sidebar;
