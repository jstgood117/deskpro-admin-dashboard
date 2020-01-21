import React, { SFC } from 'react';
import {vsprintf} from 'sprintf-js';

import ConfirmDialog from '../../../Dialog/ConfirmDialog';

export type ModalActionType = {
  type:'CONFIRM_MODAL',
  icon: string;
  title: string;
  variant: 'default' | 'danger';
  message: string;
  leftButtonText: string;
  rightButtonText: string;
};


export type ModalPropsType = ModalActionType & {
  ids: string[],
  confirm: (...props:any[]) => void;
  cancel: (...props:any[]) => void;
  messageParams: string[];
};

const ModalAction: SFC<ModalPropsType> = ({
  icon,
  variant,
  title,
  message,
  leftButtonText,
  rightButtonText,
  confirm,
  cancel,
  messageParams,
  ids,
}) => {
  return (
    <ConfirmDialog
      icon={icon}
      isOpen={true}
      variant={variant}
      title={title}
      leftButtonText={leftButtonText}
      rightButtonText={rightButtonText}
      onLeftButtonClick={() => confirm({ ids })}
      onRightButtonClick={cancel}
      text={vsprintf(message, messageParams)}
    />
  );
};

export default ModalAction;