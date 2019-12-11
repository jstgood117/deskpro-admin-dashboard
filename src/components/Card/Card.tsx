import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface IProps {
  children?: ReactNode;
}

const CardStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Card: FC<IProps> = ({ children }) => <CardStyled>{children}</CardStyled>;

export default Card;
