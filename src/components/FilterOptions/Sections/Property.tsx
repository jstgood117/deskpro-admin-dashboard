import React, { SFC, useEffect, Dispatch, SetStateAction } from 'react';
import Autocomplete from 'react-autocomplete';

import { StyledAutoComplete } from '../FilterOptions';
import { uniqueId } from 'lodash';
import { FilterMeta, FilterProps } from '../../../resources/interfaces/filterMeta';
import { operatorKeys, OperatorTypes } from '../../../services/filters/operators';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { DeskproAdminTheme } from '../../Theme';

import Icon from '../../Icon';

import {
  getOptionPropertyByPath,
  getPathByOptionProperty,
  getIntlOperatorTitle,
} from '../helpers/funcs';

import {
  AutoCompleteItemStyle,
  MenuStyle
} from '../../AutoComplete/AutoComplete';

type Props = {
  placeholder: string;
  options: FilterMeta[];
  filter: FilterProps;
  currentPath: string;
  currentProperty: any;
  containProperties: FilterMeta[];
  getUniqueValues?: (columnName: string) => string[];
  setType: Dispatch<any>;
  setProperty: Dispatch<any>;
  setUniqueValues: Dispatch<SetStateAction<string[]>>;
  setProperties: Dispatch<SetStateAction<FilterMeta[]>>;
  setOptions: Dispatch<SetStateAction<any[]>>;
  setOption: Dispatch<any>;
  setCurrentOperator: Dispatch<SetStateAction<string>>;
  setCurrentPath: Dispatch<SetStateAction<string>>;
};

const Property: SFC<WrappedComponentProps & Props> = ({
  intl,
  containProperties,
  placeholder,
  setProperty,
  setProperties,
  options,
  filter,
  currentPath,
  currentProperty,
  setCurrentPath,
  setOptions,
  setOption,
  setCurrentOperator,
  setType,
  getUniqueValues,
  setUniqueValues
}) => {

  useEffect(() => {
    if(getUniqueValues) {
      setUniqueValues(getUniqueValues(currentPath));
    }
  }, [currentPath, setUniqueValues, getUniqueValues]);

  const AutoSelectOption = (val: OperatorTypes) => {
    setOption(
      intl.formatMessage({ id: getIntlOperatorTitle(val, operatorKeys) })
    );
    setCurrentOperator(val);
  };

  return (
    <div style={{ width: 160 }}>
      <StyledAutoComplete name='property'>
        <Autocomplete
          getItemValue={(item: any) => item.path}
          items={containProperties}
          inputProps={{
            autoComplete: 'off',
            placeholder,
            onFocus: () => {
              setProperty('');
              setProperties(options);
            },
            onBlur: () => {
              setProperty(
                filter?.property &&
                  getOptionPropertyByPath(currentPath, containProperties)
              );
            }
          }}
          renderItem={(item: any, isHighlighted: boolean) => {
            const selected = item.path === currentPath;
            return (
              <div
                style={AutoCompleteItemStyle(
                  isHighlighted,
                  DeskproAdminTheme,
                  selected
                )}
                key={uniqueId()}
              >
                {item.title}
                {selected && (
                  <span>
                    <Icon name='check-2' />
                  </span>
                )}
              </div>
            );
          }}
          value={
            currentProperty !== undefined
              ? currentProperty
              : filter &&
                getOptionPropertyByPath(currentPath, containProperties)
          }
          onChange={(e: any) => {
            setProperty(e.target.value);
            setCurrentPath(getPathByOptionProperty(e.target.value, containProperties));
            const newItems = options.filter(_option => {
              if (_option.path === e.target.value) {
                setOptions(_option.operators);
                AutoSelectOption(_option.operators[0]);
              }
              return _option.title
                .toUpperCase()
                .includes(e.target.value.toUpperCase());
            });
            setProperties(newItems);
          }}
          onSelect={(val: string) => {
            setProperty(getOptionPropertyByPath(val, containProperties));
            setCurrentPath(val);
            const newItems = options.filter(_option => {
              if (_option.path === val) {
                setOptions(_option.operators);
                setType(_option.type);

                AutoSelectOption(_option.operators[0]);
              }
              return _option.path === val;
            });
            setProperties(newItems);
            containProperties.forEach(_option => {
              if (_option.path === val) {
                setOptions(_option.operators);
                AutoSelectOption(_option.operators[0]);
              }
            });
          }}
          menuStyle={MenuStyle()}
        />
        <span>
          <Icon name='downVector' />
        </span>
      </StyledAutoComplete>
    </div>
  );
};

export default injectIntl(Property);