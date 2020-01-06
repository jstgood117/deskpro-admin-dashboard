import React, { SFC } from 'react';
import { uniqueId } from 'lodash';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import Autocomplete from 'react-autocomplete';

import { operatorKeys, OperatorTypes } from '../../../services/filters/operators';
import { FilterMeta, FilterProps } from '../../../resources/interfaces/filterMeta';

import { DeskproAdminTheme } from '../../Theme';
import Icon from '../../Icon';

import { StyledAutoComplete } from '../FilterOptions';
import {
  getCurrentOperators,
  getIntlOperatorTitle,
  getOperatorByTitle,
} from '../helpers/funcs';
import {
  AutoCompleteItemStyle,
  MenuStyle
} from '../../AutoComplete/AutoComplete';

export type Props = {
  containOptions: any;
  currentPath: string;
  currentProperty: any;
  filter: FilterProps;
  containProperties: FilterMeta[];
  currentOperator: string;
  currentOption: any;
  setOption: React.Dispatch<any>;
  setOptions: React.Dispatch<React.SetStateAction<any[]>>;
  setCurrentOperator: React.Dispatch<React.SetStateAction<string>>;
};

export const Operator: SFC<Props & WrappedComponentProps> = ({
  intl,
  containOptions,
  currentProperty,
  currentPath,
  setOption,
  setOptions,
  filter,
  containProperties,
  currentOperator,
  currentOption,
  setCurrentOperator
}) => {
  return (
    <div style={{ minWidth: 186 }}>
      <StyledAutoComplete name='operatorName'>
        <Autocomplete
          getItemValue={(item: OperatorTypes[]) => item}
          items={containOptions}
          renderInput={(inputProps: any) => {
            return (
              <input
                {...inputProps}
                disabled={!currentProperty && !currentPath}
              />
            );
          }}
          inputProps={{
            autoComplete: 'off',
            onFocus: () => {
              setOption('');
              setOptions(
                getCurrentOperators(currentPath, filter, containProperties)
              );
            },
            onBlur: () => {
              setOption(
                currentOperator &&
                  intl.formatMessage({
                    id: getIntlOperatorTitle(currentOperator, operatorKeys)
                  })
              );
            }
          }}
          renderItem={(item: OperatorTypes, isHighlighted: boolean) => {
            const selected = item === currentOperator;
            return (
              <div
                style={AutoCompleteItemStyle(
                  isHighlighted,
                  DeskproAdminTheme,
                  selected
                )}
                key={uniqueId()}
              >
                {item &&
                  intl.formatMessage({
                    id: getIntlOperatorTitle(item, operatorKeys)
                  })}
                {selected && (
                  <span>
                    <Icon name='check-2' />
                  </span>
                )}
              </div>
            );
          }}
          value={
            currentOption !== undefined
              ? currentOption
              : currentOperator &&
                intl.formatMessage({
                  id: getIntlOperatorTitle(currentOperator, operatorKeys)
                })
          }
          onChange={(e: any) => {
            setOption(e.target.value);
            setCurrentOperator(
              getOperatorByTitle(e.target.value, containOptions)
            );
            const currentOperators = getCurrentOperators(
              currentPath,
              filter,
              containProperties
            );
            const newItems = currentOperators.filter(_option => {
              return intl
                .formatMessage({
                  id: getIntlOperatorTitle(_option, operatorKeys)
                })
                .toUpperCase()
                .includes(e.target.value.toUpperCase());
            });
            setOptions(newItems);
          }}
          onSelect={(val: OperatorTypes) => {
            setOption(
              intl.formatMessage({
                id: getIntlOperatorTitle(val, operatorKeys)
              })
            );
            setCurrentOperator(val);
            const currentOperators = getCurrentOperators(
              currentPath,
              filter,
              containProperties
            );
            const newItems = currentOperators.filter(_option => {
              return _option === val;
            });
            setOptions(newItems);
          }}
          menuStyle={MenuStyle()}
        />
        <span>
          {(currentProperty || currentPath) && <Icon name='downVector' />}
        </span>
      </StyledAutoComplete>
    </div>
  );
};

export default injectIntl(Operator);