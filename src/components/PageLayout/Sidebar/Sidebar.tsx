import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { DeskproAdminTheme } from '../../Theme';

import { ISidebarSection } from '../../../resources/interfaces';
import SidebarSection from './SidebarSection';
import { dpstyle } from '../../Styled';

const SidebarContainer = styled(dpstyle.div)`
  position: static;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #e8ebee;
  color: #000;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
`;

export interface IProps {
  data: ISidebarSection[];
}

const Sidebar: SFC<IProps> = ({ data }) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Scrollbars
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
        renderTrackVertical={({ style, ...props }) => (
          <div
            style={{
              background: '#ccc',
              position: 'absolute',
              width: 6,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 3
            }}
          />
        )}
      >
        <SidebarContainer>
          {data &&
            data.map((navSection, index) => (
              <SidebarSection key={index} {...navSection} />
            ))}
        </SidebarContainer>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default Sidebar;
