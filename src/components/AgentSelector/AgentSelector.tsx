import * as React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import Button from '../Button';
import Input from '../Input';
import { AgentSelectorRow } from './AgentSelectorRow';
import { IntlShape } from 'react-intl';

const AgentSelectorContainer = styled.div`
  background: ${props => props.theme.white};
  box-shadow: ${props => `-5px 0px 8px ${props.theme.greyLightest}`};
  padding: 32px;
  & input {
    flex-grow: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: ${props => props.theme.greyLightest};
  }
  & input:focus {
    background: ${props => props.theme.white};
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
  agents?: {
    id: string;
    name: string;
    avatar?: string;
  }[];
  description?: string;
  restricted?: {
    [id: string]: boolean;
  };
  intl: IntlShape;
  onSelect: (selected: { [id: string]: boolean }) => void;
  onSave?: () => void;
  onCancel?: () => void;
  selected: {
    [id: string]: boolean;
  };
  title: string;
}

const AgentSelector: React.FC<Props> = ({
  agents,
  description,
  intl,
  onCancel,
  onSave,
  onSelect,
  restricted,
  selected,
  title
}) => {
  const [filter, setFilter] = React.useState('');
  const onAgentSelect = React.useCallback(
    (id: string) => {
      onSelect({ ...selected, [id]: !selected[id] });
    },
    [onSelect, selected]
  );
  const onSelectAllClick = () =>
    onSelect(
      Object.assign(
        {},
        ...(agents || [])
          .filter(agent =>
            filter ? agent.name.toLowerCase().includes(filter) : agent
          )
          .map(agent => ({ [agent.id]: true }))
      )
    );
  const onChangeFilter = React.useCallback(
    e => setFilter(e.target.value.toLowerCase()),
    []
  );

  return (
    <AgentSelectorContainer>
      <AgentSelectorTitle>{title}</AgentSelectorTitle>
      {description && (
        <AgentSelectorDescription>{description}</AgentSelectorDescription>
      )}
      <AgentSelectorInfo>
        <p>
          {intl.formatMessage({ id: 'admin.agentselector.selected' })}:{' '}
          {Object.values(selected).filter(value => value).length} of{' '}
          {agents.length}
        </p>
        <Button
          buttonType='button'
          onClick={onSelectAllClick}
          styleType='secondary'
        >
          {intl.formatMessage({ id: 'admin.agentselector.select-all' })}
        </Button>
      </AgentSelectorInfo>
      <Input
        inputType='primary'
        onChange={onChangeFilter}
        placeholder='Search'
        showClear={true}
      />
      <Scrollbars
        style={{
          borderRadius: 4,
          borderTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          paddingTop: 4,
          minHeight: 400,
          width: '100%',
          maxHeight: 860
        }}
        renderTrackVertical={({ style }) => (
          <div
            style={{
              background: '#EFF0F0',
              position: 'absolute',
              width: 16,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 3
            }}
          />
        )}
      >
        <AgentSelectorList>
          {(agents || [])
            .filter(agent =>
              filter ? agent.name.toLowerCase().includes(filter) : true
            )
            .map(agent => (
              <AgentSelectorRow
                agent={agent}
                intl={intl}
                key={agent.id}
                onSelect={onAgentSelect}
                restricted={restricted && restricted[agent.id]}
                selected={selected[agent.id]}
              />
            ))}
        </AgentSelectorList>
      </Scrollbars>
      <AgentSelectorActions>
        <Button onClick={onSave} styleType='primary'>
          {intl.formatMessage({ id: 'admin.agentselector.save' })}
        </Button>
        <Button onClick={onCancel} styleType='secondary'>
          {intl.formatMessage({ id: 'admin.agentselector.cancel' })}
        </Button>
      </AgentSelectorActions>
    </AgentSelectorContainer>
  );
};

export default AgentSelector;
