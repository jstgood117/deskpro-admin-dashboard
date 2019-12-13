import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { dpstyle } from '../Styled';
import Icon from '../Icon';
import ListItem from './ListItem';
import Button from '../Button';

export interface IProps {
  children?: ReactNode;
  list: string[];
  type: ListType;
}

export type ListType = 'IP' | 'Group';

const ListHeader = styled(dpstyle.div1)`
  padding: 4px 8px;
  font-size: 14px;
  color: #4c4f50;
  display: flex;
  position: relative;
  font-weight: 500;
  border-bottom: 1px solid #eff0f0;
`;
const List: FC<IProps> = props => {
  return (
    <div style={{ width: 'max-content' }}>
      <ListHeader>
        {props.type === 'IP' ? 'Whitelisted IPs' : 'Usergroups'}
        <div
          style={{
            position: 'absolute',
            right: 0,
            color: '#A9B0B0',
            fontSize: 13,
            fontWeight: 'normal'
          }}
        >
          {props.type === 'IP'
            ? props.list.length
            : `${props.list.length}/${props.list.length}`}
        </div>
      </ListHeader>
      {props.list.map((list: string, index: number) => (
        <ListItem content={list} key={index} type={props.type} />
      ))}
      <div style={{ paddingTop: 20, paddingLeft: 8 }}>
        <Button
          styleType='secondary'
          onClick={action('clicked Add IP')}
          size='small'
        >
          <Icon name='plus' />{' '}
          {props.type === 'IP' ? 'Add IP' : 'Add Usergroup'}
        </Button>
      </div>
    </div>
  );
};

export default List;
