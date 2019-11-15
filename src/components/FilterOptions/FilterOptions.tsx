import React, { FC, useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import styled, { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';

import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';
import { IFilterProps } from '../FilterBox/FilterBox';
import Input from '../Input';
import Button from '../Button';
import { AutoCompleteItemStyle, MenuStyle } from '../AutoComplete/AutoComplete';

export interface IItemType {
  label: string;
}

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
  properties: IItemType[];
  options: IItemType[];
  placeholder?: string;
  setFilters?: (e: any) => void;
  filters?: IFilterProps[];
  index?: number;
  filter?: IFilterProps;
}

const FilterOptions: FC<IProps> = ({
  properties,
  options,
  setFilters,
  filters,
  filter,
  index,
  ...props
}) => {
  const [currentProperty, setProperty] = useState();
  const [currentOption, setOption] = useState();
  const [containProperties, setProperties] = useState(properties);
  const [containOptions, setOptions] = useState(options);
  const [filterValue, setFilterValue] = useState();
  const AutoSelectOption = () => {
    !currentOption && setOption(containOptions[0].label);
  };
  useEffect(() => {
    if (currentOption || currentProperty) {
      filters[index].option = currentOption;
      filters[index].property = currentProperty;
    }
    setFilters && setFilters(filters);
  }, [currentOption, currentProperty, filters, index, setFilters]);

  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledFilterOptions>
        <div style={{ width: 160 }}>
          <StyledAutoComplete name='property'>
            <Autocomplete
              getItemValue={(item: IItemType) => item.label}
              items={containProperties}
              inputProps={{
                placeholder: props.placeholder,
                onFocus: () => {
                  setProperty('');
                  setProperties(properties);
                }
              }}
              renderItem={(item: IItemType, isHighlighted: boolean) => {
                const selected = item.label === currentProperty;
                return (
                  <div
                    style={AutoCompleteItemStyle(
                      isHighlighted,
                      DeskproAdminTheme,
                      selected
                    )}
                    key={uniqueId()}
                  >
                    {item.label}
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
                const newItems = properties.filter(menuItem => {
                  if (
                    menuItem.label.toUpperCase() ===
                    e.target.value.toUpperCase()
                  ) {
                    AutoSelectOption();
                  }
                  return menuItem.label
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
                });
                setProperties(newItems);
              }}
              onSelect={(val: string) => {
                setProperty(val);
                const newItems = properties.filter(menuItem => {
                  if (menuItem.label.toUpperCase() === val.toUpperCase()) {
                    AutoSelectOption();
                  }
                  return menuItem.label
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
              getItemValue={(item: IItemType) => item.label}
              items={containOptions}
              inputProps={{
                onFocus: () => {
                  setOption('');
                  setOptions(options);
                }
              }}
              renderItem={(item: IItemType, isHighlighted: boolean) => {
                const selected = item.label === currentOption;
                return (
                  <div
                    style={AutoCompleteItemStyle(
                      isHighlighted,
                      DeskproAdminTheme,
                      selected
                    )}
                    key={uniqueId()}
                  >
                    {item.label}
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
                const newItems = options.filter(menuItem => {
                  return menuItem.label
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
                });
                setOptions(newItems);
              }}
              onSelect={(val: string) => {
                setOption(val);
                const newItems = options.filter(menuItem => {
                  return menuItem.label
                    .toUpperCase()
                    .includes(val.toUpperCase());
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
