import React, { FC } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { operatorKeys } from '../../services/filters/operators';

import Icon from '../Icon';
import { dpstyle } from '../Styled';

export interface IProps {
  intl: any;
  property: string;
  value: string;
  operatorName: string;
  onRemove?: (e: any) => void;
}

const StyledItem = styled.div`
  width: max-content;
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
  width: max-content;
  flex: 1;
  padding-left: 8px;
  padding-right: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.activeColour};
`;

const getIntlOperatorTitle = (operatorName: string) => {
  return operatorKeys[operatorName];
};

const FilterItem: FC<IProps> = ({
  intl,
  property,
  operatorName,
  value,
  onRemove
}) => {
  return (
    <StyledItem>
      <ItemText>
        {property}{' '}
        {intl.formatMessage({ id: getIntlOperatorTitle(operatorName) })} {value}
      </ItemText>
      <div style={{ display: 'flex' }} onClick={onRemove}>
        <Icon name='close' />
      </div>
    </StyledItem>
  );
};

export default injectIntl(FilterItem);
