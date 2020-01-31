import React from 'react';
import styled from 'styled-components';
import { dpstyle } from '../Styled';

export interface IProps {
  logo: string;
  title: string;
  description?: string;
}

const Title = styled(dpstyle.div1)`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const Description = styled(dpstyle.div1)`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.greyDark};
  padding-top: 8px;
`;

export const HelpDesk: React.FC<IProps> = props => (
  <div style={{ display: 'inline-block' }}>
    <div style={{ display: 'flex' }}>
      <img src={props.logo} alt='helpdesk' />
      <Title>{props.title}</Title>
    </div>
    <Description>{props.description}</Description>
  </div>
);

export default HelpDesk;
