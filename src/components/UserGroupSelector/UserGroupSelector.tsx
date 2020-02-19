import React, { FC, useState, useCallback } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

import Input from '../Input';
import Button from '../Button';
import UserGroupSelectorRow from './UserGroupSelectorRow';
import { dpstyle } from '../Styled';

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background: ${props => props.theme.greyLightest};
  }
  & input:focus {
    background: ${props => props.theme.white};
  }
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

  :nth-child(1) {
    margin-top: 0px;
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


export interface Items {
  id: number;
  value: string;
  selected: boolean;
}

export interface IProps {
  description?: string;
  items: Items[];
  onSelect: (item: Items[]) => void;
}

const UserGroupSelector: FC<IProps & WrappedComponentProps> = ({
  intl,
  description,
  items,
  onSelect,
}) => {
  const [filter, setFilter] = useState('');

  // Select options by provided filter
  const filteredItems = filter
    ? items.filter(item => item.value.toLowerCase().includes(filter))
    : items;

  // Get selected count - list of `true` selected fields
  const selectedCount = items.filter(item => item.selected).length;

  const onChangeFilter = useCallback(
    e => setFilter(e.target.value.toLowerCase()),
    []
  );

  const onClearFilter = useCallback(e => setFilter(''), []);

  const onItemClick = (id: number) => {
    const newItems = [...items];
    newItems[id].selected = !newItems[id].selected;

    onSelect(newItems);
  };

  const onSelectAllClick = () => {
    const newItems = items.map(item => {
      item.selected = true;
      return item;
    });

    onSelect(newItems);
  };

  return (
    <SelectorContainer>
      {description && (
        <SelectorDescription>
          {description}
        </SelectorDescription>
      )}
      <SelectorInfo>
        <p>
          {intl.formatMessage({
            id: 'admin.usergroupselector.selected',
          })}
          : {selectedCount} of {items.length}
        </p>
        <Button
          buttonType='button'
          onClick={onSelectAllClick}
          styleType='secondary'
          size='small'
        >
          {intl.formatMessage({
            id: 'admin.usergroupselector.select-all',
          })}
        </Button>
      </SelectorInfo>
      <Input
        inputType='primary'
        onChange={onChangeFilter}
        onClear={onClearFilter}
        placeholder={intl.formatMessage({
          id: 'admin.usergroupselector.search',
        })}
        showClear={true}
        value={filter}
      />
      <Scrollbars
        style={{
          borderTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          paddingTop: 4,
          height: 34 * filteredItems.length + 1,
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
          {filteredItems.map((item, index) => (
            <UserGroupSelectorRow
              key={index}
              item={item}
              onSelect={() => onItemClick(item.id)}
            />
          ))}
        </SelectorList>
      </Scrollbars>
    </SelectorContainer>
  );
};

export default injectIntl(UserGroupSelector);
