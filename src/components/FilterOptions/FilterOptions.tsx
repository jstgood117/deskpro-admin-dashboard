import React, { FC, useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import styled, { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';

import Icon from '../Icon';
import Input from '../Input';
import Button from '../Button';
import { DeskproAdminTheme } from '../Theme';
import { IFilterProps } from '../FilterBox/FilterBox';
import { AutoCompleteItemStyle, MenuStyle } from '../AutoComplete/AutoComplete';
import {
  IRuleBuilderSchema,
  IPropertySchema,
  RuleOperatorType
} from '../../resources/interfaces/filterMeta';

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
  placeholder?: string;
  setFilters?: (e: any) => void;
  filters?: IFilterProps[];
  index?: number;
  filter?: IFilterProps;
  schema: IRuleBuilderSchema;
}

const FilterOptions: FC<IProps> = ({
  setFilters,
  filters,
  filter,
  index,
  schema,
  ...props
}) => {
  const [currentProperty, setProperty] = useState();
  const [currentOption, setOption] = useState();
  const [containProperties, setProperties] = useState(schema.properties);

  const [containOptions, setOptions] = useState([]);
  const [filterValue, setFilterValue] = useState();
  const AutoSelectOption = (val: string) => {
    setOption(val);
  };
  useEffect(() => {
    if (currentOption) {
      containOptions.map(item => {
        if (item === currentOption) filters[index].option = currentOption;
        return true;
      });
    }
    if (currentProperty) {
      containProperties.map(item => {
        if (item.title === currentProperty)
          filters[index].property = currentProperty;
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
        <div style={{ width: 160 }}>
          <StyledAutoComplete name='property'>
            <Autocomplete
              getItemValue={(item: IPropertySchema) => item.title}
              items={containProperties}
              inputProps={{
                placeholder: props.placeholder,
                onFocus: () => {
                  setProperty('');
                  setProperties(schema.properties);
                },
                onBlur: () => {
                  setProperty(filter && filter.property);
                }
              }}
              renderItem={(item: IPropertySchema, isHighlighted: boolean) => {
                const selected = item.title === filter.property;
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
                  : filter && filter.property
              }
              onChange={(e: any) => {
                setProperty(e.target.value);
                const newItems = schema.properties.filter(menuItem => {
                  if (
                    menuItem.title.toUpperCase() ===
                    e.target.value.toUpperCase()
                  ) {
                    setOptions(menuItem.operators);
                    AutoSelectOption(menuItem.operators[0]);
                  }
                  return menuItem.title
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
                });
                setProperties(newItems);
              }}
              onSelect={(val: string) => {
                setProperty(val);
                const newItems = schema.properties.filter(menuItem => {
                  if (menuItem.title.toUpperCase() === val.toUpperCase()) {
                    setOptions(menuItem.operators);
                    AutoSelectOption(menuItem.operators[0]);
                  }
                  return menuItem.title
                    .toUpperCase()
                    .includes(val.toUpperCase());
                });
                setProperties(newItems);
              }}
              menuStyle={MenuStyle()}
            />
            <span>
              <Icon name='downVector' />
            </span>
          </StyledAutoComplete>
        </div>
        <div style={{ width: 160 }}>
          <StyledAutoComplete name='option'>
            <Autocomplete
              getItemValue={(item: RuleOperatorType[]) => item}
              items={containOptions}
              renderInput={(inputProps: any) => {
                return (
                  <input
                    {...inputProps}
                    disabled={currentProperty ? false : true}
                  />
                );
              }}
              inputProps={{
                autoComplete: 'off',
                onFocus: () => {
                  setOption('');
                  const newItems = schema.properties.filter(menuItem => {
                    return menuItem.title === currentProperty;
                  });
                  setOptions(newItems[0].operators);
                },
                onBlur: () => {
                  setOption(filter && filter.option);
                }
              }}
              renderItem={(item: RuleOperatorType, isHighlighted: boolean) => {
                const selected = item === filter.option;
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
              value={
                currentOption !== undefined
                  ? currentOption
                  : filter && filter.option
              }
              onChange={(e: any) => {
                setOption(e.target.value);
                const newItems = containOptions.filter(menuItem => {
                  return menuItem
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
                });
                setOptions(newItems);
              }}
              onSelect={(val: string) => {
                setOption(val);
                const newItems = containOptions.filter(menuItem => {
                  return menuItem.toUpperCase().includes(val.toUpperCase());
                });
                setOptions(newItems);
              }}
              menuStyle={MenuStyle()}
            />
            <span>
              <Icon name='downVector' />
            </span>
          </StyledAutoComplete>
        </div>
        <div>
          <Input
            style={{ width: 218 }}
            value={
              filter && filter.filterKey !== undefined
                ? filter.filterKey
                : filterValue
            }
            onClear={() => {
              filters[index].filterKey = '';
              setFilterValue('');
            }}
            showClear={true}
            onChange={event => {
              filters[index].filterKey = event.target.value;
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
                  setFilters([{ property: '', option: '', filterKey: '' }]);
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

export default FilterOptions;
