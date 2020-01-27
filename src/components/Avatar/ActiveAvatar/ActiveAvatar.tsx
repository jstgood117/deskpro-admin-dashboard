import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { FlowLayout } from '../../Styled';
import Avatar, { IProps as IAvatarProps } from '../Avatar';
import Tooltip from '../../Tooltip';

const Container = styled(FlowLayout)`
  display: inline-flex;
  position: relative;
  margin-right: 8px;
`;

const Dot = styled.span<{ position: 'top' | 'bottom'; color: string }>`
  position: absolute;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.6px solid #fff;
  background: ${props => props.color || props.theme.successColour};
  ${props =>
    props.position === 'top'
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}
`;

export interface IProps {
  name: string;
  avatar?: string;
  active?: boolean;
  position?: 'top' | 'bottom';
  activeColor?: string;
  avatarProps?: IAvatarProps;
  containerStyle?: CSSProperties;
  containerClassName?: string;
}
const ActiveAvatar: React.FC<IProps> = ({
  name,
  avatar,
  active,
  position = 'bottom',
  activeColor,
  avatarProps,
  containerStyle,
  containerClassName
}) => {
  console.log(avatarProps, avatar);
  return (
    <Tooltip content={name} styleType='lightBox'>
      <Container style={containerStyle} className={containerClassName}>
        <Avatar
          type={avatar ? 'image' : 'text'}
          content={avatar ? avatar : name}
          {...avatarProps}
        />
        {active && <Dot position={position} color={activeColor} />}
      </Container>
    </Tooltip>
  );
};

export default ActiveAvatar;
