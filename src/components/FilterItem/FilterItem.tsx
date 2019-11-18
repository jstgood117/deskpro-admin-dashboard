import React, { FC } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import Icon from '../Icon';
import { dpstyle } from '../Styled';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

export interface IProps {
  filter: IFilterProps;
}

const StyledItem = styled.div`
  height: 32px;
  background: ${props => props.theme.hoverColour};
  border-radius: 40px;
  width: fit-content;
  min-width: 60px;
  display: inline-flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  path {
    fill: ${props => props.theme.activeColour};
  }
`;
const ItemText = styled(dpstyle.div)`
  flex: 1;
  padding-left: 8px;
  padding-right: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.activeColour};
`;

const FilterItem: FC<IProps> = ({ filter }) => {
  let option;
  switch (filter.option) {
    case 'EQUAL':
      option = 'Is';
      break;
    default:
      break;
  }
  return (
    <StyledItem>
      <ItemText>
        {filter.property} {option} {filter.filterKey}
      </ItemText>
      <div style={{ display: 'flex' }} onClick={action('clicked')}>
        <Icon name='close' />
      </div>
    </StyledItem>
  );
};

export default FilterItem;
