import React, { SFC } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';

interface ImageProps {
  size: number;
  selected?: boolean;
}
const AvatarContainer = styled.div<ImageProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  img,
  svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 3px 4px ${props => props.theme.pageHeader};
    ${props =>
      props.selected &&
      css`
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
      `}
  }
`;

interface ITextProps {
  backgroundColor: string;
  color: string;
  size: number;
}
const Text = styled.div<ITextProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  line-height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: solid 2px transparent;
  &:hover {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: solid 2px ${props => props.theme.hoverColour};
  }
`;

export interface IProps {
  size?: number;
  textSize?: number;
  selected?: boolean;
  type: 'image' | 'svg' | 'text';
  content: string;
  textColor?: string;
  textBackgroundColor?: string;
}

const Avatar: SFC<IProps> = ({
  size = 25,
  textSize = 22,
  selected,
  type,
  content,
  textColor,
  textBackgroundColor
}) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <AvatarContainer size={size} selected={selected}>
      {type === 'image' && <img src={content} alt="avatar" />}

      {type === 'svg' && <Icon name={content} />}

      {type === 'text' && (
        <Text
          size={textSize}
          color={textColor}
          backgroundColor={textBackgroundColor}
        >
          {(content || '').charAt(0).toUpperCase()}
        </Text>
      )}
    </AvatarContainer>
  </ThemeProvider>
);

export default Avatar;
