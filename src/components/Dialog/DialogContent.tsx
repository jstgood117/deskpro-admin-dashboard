import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const DialogContentStyled = styled.div`
  background: #fff;
  padding: 15px 25px;
  overflow-y: auto;
`;

export type IProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DialogContent: SFC<IProps> = ({ children, ...props }) => (
  <DialogContentStyled {...props}>{children}</DialogContentStyled>
);

export default DialogContent;