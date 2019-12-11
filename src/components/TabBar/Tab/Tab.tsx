import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

import { dpstyle, TextString } from '../../Styled';

export interface IStyleProps {
  active: boolean;
}

const TabStyled = styled(dpstyle.div)<IStyleProps>`
  border-bottom: solid 1.5px
    ${props =>
      props.active ? props.theme.activeColour : props.theme.greyLighter};
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: default;
  margin-right: 56px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${props =>
    props.active ? props.theme.activeColour : props.theme.static2Colour};
  &:hover {
    color: ${props => props.theme.activeColour};
  }
`;

export interface IProps {
  label?: string;
  messageId?: string;
  index: number;
  value: number;
  onClick?: (e: any) => void;
}

const Tab: FC<IProps> = props => (
  <Fragment>
    <TabStyled active={props.index === props.value} onClick={props.onClick}>
      {props.label ? (
        <TextString>{props.label}</TextString>
      ) : (
        <TextString messageId={props.messageId} />
      )}
    </TabStyled>
  </Fragment>
);

export default Tab;
