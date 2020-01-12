import React, { FC, ReactNode } from 'react';
import styled, { CSSProperties, ThemeProvider, css } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { dpstyle, TextLabel } from '../Styled';
import Icon from '../Icon';

export interface IStyleProps {
  styleType: 'lined' | 'filled';
  iconColor?: string;
  showBoxShadow?: boolean;
  styles?: CSSProperties;
}

export interface IProps {
  label: string | any;
  styles?: CSSProperties;
  icon?: string;
  iconColor?: string;
  children?: ReactNode;
  showBoxShadow?: boolean;
}

const LabelStyle = styled(dpstyle.div)<IStyleProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  width: ${props =>
    props.styles && props.styles.width ? props.styles.width : 'fit-content'};
  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : '22px'};
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
  ${props =>
    props.showBoxShadow &&
    css`
      &:hover {
        box-shadow: 0px 3px 5px rgba(159, 204, 243, 0.25);
        border-color: ${_props => _props.theme.lightBlue};
      }
    `}
`;

const Label: FC<IProps & IStyleProps> = ({
  label,
  styleType,
  icon,
  styles,
  iconColor,
  ...props
}) => (
    <ThemeProvider theme={DeskproAdminTheme}>
      <LabelStyle
        styleType={styleType}
        styles={styles}
        iconColor={iconColor}
        showBoxShadow={props.showBoxShadow}
      >
        {icon && (
          <span
            style={{
              display: 'flex',
              padding: '5px 0px 5px 8px'
            }}
            className='icon-label'
          >
            <Icon name={icon} />
          </span>
        )}
        <TextLabel
          small={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: icon ? '0px 8px' : '0px 10px',
            fontWeight: '600',
            width: '100%',
            textAlign: styles && styles.textAlign ? styles.textAlign : 'center'
          }}
        >
          {props.children}
          {label}
        </TextLabel>
      </LabelStyle>
    </ThemeProvider>
  );

export default Label;
