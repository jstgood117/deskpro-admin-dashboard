import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';

import { dpstyle, TextLabel } from '../../Styled';

export interface IStyleProps {
  active: boolean;
}

const TabStyled = styled(dpstyle.div)<IStyleProps>`
  border-bottom: solid 1.5px ${props => (props.active ? '#1C3E55' : '#eff0f0')};
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 56px;
  height: 32px;
  color: ${props => (props.active ? '#1C3E55' : '#A9B0B0')};
`;

export interface IProps {
  label?: string;
  messageId?: string;
  index: number;
  value: number;
  onClick?: (e: any) => void;
}

const Tab: SFC<IProps> = props => (
  <Fragment>
    <TabStyled active={props.index === props.value} onClick={props.onClick}>
      {props.label ? <TextLabel>{props.label}</TextLabel> : <TextLabel messageId={props.messageId} />}
    </TabStyled>
  </Fragment>
);

export default Tab;
