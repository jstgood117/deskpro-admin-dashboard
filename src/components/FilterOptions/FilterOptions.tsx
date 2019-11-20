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
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import { operatorKeys, OperatorTypes } from '../../services/filters/operators';
import { FilterMeta } from '../../resources/constants/mock/testFilterMeta';

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
    border-top-left-radius: ${props => props.name === 'columnName' && 4}px;
    border-bottom-left-radius: ${props => props.name === 'columnName' && 4}px;
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
  filters?: IFilterProps[];
  index?: number;
  filter?: IFilterProps;
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
  const [containProperties, setProperties] = useState(options);
  const [containOptions, setOptions] = useState([]);
  const [filterValue, setFilterValue] = useState();
  const AutoSelectOption = (val: string) => {
    setOption(val);
  };

  const getOptionPropertyByPath = (path: string) => {
    const match = containProperties.find(_option => _option.path === path);

    return match ? match.title : '';
  };

  const getIntlOperatorTitle = (operatorName: OperatorTypes) => {
    return operatorKeys[operatorName];
  };

  useEffect(() => {
    if (currentOption) {
      containOptions.map(item => {
        if (item === currentOption) filters[index].operatorName = currentOption;
        return true;
      });
    }
    if (currentProperty) {
      containProperties.map(item => {
        if (item.path === currentProperty)
          filters[index].columnName = currentProperty;
        return true;
      });
    }

    setFilters && setFilters(filters);
  }, [
    currentOption,
    currentProperty,
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
          <StyledAutoComplete name='columnName'>
            <Autocomplete
              getItemValue={(item: any) => item.path}
              items={containProperties}
              renderInput={(inputProps: any) => {
                return (
                  <input
                    {...inputProps}
                    value={
                      inputProps.value &&
                      getOptionPropertyByPath(inputProps.value)
                    }
                  />
                );
              }}
              inputProps={{
                autoComplete: 'off',
                readOnly: true,
                placeholder: props.placeholder,
                onFocus: () => {
                  setProperty('');
                  setProperties(options);
                },
                onBlur: () => {
                  setProperty(filter?.columnName && filter.columnName);
                }
              }}
              renderItem={(item: any, isHighlighted: boolean) => {
                const selected = item.path === filter.columnName;
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
                  : filter && filter.columnName
              }
              onChange={(e: any) => {
                setProperty(e.target.value);
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
                setProperty(val);
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
                    value={
                      inputProps.value
                        ? intl.formatMessage({
                            id: getIntlOperatorTitle(inputProps.value)
                          })
                        : inputProps.value
                    }
                    disabled={currentProperty ? false : true}
                  />
                );
              }}
              inputProps={{
                autoComplete: 'off',
                readOnly: true,
                onFocus: () => {
                  setOption('');
                  const newItems = containProperties.filter(_option => {
                    return _option.path === currentProperty;
                  });
                  setOptions(newItems[0].operators);
                },
                onBlur: () => {
                  setOption(filter && filter.operatorName);
                }
              }}
              renderItem={(item: OperatorTypes, isHighlighted: boolean) => {
                const selected = item === filter.operatorName;
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
                      intl.formatMessage({ id: getIntlOperatorTitle(item) })}
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
                  : filter && filter.operatorName
              }
              onChange={(e: any) => {
                setOption(e.target.value);
                const newItems = containOptions.filter(_option => {
                  return _option
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
                });
                setOptions(newItems);
              }}
              onSelect={(val: string) => {
                setOption(val);
                const newItems = containOptions.filter(_option => {
                  return _option === val;
                });
                setOptions(newItems);
              }}
              menuStyle={MenuStyle()}
            />
            <span>{currentProperty && <Icon name='downVector' />}</span>
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
              if (filters.length === 0) {
                setFilters &&
                  setFilters([{ columnName: '', operatorName: '', value: '' }]);
              } else {
                setFilters && setFilters([...filters]);
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
