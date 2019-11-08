import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Dialog from '../Dialog';
import DialogContent from '../DialogContent';
import DialogContentText from '../DialogContentText';
import DialogActions from '../DialogActions';
import { FlowLayout, ControlBox } from '../../Styled';
import Button from '../../Button';
import Icon from '../../Icon';
import { DeskproAdminTheme } from '../../Theme';

type ConfirmDialogVariant = 'default' | 'danger';

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const DialogTitleStyled = styled.div<IDialogStyle>`
  background: ${props => props.theme.white};
  font-family: Rubik, sans-serif;
  font-style: normal;
  padding-top: 24px;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  color: ${props => props.theme.activeColour};
  justify-content: center;
  align-items: center;
  display: flex;
  border-top: 8px solid ${props => props.borderColor};
  ${IconWrapper} {
    background-color: ${props => props.iconBackground};
    div {
      width: ${props => props.iconSize}px;
      height: ${props => props.iconSize}px;
      display: flex;
    }
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${props => props.iconColor};
      }
    }
  }
`;

const Controls = styled(FlowLayout)`
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

interface IDialogStyle {
  borderColor: string;
  iconBackground: string;
  iconColor: string;
  leftButtonSyleType: 'danger' | 'primary';
  iconSize: number;
}
const getStyle = (variant: ConfirmDialogVariant, theme: any): IDialogStyle => {
  switch (variant) {
    case 'danger':
      return {
        borderColor: theme.dangerLight,
        iconBackground: theme.dangerLight,
        iconColor: theme.danger,
        leftButtonSyleType: 'danger',
        iconSize: 20
      };

    default:
      return {
        borderColor: theme.textHover,
        iconBackground: theme.textHover,
        iconColor: theme.activeColour,
        leftButtonSyleType: 'primary',
        iconSize: 20
      };
  }
};

export interface IProps {
  isOpen: boolean;
  title: string;
  leftButtonText: string;
  rightButtonText: string;
  text?: string;
  body?: ReactElement;
  variant?: 'default' | 'danger';
  icon?: string;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

const ConfirmDialog: React.FC<IProps> = ({
  isOpen,
  title,
  text,
  body,
  leftButtonText,
  rightButtonText,
  variant,
  icon,
  onLeftButtonClick,
  onRightButtonClick
}) => {
  const styles = getStyle(variant, DeskproAdminTheme);

  return (
    <Dialog isOpen={isOpen}>
      <DialogTitleStyled {...styles}>
        <IconWrapper>
          <div>
            <Icon name={icon} />
          </div>
        </IconWrapper>
        {title}
      </DialogTitleStyled>

      <DialogContent style={{ paddingLeft: 56, paddingRight: 56 }}>
        {text ? <DialogContentText>{text}</DialogContentText> : body}
      </DialogContent>

      <DialogActions>
        <Controls>
          <ControlBox>
            <Button
              styleType={styles.leftButtonSyleType}
              onClick={onLeftButtonClick}
              size='medium'
            >
              {leftButtonText}
            </Button>
          </ControlBox>

          <ControlBox marginLeft={10}>
            <Button
              styleType='secondary'
              onClick={onRightButtonClick}
              size='medium'
            >
              {rightButtonText}
            </Button>
          </ControlBox>
        </Controls>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;