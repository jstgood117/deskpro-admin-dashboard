import React, { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: absolute;
  background-color:rgba(0,0,0,0.2);
  top:0;
  bottom:0;
  left:0;
  right:0;
`;

const DrawerStyled = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  width:300px;
  background-color:#fff;
`;

type Props = {
  drawerChildren?:ReactNode;
};

export const Drawer: FC<Props> = ({
  drawerChildren
}) => {
  return createPortal((
    <div>
      <OverlayStyled />
      <DrawerStyled>
        {drawerChildren ? drawerChildren : null}
      </DrawerStyled>
    </div>
  ), document.getElementById('app-settings'));
};

export default Drawer;