import React, { FC, ReactElement } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import Modal from 'react-modal';

import { DeskproAdminTheme } from '../Theme';

export type IProps = {
  className?: string;
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  showBackdrop?: boolean;
  backdropColor?: string;
  contentTop?: number;
  onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;
} & ReactModal.Props;

const ModalAdapter: FC<IProps> = ({
  className = 'ReactModal',
  children,
  ...props
}) => {
  if (!props.appElement) {
    Modal.setAppElement('body');
  }

  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      isOpen={props.isOpen}
      {...props}
    >
      {children}
    </Modal>
  );
};

const ModalStyled = styled(ModalAdapter)<IProps>`
  > * {
    opacity: 0;
  }
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    transition: opacity 200ms ease-in-out;
    ${props =>
      props.showBackdrop &&
      css`
        background-color: ${props.backdropColor
          ? props.backdropColor
          : 'rgba(0, 0, 0, 0.5)'};
      `}
    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }
    &.ReactModal__Overlay--before-close {
      opacity: 0;
    }
  }
  &__content {
    position: fixed;
    top: ${props => props.contentTop || 100}px;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translateX(-50%);
    overflow: auto;
    outline: none;
    border-radius: 5px;
    padding: 0;
    background-color: #fff;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Dialog: React.FC<IProps> = ({ ...props }) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <ModalStyled {...props} />
    </ThemeProvider>
  );
};

export default Dialog;