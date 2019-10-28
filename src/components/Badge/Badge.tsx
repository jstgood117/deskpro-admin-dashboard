import React, { SFC, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

interface IBadgeProps {
  backgroundColor: string;
  color: string;
  showBoxShadow: boolean;
}
const BadgeContainer = styled.div<IBadgeProps>`
  border-radius: 4px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  padding: 0 10px;
  ${props =>
    props.showBoxShadow &&
    css`
      border: 2px solid transparent;
      &:hover {
        box-shadow: 0px 3px 5px rgba(159, 204, 243, 0.25);
        border-color: ${props => props.theme.lightBlue};
      }
    `}
`;

export interface IProps {
  color: string;
  backgroundColor: string;
  style?: CSSProperties;
  className?: string;
  showBoxShadow?: boolean;
}

const Badge: SFC<IProps> = ({
  color,
  backgroundColor,
  style,
  className,
  showBoxShadow,
  ...props
}) => (
  <BadgeContainer
    style={style}
    className={className}
    color={color}
    backgroundColor={backgroundColor}
    showBoxShadow={showBoxShadow}
  >
    {props.children}
  </BadgeContainer>
);

export default Badge;