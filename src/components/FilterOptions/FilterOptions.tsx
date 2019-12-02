import React, { FC, useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import styled, { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';
import { injectIntl } from 'react-intl';

import Icon from '../Icon';
import Input from '../Input';
import Button from '../Button';
import { DeskproAdminTheme } from '../Theme';
import { AutoCompleteItemStyle, MenuStyle } from '../AutoComplete/AutoComplete';
import { FilterProps } from '../../resources/interfaces/filterMeta';
import { operatorKeys, OperatorTypes } from '../../services/filters/operators';
import { FilterMeta } from '../../resources/interfaces/filterMeta';

import {
  getIntlOperatorTitle,
  getOptionPropertyByPath,
  getPathByOptionProperty,
  getOperatorByTitle,
  getCurrentOperators
} from './helpers/funcs';

const StyledFilterOptions = styled.div`
  display: flex;
  align-items: center;
  .input-wrapper {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.greyLight};
    box-sizing: border-box;
    height: 34px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    input {
      height: 34px;
      cursor: default;
    }
  }
  .auto-complete {
    input {
      border-right: 0;
      border-radius: 4px;
    }
  }
  .remove-btn {
    button {
      border: none;
      &:hover {
        border: none;
      }
    }
  }
  .focus {
    border: 1px solid ${props => props.theme.lightBlue};
  }
`;
const StyledAutoComplete = styled.div<{ name: string }>`
  font-family: ${props => props.theme.mainFont};
  position: relative;
  display: inline-flex;
  width: 100%;
  div {
    width: 100%;
  }
  input {
    border-top-left-radius: ${props => props.name === 'property' && 4}px;
    border-bottom-left-radius: ${props => props.name === 'property' && 4}px;
    width: 100%;
    height: 34px;
    padding: 1px 30px 1px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.staticColour};
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.greyLight};
    border-right: 0;
    &:focus {
      height: 34px;
      border: 1px solid #9fccf3;
      box-sizing: border-box;
      outline: none;
      box-shadow: 0px 0px 8px #d2d8dd;
    }
  }
  span {
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    height: 34px;
  }
`;

export interface IProps {
  intl: any;
  placeholder?: string;
  setFilters?: (e: any) => void;
  index?: number;
  filter?: FilterProps;
  filters?: FilterProps[];
  options: FilterMeta[];
}

const FilterOptions: FC<IProps> = ({
  intl,
  setFilters,
  filters,
  filter,
  index,
  options,
  ...props
}) => {

  const [currentProperty, setProperty] = useState();
  const [currentOption, setOption] = useState();
  const [currentPath, setCurrentPath] = useState(filter.property);
  const [currentOperator, setCurrentOperator] = useState(filter.operatorName);
  const [containProperties, setProperties] = useState(options);
  const [containOptions, setOptions] = useState([]);
  const [filterValue, setFilterValue] = useState();

  const AutoSelectOption = (val: OperatorTypes) => {
    setOption(
      intl.formatMessage({ id: getIntlOperatorTitle(val, operatorKeys) })
    );
    setCurrentOperator(val);
  };

  useEffect(() => {
    if (currentOperator) {
      containOptions.map(item => {
        if (item === currentOperator)
          filters[index].operatorName = currentOperator;
        return true;
      });
    }

    if (currentPath) {
      containProperties.map(item => {
        if (item.path === currentPath) filters[index].property = currentPath;
        return true;
      });
    }

    if(setFilters) {
      setFilters(filters);
    }

  }, [
    currentOperator,
    currentPath,
    filters,
    index,
    setFilters,
    containOptions,
    containProperties
  ]);

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledFilterOptions>
        <div style={{ minWidth: 160 }}>
          <StyledAutoComplete name='property'>
            <Autocomplete
              getItemValue={(item: any) => item.path}
              items={containProperties}
              inputProps={{
                autoComplete: 'off',
                placeholder: props.placeholder,
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
                setCurrentPath(
                  getPathByOptionProperty(e.target.value, containProperties)
                );
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
        <div>
          <Input
            style={{ minWidth: 218 }}
            value={
              filter && filter.value !== undefined ? filter.value : filterValue
            }
            onClear={() => {
              filters[index].value = '';
              setFilterValue('');
            }}
            showClear={true}
            onChange={event => {
              filters[index].value = event.target.value;
              setFilterValue(event.target.value);
            }}
            containerClassName='input-wrapper'
          />
        </div>
        <div style={{ paddingLeft: 10 }} className='remove-btn'>
          <Button
            styleType='tertiary'
            onClick={() => {
              const currentIndex = filters.indexOf(filter);
              if (currentIndex > -1) {
                filters.splice(currentIndex, 1);
              }
              if (filters.length === 0 && setFilters) {
                setFilters([{ property: '', operatorName: '', value: '' }]);
              } else if(setFilters) {
                setFilters([...filters]);
              }
            }}
            size='small'
            iconOnly={true}
          >
            <Icon name='trash' />
          </Button>
        </div>
      </StyledFilterOptions>
    </ThemeProvider>
  );
};

export default injectIntl(FilterOptions);
