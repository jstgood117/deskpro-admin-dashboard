import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Input from '../Input';
import { AgentSelectorRow } from './AgentSelectorRow';

const AgentSelectorContainer = styled.div`
  background: ${props => props.theme.white};
  box-shadow: ${props => `-5px 0px 8px ${props.theme.greyLightest}`};
  padding: 32px;
  & input {
    flex-grow: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const AgentSelectorTitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.staticColour};
  padding-bottom: 24px;
  border-bottom: ${props => `1px solid ${props.theme.greyLighter}`};
`;

const AgentSelectorDescription = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  color: ${props => props.theme.greyDark};
  margin-top: 16px;
`;

const AgentSelectorInfo = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.staticColour};

  display: flex;
  align-items: center;
  margin: 16px 0;

  /* Selected info */
  & > p {
    margin: 0;
    flex-grow: 1;
  }
`;

const AgentSelectorList = styled.div`
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.greyLight}`};
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-top: 4px;
  max-height: 860px;
  overflow: auto;
`;

const AgentSelectorActions = styled.div`
  border-top: 1px solid ${props => props.theme.greyLighter};
  height: 68px;
  margin-top: 25px;
  padding-top: 16px;

  & > div:first-child button {
    border: 0;
    width: 112px;
    height: 34px;
    margin-right: 16px;
    justify-content: center;
  }
  & > div:last-child button {
    width: 88px;
    height: 34px;
    justify-content: center;
  }
`;

interface Props {
  agents: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  selected: {
    [id: string]: boolean;
  };
  onSelect: (selected: { [id: string]: boolean }) => void;
  description?: string;
  title: string;
}

const AgentSelector: React.FC<Props> = ({
  agents,
  description,
  onSelect,
  selected: initialSelected,
  title
}) => {
  const [selected, setSelected] = React.useState(initialSelected);
  const onAgentSelect = React.useCallback(
    (id: string) => {
      setSelected({ ...selected, [id]: !selected[id] });
    },
    [selected]
  );
  const onSelectAllClick = () =>
    setSelected(
      Object.assign({}, ...agents.map(agent => ({ [agent.id]: true })))
    );
  const onCancelClick = () => setSelected(initialSelected);
  const onSaveClick = () => onSelect(selected);

  return (
    <AgentSelectorContainer>
      <AgentSelectorTitle>{title}</AgentSelectorTitle>
      {description && (
        <AgentSelectorDescription>{description}</AgentSelectorDescription>
      )}
      <AgentSelectorInfo>
        <p>
          Selected: {Object.values(selected).filter(value => value).length} of{' '}
          {agents.length}
        </p>
        <Button
          buttonType='button'
          onClick={onSelectAllClick}
          styleType='secondary'
        >
          Select all
        </Button>
      </AgentSelectorInfo>
      <Input inputType='primary' placeholder='Search' showClear={true} />
      <AgentSelectorList>
        {agents.map(agent => (
          <AgentSelectorRow
            agent={agent}
            key={agent.id}
            onSelect={onAgentSelect}
            selected={selected[agent.id]}
          />
        ))}
      </AgentSelectorList>
      <AgentSelectorActions>
        <Button onClick={onSaveClick} styleType='primary'>
          Save
        </Button>
        <Button onClick={onCancelClick} styleType='secondary'>
          Cancel
        </Button>
      </AgentSelectorActions>
    </AgentSelectorContainer>
  );
};

export default AgentSelector;
