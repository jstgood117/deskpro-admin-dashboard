import React, { SFC, CSSProperties } from 'react';
import styled from 'styled-components';

interface IBadgeProps {
  backgroundColor: string;
  color: string;
}
const BadgeContainer = styled.div<IBadgeProps>`
  border-radius: 4px;
  height: 22px;
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  padding: 0 10px;
`;

export interface IProps {
  color: string;
  backgroundColor: string;
  style?: CSSProperties;
  className?: string;
}

const Badge: SFC<IProps> = ({
  color,
  backgroundColor,
  style,
  className,
  ...props
}) => (
  <BadgeContainer
    style={style}
    className={className}
    color={color}
    backgroundColor={backgroundColor}
  >
    {props.children}
  </BadgeContainer>
);

export default Badge;