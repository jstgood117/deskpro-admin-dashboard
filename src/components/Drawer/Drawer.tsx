import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { OverlayStyled, DrawerStyled, StyledClose } from './DrawerStyles';
import Icon from '../Icon';

type Props = {
  open: boolean;
  opacity?: number;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({
  open,
  opacity,
  onClose,
  children
}) => {
  return createPortal((
    <div>
      <OverlayStyled
        open={open}
        opacity={opacity}
        onClick={onClose}
      />
      <DrawerStyled open={open}>
        <StyledClose onClick={onClose}>
          <Icon name='caret-right' />
        </StyledClose>

        {children}
      </DrawerStyled>
    </div>
  ),
    document.getElementById('app-settings')
  );
};

export default Drawer;