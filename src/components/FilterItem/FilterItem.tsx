import React, { FC } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import { dpstyle } from '../Styled';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

export interface IProps {
  filter: IFilterProps;
  onRemove?: (e: any) => void;
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

const FilterItem: FC<IProps> = ({ filter, onRemove }) => {
  const option = filter.option;
  return (
    <StyledItem>
      <ItemText>
        {filter.property} {option} {filter.filterKey}
      </ItemText>
      <div style={{ display: 'flex' }} onClick={onRemove}>
        <Icon name='close' />
      </div>
    </StyledItem>
  );
};

export default FilterItem;
