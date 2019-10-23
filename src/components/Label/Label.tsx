import React, { SFC, Fragment } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { dpstyle, TextLabel } from '../Styled';

export interface IStyleProps {
  styleType: 'OutlineGray' | 'Pink' | 'Tertiary';
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
    props.styleType === 'OutlineGray' ? '1.5px solid #a9b0b0' : 'none'};
  background: ${props =>
    props.styleType === 'Pink' ? '#f9e6e1' : '#ffffff'};
  color: ${props =>
    props.styleType === 'Pink' ? '#ec6c4e' : '#A9B0B0'};
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
