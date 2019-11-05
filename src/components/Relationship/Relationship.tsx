import React, { SFC, CSSProperties } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import Icon from '../Icon';
import { P1, S1 } from '../Typography';
import { FlowLayout } from '../Styled';
import Tooltip from '../Tooltip';

const FlowLayoutStyled = styled(FlowLayout)`
  display: inline-flex;
`;

const CircleStyled = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  width: 27px;
  height: 27px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  ${S1} {
    color: ${props => props.theme.static2Colour};
  }
  div {
    padding: 5px 0;
  }
`;

export interface IProps {
  icon: string;
  items: any[];
  color: string;
  backgroundColor: string;
  title: string;
  text?: string | number;
  style?: CSSProperties;
  className?: string;
  renderItem: (item: any, index: number) => React.ReactElement;
}

const Relationship: SFC<IProps> = ({
  icon,
  items,
  text,
  color,
  backgroundColor,
  title,
  style,
  className,
  renderItem
}) => {
  return (
    <Tooltip
      styleType='lightBox'
      content={(
        <List>
          <S1>{title}</S1>
          {items.map((item, index) => renderItem(item, index))}
        </List>
      )}
    >
      <span>
        {text ? (
          <FlowLayoutStyled>
            <CircleStyled backgroundColor={backgroundColor}>
              <Icon name={icon} />
            </CircleStyled>
            <P1 style={{ marginRight: 8 }}>{text}</P1>
            <Badge color='#FFF' backgroundColor='#A9B0B0'>
              {items.length}
            </Badge>
          </FlowLayoutStyled>
        ) : (
          <Badge
            style={style}
            className={className}
            color={color}
            backgroundColor={backgroundColor}
            showBoxShadow={true}
          >
            <Icon name={icon} />
            <div style={{ marginLeft: 10 }}>{items.length}</div>
          </Badge>
        )}
      </span>
    </Tooltip>
  );
};

export default Relationship;