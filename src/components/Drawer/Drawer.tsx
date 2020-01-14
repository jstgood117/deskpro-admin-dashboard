import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: absolute;
  background-color:rgba(0,0,0,0.2);
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index: 9;
`;

const DrawerStyled = styled.div<{ width: number }> `
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  width:${props => props.width}px;
  z-index: 10;
  background-color:#f0f0f0;
  transition: width 0.3s ease-out;
  overflow-y: auto;
  overflow-x: hidden;
`;

type Props = {
  open: boolean;
  drawerWidth?: number;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({ open, drawerWidth, children, onClose }) => {


  return createPortal((
    <div>
      <OverlayStyled onClick={onClose} />
      <DrawerStyled width={open ? drawerWidth : 0}>
        {children}
      </DrawerStyled>
    </div>
  ),
    document.getElementById('app-settings')
  );
};

Drawer.defaultProps = { drawerWidth: 300 };

export default Drawer;