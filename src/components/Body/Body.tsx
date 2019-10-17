import React, { SFC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

const StyledBody = styled.nav`
  overflow-y: scroll;
  height: 100%;
`;

const Body: SFC = props => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <Scrollbars
        style={{
          height: '100%',
          left: '223px',
          position: 'absolute',
          right: '0',
          width: 'auto'
        }}
      >
        <StyledBody>{props.children}</StyledBody>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default Body;
