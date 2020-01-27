import * as React from 'react';
import styled from 'styled-components';

import Checkbox from '../Checkbox';
import NameAndAvatar from '../Avatar/NameAndAvatar';
import Tooltip from '../Tooltip';
import { FlowLayout } from '../Styled';
import { injectIntl, WrappedComponentProps } from 'react-intl';

const AgentSelectorRowStyled = styled.div`
  font-family: Rubik;
  display: flex;
  align-items: center;
  height: 34px;

  &:hover {
    background: ${props => props.theme.textHover};
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.brandPrimary};
  }

  & > div:first-child {
    margin: 0 12px 0 10px;
  }

  & .disabled label span {
    background: ${props => props.theme.greyLight};
  }
  & .disabled label span svg path {
    fill: ${props => props.theme.white};
  }

  & > div:nth-child(2) .text {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    /* or 21px */

    display: flex;
    align-items: center;

    /* Static */

    color: ${props => props.theme.staticColour};
  }

  &:hover > div:nth-child(2) .text {
    font-weight: 500;
    color: ${props => props.theme.brandPrimary};
  }

  & > div:last-child {
    cursor: pointer;
  }

  & img {
    margin-left: 1px;
  }
`;

interface Props {
  agent: {
    id: string;
    name: string;
    avatar?: string;
  };
  onSelect: (id: string) => void;
  restricted?: boolean;
  selected: boolean;
}

const AgentSelectorRow: React.FC<Props & WrappedComponentProps> = React.memo(
  ({ agent, intl, onSelect, restricted, selected }) => {
    const onCheck = React.useCallback(() => onSelect(agent.id), [
      agent.id,
      onSelect
    ]);
    const doNothing = React.useCallback(() => ({}), []);
    return (
      <AgentSelectorRowStyled key={agent.id}>
        {restricted ? (
          <Tooltip
            content={intl.formatMessage({
              id: 'admin.agentselector.restricted'
            })}
            styleType='lightBox'
            placement='bottom'
          >
            <FlowLayout className='disabled'>
              <Checkbox checked={true} disabled={true} onChange={doNothing} />
            </FlowLayout>
          </Tooltip>
        ) : (
          <Checkbox checked={!!selected} onChange={onCheck} />
        )}
        <NameAndAvatar avatar={agent.avatar} name={agent.name} />
      </AgentSelectorRowStyled>
    );
  }
);

AgentSelectorRow.displayName = 'AgentSelectorRow';

export default injectIntl(AgentSelectorRow);

