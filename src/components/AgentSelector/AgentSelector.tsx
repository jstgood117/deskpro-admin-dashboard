import * as React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import Button from '../Button';
import Input from '../Input';
import AgentSelectorRow from './AgentSelectorRow';
import { dpstyle } from '../Styled';

const SelectorContainer = styled.div`
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

const SelectorHeader = styled(dpstyle.div1)`
  display: flex;
  align-items: center;
  height: 83px;
  padding: 32px 32px 24px 32px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;
`;

const SelectorBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 19px 32px;
  height: calc(100vh - 151px);
  box-sizing: border-box;
  overflow-y: auto;
`;

const SelectorDescription = styled(dpstyle.div1)`
  font-size: 13px;
  color: ${props => props.theme.greyDark};
`;

const SelectorInfo = styled(dpstyle.div1)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  margin: 16px 0;

  /* Selected info */
  & > p {
    margin: 0;
    flex-grow: 1;
  }

  & button {
    font-family: Rubik;
    font-size: 13px;
  }
`;

const SelectorList = styled.div`
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.greyLight}`};
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-top: 4px;
  max-height: '100%';
`;

const SelectorFooter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 68px;
  padding: 16px 32px 18px 32px;
  background-color: ${props => props.theme.white};
  border-top: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;

  button {
    font-family: Rubik;
    width: 112px;
    margin-right: 16px;
    justify-content: center;
  }

  .btn-cancel button {
    color: ${props => props.theme.activeColour};
    background-color: ${props => props.theme.textHover};
    border: 1px solid ${props => props.theme.activeColour};

    :hover {
      background-color: ${props => props.theme.hoverColour};
    }
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
    [id: string]: true;
  };
  onSelect: (selected: { [id: string]: boolean }) => void;
  onSave?: () => void;
  onCancel?: () => void;
  selected: {
    [id: string]: boolean;
  };
  title: string;
}

const AgentSelector: React.FC<Props & WrappedComponentProps> = ({
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
  // Select agents by provided filter
  let filteredAgents = filter
    ? (agents || []).filter(agent => agent.name.toLowerCase().includes(filter))
    : agents;
  // Ensure that `filteredAgents` is array since `agents` props is nullable
  filteredAgents = filteredAgents || [];

  const onChangeFilter = React.useCallback(
    e => setFilter(e.target.value.toLowerCase()),
    []
  );
  const onClearFilter = React.useCallback(e => setFilter(''), []);

  // Get selected count - list of `true` selected fields
  const selectedCount =
    Object.values(selected).filter(value => value).length +
    // And restricted keys
    Object.keys(restricted || {}).filter(key => !selected[key]).length;

  const onSelectAllClick = () =>
    onSelect(
      Object.assign({}, ...filteredAgents.map(agent => ({ [agent.id]: true })))
    );

  return (
    <SelectorContainer>
      <SelectorHeader>
        {title}
      </SelectorHeader>
      <SelectorBody>
        {description && (
          <SelectorDescription>
            {description}
          </SelectorDescription>
        )}
        <SelectorInfo>
          <p>
            {intl.formatMessage({ id: 'admin.agentselector.selected' })}:{' '}
            {selectedCount} of {agents.length}
          </p>
          <Button
            buttonType='button'
            onClick={onSelectAllClick}
            styleType='secondary'
          >
            {intl.formatMessage({ id: 'admin.agentselector.select-all' })}
          </Button>
        </SelectorInfo>
        <Input
          inputType='primary'
          onChange={onChangeFilter}
          onClear={onClearFilter}
          placeholder={intl.formatMessage({ id: 'admin.agentselector.search' })}
          showClear={true}
          value={filter}
        />
        <Scrollbars
          style={{
            borderRadius: 4,
            borderTop: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            paddingTop: 4,
            height: 34 * filteredAgents.length + 1,
            zIndex: 1,
            width: '100%',
            maxHeight: '100%'
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
          <SelectorList>
            {filteredAgents.map(agent => (
              <AgentSelectorRow
                agent={agent}
                key={agent.id}
                onSelect={onAgentSelect}
                restricted={restricted && restricted[agent.id]}
                selected={selected[agent.id]}
              />
            ))}
          </SelectorList>
        </Scrollbars>
      </SelectorBody>
      <SelectorFooter>
        <Button
          styleType='primary'
          size='medium'
          onClick={onSave}
        >
          {intl.formatMessage({ id: 'admin.common.save' })}
        </Button>
        <Button
          styleType='secondary'
          size='medium'
          className='btn-cancel'
          onClick={onCancel}
        >
          {intl.formatMessage({ id: 'admin.common.cancel' })}
        </Button>
      </SelectorFooter>
    </SelectorContainer>
  );
};

export default injectIntl(AgentSelector);
