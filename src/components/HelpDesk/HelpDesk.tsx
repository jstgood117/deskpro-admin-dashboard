import React from 'react';
import styled from 'styled-components';
import { dpstyle } from '../Styled';

export interface IProps {
  logo: string;
  title: string;
  className?: string;
}

const Title = styled(dpstyle.div1)`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const HelpDesk: React.FC<IProps> = props => (
  <div style={{ display: 'flex' }} className={props.className}>
    <img src={props.logo} alt='helpdesk' />
    <Title>{props.title}</Title>
  </div>
);

export default HelpDesk;
