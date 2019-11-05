import React, { SFC } from 'react';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle, TextLabel } from '../Styled';
import Icon from '../Icon';

export interface IStyleProps {
  styleType: 'lined' | 'filled';
  iconColor?: string;
  styles?: CSSProperties;
}

export interface IProps {
  label: string;
  styles?: CSSProperties;
  icon?: string;
  iconColor?: string;
}

const LabelStyle = styled(dpstyle.div)<IStyleProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  width: ${props =>
    props.styles && props.styles.width ? props.styles.width : 'fit-content'};
  min-height: 24px;
  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : 'inherit'};
  border: ${props =>
    props.styleType === 'lined' && props.styles && props.styles.borderColor
      ? `1.5px solid ${props.styles.borderColor}`
      : 'none'};
  background: ${props =>
    props.styleType === 'filled' && props.styles && props.styles.backgroundColor
      ? props.styles.backgroundColor
      : props.theme.white};
  color: ${props =>
    props.styles && props.styles && props.styles.color
      ? props.styles.color
      : props.theme.black};
  path {
    fill: ${props =>
      props.iconColor ? props.iconColor : props.theme.activeColour};
  }
`;

const Label: SFC<IProps & IStyleProps> = ({
  label,
  styleType,
  icon,
  styles,
  iconColor
}) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <LabelStyle styleType={styleType} styles={styles} iconColor={iconColor}>
      {icon && (
        <span
          style={{
            display: 'flex',
            padding: '6px 0px 6px 10px'
          }}
        >
          <Icon name={icon} />
        </span>
      )}
      <TextLabel
        small={1}
        style={{
          padding: '0px 10px',
          fontWeight: '600',
          minWidth: icon ? 0 : 50,
          width: '100%',
          textAlign: styles && styles.textAlign ? styles.textAlign : 'center'
        }}
      >
        {label}
      </TextLabel>
    </LabelStyle>
  </ThemeProvider>
);

export default Label;
