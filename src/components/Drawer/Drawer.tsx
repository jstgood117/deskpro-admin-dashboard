import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { H2 } from '../Typography';
import Icon from '../Icon';
import Button from '../Button';

const OverlayStyled = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${props => props.theme.black};
  opacity: ${props => props.open ? .2 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transition: opacity .3s ease-out, visibility .3s ease-out;
  will-change: opacity;
`;

const DrawerStyled = styled.div<{ open: boolean, width: number }> `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: ${props => props.width}px;
  background-color: ${props => props.theme.white};
  box-shadow: -5px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  transition: .3s;
  transform: translateX(${props => props.open ? 0 : props.width}px);
  will-change: transform;
  overflow-y: auto;
  overflow-x: hidden;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  padding: 32px 32px 24px 32px;
  border-bottom: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;

  .caret-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    svg {
      width: 6.98px;
      height: 12px;
      color: ${props => props.theme.static2Colour};
    }
  }
`;

const DrawerBody = styled.div`
  display: flex;
  padding: 19px 32px;
`;

const DrawerFooter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 68px;
  padding: 16px 32px 18px 32px;
  border-top: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;
  button {
    width: 112px;
    margin-right: 16px;
    justify-content: center;
  }
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
      <DrawerStyled open={open} width={drawerWidth}>
        <DrawerHeader>
          <H2>Header</H2>
          <div onClick={onClose} className='caret-right'>
            <Icon name='caret-right' />
          </div>
        </DrawerHeader>

        <DrawerBody>
          {children}
        </DrawerBody>

        <DrawerFooter>
          <Button styleType='primary' size='medium'>
            Save
        </Button>
          <Button styleType='secondary' size='medium'>
            Duplicate
        </Button>
          <Button styleType='secondary' size='medium'>
            Delete
        </Button>
        </DrawerFooter>
      </DrawerStyled>
    </div>
  ),
    document.getElementById('app-settings')
  );
};

Drawer.defaultProps = { drawerWidth: 440 };

export default Drawer;