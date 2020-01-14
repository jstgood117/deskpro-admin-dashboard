import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import Icon from '../Icon';

const OverlayStyled = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: #000;
  opacity: ${props => props.open ? .1 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transition: opacity .3s ease-out, visibility .3s ease-out;
`;

const DrawerStyled = styled.div<{ width: number }> `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: ${props => props.width}px;
  background-color: #ffffff;
  box-shadow: -5px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  transition: width .3s ease-out;
  overflow-y: auto;
  overflow-x: hidden;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  font-family: Rubik;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  color: #4C4F50;
  border-bottom: 1px solid #EFF0F0;

  .close {
    cursor: pointer;
  }
`;

const DrawerBody = styled.div`
  display: flex;
  padding: 19px 32px;
`;

type Props = {
  open: boolean;
  drawerWidth?: number;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({
  open,
  drawerWidth,
  onClose,
  children
}) => {
  return createPortal((
    <div>
      <OverlayStyled open={open} onClick={onClose} />
      <DrawerStyled width={open ? drawerWidth : 0}>
        <DrawerHeader>
          <div>Header</div>
          <div onClick={onClose} className='close'>
            <Icon name='caret-right' />
          </div>
        </DrawerHeader>

        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerStyled>
    </div>
  ),
    document.getElementById('app-settings')
  );
};

Drawer.defaultProps = { drawerWidth: 440 };

export default Drawer;