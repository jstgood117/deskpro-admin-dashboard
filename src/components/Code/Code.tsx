import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { dpstyle } from '../Styled';

const ColorStyled = styled(dpstyle.div)`
  display: inline-flex;
  padding-left: 10px;
  padding-right: 10px;
  background: ${props => props.theme.purpleLight};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  font-family: Source CODE Pro;
  display: flex;
  align-items: center;

  color: ${props => props.theme.purpleColour};

  border-radius: 4px;
`;

export interface IProps {
  children: ReactNode;
}
export const Code: React.SFC<IProps> = props => (
  <div style={{ display: 'inline-flex' }}>
    <ColorStyled>{props.children}</ColorStyled>
  </div>
);

export default Code;
