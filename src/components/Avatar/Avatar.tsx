import React, { SFC } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';

interface ImageProps {
  selected?: boolean;
}
const AvatarContainer = styled.div<ImageProps>`
  img,
  svg {
    width: 25px;
    height: 25px;
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
}
const Text = styled.div<ITextProps>`
  width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: solid 2px transparent;
  &:hover {
    width: 22px;
    height: 22px;
    border: solid 2px ${props => props.theme.hoverColour};
  }
`;

export interface IProps {
  selected?: boolean;
  type: 'image' | 'svg' | 'text';
  content: string;
  textColor?: string;
  textBackgroundColor?: string;
}

const Avatar: SFC<IProps> = ({
  selected,
  type,
  content,
  textColor,
  textBackgroundColor
}) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <AvatarContainer selected={selected}>
      {type === 'image' && <img src={content} />}

      {type === 'svg' && <Icon name={content} />}

      {type === 'text' && (
        <Text color={textColor} backgroundColor={textBackgroundColor}>
          {(content || '').charAt(0).toUpperCase()}
        </Text>
      )}
    </AvatarContainer>
  </ThemeProvider>
);

export default Avatar;