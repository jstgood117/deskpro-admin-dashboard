import React from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import { P1 } from '../Typography';

const CurrencyLabel = styled.span`
  color: ${props => props.theme.static2Colour};
  margin-right: 10px;
`;

export interface IProps {
  currency?: string;
  value: number;
}

export const Currency: React.SFC<IProps> = ({ currency, value }) => {
  return (
    <P1>
      {currency && <CurrencyLabel>{currency}</CurrencyLabel>}
      <FormattedNumber value={value} />
    </P1>
  );
};

export default Currency;