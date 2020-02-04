import React from 'react';

import Button from '../Button';
import Icon from '../Icon';
import { StyledBinaryButton } from './styles';

export interface IProps {
  select: (e: any) => void;
  selected: boolean;
}
export const BinaryButton: React.FC<IProps> = ({ select, selected }) => (
  <StyledBinaryButton selected={selected}>
    <Button
      styleType='secondary'
      onClick={() => {
        select(true);
      }}
      size='medium'
      className={'yes-btn ' + (selected === true ? 'selected' : 'un-selected')}
    >
      <span className='icon-text'>
        <Icon name='check-2' />
        Yes
      </span>
    </Button>
    <Button
      styleType='secondary'
      onClick={() => {
        select(false);
      }}
      size='medium'
      className={'no-btn ' + (selected === false ? 'selected' : 'un-selected')}
    >
      <span className='icon-text'>
        <Icon name='close' />
        No
      </span>
    </Button>
  </StyledBinaryButton>
);

export default BinaryButton;
