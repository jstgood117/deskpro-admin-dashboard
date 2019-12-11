import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { dpstyle } from '../Styled';
import Icon from '../Icon';

export interface IProps {
  children?: ReactNode;
}

const StyledLink = styled(dpstyle.div1)`
  background: ${props => props.theme.white};
  box-shadow: 0px 3px 8px rgba(159, 204, 243, 0.7);
  border-radius: 4px;
  color: ${props => props.theme.brandPrimary};
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  height: 28px;
  padding: 9px 16px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
`;

const Link: FC<IProps> = props => {
  return (
    <StyledLink>
      <div style={{ paddingRight: 12, display: 'flex' }}>
        <Icon name='ic-help-center' />
      </div>
      {props.children}
    </StyledLink>
  );
};

export default Link;
