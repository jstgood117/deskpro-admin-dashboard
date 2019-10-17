import React, { SFC, ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IProps {
	children?: ReactNode,
}

const Body: SFC<IProps> = props => {
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
