import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import { ISidebarSection } from '../../resources/interfaces';
import { DeskproAdminTheme } from '../Theme';
import SidebarSection from './SidebarSection';

const SidebarStyled = styled.div`
  background-color: #e8ebee;
  color: #000;
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

export interface IProps {
  path: string;
  data: ISidebarSection[];
}

const Sidebar: SFC<IProps> = ({path,data}) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Scrollbars
        style={{
          width: 215,
          position: 'absolute',
          height: '100%'
        }}
        renderTrackVertical={({ style, ...props }) => (
          <div
            style={{
              background: '#ccc',
              position: 'absolute',
              width: 6,
              right: 0,
              bottom: 2,
              top: 2,
              borderRadius: 3
            }}
          />
        )}
      >
        <SidebarStyled>
          {data &&
            data.map((navSection, index) => (
              <SidebarSection key={index} path={path} {...navSection} />
            ))}
        </SidebarStyled>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default Sidebar;
