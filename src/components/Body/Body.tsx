import React, { SFC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

const Body: SFC = props => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>

    <Scrollbars
      style={{
        width: 'calc(100% - 223px)',
        height: '100%',
        left: '223px',
        position: 'absolute'
      }}
    >
      <div style={{ height: '1600px' }}>{props.children}</div>
    </Scrollbars>
    </ThemeProvider>
  );
};

export default Body;
