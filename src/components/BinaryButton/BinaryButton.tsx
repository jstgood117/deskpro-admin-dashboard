import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';

const StyledBinaryButton = styled.div`
  display: inline-flex;
  button {
    width: 189px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    display: flex;
    align-items: center;
    .icon-text {
      margin: auto;
      display: flex;
      align-items: center;
      svg {
        margin: unset !important;
        padding-right: 16px !important;
      }
    }
  }
`;
export interface IProps {}
export const BinaryButton: React.FC<IProps> = props => (
  <StyledBinaryButton>
    <Button styleType='secondary' onClick={() => {}} size='medium'>
      <span className='icon-text'>
        <Icon name='check-2' />
        Yes
      </span>
    </Button>
    <Button styleType='secondary' onClick={() => {}} size='medium'>
      <span className='icon-text'>
        <Icon name='close' />
        No
      </span>
    </Button>
  </StyledBinaryButton>
);

export default BinaryButton;
