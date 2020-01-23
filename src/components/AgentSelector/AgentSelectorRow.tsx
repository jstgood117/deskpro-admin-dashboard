import * as React from 'react';
import styled from 'styled-components';

import Checkbox from '../Checkbox';
import NameAndAvatar from '../Avatar/NameAndAvatar';

const AgentSelectorRowStyled = styled.div`
  display: flex;
  align-items: center;
  height: 34px;

  &:hover {
    background: ${props => props.theme.textHover};
  }

  & > div:first-child {
    margin: 0 12px 0 4px;
  }

  & > div:last-child {
    cursor: pointer;
  }

  & img {
    margin-left: 1px;
    transform: translateY(2px);
  }
`;

interface Props {
  agent: {
    id: string;
    name: string;
    avatar?: string;
  };
  onSelect: (id: string) => void;
  selected: boolean;
}

export const AgentSelectorRow: React.FC<Props> = React.memo(
  ({ agent, onSelect, selected }) => {
    return (
      <AgentSelectorRowStyled key={agent.id}>
        <Checkbox checked={!!selected} onChange={() => onSelect(agent.id)} />
        <NameAndAvatar avatar={agent.avatar} name={agent.name} />
      </AgentSelectorRowStyled>
    );
  }
);

AgentSelectorRow.displayName = 'AgentSelectorRow';
