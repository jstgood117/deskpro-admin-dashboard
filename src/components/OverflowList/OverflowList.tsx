import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';

import { FlowLayout } from '../Styled';
import { S1 } from '../Typography';
import Icon from '../Icon';
import Badge from '../Badge';

const OverflowStyled = styled.span`
  ${S1} {
    color: ${props => props.theme.greyDark};
    display: inline-block;
    line-height: 1;
  }
  &:hover {
    ${S1} {
      color: ${props => props.theme.brandPrimary};
    }
    path {
      fill: ${props => props.theme.brandPrimary};
    }
  }
`;

export interface IProps {
  max: number;
  items: any[];
  viewMode?: 'text' | 'label';
  overflowStyle?: CSSProperties;
  overflowClass?: string;
  containerStyle?: CSSProperties;
  containerClass?: string;
  textStyle?: CSSProperties;
  renderItem: (item: any, index: number) => React.ReactElement;
}

const OverflowList: React.SFC<IProps> = ({
  max,
  items = [],
  viewMode = 'text',
  overflowStyle,
  overflowClass,
  containerStyle,
  containerClass,
  textStyle,
  renderItem
}) => {
  const [expand, setExpand] = useState(false);

  const list = expand ? items : items.slice(0, max);
  const OverflowText =
    viewMode === 'text' ? (
      <S1 style={textStyle}>+{Math.abs(max - items.length)}</S1>
    ) : (
      <Badge style={{ height: 18 }} color='#fff' backgroundColor='#A9B0B0'>
        +{Math.abs(max - items.length)}
      </Badge>
    );

  return (
    <FlowLayout className={containerClass} style={containerStyle}>
      {list.map(renderItem)}

      <OverflowStyled
        style={overflowStyle}
        className={overflowClass}
        onClick={() => setExpand(!expand)}
      >
        {items.length > max ? (
          expand ? (
            <Icon name='collapse' />
          ) : (
            OverflowText
          )
        ) : null}
      </OverflowStyled>
    </FlowLayout>
  );
};

export default OverflowList;