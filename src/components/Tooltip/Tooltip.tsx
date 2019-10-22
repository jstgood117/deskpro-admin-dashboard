import React, { SFC } from 'react';
import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';

import 'tippy.js/dist/tippy.css';

type IProps = {
  styleType?: 'dark' | 'light';
} & TippyProps;

const getStyle = (styleType: 'dark' | 'light', theme: any) => {
  const styles = {
    light: {
      backgroundColor: '#fff',
      color: theme.staticColour
    },
    dark: {
      backgroundColor: theme.staticColour,
      color: '#fff'
    }
  };
  return styles[styleType] || styles.dark;
};

const Tooltip: SFC<IProps> = styled(
  ({ suppressClassNameWarning, ...props }) => <Tippy arrow={false} {...props} />
).attrs({
  suppressClassNameWarning: true
})`
  &.tippy-tooltip {
    background-color: ${props =>
      getStyle(props.styleType, props.theme).backgroundColor};
    color: ${props => getStyle(props.styleType, props.theme).color};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  ${props => props.theme.mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
`;

export default Tooltip;