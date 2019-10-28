import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { FlowLayout } from '../../Styled';
import Avatar, { IProps as IAvatarProps } from '../Avatar';
import { P1 } from '../../Typography';

const Name = styled(P1)`
  margin-left: 8px;
  line-height: 1;
`;

export interface IProps {
  name: string;
  avatar?: string;
  avatarProps?: IAvatarProps;
  containerStyle?: CSSProperties;
  containerClassName?: string;
}
const NameAndAvatar: React.SFC<IProps> = ({
  name,
  avatar,
  avatarProps,
  containerStyle,
  containerClassName
}) => (
  <FlowLayout style={containerStyle} className={containerClassName}>
    <Avatar
      type={avatar ? 'image' : 'text'}
      content={avatar ? avatar : name}
      {...avatarProps}
    />
    <Name>{name}</Name>
  </FlowLayout>
);

export default NameAndAvatar;