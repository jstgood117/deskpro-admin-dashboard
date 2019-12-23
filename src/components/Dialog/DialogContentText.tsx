import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

const DialogContentTextStyled = styled.div`
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: ${props => props.theme.activeColour};
`;

export type Props = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

const DialogContentText: FC<Props> = ({ children, ...props }) => (
  <DialogContentTextStyled {...props}>{children}</DialogContentTextStyled>
);

export default DialogContentText;