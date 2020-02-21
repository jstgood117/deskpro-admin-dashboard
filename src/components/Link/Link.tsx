import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { dpstyle } from '../Styled';
import Icon from '../Icon';

export interface IProps {
  children?: ReactNode;
  href: string;
  icon?: string;
  className?: string;
  type?: 'card' | 'string';
}

const StyledLink = styled(dpstyle.div1)<{ type: 'card' | 'string' }>`
  background: ${props => props.theme.white};
  box-shadow: ${props =>
    props.type === 'card' ? '0px 3px 8px rgba(159, 204, 243, 0.7)' : 'none'};
  border-radius: 4px;
  color: ${props => props.theme.brandPrimary};
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  height: ${props => (props.type === 'card' ? '34px' : 'auto')};
  padding: ${props => (props.type === 'card' ? '9px 16px' : 'none')};
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      fill: ${props => props.theme.brandPrimary};
    }
  }
`;

const Link: FC<IProps> = props => {
  return (
    <a
      className={props.className}
      href={props.href}
      style={{ textDecoration: 'none', display: 'inline-flex' }}
      target='_blank'
      rel='noopener noreferrer'
    >
      <StyledLink type={props.type}>
        <div style={{ paddingRight: 12, display: 'flex' }}>
          <Icon name={props.icon || 'ic-help-center'} />
        </div>
        {props.children}
      </StyledLink>
    </a>
  );
};

Link.defaultProps = {
  type: 'card'
};

export default Link;
