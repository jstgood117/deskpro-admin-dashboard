import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../../Icon';

export interface IProps {
  onPencilClick: () => void;
  onDuplicateClick: () => void;
  onTrashClick: () => void;
}

const ActionButtonsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100px;

  .action-button>button {
    border: none;
    &:hover {
      background-color: ${props => props.theme.hoverColour};
    }
  }
`;

const ActionButtons: FC<IProps> = ({
  onPencilClick,
  onDuplicateClick,
  onTrashClick
}) => {
  return (
    <ActionButtonsWrapper>
      <Button
        styleType='tertiary'
        onClick={onPencilClick}
        size='small'
        iconOnly={true}
        className='action-button'
      >
        <Icon name='pencil' />
      </Button>
      <Button
        styleType='tertiary'
        onClick={onDuplicateClick}
        size='small'
        iconOnly={true}
        className='action-button'
      >
        <Icon name='duplicate' />
      </Button>
      <Button
        styleType='tertiary'
        onClick={onTrashClick}
        size='small'
        iconOnly={true}
        className='action-button'
      >
        <Icon name='trash' />
      </Button>
    </ActionButtonsWrapper>
  );
};

export default ActionButtons;
