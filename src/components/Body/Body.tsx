import React, { SFC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

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
        <div>{props.children}</div>
      </Scrollbars>
    </ThemeProvider>
  );
};

export default Body;
