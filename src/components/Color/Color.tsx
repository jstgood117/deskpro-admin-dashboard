import React from 'react';
import styled from 'styled-components';

import { P1 } from '../Typography';
import { FlowLayout } from '../Styled';

const ColorStyled = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 4px;
  margin-right: 8px;
`;

export const Color: React.SFC<{ color: string; label: string }> = ({
  color,
  label
}) => (
  <FlowLayout>
    <ColorStyled color={color} />
    <P1>{label}</P1>
  </FlowLayout>
);

export default Color;