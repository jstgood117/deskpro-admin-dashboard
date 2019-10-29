import React, { SFC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IProps {
  children?: ReactNode;
}
const Navigation: SFC<IProps> = props => {
  return <ThemeProvider theme={DeskproAdminTheme}>Navigation</ThemeProvider>;
};

export default Navigation;
