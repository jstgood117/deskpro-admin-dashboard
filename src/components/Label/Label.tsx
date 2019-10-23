import React, { SFC, Fragment } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { dpstyle, TextLabel } from '../Styled';

export interface IStyleProps {
  styleType: 'lined' | 'filled';
  styles?: CSSProperties;
}

export interface IProps {
  label: string;
  styles?: CSSProperties;
}

const LabelStyle = styled(dpstyle.div)<IStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: ${props =>
    props.styles && props.styles.width ? props.styles.width : 'fit-content'};
  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : 'inherit'};
  border: ${props =>
    props.styleType === 'lined' && props.styles && props.styles.borderColor
      ? `1.5px solid ${props.styles.borderColor}`
      : 'none'};
  background: ${props =>
    props.styleType === 'filled' && props.styles && props.styles.backgroundColor
      ? props.styles.backgroundColor
      : '#ffffff'};
  color: ${props =>
    props.styles && props.styles && props.styles.color
      ? props.styles.color
      : '#000'};
  color: ;
`;

const Label: SFC<IProps & IStyleProps> = ({ label, styleType, styles }) => (
  <Fragment>
    <LabelStyle styleType={styleType} styles={styles}>
      <TextLabel small={1} style={{ padding: '0px 10px' }}>
        {label}
      </TextLabel>
    </LabelStyle>
  </Fragment>
);

export default Label;
