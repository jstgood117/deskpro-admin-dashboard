import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const DialogActionsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px;
  > button {
    margin-right: 10px;
  }
`;

export type IProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DialogActions: SFC<IProps> = ({ children, ...props }) => (
  <DialogActionsStyled {...props}>{children}</DialogActionsStyled>
);

export default DialogActions;