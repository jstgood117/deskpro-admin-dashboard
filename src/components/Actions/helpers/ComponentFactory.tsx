import React, { SFC } from 'react';
import Modal, { ModalPropsType } from './components/Modal';

type Props = ModalPropsType;

const ComponentFactory: SFC<Props> = (props: Props) => {

  switch(props.type) {
    case 'CONFIRM_MODAL':
      return <Modal {...props} />;
    default:
      return null;
  }
};

export default ComponentFactory;