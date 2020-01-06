import React, { SFC } from 'react';
import Autocomplete from 'react-autocomplete';
import { uniqueId } from 'lodash';

import Icon from '../../../Icon';
import { DeskproAdminTheme } from '../../../Theme';

import {
  AutoCompleteItemStyle,
  MenuStyle
} from '../../../AutoComplete/AutoComplete';

import { StyledAutoComplete } from '../../FilterOptions';

import { Props } from './types';

export const ChoiceFromData: SFC<Props> = ({
  filter,
  filters,
  filterValue,
  index,
  setFilterValue,
  // setFilters,
  placeholder,
  uniqueValues
}) => {
  return (
    <StyledAutoComplete name='value'>
      <Autocomplete
        getItemValue={(item: any) => item}
        items={uniqueValues}
        inputProps={{
          autoComplete: 'off',
          placeholder,
          style: {
            minWidth: 218
          }
        }}
        renderItem={(item: any, isHighlighted: boolean) => {
          const selected = false; // TODO
          return (
            <div
              style={AutoCompleteItemStyle(
                isHighlighted,
                DeskproAdminTheme,
                selected
              )}
              key={uniqueId()}
            >
              {item}
              {selected && (
                <span>
                  <Icon name='check-2' />
                </span>
              )}
            </div>
          );
        }}
        value={filter && filter.value !== undefined ? filter.value : filterValue}
        onChange={(e: any) => {}}
        onSelect={(val: string) => {
          filters[index].value = val;
          setFilterValue(val);
        }}
        menuStyle={MenuStyle()}
      />
      <span>
        <Icon name='downVector' />
      </span>
    </StyledAutoComplete>
  );
};

export default ChoiceFromData;