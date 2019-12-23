import React, { FC } from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';

import { DeskproAdminThemeType } from '../../style/DeskproAdminTheme';

export type Props = {
  styleType?: 'dark' | 'light' | 'lightBox';
} & TippyProps;

const getStyle = (styleType: 'dark' | 'light' | 'lightBox', theme: DeskproAdminThemeType) => {
  const styles = {
    light: {
      backgroundColor: '#fff',
      color: theme.staticColour,
      border: 'none',
      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)'
    },
    lightBox: {
      backgroundColor: '#fff',
      color: theme.staticColour,
      border: '1px solid #EFF0F0',
      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15);'
    },
    dark: {
      backgroundColor: theme.staticColour,
      color: '#fff',
      border: 'none',
      boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)'
    }
  };
  return styles[styleType] || styles.dark;
};

const Tooltip: FC<Props> = styled(
  ({ suppressClassNameWarning, styleType, ...props }) => <Tippy arrow={false} {...props} />
).attrs({
  suppressClassNameWarning: true
})`
  &.tippy-tooltip {
    background-color: ${props =>
      getStyle(props.styleType, props.theme).backgroundColor};
    color: ${props => getStyle(props.styleType, props.theme).color};
    box-shadow: ${props => getStyle(props.styleType, props.theme).boxShadow};
    border: ${props => getStyle(props.styleType, props.theme).border};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
`;

export default Tooltip;