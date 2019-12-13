import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { dpstyle } from '../Styled';
import Button from '../Button';
import Icon from '../Icon';
import { ListType } from './List';

export interface IProps {
  children?: ReactNode;
  content: string;
  type: ListType;
}

interface Type {
  listType: ListType;
}

const StyledListItem = styled(dpstyle.div1)<Type>`
  position: relative;
  border-radius: 6px;
  width: max-content;
  padding: 4px 8px;
  min-width: 248px;
  color: ${props =>
    props.listType === 'Group'
      ? props.theme.brandPrimary
      : props.theme.staticColour};
  font-size: 14px;
  font-weight: ${props => (props.listType === 'Group' ? 500 : 'normal')};
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: ${props => (props.listType === 'Group' ? 'pointer' : 'default')};
  .remove-btn {
    display: none;
  }
  &:hover {
    border: ${props =>
      props.listType === 'Group'
        ? `1px solid ${props.theme.pageHeader}`
        : 'none'};
    box-shadow: ${props =>
      props.listType === 'Group'
        ? '0px 3px 8px rgba(159, 204, 243, 0.5)'
        : 'none'};
    background: ${props =>
      props.listType === 'IP' ? 'rgba(232, 235, 238, 0.5)' : props.theme.white};
    .remove-btn {
      display: block;
    }
  }
`;

const StyledButton = styled.div`
  position: absolute;
  right: 8px;
  button {
    width: 24px
    height: 24px;
  }
`;
const ListItem: FC<IProps> = props => {
  return (
    <StyledListItem listType={props.type}>
      {props.content}
      <StyledButton className='remove-btn'>
        <Button
          styleType='tertiary'
          onClick={action('clicked remove')}
          size='small'
          iconOnly={true}
        >
          <Icon name='trash' />
        </Button>
      </StyledButton>
    </StyledListItem>
  );
};

export default ListItem;
