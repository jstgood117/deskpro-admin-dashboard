import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { OverlayStyled, DrawerStyled, StyledClose } from './DrawerStyles';
import Icon from '../Icon';

type Props = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({ className, open, onClose, children }) => {
  const drawer = (
    <div>
      <OverlayStyled open={open} onClick={onClose} />
      <DrawerStyled className={className} open={open}>
        <StyledClose onClick={onClose}>
          <Icon name='caret-right' />
        </StyledClose>

        {children}
      </DrawerStyled>
    </div>
  );
  return createPortal(drawer, document.getElementById('app-settings'));
};

export default Drawer;
