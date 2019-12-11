import React, { FC } from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';

import SortableList from '../SortableList';
import { dpstyle } from '../Styled';
import Icon from '../Icon';
import { FormattedMessage } from 'react-intl';

const LIStyle = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 7px 33px 8px 10px;
  cursor: default;
`;

const TextWrapper = styled(dpstyle.div1)`
  font-size: 14px;
  padding-left: 8px;
  display: flex;
  align-items: center;
`;

const DraggableListStyle = styled(dpstyle.div)`
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${props => props.theme.white};
  border: 1px solid #d3d6d7;
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-flex;
  .sortable-chosen {
    border-bottom: 4px solid ${props => props.theme.lightBlue};
  }
`;

export interface IProps {
  items: string[];
  SetList: (values: string[]) => void;
}

const DraggableList: FC<IProps> = ({ items, SetList }) => {
  return (
    <DraggableListStyle>
      <SortableList
        onChange={values => {
          SetList(values);
        }}
        children={items.map(val => (
          <LIStyle key={uniqueId()} data-id={val} className='item'>
            <Icon name='drag-and-drop' />
            <TextWrapper>
              <FormattedMessage id={val} />
            </TextWrapper>
          </LIStyle>
        ))}
      />
    </DraggableListStyle>
  );
};

export default DraggableList;
